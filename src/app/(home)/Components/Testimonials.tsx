import { TestimonialDataType } from "@/@types/type";
import { SectionWithContainer } from "@/components/sectionComponants";
import TestimonialsSlider from "@/components/sliders/TestimonialsSlider";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

const Testimonials: React.FC<TestimonialDataType> = ({
  title,
  image,
  testimonials,
}) => {
  return (
    <SectionWithContainer containerClassName="grid md:grid-cols-2 grid-cols-1 gap-12">
      <div className="w-full relative aspect-4/2.5 md:block hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col justify-between gap-6">
        <SectionHeading title={title} line />
        <div className="w-full relative aspect-4/2.5 md:hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
        <TestimonialsSlider cards={testimonials} />
      </div>
    </SectionWithContainer>
  );
};

export default Testimonials;
