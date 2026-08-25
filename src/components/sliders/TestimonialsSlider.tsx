"use client";
import { FC } from "react";
import { Autoplay, Navigation, Controller } from "swiper/modules";

import SwiperCarousel from "./SwiperCarousel";

import AnimateOnScroll from "@/hooks/AnimateOnScroll";
import TestimonialCard from "../cards/TestimonialCard";
import { TestimonialDataType } from "@/@types/type";


interface TestimonialsSliderProps {
  cards: TestimonialDataType["testimonials"];
  onSwiper?: (swiper: any) => void;
  controller?: any;
}
const TestimonialsSlider: FC<TestimonialsSliderProps> = ({
  cards,
  onSwiper,
  controller,
}) => {
  return (
    <AnimateOnScroll direction="right">
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        spaceBetween={24}
        loop
        modules={[Autoplay, Navigation, Controller]}
        controller={controller}
        onSwiper={onSwiper}
        navigation={{
          nextEl: ".testimonials-next",
          prevEl: ".testimonials-prev",
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        speed={1000}
        className="w-full"
        renderSlide={(card) => <TestimonialCard {...card} />}
      />
    </AnimateOnScroll>
  );
};

export default TestimonialsSlider;
