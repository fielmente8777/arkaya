"use client";

import LinkButton from "@/components/buttons/LinkButton";
import { Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import Image from "next/image";
import { useState } from "react";
import { Navigation } from "swiper/modules";

interface GallerySliderProps {
  images: string[];
  link: {
    label: string;
    href: string;
  };
}

const GallerySlider: React.FC<GallerySliderProps> = ({ images, link }) => {
  images = images.length > 3 ? images : [...images, ...images];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Section>
      <div className="relative">
        <SwiperCarousel
          data={images}
          modules={[Navigation]}
          navigation={{
            nextEl: ".rooms-section-next",
            prevEl: ".rooms-section-prev",
          }}
          slidesPerView={1}
          spaceBetween={24}
          loop
          centeredSlides={true}
          breakpoints={{
            768: {
              slidesPerView: 1.55,
              spaceBetween: 80,
            },
          }}
          speed={900}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full"
          renderSlide={(src, index) => (
            <div
              className={`w-full relative ${
                index === activeIndex ? "aspect-4/2.5" : "aspect-[4/2.2]"
              }`}
            >
              <Image src={src} alt="Image" fill className="object-cover" />
            </div>
          )}
        />
        <div className="md:absolute md:top-[50%] md:left-[50%] -translate-x-[50%] max-w-272 w-full z-10">
          <div className="flex items-center justify-between gap-4">
            <button className="rooms-section-prev flex items-center justify-center w-10 aspect-square bg-p1 rounded-full">
              <BtnIcon />
            </button>
            <button className="rooms-section-next flex items-center justify-center w-10 aspect-square bg-p1 rounded-full rotate-180">
              <BtnIcon />
            </button>
          </div>
        </div>
      </div>
      <LinkButton
        href={link.href}
        label={link.label}
        className="mx-auto mt-8"
      />
    </Section>
  );
};

export default GallerySlider;

export const BtnIcon = () => (
  <svg
    width={8}
    height={16}
    viewBox="0 0 8 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.97462 16L8 14.8239L2.05075 8L8 1.17612L6.97462 0L0 8L6.97462 16Z"
      fill="white"
    />
  </svg>
);
