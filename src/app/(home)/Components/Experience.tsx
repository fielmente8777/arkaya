import { ExperienceDataType } from "@/@types/type";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import ExperienceSlider from "./ExperienceSlider";

const Experience: React.FC<ExperienceDataType> = ({ title, points }) => {
  return (
    <SectionWithContainer containerClassName="md:space-y-16 space-y-8">
      <SectionHeading title={title} line />
      <div className="lg:flex hidden flex-wrap items-center justify-center gap-x-36 gap-y-12">
        {points.map((item, index) => (
          <ExperienceCard key={index} title={item.title} icon={item.icon} />
        ))}
      </div>
      <ExperienceSlider points={points} />
    </SectionWithContainer>
  );
};

export default Experience;

export const ExperienceCard: React.FC<ExperienceDataType["points"][0]> = ({
  title,
  icon,
}) => {
  return (
    <div className="flex flex-col w-48.5 h-39 items-center gap-4">
      {icon}
      <p className="text-lg text-center text-p2">{title}</p>
    </div>
  );
};
