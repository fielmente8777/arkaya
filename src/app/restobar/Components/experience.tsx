import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { restobarPageData } from "./PageData";

const Experience = () => {
  const data = restobarPageData.experienceData;

  return (
    <SectionWithContainer
    
      containerClassName="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto"
    >
      
     
      <div className="bg-background2 p-6 flex flex-col justify-between gap-6">
        
        <div className="space-y-4">
          <p className="text-p1 text-sm tracking-wide">
            {data.tag}
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
            {data.title}{" "}
            <span className="text-p1">{data.highlight}</span>
          </h2>

          <p className="text-sm text-gray-600">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          {data.features.map((item, index) => (
            <div key={index}>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

       
        <LinkButton
          label={data.button.label}
          href={data.button.href}
          className="bg-p1 text-white px-4 py-2 w-fit"
        />
      </div>

     
      <div className="relative w-full aspect-[4/5]">
        <Image
          src={data.images[0]}
          alt="experience"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative w-full aspect-[4/5]">
        <Image
          src={data.images[1]}
          alt="experience"
          fill
          className="object-cover"
        />
      </div>

    </SectionWithContainer>
  );
};

export default Experience;