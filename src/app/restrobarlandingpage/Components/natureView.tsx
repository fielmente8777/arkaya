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

      {/* CENTERED CONTENT */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        
        <div className="w-full max-w-[1440px] flex flex-col items-start gap-6 text-white px-8 md:flex-row md:items-center md:justify-between">
          
          {/* LEFT */}
          <div className="max-w-[260px] md:w-[441px] md:h-[164px] flex flex-col gap-5 md:justify-between">
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