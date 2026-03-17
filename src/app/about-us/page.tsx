import { Metadata } from "next";
import Banner from "./Components/Banner";
import { aboutPageData } from "./Components/PageData";
import Residential from "./Components/Residential";
import Spa from "./Components/Spa";
import { seoMetadata } from "@/utils/metadata";

export const metadata: Metadata = {
  title: seoMetadata.about.title,
  description: seoMetadata.about.description,
  keywords: seoMetadata.about.keywords,
  alternates: {
    canonical: seoMetadata.about.canonical,
  },
  openGraph: {
    title: seoMetadata.about.title,
    description: seoMetadata.about.description,
    images: [seoMetadata.about.ogImage],
    type: "website",
    url: seoMetadata.about.canonical,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutUsPage() {
    return (
        <main className="bg-background">
            <Banner {...aboutPageData.bannerData} />
            <Residential {...aboutPageData.residentialBlocksData} />
            <Spa {...aboutPageData.spaData} />
        </main>
    );
}