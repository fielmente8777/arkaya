import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { accommodationPageData } from "./Components/PageData";
import RoomSection from "./Components/RoomSection";
import { Metadata } from "next";
import { seoMetadata } from "@/utils/metadata";

export const metadata: Metadata = {
  title: seoMetadata.accommodation.title,
  description: seoMetadata.accommodation.description,
  keywords: seoMetadata.accommodation.keywords,
  alternates: {
    canonical: seoMetadata.accommodation.canonical,
  },
  openGraph: {
    title: seoMetadata.accommodation.title,
    description: seoMetadata.accommodation.description,
    images: [seoMetadata.accommodation.ogImage],
    type: "website",
    url: seoMetadata.accommodation.canonical,
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
        <p className="text-center md:text-lg text-p2 mt-3">
          {accommodationPageData.bannerData.description}
        </p>
      </SectionWithContainer>
      <RoomSection {...accommodationPageData.roomsData} />
    </main>
  );
}
