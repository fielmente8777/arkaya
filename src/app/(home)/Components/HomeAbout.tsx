import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

interface HomeAboutProps {
  title: string;
  description: string[];
  link: {
    label: string;
    href: string;
  };
}

const HomeAbout: React.FC<HomeAboutProps> = ({ title, description, link }) => {
  return (
    <SectionWithContainer containerClassName="md:max-w-5xl! flex flex-col gap-8">
      <SectionHeading title={title} textCenter line />
      <div className="space-y-4 md:max-w-200 mx-auto">
        {description.map((item, index) => (
          <p key={index} className={`text-center leading-relaxed ${description.length - 1 === index && "text-p1"}`}>{item}</p>
        ))}
      </div>
      <LinkButton href={link.href} label={link.label} className="mx-auto" />
    </SectionWithContainer>
  );
};

export default HomeAbout;
