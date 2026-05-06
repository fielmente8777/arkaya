"use client";
import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { restoLandingPageData } from "./PageData";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { MenuIcon } from "@/utils/landingPageIcons";

const foodItems = restoLandingPageData.foodData;

const Food = () => {
  return (
    <SectionWithContainer
      sectionClassName="py-[56px]"
      containerClassName="max-w-[1264px] mx-auto"
    >
      {/* DESKTOP GRID */}
      <div className="hidden md:grid grid-cols-4 gap-[20px] h-[464px] w-full">
        {foodItems.map((item, index) => {
          if (item.type === "video") {
            return (
              <div key={index} className="relative h-full overflow-hidden">
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
              <div key={index} className="relative h-full">
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
                className="bg-p1 text-white h-full border border-p1
      px-[24px] py-[32px]
      flex flex-col justify-between items-center text-center"
              >
                <div className="flex flex-col items-center gap-[32px]">
                  <h3 className="font-primary uppercase text-[32px] leading-none">
                    {item.title}
                  </h3>

                  <div className="w-[104px] h-[104px] relative">
                    <div className="text-white [&>svg]:w-[104px] [&>svg]:h-[104px]">
                      {item.icon}
                    </div>
                  </div>

                  <p className="font-secondary text-[18px] leading-[26px] max-w-[253px]">
                    {item.description}
                  </p>
                </div>

                <LinkButton
                  label={item.button?.label || "Download Menu"}
                  href={item.button?.href || "/"}
                  className="border border-white bg-transparent
        text-white px-8 py-3 w-full"
                  icon={<MenuIcon />}
                />
              </div>
            );
          }

          return null;
        })}
      </div>

      {/* 🔹 MOBILE SLIDER */}
      <div className="md:hidden w-full mt-6">
        <SwiperCarousel
          data={foodItems}
          slidesPerView={1.2}
          spaceBetween={12}
          loop
          className="w-full"
          renderSlide={(item) => {
            if (item.type === "video") {
              return (
                <div className="relative w-full h-[320px] overflow-hidden">
                  <video
                    src={item.src}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              );
            }

            if (item.type === "image") {
              return (
                <div className="relative w-full h-[320px]">
                  <Image
                    src={item.src!}
                    alt="restobar"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              );
            }

            if (item.type === "card") {
              return (
                <div className="bg-p1 text-white h-[320px] flex flex-col justify-center items-center text-center p-6 gap-4 rounded-lg">
                  <h3 className="text-lg font-semibold tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-sm opacity-90">{item.description}</p>

                  <LinkButton
                    label={item.button?.label || "Download Menu"}
                    href={item.button?.href || "/"}
                    className="bg-white text-p1 px-4 py-2 mt-2"
                  />
                </div>
              );
            }

            return null;
          }}
        />
      </div>
    </SectionWithContainer>
  );
};

export default Food;
