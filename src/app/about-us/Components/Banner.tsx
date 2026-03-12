import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

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
      <div className="lg:grid grid-cols-4 gap-6 mt-14">
        {images.map((image, index) => (
          <div key={index} className="w-full relative aspect-4/5.5">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default Banner;
