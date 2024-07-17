import React from "react";
import { Carousel, ModalProps } from "view/lib";
// import { Event, Testimonial } from "services/models";
import { eventSlides } from "./events";
import { testimonialSlides } from "./testimonials";
import About from "./about";
import Contact from "./contact";


interface Props {
  data: Record<string, any>;
  setModalProps: (modalProps: ModalProps | null) => void;
}

const Homepage: React.FC<Props> = ({data, setModalProps}: Props) =>
  <div style={styles.container}>
    <Carousel 
      children={eventSlides(data.Events || [], setModalProps)}
      interval={5000} />
    <Carousel
      children={testimonialSlides(data.Testimonials || [])}
      interval={5000}
      childrenStyles={styles.testimonials}/>
    {/* <About about={data.AboutUs} />
    <Contact /> */}
  </div>;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  },
  testimonials: {
    top: "60%",
    textAlign: "center",
    display: "flex",
    background: "none", 
    justifyContent: "center",
    alignItems: "center",
    height: "35vh",
    fontSize: "xx-large"
  }
} as Record<string, React.CSSProperties>;

export default Homepage;