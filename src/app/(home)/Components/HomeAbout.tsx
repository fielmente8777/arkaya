import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import AnimateOnScroll from "@/hooks/AnimateOnScroll";

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
    <SectionWithContainer containerClassName="md:max-w-5xl! flex flex-col md:gap-8 gap-12">
      <SectionHeading
        title={title}
        textCenter
        line
        wrapperClassName="animate animate-bottom"
      />

      <AnimateOnScroll direction="right">
        <div className="space-y-4 md:max-w-200 mx-auto">
          {description.map((item, index) => (
            <p key={index} className={`text-center leading-relaxed`}>
              {item}
            </p>
          ))}
        </div>
      </AnimateOnScroll>
      <div className="flex flex-col md:gap-4 gap-12 bg-p4 py-10 md:mt-6 px-6 box-shadow overflow-x-hidden">
        <SectionHeading
          title={ctaSection.title}
          textCenter
          line
          titleClassName="text-2xl! "
          wrapperClassName="animate animate-bottom"
        />
        <AnimateOnScroll direction="right" className="space-y-4">
          <p className="text-center leading-relaxed mx-auto">
            {ctaSection.description}
          </p>
          <LinkButton href={link.href} label={link.label} className="mx-auto" />
        </AnimateOnScroll>
      </div>
    </SectionWithContainer>
  );
};

export default HomeAbout;
