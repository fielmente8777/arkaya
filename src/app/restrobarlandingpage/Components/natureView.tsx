"use client";

import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";
import { restoLandingPageData } from "./PageData";
import { Section } from "@/components/sectionComponants";
import { ReserveIcon } from "@/utils/landingPageIcons";

const NatureView = () => {
  const data = restoLandingPageData.natureViewData;

  return (
    <Section className="relative bg-white w-full md:h-[600px] flex justify-center">
      <div className="max-md:relative max-md:block hidden space-y-3">
        {/* <p className="text-p1 text-md tracking-wide">{data.title}</p> */}

        <h2 className="font-primary uppercase text-[32px] gap-5">
          {data.title}
          <span className="text-p1 ml-2">{data.highlight}</span>
        </h2>

        <p className="text-[18px] text-gray-600 max-w-[380px] mt-4!">
          {data.description}
        </p>
        <div className="relative h-[300px] mt-8">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      {/* IMAGE */}
      <Image
        src={data.image}
        alt={data.title}
        fill
        className="object-cover max-md:hidden"
        priority
      />


      {/* OVERLAY */}
      <div className="md:absolute inset-0 bg-black/10 " />

      {/* CENTERED CONTENT */}
      <div className="md:absolute max-md:hidden inset-0 flex items-center justify-center px-6">
        <div className="w-full max-w-[1440px] flex flex-col items-start gap-8 text-white px-6 md:px-16 md:flex-row md:items-center md:justify-between">
          {/* LEFT */}
          <div className="flex flex-col gap-[21px] w-full md:w-[441px] md:h-[164px]">
            <h2 className="font-primary uppercase text-[36px] leading-[100%] md:text-[48px] font-normal">
              {data.title}
            </h2>

            <p className="text-[16px] leading-[24px] md:text-[22px] md:leading-[26px] font-normal opacity-90">
              {data.description}
            </p>
          </div>

          {/* RIGHT BUTTON */}
          <LinkButton
            label={data.button.label}
            href={data.button.href}
            className="bg-p1 text-white px-9 py-3"
            icon={<ReserveIcon />}
          />
        </div>
      </div>
    </Section>
  );
};

export default NatureView;
