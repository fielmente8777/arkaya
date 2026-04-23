import { Section, SectionWithContainer } from "@/components/sectionComponants";
import TestimonialsSlider from "@/components/sliders/TestimonialsSlider";
import { SectionHeading } from "@/components/typography";

interface GuestExperiencesProps {
  title: string;
  testimonials: {
    text: string;
    name: string;
  }[];
}

const GuestExperiences: React.FC<GuestExperiencesProps> = ({
  title,
  testimonials,
}) => {
  return (
    <SectionWithContainer
        sectionClassName="box-shadow bg-[#FFF9F0]"
      containerClassName="md:space-y-16 space-y-8"
    >
      <SectionHeading title={title} line />
      <TestimonialsSlider cards={testimonials} />
    </SectionWithContainer>
  );
};

export default GuestExperiences;
