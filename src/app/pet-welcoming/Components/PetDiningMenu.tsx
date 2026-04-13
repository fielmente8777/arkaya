import { SectionWithContainer } from "@/components/sectionComponants";
import PetDiningMenuItemsSlider from "./PetDiningMenuItemsSlider";
import AnimateOnScroll from "@/hooks/AnimateOnScroll";

interface PetDiningMenuProps {
  items: {
    title: string;
    description: string[];
    items: string[];
  }[];
}

const PetDiningMenu: React.FC<PetDiningMenuProps> = ({ items }) => {
  return (
    <SectionWithContainer>
      <AnimateOnScroll direction="right">
        <PetDiningMenuItemsSlider items={items} />
      </AnimateOnScroll>
    </SectionWithContainer>
  );
};

export default PetDiningMenu;
