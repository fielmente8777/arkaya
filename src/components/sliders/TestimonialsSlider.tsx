"use client";
import { FC } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import TestimonialCard from "../cards/TestimonialCard";
import SwiperCarousel from "./SwiperCarousel";
import { TestimonialDataType } from "@/@types/type";

interface TestimonialsSliderProps {
  cards: TestimonialDataType["testimonials"];
}
const TestimonialsSlider: FC<TestimonialsSliderProps> = ({ cards }) => {
  return (
    <>
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        spaceBetween={24}
        loop
        modules={[Autoplay, Navigation]}
        navigation={{
          nextEl: ".testimonials-next",
          prevEl: ".testimonials-prev",
        }}
        autoplay={{ delay: 2500 }}
        speed={1000}
        className="w-full"
        renderSlide={(card) => <TestimonialCard {...card} />}
      />
    </>
  );
};

export default TestimonialsSlider;
