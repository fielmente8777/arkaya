"use client";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { Autoplay, Navigation } from "swiper/modules";
import { AdventureCard } from "./AdventureCard";
import AnimateOnScroll from "@/hooks/AnimateOnScroll";

interface AdventureSliderProps {
  cards: {
    title: string;
    image: string;
  }[];
}

const AdventureSlider: React.FC<AdventureSliderProps> = ({ cards }) => {
  return (
    <div className="lg:hidden room-card">
      <AnimateOnScroll direction="right">
        <SwiperCarousel
          data={cards}
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
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          renderSlide={(item) => (
            <AdventureCard title={item.title} image={item.image} />
          )}
        />
      </AnimateOnScroll>
    </div>
  );
};

export default AdventureSlider;
