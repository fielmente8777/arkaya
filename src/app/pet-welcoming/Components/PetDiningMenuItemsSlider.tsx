"use client";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import { DotIcon } from "@/utils/icons";
import { Autoplay, Pagination } from "swiper/modules";

const PetDiningMenuItemsSlider = ({
  items,
}: {
  items: {
    title: string;
    description: string[];
    items: string[];
  }[];
}) => {
  return (
    <>
      <SwiperCarousel
        data={items}
        slidesPerView={1}
        spaceBetween={24}
        loop
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        className="w-full"
        renderSlide={(item) => (
          <div
            className="space-y-8 max-w-196! mx-auto"
          >
            <SectionHeading title={item.title} line />
            <div className="flex flex-col gap-4 text-center px-4">
              {item.description.map((item, index) => (
                <p key={index} className="text-lg text-p2 mb-4">
                  {item}
                </p>
              ))}
            </div>
            <ul className="space-y-4">
              {item.items.map((item, index) => (
                <li
                  key={index}
                  className="text-lg text-p2 flex items-center gap-2.5"
                >
                  <span className="text-p1">
                    <DotIcon />
                  </span>{" "}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      />

      <div className="custom-pagination mt-8 flex justify-center" />
    </>
  );
};

export default PetDiningMenuItemsSlider;
