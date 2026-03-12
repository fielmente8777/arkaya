import Banner from "@/components/Banner/Banner";
import { meetingsEventsPageData } from "./Components/PageData";
import CorporateSection from "./Components/CorporateSection";
import WeddingSection from "./Components/WeddingSection";

export default function MeetingsAndEventsPage() {
  return (
    <main>
      <Banner
        {...meetingsEventsPageData.bannerData}
        contentWrapperClassName="max-w-4xl! w-fit mx-auto"
        wrapperClassName="md:aspect-[4/2.1]"
      />
      <CorporateSection {...meetingsEventsPageData.corporateSection} />
      <WeddingSection {...meetingsEventsPageData.weddingSection} />
    </main>
  );
}
