import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";
import { JSX } from "react";

interface ExperienceType {
  items: {
    category: string;
    title: string;
    description: string;
    details: {
      title: string;
      icon: JSX.Element;
    }[];
    image: string;
  }[];
}

const Experiences: React.FC<ExperienceType> = ({ items }) => {
  return (
    <SectionWithContainer containerClassName="space-y-18">
      {items.map((item, index) => (
        <div
          key={index}
          className="grid md:grid-cols-2 grid-cols-1 items-center gap-8"
        >
          <div
            className={`flex flex-col gap-6 ${index % 2 !== 0 ? "md:order-2" : ""}`}
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-lg uppercase text-p1">{item.category}</h2>
              <h3 className="font-primary text-3xl uppercase">{item.title}</h3>
            </div>
            <div className="w-full relative aspect-4/3 md:hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              <div className="py-2.5 px-4.5 w-fit rounded-sm box-shadow flex items-center gap-2 absolute bottom-4 right-4 bg-background">
                {item.details[2].icon}
                <span>{item.details[2].title}</span>
              </div>
            </div>
            <p className="md:text-lg text-p2">{item.description}</p>
            <ul className="flex items-center justify-center box-shadow divide-x-[0.5px] divide-p2 py-3 md:w-fit rounded-sm">
              {item.details.slice(0, 2).map((detail, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2.5 md:px-4 px-8.5"
                >
                  {detail.icon}
                  <span>{detail.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full relative aspect-4/2 md:block hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
            <div className="py-2.5 px-4.5 w-fit rounded-sm box-shadow flex items-center gap-2 absolute bottom-4 right-4 bg-background">
              {item.details[2].icon}
              <span>{item.details[2].title}</span>
            </div>
          </div>
        </div>
      ))}
    </SectionWithContainer>
  );
};

export default Experiences;
