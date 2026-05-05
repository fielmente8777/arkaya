import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { restobarPageData } from "./PageData";

const Food = () => {
  return (
    <SectionWithContainer containerClassName="flex flex-col items-center gap-10">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full max-w-7xl mx-auto">

        {restobarPageData.foodData.map((item, index) => {

        
          if (item.type === "video") {
            return (
              <div key={index} className="relative w-full aspect-[301/464] overflow-hidden">
                <video
                  src={item.src}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                />
              </div>
            );
          }

          
          if (item.type === "image") {
            return (
              <div key={index} className="relative w-full aspect-[301/464]">
                <Image
                  src={item.src!}
                  alt="restobar"
                  fill
                  className="object-cover"
                />
              </div>
            );
          }

        
          if (item.type === "card") {
            return (
              <div
                key={index}
                className="bg-p1 text-white aspect-[301/464] flex flex-col justify-center items-center text-center p-6 gap-4"
              >
                <h3 className="text-lg font-semibold tracking-wide">
                  {item.title}
                </h3>

                <p className="text-sm opacity-90">
                  {item.description}
                </p>

                <LinkButton
                  label={item.button?.label || "Download Menu"}
                  href={item.button?.href || "/"}
                  className="bg-white text-p1 px-4 py-2 mt-2"
                />
              </div>
            );
          }

          return null;
        })}

      </div>

    </SectionWithContainer>
  );
};

export default Food;