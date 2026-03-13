import LinkButton from "@/components/buttons/LinkButton";
import { Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface SpaProps {
  title: string;
  description: string[];
  image: string;
  link: {
    label: string;
    href: string;
  };
}

const Spa: React.FC<SpaProps> = ({ title, description, image, link }) => {
  return (
    <Section
      defaultPadding={false}
      className="grid md:grid-cols-2 md:gap-16 gap-8 max-md:py-8 bg-white items-center"
    >
      <div className="relative w-full aspect-4/3">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="max-w-133.25 max-md:px-4 mx-auto">
        <SectionHeading title={title} />
        <div className="flex flex-col justify-between mt-8">
          {description.map((item, index) => (
            <p key={index} className="text-lg text-p2 mb-4">
              {item}
            </p>
          ))}
          <LinkButton href={link.href} label={link.label} />
        </div>
      </div>
    </Section>
  );
};

export default Spa;
