import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import PetDiningMenuItemsSlider from "./PetDiningMenuItemsSlider";

interface PetDiningMenuProps {
  title: string;
  description: string[];
  items: string[][];
}

const PetDiningMenu: React.FC<PetDiningMenuProps> = ({
  title,
  description,
  items,
}) => {
  return (
    <SectionWithContainer containerClassName="space-y-8 max-w-[49rem]!">
      <SectionHeading title={title} line />
      <div className="flex flex-col gap-4 text-center px-4">
        {description.map((item, index) => (
          <p key={index} className="text-lg text-p2 mb-4">
            {item}
          </p>
        ))}
      </div>
      <PetDiningMenuItemsSlider items={items} />
    </SectionWithContainer>
  );
};

export default PetDiningMenu;
