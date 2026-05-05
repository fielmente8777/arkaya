"use client";

import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";
import { restobarPageData } from "./PageData";
import { SectionWithContainer } from "@/components/sectionComponants";

const NatureView = () => {
  const data = restobarPageData.natureViewData;

  return (
    <SectionWithContainer sectionClassName="w-full relative h-[500px] md:h-[600px]">

      {/* Background Image */}
      <Image
        src={data.image}
        alt={data.title}
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-between max-w-7xl mx-auto px-6 text-white">

        {/* LEFT */}
        <div className="max-w-lg space-y-4">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-wide">
            {data.title}
          </h2>

          <p className="text-sm md:text-base opacity-90">
            {data.description}
          </p>
        </div>

        {/* RIGHT */}
        <div>
          <LinkButton
            label={data.cta.label}
            href={data.cta.href}
            className="bg-p1 text-white px-6 py-3"
          />
        </div>

      </div>
    </SectionWithContainer>
  );
};

export default NatureView;