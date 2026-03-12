"use client";
import { landingPageData } from "@/app/landing-page/components/landingPageData";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import SwiperCarousel from "../sliders/SwiperCarousel";
import Container from "./Container";
import Section from "./Section";

const WebSiteTestimonial = () => {
  return (
    <Section
      defaultPadding={false}
      className="w-full relative md:aspect-[4/1.5] aspect-[4/5.5] overflow-hidden"
    >
      <Image
        src="/website-testimonial.jpg"
        alt="website-testimonial"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Container className="w-full max-w-3xl! space-y-4 testimonials">
          <SwiperCarousel
            data={landingPageData.testimonialData.testimonials}
            slidesPerView={1}
            spaceBetween={20}
            loop
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true, el: ".custom-pagination-white" }}
            autoplay={{ delay: 2500 }}
            speed={3000}
            direction="vertical"
            className="w-full md:aspect-[4/1.5] aspect-4/2 pointer-events-none"
            renderSlide={(card) => (
              <div className="testimonial-content flex flex-col text-center items-center justify-center gap-6 text-white">
                <h2 className="md:text-4xl text-xl uppercase font-semibold">
                  Testimonial
                </h2>
                <p className="md:text-2xl secondary-font">{card.text}</p>
                <p className="font-semibold">
                  {card.name}, {card.location}
                </p>
              </div>
            )}
          />
          <div className="flex items-center justify-center gap-4 custom-pagination-white"></div>
        </Container>
      </div>
    </Section>
  );
};

export default WebSiteTestimonial;
