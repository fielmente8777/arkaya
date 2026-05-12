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
      sectionClassName="max_screen_width bg-p4 "
      containerClassName=" grid grid-cols-1 md:grid-cols-[408px_1fr_1fr] gap-5 max-w-[1080px] mx-auto max-md:px-0! md:px-8"
    >
      <div className=" px-2 flex flex-col gap-10 max-md:px-4">

        <div className="space-y-5">
          <p className="text-p1 text-md tracking-wide">{data.tag}</p>

          <h2 className="font-primary uppercase text-[32px] ">
            {data.title} <span className="text-p1">{data.highlight}</span>
          </h2>

          <p className="text-[18px] text-gray-600 max-w-[380px] mt-8!">
            {data.description}
          </p>
      </div>
      {/* MOBILE SLIDER */}
     <div className="md:hidden w-screen relative left-1/2 -translate-x-1/2 mt-6 overflow-hidden">
        <SwiperCarousel
          data={data.images}
          slidesPerView={1}
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
            <div className="relative w-full h-[480px] overflow-hidden md:rounded-lg">
              <Image src={img} alt="experience" fill className="object-cover" />
            </div>
          )}
        />
      </div>

      <div className=" flex flex-col gap-10 w-full max-md:px-4">
        <div className="grid grid-cols-3 gap text-center">
          {data.features.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col items-center gap-3 p-2 ${i != 2 ? "border-r border-p6" : ""}`}
            >
              <span className="text-p6 [&>svg]:w-10 [&>svg]:h-10 ">
                {iconMap[item.icon as keyof typeof iconMap]}
              </span>

              <p className="text-sm leading-tight text-center">{item.label}</p>
            </div>
          ))}
        </div>

        <LinkButton
          label={data.button.label}
          href={data.button.href}
          className="bg-p1 text-white px-5 py-3 w-full flex justify-center"
          icon={<ReserveIcon />}
        />
      </div>
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
    </SectionWithContainer>
  );
};

export default Experience;
