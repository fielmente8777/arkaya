"use client";
import { SectionWithContainer } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import { Autoplay } from "swiper/modules";

interface Props {
  title: string;
  description: string[];
  images: string[];
}

const Banner: React.FC<Props> = ({ title, description, images }) => {
  return (
    <SectionWithContainer>
      <SectionHeading title={title} textCenter logo />
      <p className="max-w-220 mt-4 mx-auto text-center md:text-lg text-p2">
        {description}
      </p>
      <div className="lg:grid hidden grid-cols-4 gap-6 mt-14">
        {images.map((image, index) => (
          <div key={index} className="w-full relative aspect-4/5.5">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        ))}
      </div>
      <div className="lg:hidden w-full mt-12">
        <SwiperCarousel
          data={images}
          slidesPerView={1}
          spaceBetween={0}
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 2500 }}
          className="w-full"
          renderSlide={(src) => (
            <div className="w-full relative aspect-4/5">
              <Image src={src} alt="Image" fill className="object-cover" />
            </div>
          )}
        />
      </div>
    </SectionWithContainer>
  );
};

export default Banner;
