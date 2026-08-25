"use client";
import { SectionWithContainer } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import AnimateOnScroll from "@/hooks/AnimateOnScroll";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { BtnIcon } from "@/app/rooms/[slug]/GallerySlider";

interface Props {
  title: string;
  description: string[];
  images: string[];
}

const Banner: React.FC<Props> = ({ title, description, images }) => {
  return (
    <SectionWithContainer>
      <SectionHeading title={title} textCenter logo />
      <AnimateOnScroll direction="right">
        <p className="max-w-220 mt-4 mx-auto text-center md:text-lg text-p2">
          {description}
        </p>
      </AnimateOnScroll>

      <div className="relative mt-12 w-full">
        <button
          className="about-banner-prev absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 aspect-square bg-p1 rounded-full cursor-pointer hover:scale-105 transition-transform shadow-md"
          aria-label="Previous Slide"
        >
          <BtnIcon />
        </button>
        <button
          className="about-banner-next absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 aspect-square bg-p1 rounded-full rotate-180 cursor-pointer hover:scale-105 transition-transform shadow-md"
          aria-label="Next Slide"
        >
          <BtnIcon />
        </button>

        <AnimateOnScroll direction="right">
          <SwiperCarousel
            data={images}
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            modules={[Autoplay, Navigation]}
            navigation={{
              nextEl: ".about-banner-next",
              prevEl: ".about-banner-prev",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={700}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="w-full"
            renderSlide={(src) => (
              <div className="w-full relative aspect-4/5.5 overflow-hidden">
                <Image src={src} alt={title} fill className="object-cover" />
              </div>
            )}
          />
        </AnimateOnScroll>
      </div>
    </SectionWithContainer>
  );
};

export default Banner;
