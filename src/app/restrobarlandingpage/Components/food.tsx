"use client";
import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { restoLandingPageData } from "./PageData";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { MenuIcon } from "@/utils/landingPageIcons";
import { Autoplay } from "swiper/modules";
import { LazyLoadedVideo } from "@/components/Video";

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
                <LazyLoadedVideo
                  src={item.src!}
                  autoPlay
                  muted
                  loop
                  pauseOnScroll={false}
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
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={800}
          className="w-full"
          renderSlide={(item) => {
            if (item.type === "video") {
              return (
                <div className="relative w-full h-[320px] overflow-hidden">
                  <LazyLoadedVideo
                    src={item.src!}
                    autoPlay
                    muted
                    loop
                    pauseOnScroll={false}
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
                <div className="bg-p1 text-white h-[320px] flex flex-col justify-between text-center px-6 py-8 rounded-lg">
                  <div className="flex flex-col items-center gap-5">
                    <h3 className="font-primary text-[28px] leading-none uppercase">
                      {item.title}
                    </h3>

                    <div className="relative w-[68px] h-[68px]">
                      <div className="text-white [&>svg]:w-[80px] [&>svg]:h-[80px]">
                        {item.icon}
                      </div>
                    </div>
                    <p className="font-secondary text-[16px] leading-[24px] opacity-90">
                      {item.description}
                    </p>
                  </div>

                  <LinkButton
                    label={item.button?.label || "Download Menu"}
                    href={item.button?.href || "/"}
                    className="border border-white bg-transparent text-white py-3 w-full"
                    icon={<MenuIcon />}
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
