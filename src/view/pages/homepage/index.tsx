import React, { useEffect, useState } from "react";
import { Carousel, ModalProps } from "view/lib";
import { eventSlides } from "./events";
import { Div, Text } from "view/lib/components";
import { Event } from "services/models";
import { getBanner } from "services/api";
import { useMediaQuery } from "@mui/material";
import EventView from "../event";
import { testimonialSlides } from "./testimonials";
import { newsSlides } from "./news";

interface Props {
  data: Record<string, any>;
  setModalProps: (modalProps: ModalProps | null) => void;
}

const Homepage: React.FC<Props> = ({data, setModalProps}: Props) => {
  const [updatedEvents, setUpdatedEvents] = useState(data.Events || []);  
  const [currentEvent, setCurrentEvent] = useState<Event>();
  const isSmallDevice = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    const fetchPhoto = async (event: Event): Promise<Event> => {
      try {
          const data = await getBanner(event.Title, isSmallDevice);
          if(data) {return { ...event, banner: data };}
          return event;
        } catch (error) {
        console.error(`Failed to fetch photo for event ${event.Title}`, error);
      }
      return event;
    };

    const fetchAllPhotos = async (events: ReadonlyArray<Event>) => {
      const promises = events.map((event: Event) => fetchPhoto(event));

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
  
  return currentEvent
  ? <EventView event={currentEvent} />
  : (<Div style={styles.container}>
    <Div style={styles.eventsContainer}>
      <Carousel
        children={eventSlides(updatedEvents || [], isSmallDevice, setModalProps)}
        interval={8000} />
    </Div>
    <Text style={styles.exploreBharatText}>Explore Bharat with Pune Samvad</Text>
    <Div style={styles.testimonialsContainer}>
      <Carousel
        children={newsSlides(Array(4).fill({name: "News"}))}
        interval={5000} />
      <Carousel
        children={testimonialSlides(data.Testimonials || [])}
        interval={5000} />
    </Div>
  </Div>);
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    gap: "2%",
    marginTop: "0.1%"
  },
  exploreBharatText: {
    textAlign: "center",
    fontSize: "x-large"
  },
  eventsContainer: {
    height: ["max-content"],
    justifyContent: ["unset", "unset", "center"],
    display: "flex",
    width: "100%"
  },
  testimonialsContainer: {
    display: "flex",
    height: ["50vh", "50vh", "max-content"],
    padding: "1%",
    justifyContent: "space-around",
    flexDirection: ["column", "column", "row"],
    alignItems: "center"
  },
} as const;

export default Homepage;