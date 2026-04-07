import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface ResidentialProps {
  title: string;
  subTitle: string;
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
  subTitle,
}) => {
  return (
    <SectionWithContainer containerClassName="space-y-8 md:space-y-16">
      <div className="md:max-w-3xl w-full mx-auto space-y-5">
        <SectionHeading title={title} textCenter line />
        <p
          className="text-center text-p2 "
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>

      <div className="space-y-5">
        <SectionHeading
          title={subTitle}
          textCenter
          line
          titleClassName="md:text-[2rem] text-xl"
        />

        <div className="max-w-4xl mx-auto space-y-3">
          {items.map((item, index) => (
            <div key={index} className="grid grid-cols-[auto_1fr] gap-4">
              <div className="relative md:w-12 w-10 block aspect-square">
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
      </div>
    </SectionWithContainer>
  );
};

export default Residential;
