import LinkButton from "@/components/buttons/LinkButton";
import { Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface StaySectionProps {
  title: string;
  description: string[];
  image: string;
  link: {
    label: string;
    href: string;
  };
}

const StaySection: React.FC<StaySectionProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <Section>
      <div className="max-w-356.25 ml-auto max-md:px-4 grid md:grid-cols-2 gap-4 items-center">
        <div className="space-y-6">
          <SectionHeading title={title} titleClassName="md:text-[2rem]! text-3xl!" />
          <div className="relative w-full aspect-4/2.5 md:hidden">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
          <div className="flex flex-col justify-between">
            {description.map((item, index) => (
              <p key={index} className="text-lg text-p2 mb-4">
                {item}
              </p>
            ))}
            <LinkButton href={link.href} label={link.label} className="max-md:mx-auto" />
          </div>
        </div>
        <div className="relative w-full aspect-4/2.25 md:block hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>
    </Section>
  );
};

export default StaySection;
