"use client";
import { RoomsSectionProps } from "@/@types/landingpage.type";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { Navigation, Pagination } from "swiper/modules";
import RoomCard from "../cards/RoomCard";

const RoomsSlider: React.FC<{ cards: RoomsSectionProps["Cards"] }> = ({
  cards,
}) => {
  return (
    <div>
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        spaceBetween={24}
        loop
        centeredSlides={true}
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: ".rooms-next",
          prevEl: ".rooms-prev",
        }}
        pagination={{ clickable: true, el: ".room-custom-pagination" }}
        breakpoints={{
          768: {
            slidesPerView: 1.2,
          },
        }}
        className="py-2! max-md:px-2!"
        renderSlide={(card) => <RoomCard {...card} />}
      />
      <div className="flex items-center justify-center gap-2.5 mt-6 w-fit mx-auto">
        <button
          className="rooms-prev custom-nav-btn"
          aria-label="Previous Slide"
        >
          <BtnPrev />
        </button>
        <div className="room-custom-pagination flex gap-2 justify-center" />
        <button className="rooms-next custom-nav-btn" aria-label="Next Slide">
          <BtnNext />
        </button>
      </div>
    </div>
  );
};

export default RoomsSlider;

export const BtnNext = () => (
  <svg
    width={8}
    height={16}
    viewBox="0 0 8 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.02538 16L0 14.8239L5.94925 8L0 1.17612L1.02538 0L8 8L1.02538 16Z"
      fill="#E94128"
    />
  </svg>
);

export const BtnPrev = () => (
  <svg
    width={8}
    height={16}
    viewBox="0 0 8 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.97462 16L8 14.8239L2.05075 8L8 1.17612L6.97462 0L0 8L6.97462 16Z"
      fill="#E94128"
    />
  </svg>
);
