import LinkButton from "@/components/buttons/LinkButton";
import { Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import AnimateOnScroll from "@/hooks/AnimateOnScroll";
import Image from "next/image";

interface WeddingSectionProps {
  title: string;
  description: string[];
  image: string;
  link: {
    label: string;
    href: string;
  };
}

const WeddingSection: React.FC<WeddingSectionProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <Section className="space-y-10">
      <SectionHeading title={title} line wrapperClassName="max-md:px-4 " />
      <AnimateOnScroll direction="right">
        <p className="text-lg text-p2 text-center max_width">
          {description[0]}
        </p>
      </AnimateOnScroll>
      <div className="w-full relative md:aspect-4/2 aspect-square">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <AnimateOnScroll direction="right">
        <div className="flex flex-col items-center gap-4 max_width md:px-8!">
          {description.slice(1).map((item, index) => (
            <p key={index} className="text-lg text-center text-p2">
              {item}
            </p>
          ))}
          <LinkButton href={link.href} label={link.label} />
        </div>
      </AnimateOnScroll>
    </Section>
  );
};

export default WeddingSection;
