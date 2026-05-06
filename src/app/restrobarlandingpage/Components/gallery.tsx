"use client";
import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { restoLandingPageData } from "./PageData";
import { ReserveIcon } from "@/utils/landingPageIcons";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { Autoplay } from "swiper/modules";

const images = restoLandingPageData.galleryData.images;

const Gallery = () => {
  return (
    <SectionWithContainer
  sectionClassName="py-[56px]"
  containerClassName="flex flex-col items-center gap-[56px] max-w-[1264px] mx-auto"
>
  <SectionHeading
    textCenter
    title={'A Glimpse of <span class="text-p1">180° RESTROBAR</span>'}
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
  <div className="md:hidden w-full">
    <SwiperCarousel
      data={images}
      slidesPerView={1.2}
      spaceBetween={12}
      loopAdditionalSlides={images.length}
      modules={[Autoplay]}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      speed={3000}
      className="w-full"
      renderSlide={(img) => (
        <div className="relative w-full h-[250px]">
          <Image
            src={img}
            alt="restobar"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
    />
  </div>

  <LinkButton
    label={restoLandingPageData.galleryData.button.label}
    href={restoLandingPageData.galleryData.button.href}
    className="bg-p1 text-white px-6 py-3"
    icon={<ReserveIcon />}
  />
</SectionWithContainer>
  );
};

export default Gallery;
