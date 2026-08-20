import { Metadata } from "next";
import Banner from "./Components/Banner";
import { aboutPageData } from "./Components/PageData";
import Residential from "./Components/Residential";
import Spa from "./Components/Spa";
import { seoMetadata } from "@/utils/metadata";
import AnimateOnScroll from "@/hooks/AnimateOnScroll";

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
      <section className="pb-20 px-4">
        <AnimateOnScroll direction="right">
          <div className="md:py-12 py-10 md:px-10 px-6 max-w-6xl mx-auto bg-p4 border-l-8 border-p1 box-shadow">
            {aboutPageData.sustainabilityData.description.map((item, index) => (
              <p key={index} className="md:text-lg text-p2 text-center">
                {item}
              </p>
            ))}
          </div>
        </AnimateOnScroll>
      </section>
      {/* <Spa {...aboutPageData.spaData} /> */}
    </main>
  );
}
