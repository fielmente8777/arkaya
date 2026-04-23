import { RoomsSectionProps } from "@/@types/landingpage.type";
import { Container, Section } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import RoomsSlider from "./RoomsSlider/RoomsSlider";


const RoomsSection: React.FC<RoomsSectionProps> = ({ title, Cards }) => {
  return (
    <Section className="md:space-y-16 space-y-10">
      <Container>
        <SectionHeading
          title={title}
          textCenter
          wrapperClassName="max-w-xl flex-wrap mx-auto"
          line
        />
      </Container>
      <RoomsSlider cards={Cards} />
    </Section>
  );
};

export default RoomsSection;
