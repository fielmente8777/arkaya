import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { restobarPageData } from "./PageData";

const Gallery = () => {
  return (
    <SectionWithContainer 
    sectionClassName="py-10"
    containerClassName="flex flex-col items-center gap-10">
      <SectionHeading textCenter title={'A Glimpse of <span class="text-p1">180° RESTROBAR</span>'} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl mx-auto">
        {restobarPageData.galleryData.images.map((img, index) => (
          <div key={index} className="relative w-full aspect-[4/3]">
            <Image src={img} alt="restobar" fill className="object-cover" />
          </div>
        ))}
      </div>

      <LinkButton
        label={restobarPageData.galleryData.button.label}
        href={restobarPageData.galleryData.button.href}
        className="bg-p1 text-white px-6 py-2 mx-auto"
      />
    </SectionWithContainer>
  );
};

export default Gallery;
