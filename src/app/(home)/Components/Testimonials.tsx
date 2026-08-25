"use client";
import React, { useState } from "react";
import { TestimonialDataType } from "@/@types/type";
import { SectionWithContainer } from "@/components/sectionComponants";
import TestimonialsSlider from "@/components/sliders/TestimonialsSlider";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { Autoplay, Controller } from "swiper/modules";

const Testimonials: React.FC<TestimonialDataType> = ({
  title,
  image,
  images,
  testimonials,
}) => {
  const [textSwiper, setTextSwiper] = useState<any>(null);
  const [imageSwiper, setImageSwiper] = useState<any>(null);

  const baseImages =
    images && images.length > 0
      ? images
      : image
      ? [image]
      : ["/recep1.jpg"];

  const renderImageContent = () => {
    if (baseImages.length === 0) return null;

    if (baseImages.length === 1) {
      return <Image src={baseImages[0]} alt={title} fill className="object-cover" />;
    }

    return (
      <SwiperCarousel
        data={testimonials}
        slidesPerView={1}
        spaceBetween={0}
        loop
        modules={[Autoplay, Controller]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        controller={{
          control: textSwiper && !textSwiper.destroyed ? textSwiper : null,
        }}
        onSwiper={setImageSwiper}
        speed={1000}
        className="w-full h-full"
        renderSlide={(_, index) => (
          <div className="relative w-full aspect-4/2.5">
            <Image
              src={baseImages[(index || 0) % baseImages.length]}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}
      />
    );
  };

  return (
    <SectionWithContainer containerClassName="grid md:grid-cols-2 grid-cols-1 gap-12">
      <div className="w-full relative aspect-4/2.5 md:block hidden overflow-hidden rounded-sm">
        {renderImageContent()}
      </div>
      <div className="flex flex-col justify-between gap-6">
        <SectionHeading title={title} line />
        <div className="w-full relative aspect-4/2.5 md:hidden overflow-hidden rounded-sm">
          {renderImageContent()}
        </div>
        <TestimonialsSlider
          cards={testimonials}
          onSwiper={setTextSwiper}
          controller={{
            control: imageSwiper && !imageSwiper.destroyed ? imageSwiper : null,
          }}
        />
      </div>
    </SectionWithContainer>
  );
};

export default Testimonials;
