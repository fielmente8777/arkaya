import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { LineIcon } from "@/components/typography/SectionHeading";
import AnimateOnScroll from "@/hooks/AnimateOnScroll";
import Image from "next/image";
import Link from "next/link";

interface DiningProps {
  title: string;
  subtitle: string;
  description: string[];
  images: string[];
  link: {
    label: string;
    href: string;
  };
}

const Dining: React.FC<DiningProps> = ({
  title,
  subtitle,
  description,
  images,
  link,
}) => {
  return (
    <SectionWithContainer
      sectionClassName="max-md:pb-0!"
      containerClassName="md:space-y-16 space-y-8 max-md:px-0!"
    >
      <SectionHeading
        title={title}
        subTitle={subtitle}
        line2
        textCenter
        wrapperClassName="max-w-[39.5rem] mx-auto max-md:px-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="w-full relative aspect-4/5.5">
          <Image src={images[0]} alt={title} fill className="object-cover" />
        </div>
        <AnimateOnScroll direction="right">
          <div
            id="menu"
            className="bg-background2 flex flex-col justify-center items-center gap-4 h-fit py-8 max-md:py-12 px-6  box-shadow mt-auto"
          >
            <span className="">
              <LineIcon />
            </span>
            {description.map((item, index) => (
              <p key={index} className={`text-center leading-relaxed`}>
                {item}
              </p>
            ))}

            <Link
              href={link.href}
              download={true}
              className={`flex items-center text-nowrap gap-6 bg-p1 text-white rounded-sm w-fit px-4 py-2 font-semibold hover:scale-95 transition-all duration-300 ease-in-out hover:scale-x-105 active:scale-95 `}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </Link>
          </div>
        </AnimateOnScroll>
        <div className="w-full relative aspect-4/5.5">
          <Image src={images[1]} alt={title} fill className="object-cover" />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Dining;
