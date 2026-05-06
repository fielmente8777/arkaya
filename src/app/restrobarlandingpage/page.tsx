import LinkButton from "@/components/buttons/LinkButton";
import { Section } from "@/components/sectionComponants";
import { restoLandingPageData } from "./Components/PageData";
import Image from "next/image";
import Testimonials from "./Components/testimonials";
import NatureView from "./Components/natureView";
import { Metadata } from "next";
import { seoMetadata } from "@/utils/metadata";
import Form3 from "@/components/forms/Form3";

import Food from "./Components/food";
import Gallery from "./Components/gallery";
import Experience from "./Components/experience";
import { PeopleIcon } from "@/utils/landingPageIcons";
import Hero from "./Components/hero";
import { restoFooterData } from "@/components/footer/footerdata";
// export const metadata: Metadata = {
//   title: seoMetadata.restobar.title,
//   description: seoMetadata.restobar.description,
//   keywords: seoMetadata.restobar.keywords,
//   alternates: {
//     canonical: seoMetadata.restobar.canonical,
//   },
//   openGraph: {
//     title: seoMetadata.restobar.title,
//     description: seoMetadata.restobar.description,
//     images: [seoMetadata.restobar.ogImage],
//     type: "website",
//     url: seoMetadata.restobar.canonical,
//   },
//   robots: {
//     index: true,

//     follow: true,
//   },
// };

export default function RestobarPage() {
  return (
    <main>
      {/* <Section
        defaultPadding={false}
        className="w-full relative md:aspect-[4/2.18] aspect-square"
      >
        <Image
          src={restoLandingPageData.bannerData.images[0]}
          alt="Image"
          fill
          className="object-cover "
        />
        <LinkButton
          href={restoLandingPageData.bannerData.actions[0].href}
          label={restoLandingPageData.bannerData.actions[0].label}
          className="absolute bottom-4 md:bottom-40 left-1/2 -translate-x-1/2  text-p2! bg-white!"
        />
      </Section> */}
      <Hero />
      <div className="mt-10 ">
        <Form3 />
      </div>
      <Experience />
      <NatureView />
      <Food />
      <Gallery />
      <Testimonials {...restoLandingPageData.testimonialData} />
      <div className="mt-10 mb-12">
        <Form3 />
      </div>
    </main>
  );
}
