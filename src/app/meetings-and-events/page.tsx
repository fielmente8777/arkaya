import Banner from "@/components/Banner/Banner";
import { meetingsEventsPageData } from "./Components/PageData";
import CorporateSection from "./Components/CorporateSection";
import WeddingSection from "./Components/WeddingSection";
import { Metadata } from "next";
import { seoMetadata } from "@/utils/metadata";


export const metadata: Metadata = {
  title: seoMetadata.events.title,
  description: seoMetadata.events.description,
  keywords: seoMetadata.events.keywords,
  alternates: {
    canonical: seoMetadata.events.canonical,
  },
  openGraph: {
    title: seoMetadata.events.title,
    description: seoMetadata.events.description,
    images: [seoMetadata.events.ogImage],
    type: "website",
    url: seoMetadata.events.canonical,
  },
  robots: {
    index: true,
    follow: true,
  },
};



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
