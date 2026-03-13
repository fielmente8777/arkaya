"use client";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { JSX } from "react";
import { Autoplay } from "swiper/modules";

interface ExperienceSliderProps {
  points: {
    title: string;
    icon: JSX.Element;
  }[];
}

const ExperienceSlider = ({ points }: ExperienceSliderProps) => {
  return (
    <div className="lg:hidden">
      <SwiperCarousel
        data={points}
        slidesPerView={1}
        spaceBetween={24}
        loop
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        className="max-sm:w-48.5 h-39"
        renderSlide={(item) => (
          <div className="flex flex-col  items-center gap-4">
            {item.icon}
            <p className="text-lg text-center text-p2">{item.title}</p>
          </div>
        )}
      />
    </div>
  );
};

export default ExperienceSlider;
