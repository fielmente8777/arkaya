import { TeamType } from "@/@types/type";
import MemberCard from "../cards/MemberCard";
import { SectionHeading } from "../typography";
import SectionWithContainer from "./SectionWithContainer";

const CareLedbyExperience: React.FC<TeamType> = ({ title, members }) => {
  return (
    <SectionWithContainer containerClassName="md:space-y-16 space-y-8">
      <SectionHeading title={title} textCenter />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-12 bg-experience">
        {members.map((member) => (
          <MemberCard key={member.name} {...member} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default CareLedbyExperience;
