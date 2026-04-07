import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

interface HomeAboutProps {
  title: string;
  description: string[];
  ctaSection: {
    title: string;
    description: string;
  };
  link: {
    label: string;
    href: string;
  };
}

const HomeAbout: React.FC<HomeAboutProps> = ({
  title,
  description,
  link,
  ctaSection,
}) => {
  return (
    <SectionWithContainer containerClassName="md:max-w-5xl! flex flex-col gap-8">
      <SectionHeading title={title} textCenter line />
      <div className="space-y-4 md:max-w-200 mx-auto">
        {description.map((item, index) => (
          <p key={index} className={`text-center leading-relaxed`}>
            {item}
          </p>
        ))}
      </div>
      <div className="flex flex-col gap-4 bg-p4 py-10 md:mt-6 px-6 box-shadow">
        <SectionHeading
          title={ctaSection.title}
          textCenter
          line
          titleClassName="text-2xl! "
          wrapperClassName=""
        />
        <p className="text-center leading-relaxed">{ctaSection.description}</p>
        <LinkButton href={link.href} label={link.label} className="mx-auto" />
      </div>
    </SectionWithContainer>
  );
};

export default HomeAbout;
