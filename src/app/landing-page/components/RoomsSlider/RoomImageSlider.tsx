"use client";
import { RoomsSectionProps } from "@/@types/landingpage.type";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";

const RoomImageSlider: React.FC<{
  images: RoomsSectionProps["Cards"][0]["images"];
  title: string;
}> = ({ images, title }) => {
  return (
    <div className="room-card">
      <SwiperCarousel
        data={images}
        slidesPerView={1}
        spaceBetween={24}
        loop
        modules={[Autoplay, Navigation]}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        renderSlide={(src) => (
          <div className="w-full relative aspect-[4/3.1] ">
            <Image
              src={src}
              alt={title}
              fill
              className="object-cover rounded-3xl overflow-hidden"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{
                background: "white",
              }}
            />
          </div>
        )}
      />
    </div>
  );
};

export default RoomImageSlider;
