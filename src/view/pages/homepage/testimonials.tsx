import React from "react";
import { Testimonial } from "services/models";
import { Div, Text } from "view/lib/components";

export const testimonialSlides = (
  testimonials: ReadonlyArray<Testimonial>,
) =>
  testimonials.filter(testimonial => testimonial).map((testimonial, index) =>
    <React.Fragment key={testimonial.Author + index}>
      <Div style={styles.container}>
        <Text style={styles.quote}>"{testimonial.Text}"</Text>
        <Text style={styles.author}>-{testimonial.Author}</Text>
      </Div>
    </React.Fragment>
  );

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: "2%",
    width: ["40vh", "40vh", "45vh"],
    height: ["40vh", "40vh", "45vh"],
    borderRadius: "2%",
    border: "4px double #ef7e1b",
    marginBottom: ["1%", "1%", "unset"]
  },
  quote: {
    fontStyle: "italic",
    fontSize: ["medium", "medium", "x-large"],
    textAlign: "center"
  },
  author: {
    fontSize: ["small", "small", "large"]
  }
} as const;