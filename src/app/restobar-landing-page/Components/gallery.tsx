"use client";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import { ReserveIcon } from "@/utils/landingPageIcons";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { restoLandingPageData } from "./PageData";

const images = restoLandingPageData.galleryData.images;

const Gallery = () => {
  return (
    <SectionWithContainer
      sectionClassName="py-[14px]!"
      containerClassName="flex flex-col items-center gap-[24px] md:gap-[56px] max-w-[1264px] mx-auto max-md:px-0!"
    >
      <SectionHeading
        textCenter
        title={'A Glimpse of <span class="text-p1 uppercase">180° restobar</span>'}
      />

      {/* DESKTOP GRID */}
      <div className="hidden md:grid grid-cols-3 gap-5 w-full">
        {images.map((img, index) => (
          <div key={index} className="relative w-full aspect-[4/3]">
            <Image src={img} alt="restobar" fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* MOBILE */}
      <div className="md:hidden w-full gallery-card">
        <SwiperCarousel
          data={images}
          slidesPerView={1}
          spaceBetween={12}
          loop
          loopAdditionalSlides={images.length}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            // pauseOnMouseEnter: true,
          }}
          speed={700}
          className="w-full"
          navigation
          renderSlide={(img) => (
            <div className="relative w-full h-[350px]">
              <Image src={img} alt="restobar" fill className="object-cover" />
            </div>
          )}
        />
        {/* <div className="flex items-center justify-center gap-2.5 mt-6 w-fit mx-auto">
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
        </div> */}
      </div>
      <div className="px-4 w-full">
        <LinkButton
          label={restoLandingPageData.galleryData.button.label}
          href={restoLandingPageData.galleryData.button.href}
          className="bg-p1 text-white px-6 py-3 mx-auto max-md:w-full max-md:flex max-md:justify-center"
          icon={<ReserveIcon />}
        />
      </div>
    </SectionWithContainer>
  );
};

export default Gallery;
