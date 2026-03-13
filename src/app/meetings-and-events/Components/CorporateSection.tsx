import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import CommonSlider from "@/components/sliders/CommonSlider";
import { SectionHeading } from "@/components/typography";

interface CorporateSectionProps {
  title: string;
  description: string[];
  images: string[];
  link: {
    label: string;
    href: string;
  };
}

const CorporateSection: React.FC<CorporateSectionProps> = ({
  title,
  description,
  images,
  link,
}) => {
  return (
    <SectionWithContainer containerClassName="md:space-y-12 space-y-8">
      <SectionHeading
        title={title}
        textCenter
        line
        wrapperClassName="max-w-3xl mx-auto"
      />
      <CommonSlider images={images} title={title} />
      <div className="mt-8 space-y-3 max-w-4xl mx-auto text-center">
        {description.map((item, index) => (
          <p key={index} className="md:text-lg text-p2">
            {item}
          </p>
        ))}
      </div>
      <LinkButton
        href={link.href}
        label={link.label}
        className="mx-auto"
      />
    </SectionWithContainer>
  );
};

export default CorporateSection;
