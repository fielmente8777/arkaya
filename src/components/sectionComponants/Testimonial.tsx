import { TestimonialType } from "@/@types/type";
import Image from "next/image";
import { SlideBtnIcon } from "@/utils/sliderButtonIcon";
import Section from "./Section";
import { SectionHeading } from "../typography";
import TestimonialsSlider from "../sliders/TestimonialsSlider";
import LinkButton from "../buttons/LinkButton";

const Testimonial: React.FC<TestimonialType> = ({
  testimonials,
  cta,
  title,
  src,
}) => {
  return (
    <Section
      defaultPadding={false}
      className="bg-background2 grid md:grid-cols-2 grid-cols-1 items-center max-md:px-4 max-md:gap-4 max-md:py-12"
    >
      <div className="w-full relative md:aspect-4/3 aspect-square md:block hidden">
        <Image src={src} alt={title} fill className="object-cover" />
      </div>

      <div className="md:pl-8 max-w-xl md:space-y-8 space-y-10">
        <SectionHeading title={title} fontPrimary />
        <div className="w-full relative md:aspect-4/3 aspect-square max-md:block hidden">
          <Image src={src} alt={title} fill className="object-cover" />
        </div>
        <TestimonialsSlider cards={testimonials} />
        <div className="flex items-center justify-between">
          <LinkButton
            href={cta.href}
            label={cta.label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary rounded-full uppercase"
          />
          <div className="flex items-center gap-4">
            <button className="testimonials-prev text-primary border px-5 py-2 rounded-full hover:bg-white active:scale-95 rotate-180">
              <SlideBtnIcon />
              <span className="sr-only">Previous</span>
            </button>
            <button className="testimonials-next text-primary border px-5 py-2 rounded-full hover:bg-white active:scale-95 ">
              <SlideBtnIcon />
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonial;
