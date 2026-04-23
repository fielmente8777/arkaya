import { AdventureDataType } from "@/@types/type";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { AdventureCard } from "./AdventureCard";
import AdventureSlider from "./AdventureSlider";

const Adventure: React.FC<AdventureDataType> = ({
  title,
  description,
  items,
  cta,
}) => {
  return (
    <SectionWithContainer containerClassName="space-y-12">
      <SectionHeading title={title} description={description} line />
      <div className="lg:grid hidden md:grid-cols-3 grid-cols-1 gap-12">
        {items.map((item, index) => (
          <AdventureCard key={index} title={item.title} image={item.image} />
        ))}
      </div>
      <AdventureSlider cards={items} />
      {cta && (
        <LinkButton
          href={cta.href}
          label={cta.label}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-p1 text-white mx-auto mt-12 uppercase"
        />
      )}
    </SectionWithContainer>
  );
};

export default Adventure;
