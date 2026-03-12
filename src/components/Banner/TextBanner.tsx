import Image from "next/image";
import { SectionWithContainer } from "../sectionComponants";
import { SectionHeading } from "../typography";

const TextBanner: React.FC<{
  title: string;
  description?: string;
  wrapperClassName?: string;
}> = ({ title, description, wrapperClassName }) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-background py-4 relative"
      containerClassName={`space-y-3 md:space-y-5 max-w-3xl! ${wrapperClassName || ""}`}
    >
      <SectionHeading title={title} textCenter level={1} />
      {description && (
        <p className="text-dark text-center max-md:text-sm/relaxed">
          {description}
        </p>
      )}

      <div className="absolute lg:right-0 right-1/2 max-md:translate-x-1/2 top-2 max-w-44 w-full h-full ">
        <div className="relative w-full aspect-auto h-[90%] ">
          <Image
            src={"/watermark.png"}
            alt="watermark"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default TextBanner;
