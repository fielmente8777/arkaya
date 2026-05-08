import { TestimonialDataType } from "@/@types/type";
import { SectionWithContainer } from "@/components/sectionComponants";
import TestimonialsSlider from "@/components/sliders/TestimonialsSlider";
import { SectionHeading } from "@/components/typography";

const Testimonials: React.FC<TestimonialDataType> = ({
  title,
  testimonials,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-p4 "
      containerClassName="flex justify-center"
    >
      <div className="flex flex-col justify-between gap-6 max-w-7xl w-full text-center">
        <SectionHeading title={title} line />
        <TestimonialsSlider cards={testimonials} />
      </div>
    </SectionWithContainer>
  );
};

export default Testimonials;
