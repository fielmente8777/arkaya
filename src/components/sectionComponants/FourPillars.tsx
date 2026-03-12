import { PillarsType } from "@/@types/type";
import SectionWithContainer from "./SectionWithContainer";
import { SectionHeading } from "../typography";
import PillarsCards from "../cards/PillarsCards";
import Image from "next/image";

const FourPillars: React.FC<PillarsType> = ({ title, pillars, src }) => {
  return (
    <SectionWithContainer containerClassName="md:space-y-12 space-y-8">
      <SectionHeading title={title} textCenter />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-14">
        {pillars.map((pillar, index) => (
          <PillarsCards key={index} {...pillar} />
        ))}
      </div>
      <div className="w-full relative md:block hidden aspect-[4/1.6]" >
        <Image src={src} alt="pillars" fill className="object-cover" />
      </div>
      <div className="w-full relative md:hidden aspect-[4/5.6]" >
        <Image src="/Four-Pillars.jpg" alt="pillars" fill className="object-cover" />
      </div>
    </SectionWithContainer>
  );
};

export default FourPillars;
