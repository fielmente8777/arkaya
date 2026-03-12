"use client";
import { RoomsType } from "@/@types/type";
import SwiperCarousel from "./SwiperCarousel";
import { Navigation } from "swiper/modules";
import RoomCard from "../cards/RoomCard";

interface RoomsSliderProps {
  rooms: RoomsType["rooms"];
}
const RoomsSlider: React.FC<RoomsSliderProps> = ({ rooms }) => {
  return (
    <>
      <SwiperCarousel
        data={rooms}
        slidesPerView={1}
        spaceBetween={24}
        loop
        modules={[Navigation]}
        navigation={{
          nextEl: ".rooms-section-next",
          prevEl: ".rooms-section-prev",
        }}
        className="w-full"
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2.6,
          },
        }}
        renderSlide={(room) => <RoomCard {...room} />}
      />
    </>
  );
};

export default RoomsSlider;
