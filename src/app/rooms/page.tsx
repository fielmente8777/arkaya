import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { accommodationPageData } from "./Components/PageData";
import RoomSection from "./Components/RoomSection";

export default function RoomsPage() {
  return (
    <main>
      <SectionWithContainer>
        <SectionHeading
          title={accommodationPageData.bannerData.title}
          textCenter
          wrapperClassName="max-w-xl flex-wrap mx-auto"
          line
        />
      </SectionWithContainer>
      <RoomSection {...accommodationPageData.roomsData} />
    </main>
  );
}
