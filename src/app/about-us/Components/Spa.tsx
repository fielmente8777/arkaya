"use client";
import LinkButton from "@/components/buttons/LinkButton";
import { Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import AnimateOnScroll from "@/hooks/AnimateOnScroll";
import Image from "next/image";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { Autoplay } from "swiper/modules";

interface SpaProps {
  title: string;
  description: string[];
  image?: string;
  images?: string[];
  link: {
    label: string;
    href: string;
  };
}

const Spa: React.FC<SpaProps> = ({ title, description, image, images, link }) => {
  const imageList =
    images && images.length > 0
      ? images
      : image
      ? [image]
      : ["/about-us/buransh-spa.png"];

  return (
    <Section
      defaultPadding={false}
      className="grid md:grid-cols-2 max-md:gap-8 max-md:py-8"
    >
      <div className="relative w-full aspect-4/3 overflow-hidden">
        {imageList.length > 1 ? (
          <SwiperCarousel
            data={imageList}
            slidesPerView={1}
            spaceBetween={0}
            loop
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={800}
            className="w-full h-full"
            renderSlide={(imgSrc) => (
              <div className="relative w-full aspect-4/3">
                <Image src={imgSrc} alt={title} fill className="object-cover" />
              </div>
            )}
          />
        ) : (
          <Image src={imageList[0]} alt={title} fill className="object-cover" />
        )}
      </div>
      <div className="md:border-y border-b max-md:pb-8 border-p1 flex items-center justify-center">
        <div className="max-w-133.25 max-md:px-4 mx-auto ">
          <SectionHeading title={title} />
          <AnimateOnScroll direction="right">
            <div className="flex flex-col justify-between md:mt-8 mt-4">
              {description.map((item, index) => (
                <p key={index} className="text-lg text-p2 mb-4">
                  {item}
                </p>
              ))}
              <LinkButton href={link.href} label={link.label} />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </Section>
  );
};

export default Spa;
