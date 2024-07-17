import { Testimonial } from "services/models";

export const testimonialSlides = (testimonials: ReadonlyArray<Testimonial>) => 
  testimonials.map((testimonial) =>
    <div key={testimonial.Author} className="slider">
      "{testimonial.Text}"<br/>
      -{testimonial.Author}
    </div>);