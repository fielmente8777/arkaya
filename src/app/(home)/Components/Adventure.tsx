import { AdventureDataType } from "@/@types/type";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

const Adventure: React.FC<AdventureDataType> = ({ title, items }) => {
  return (
    <SectionWithContainer containerClassName="space-y-12">
      <SectionHeading title={title} line />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
        {items.map((item, index) => (
          <AdventureCard key={index} title={item.title} image={item.image} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default Adventure;

export const AdventureCard: React.FC<AdventureDataType["items"][0]> = ({
  title,
  image,
}) => {
  return (
    <div>
      <div className="w-full relative aspect-4/4">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <h3 className="text-lg text-center text-p2 mt-4">{title}</h3>
    </div>
  );
};
