import React from "react";
import { Carousel, ModalProps } from "view/lib";
// import { Event, Testimonial } from "services/models";
import { eventSlides } from "./events";
import { testimonialSlides } from "./testimonials";
import About from "./about";
import Contact from "./contact";
import { Div, Text } from "view/lib/components";

interface Props {
  data: Record<string, any>;
  setModalProps: (modalProps: ModalProps | null) => void;
}

const Homepage: React.FC<Props> = ({data, setModalProps}: Props) =>
  <Div style={styles.container}>
    <Div style={styles.testimonialsContainer}>
      <Carousel
        children={testimonialSlides(data.Testimonials || [])}
        interval={5000} />
    </Div>
    <Text style={styles.eventsTitle}>Explore Bharat with Pune Samvad</Text>
    <Div style={styles.eventsContainer}>
      <Carousel
        title={"PAST EVENTS"}
        children={eventSlides(data.Events || [], setModalProps)}
        interval={5000} />
      <Carousel
        title={"UPCOMING EVENTS"}
        children={eventSlides(data.Events || [], setModalProps)}
        interval={5000} />
    </Div>
    <About about={data.AboutUs} />
    <Contact />
  </Div>;

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