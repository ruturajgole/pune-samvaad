import React, { useEffect, useState } from "react";
import { Carousel, ModalProps } from "view/lib";
// import { Event, Testimonial } from "services/models";
import { eventSlides } from "./events";
import { testimonialSlides } from "./testimonials";
import About from "./about";
import Contact from "./contact";
import { Div, Text } from "view/lib/components";
import { Event } from "services/models";
import { getPhoto } from "services/api";
import { useMediaQuery } from "@mui/material";

interface Props {
  data: Record<string, any>;
  setModalProps: (modalProps: ModalProps | null) => void;
}

const Homepage: React.FC<Props> = ({data, setModalProps}: Props) => {
  const [updatedEvents, setUpdatedEvents] = useState(data.Events || []);  
  const isSmallDevice = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    const fetchPhoto = async (event: Event): Promise<Event> => {
      try {
          const data = await getPhoto(event.Title);
          if(data && data.thumbnailLink) {return { ...event, photo: (data.thumbnailLink) };}
          return event;
        } catch (error) {
        console.error(`Failed to fetch photo for event ${event.Title}`, error);
      }
      return event; // Return original event if fetch fails
    };

    const fetchAllPhotos = async (events: ReadonlyArray<Event>) => {
      const promises = events.map((event: Event) => fetchPhoto(event));

      // Using Promise.allSettled to handle each promise
      const results = await Promise.allSettled<Event>(promises);

      results.forEach(result => {
        if (result.status === 'fulfilled') {
          const updatedEvent = result.value;
          setUpdatedEvents((prevEvents: ReadonlyArray<Event>) =>
            prevEvents.map(ev => (ev.Title === updatedEvent.Title ? updatedEvent : ev))
          );
        }
      });
    };

    data && data.Events && fetchAllPhotos(data.Events);
  }, [data]);
  
  return <Div style={styles.container}>
    <Div style={styles.testimonialsContainer}>
    <Carousel
      children={testimonialSlides(data.Testimonials || [])}
      interval={5000} />
    </Div>
    <Text style={styles.eventsTitle}>Explore Bharat with Pune Samvad</Text>
    <Div style={styles.eventsContainer}>
      <Carousel
        title={"PAST EVENTS"}
        children={eventSlides((
          updatedEvents && (updatedEvents.filter((event: Event) => !isUpcoming(event.Date)))) || [],
          isSmallDevice,
          setModalProps
        )}
        interval={5000} />
      <Carousel
        title={"UPCOMING EVENTS"}
        children={eventSlides((
          updatedEvents && (updatedEvents.filter((event: Event) => isUpcoming(event.Date)))) || [],
          isSmallDevice,
          setModalProps
        )}
        interval={5000} />
    </Div>
    <About about={data.AboutUs} />
    <Contact />
  </Div>;
}

const isUpcoming = (dateString: string) => {
  const [day, month, year] = dateString.split("/").map(Number);
  const date: Date = new Date(year, month - 1, day);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return date >= today;
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    gap: "2%",
    marginTop: "2%"
  },
  eventsTitle: {
    textAlign: "center",
    fontSize: "x-large"
  },
  eventsContainer: {
    display: "flex",
    backgroundColor: "#c59fb8",
    height: "max-content",
    padding: "1%",
    justifyContent: "space-around",
    alignItems: "center"
  },
  testimonialsContainer: {
    height: "max-content"
  }
} as const;

export default Homepage;