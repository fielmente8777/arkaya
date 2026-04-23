import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import AnimateOnScroll from "@/hooks/AnimateOnScroll";
import Image from "next/image";
import RoomImageSlider from "./RoomsSlider/RoomImageSlider";

interface StayExperienceProps {
  title: string;
  description: string[];
  images: string[];
  cta: {
    label: string;
    href: string;
  };
}
const StayExperience: React.FC<StayExperienceProps> = ({
  title,
  description,
  images,
  cta,
}) => {
  return (
    <SectionWithContainer sectionClassName="box-shadow bg-p4">
      <div className="grid lg:grid-cols-[1.8fr_1fr] grid-cols-1 gap-4 md:gap-6 items-center">
        <div className="grid lg:grid-cols-[1.8fr_1fr] grid-cols-1 lg:gap-4.5 gap-3.5 items-center">
          <div className="space-y-6">
            <SectionHeading title={title} />
            <div className="w-full relative aspect-[4/2.38] lg:block hidden">
              <Image
                src={images[0]}
                alt="stay experience"
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
            <div className="lg:hidden block">
              <AnimateOnScroll direction="right">
                <RoomImageSlider images={images} title={title} />
              </AnimateOnScroll>
            </div>
          </div>
          <div className="w-full relative aspect-4/6 lg:block hidden">
            <Image
              src={images[1]}
              alt="stay experience"
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>
        </div>
        <div className="space-y-4">
          {description.map((desc, index) => (
            <p key={index} className="text-p2 md:text-lg">
              {desc}
            </p>
          ))}
          <LinkButton
            href={cta.href}
            label={cta.label}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-p1 text-white uppercase"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default StayExperience;
