import { Testimonial } from "services/models";
import { Div } from "view/lib/components";

export const testimonialSlides = (testimonials: ReadonlyArray<Testimonial>) => 
  testimonials.map((testimonial) =>
    <Div key={testimonial.Author} className="slider">
      "{testimonial.Text}"<br/>
      -{testimonial.Author}
    </Div>);