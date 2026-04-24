import Accordion from "@/components/accordion/Accordion";
import { Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import AnimateOnScroll from "@/hooks/AnimateOnScroll";
import Image from "next/image";

interface PetPolicyFaqProps {
  title: string;
  src: string;
  items: {
    question: string;
    answer: string;
  }[];
}

const PetPolicyFaq: React.FC<PetPolicyFaqProps> = ({ title, src, items }) => {
  return (
    <Section className="">
      <SectionHeading title={title} line wrapperClassName="max-md:px-4" />
      <div className="grid bg-white items-center md:grid-cols-2 grid-cols-1 max-md:gap-6 md:mt-16 mt-10">
        <div className="w-full relative aspect-4/3.5">
          <Image src={src} alt={title} fill className="object-cover" />
        </div>
        <AnimateOnScroll direction="bottom">
          <div className="flex flex-col my-auto px-4 md:pl-16 max-w-2xl">
            {items.map((item, index) => (
              <Accordion {...item} key={index} />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </Section>
  );
};

export default PetPolicyFaq;
