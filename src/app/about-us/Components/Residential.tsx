import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface ResidentialProps {
  title: string;
  description: string[];
  items: {
    title: string;
    description: string;
    image: string;
  }[];
}

const Residential: React.FC<ResidentialProps> = ({
  title,
  description,
  items,
}) => {
  return (
    <SectionWithContainer containerClassName="space-y-8 ">
      <div className="max-w-3xl mx-auto space-y-5">
        <SectionHeading title={title} titleColor="p2" textCenter line />
        <p
          className="text-center text-p2 "
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
      <div className="max-w-4xl mx-auto space-y-3">
        {items.map((item, index) => (
          <div key={index} className="grid grid-cols-[auto_1fr] gap-4">
            <div className="relative w-12 block aspect-square">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-lg text-p2 ">
              <b>{item.title} : </b>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default Residential;
