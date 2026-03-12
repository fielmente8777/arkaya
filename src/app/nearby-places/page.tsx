import Banner from "@/components/Banner/Banner";
import { nearbyPageData } from "./Components/PageData";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import LazyLoadedMap from "@/components/map/LazyLoadedMap";
import Experiences from "./Components/Experiences";

export default function NearbyPlacesPage() {
  return (
    <main className="bg-background">
      <Banner
        {...nearbyPageData.bannerData}
        contentWrapperClassName="max-w-3xl! w-fit mx-auto"
        wrapperClassName="md:aspect-[4/2.1]"
      />
      <Experiences {...nearbyPageData.experiencesData} />
      <SectionWithContainer containerClassName="space-y-12">
        <SectionHeading title={nearbyPageData.mapData.title} textCenter />
        <div className="w-full aspect-4/2">
          <LazyLoadedMap src={nearbyPageData.mapData.mapPlaceholder} />
        </div>
      </SectionWithContainer>
    </main>
  );
}
