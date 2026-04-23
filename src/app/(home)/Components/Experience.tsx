import { ExperienceDataType } from "@/@types/type";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import ExperienceSlider from "./ExperienceSlider";
import LinkButton from "@/components/buttons/LinkButton";

const Experience: React.FC<ExperienceDataType> = ({ title,description, points, cta }) => {
  return (
    <SectionWithContainer containerClassName="md:space-y-16 space-y-8">
      <SectionHeading title={title} description={description} line />
      <div className="lg:flex hidden flex-wrap justify-center gap-x-36 gap-y-12">
        {points.map((item, index) => (
          <ExperienceCard key={index} title={item.title} icon={item.icon} />
        ))}
      </div>
      <ExperienceSlider points={points} />
      {cta && (
        <LinkButton
          href={cta.href}
          label={cta.label}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-p1 text-white mx-auto mt-12 uppercase"
        />
      )}
    </SectionWithContainer>
  );
};

export default Experience;

export const ExperienceCard: React.FC<ExperienceDataType["points"][0]> = ({
  title,
  icon,
}) => {
  return (
    <div className="flex flex-col shrink-0 w-48.5 h-39 items-center gap-4">
      <div>{icon}</div>
      <p className="text-lg text-center text-p2">{title}</p>
    </div>
  );
};
