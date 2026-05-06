"use client";

import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";
import { restoLandingPageData } from "./PageData";
import { Section } from "@/components/sectionComponants";
import { ReserveIcon } from "@/utils/landingPageIcons";

const NatureView = () => {
  const data = restoLandingPageData.natureViewData;

  return (
    <Section className="relative w-full h-[600px] flex justify-center">
      
      {/* IMAGE */}
      <Image
        src={data.image}
        alt={data.title}
        fill
        className="object-cover"
        priority
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CENTERED CONTENT (1440px like Figma) */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        
        <div className="w-full max-w-[1440px] flex items-center justify-between text-white">
          
          {/* LEFT */}
          <div className="w-[441px] h-[164px] flex flex-col justify-between">
            <h2 className="font-primary uppercase text-[48px] leading-tight">
              {data.title}
            </h2>

            <p className="text-[22px] leading-[26px] font-normal opacity-90">
              {data.description}
            </p>
          </div>

          {/* RIGHT BUTTON */}
          <LinkButton
            label={data.button.label}
            href={data.button.href}
            className="bg-p1 text-white px-6 py-3"
            icon={<ReserveIcon />}
          />

        </div>
      </div>
    </Section>
  );
};

export default NatureView;