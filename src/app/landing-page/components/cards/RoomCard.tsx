import { RoomsSectionProps } from "@/@types/landingpage.type";
import LinkButton from "@/components/buttons/LinkButton";
import RoomImageSlider from "../RoomsSlider/RoomImageSlider";
import AnimateOnScroll from "@/hooks/AnimateOnScroll";

const RoomCard: React.FC<RoomsSectionProps["Cards"][0]> = ({
  title,
  subtitle,
  description,
  commmonAmenities,
  amenities,
  cta,
  images,
}) => {
  return (
    <div className="grid xl:grid-cols-7 grid-cols-1 gap-4 w-full">
      <div className={`xl:col-span-4 xl:block hidden`}>
        <RoomImageSlider images={images} title={title} />
      </div>
      <div
        className={`md:col-span-3 flex flex-col gap-4 md:gap-5 justify-between box-shadow rounded-3xl bg-background md:px-6 px-3.5 md:py-6 py-6`}
      >
        <div className="space-y-2">
          <p className="md:text-[1.7rem] text-[1.45rem] text-p1 font-primary uppercase abhayaLibre">
            {title}
          </p>
          <p className="text-sm text-[#343434]">{subtitle}</p>
        </div>

        <div className="max-xl:block hidden">
          <AnimateOnScroll direction="right">
            <RoomImageSlider images={images} title={title} />
          </AnimateOnScroll>
        </div>

        {/* primary amenities */}
        <ul className="flex flex-wrap md:items-center gap-2">
          {commmonAmenities.map((amenity, index) => (
            <li
              key={index}
              className={`text-p2 max-sm:text-xs w-fit text-nowrap flex gap-2 items-center border border-p1 md:px-3 px-1.5 py-2.5  rounded-lg ${index === 0 ? "bg-white" : "bg-[#fffff3]"}`}
            >
              <span>{amenity.icon}</span>
              <span>{amenity.label}</span>
            </li>
          ))}
        </ul>

        {/* room description */}
        <AnimateOnScroll direction="right">
          <p className="md:text-base text-p2">{description}</p>
        </AnimateOnScroll>
        {/* secondary amenities */}
        <ul className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-3.5 border border-p1 bg-[#FFFFF3] rounded-xl p-4">
          {amenities.map((amenity, index) => (
            <li
              key={index}
              className={`text-p2 max-md:text-sm max-md:items-center flex gap-2`}
            >
              <span>{amenity.icon}</span>
              <span>{amenity.label}</span>
            </li>
          ))}
        </ul>
        <div className="flex max-md:flex-col gap-4 md:items-center justify-between">
          <LinkButton
            label={cta.label}
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white uppercase rounded-full px-6 py-3 w-full justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
