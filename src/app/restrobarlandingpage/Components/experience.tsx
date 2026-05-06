"use client";
import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { restoLandingPageData } from "./PageData";
import {
  ReserveIcon,
  ViewIcon,
  MusicIcon,
  SunsetIcon,
} from "@/utils/landingPageIcons";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { Autoplay } from "swiper/modules";

const iconMap = {
  view: <ViewIcon />,
  music: <MusicIcon />,
  sunset: <SunsetIcon />,
} as const;

const Experience = () => {
  const { experienceData: data } = restoLandingPageData;

  return (
    <SectionWithContainer
      sectionClassName="bg-background2 py-14"
      containerClassName=" grid grid-cols-1 md:grid-cols-[408px_1fr_1fr] gap-5 max-w-[1200px] mx-auto px-4"
    >
      <div className="  px-6 py-8 flex flex-col gap-8">
        <div className="space-y-4">
          <p className="text-p1 text-sm tracking-wide">{data.tag}</p>

          <h2 className="font-primary uppercase text-[32px] leading-none">
            {data.title} <span className="text-p1">{data.highlight}</span>
          </h2>

          <p className="text-[18px] leading-[26px] text-gray-600 max-w-[380px]">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 text-center">
          {data.features.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <span className="text-p6 [&>svg]:w-7 [&>svg]:h-7">
                {iconMap[item.icon as keyof typeof iconMap]}
              </span>

              <p className="text-sm leading-tight">{item.label}</p>
            </div>
          ))}
        </div>

        <LinkButton
          label={data.button.label}
          href={data.button.href}
          className="bg-p1 text-white px-5 py-3 w-fit"
          icon={<ReserveIcon />}
        />
      </div>
      {/* DESKTOP IMAGES */}
      <div className="hidden md:contents">
        {[0, 1].map((i) => (
          <div key={i} className="relative w-full aspect-[4/5]">
            <Image
              src={data.images[i]}
              alt="experience"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* MOBILE SLIDER */}
      <div className="md:hidden w-full mt-6 overflow-hidden">
        <SwiperCarousel
          data={data.images}
          slidesPerView={1.2}
          spaceBetween={12}
          loop
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={800}
          className="w-full"
          renderSlide={(img) => (
            <div className="relative w-full h-[320px] overflow-hidden rounded-lg">
              <Image src={img} alt="experience" fill className="object-cover" />
            </div>
          )}
        />
      </div>
    </SectionWithContainer>
  );
};

export default Experience;
