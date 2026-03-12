"use client";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { DotIcon } from "@/utils/icons";
import { CSSProperties } from "react";
import { Autoplay, Pagination } from "swiper/modules";

const PetDiningMenuItemsSlider = ({ items }: { items: string[][] }) => {
  return (
    <>
      <SwiperCarousel
        data={items}
        slidesPerView={1}
        spaceBetween={24}
        loop
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        
        className="w-full"
        renderSlide={(item) => (
          <ul className="space-y-4">
            {item.map((item, index) => (
              <li
                key={index}
                className="text-lg text-p2 flex items-center gap-2.5"
              >
                <span className="text-p1">
                  <DotIcon />
                </span>{" "}
                {item}
              </li>
            ))}
          </ul>
        )}
      />

      <div className="custom-pagination mt-8 flex justify-center" />
    </>
  );
};

export default PetDiningMenuItemsSlider;


