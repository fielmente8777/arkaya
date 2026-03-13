"use client";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import { useMemo, useState } from "react";

interface GalleryPageData {
  title: string;
  link: {
    label: string;
    href: string;
  };
  galleryImages: {
    src: string;
    alt: string;
  }[];
}
const Grid: React.FC<GalleryPageData> = ({ title, link, galleryImages }) => {
  // filter button
  const category = useMemo(
    () => ["All", ...new Set(galleryImages.map((image) => image.alt))],
    [galleryImages]
  );

  const [selectCategory, setSelectCategory] = useState("All");

  const filteredImages = useMemo(() => {
    if (selectCategory === "All") return galleryImages;
    return galleryImages.filter((image) => image.alt === selectCategory);
  }, [selectCategory, galleryImages]);

  return (
    <>
      <SectionWithContainer
        defaultPadding={false}
        containerClassName="flex md:items-center md:justify-between gap-6 max-md:overflow-x-auto py-4"
      >
        {category.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectCategory(category)}
            className={` hover:text-p1 text-nowrap hover:underline text-lg ${selectCategory === category ? "underline underline-offset-2 text-p1" : "border-transparent text-p2"}`}
          >
            {category}
          </button>
        ))}
      </SectionWithContainer>
      <SectionWithContainer
        sectionClassName="bg-background "
        containerClassName="space-y-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredImages.slice(0, 2).map((image, index) => (
            <div key={index} className="w-full relative aspect-4/3">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="space-y-6 py-10 bg-background2">
          <SectionHeading title={title} textCenter />
          <LinkButton href={link.href} label={link.label} className="mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredImages.slice(2).map((image, index) => (
            <div key={index} className="w-full relative aspect-4/3">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </SectionWithContainer>
    </>
  );
};

export default Grid;
