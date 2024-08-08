import { Testimonial } from "services/models";
import { Div, Image, Text } from "view/lib/components";

const text = `
  The founders of the republic of India were very conscious that the republic they were creating was a modern manifestation of a very ancient civilization
`;

export const testimonialSlides = (testimonials: ReadonlyArray<Testimonial>) => 
  [<Div style={styles.testimonialsContainer}>
    <Image style={styles.testimonialImage} src={`${process.env.PUBLIC_URL}/testimony.jpg`} />
    <Text style={styles.testimonialText}>"{text}"</Text>
  </Div>];

const styles = {
  testimonialsContainer: {  
    display: "flex",
    backgroundColor: "#ef7f1b",
    border: "5px solid #601145",
    width: "90%",
    aspectRatio: ["2", "2", "3"]
  },
  testimonialImage: {
    display: "flex",
    flex: ["0.1", "0.3", "0.7"],
    objectFit: "cover",
    width: ["40%", "60%", "70%"],
  },
  testimonialText: {
    display: "flex",
    flex: ["0.8", "0.7", "0.3"],
    color: "white",
    padding: "1%",
    fontSize: ["small", "large", "x-large"],
    fontStyle: "italic"
  }
} as const;