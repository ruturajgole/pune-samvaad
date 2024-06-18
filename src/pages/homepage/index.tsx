import React from "react";
import { Carousel, ModalProps } from "../../components";
import { Event, Testimonial } from "../../services/models";
import { eventSlides } from "./events";
import { testimonialSlides } from "./testimonials";


interface Props {
  events: ReadonlyArray<Event>;
  testimonials: ReadonlyArray<Testimonial>;
  setModalProps: (modalProps: ModalProps | null) => void;
}

export const Homepage = ({events, testimonials, setModalProps}: Props) =>
  <div style={styles.container}>
    <Carousel 
      children={eventSlides(events || [], setModalProps)}
      interval={5000} />
    <Carousel
      children={testimonialSlides(testimonials || [])}
      interval={5000}
      childrenStyles={styles.testimonials}/>
  </div>;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column"
  },
  testimonials: {
    top: "60%",
    textAlign: "center",
    display: "flex",
    background: "none", 
    justifyContent: "center",
    alignItems: "center",
    height: "35vh",
    fontFamily: "circular",
    fontSize: "xx-large"
  }
} as Record<string, React.CSSProperties>;