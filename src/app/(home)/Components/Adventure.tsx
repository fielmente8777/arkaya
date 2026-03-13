import { AdventureDataType } from "@/@types/type";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import AdventureSlider from "./AdventureSlider";
import { AdventureCard } from "./AdventureCard";

const Adventure: React.FC<AdventureDataType> = ({ title, items }) => {
  return (
    <SectionWithContainer containerClassName="space-y-12">
      <SectionHeading title={title} line />
      <div className="lg:grid hidden md:grid-cols-3 grid-cols-1 gap-12">
        {items.map((item, index) => (
          <AdventureCard key={index} title={item.title} image={item.image} />
        ))}
      </div>
      <AdventureSlider cards={items} />
    </SectionWithContainer>
  );
};

export default Adventure;


