import { SectionWithContainer } from "@/components/sectionComponants";
import PetDiningMenuItemsSlider from "./PetDiningMenuItemsSlider";

interface PetDiningMenuProps {
  items: {
     title: string;
    description: string[];
    items: string[];
  }[];
}

const PetDiningMenu: React.FC<PetDiningMenuProps> = ({
  items,
}) => {
  return (
    <SectionWithContainer>
      
      <PetDiningMenuItemsSlider items={items} />
    </SectionWithContainer>
  );
};

export default PetDiningMenu;
