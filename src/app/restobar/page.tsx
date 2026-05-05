import LinkButton from "@/components/buttons/LinkButton";
import { Section } from "@/components/sectionComponants";
import { restobarPageData } from "./Components/PageData";
import Image from "next/image";
import Dining from "./Components/Dining";

import Testimonials from "./Components/Testimonials";
import NatureView from "./Components/natureView";
import { Metadata } from "next";
import { seoMetadata } from "@/utils/metadata";
import Form3 from "@/components/forms/Form3";

import Food from "./Components/food";
import Gallery from "./Components/gallery";
import Experience from "./Components/experience";

export const metadata: Metadata = {
  title: seoMetadata.restobar.title,
  description: seoMetadata.restobar.description,
  keywords: seoMetadata.restobar.keywords,
  alternates: {
    canonical: seoMetadata.restobar.canonical,
  },
  openGraph: {
    title: seoMetadata.restobar.title,
    description: seoMetadata.restobar.description,
    images: [seoMetadata.restobar.ogImage],
    type: "website",
    url: seoMetadata.restobar.canonical,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RestobarPage() {
  return (
    <main>
      <Section
        defaultPadding={false}
        className="w-full relative md:aspect-[4/2.18] aspect-square"
      >
        <Image
          src={restobarPageData.bannerData.images[0]}
          alt="Image"
          fill
          className="object-cover "
        />
        <LinkButton
          href={restobarPageData.bannerData.actions[0].href}
          label={restobarPageData.bannerData.actions[0].label}
          className="absolute bottom-4 md:bottom-40 left-1/2 -translate-x-1/2  text-p2! bg-white!"
        />
      </Section>
      <div className="mt-10 ">
        <Form3 />
      </div>
      < Experience/>
      {/* <Dining {...restobarPageData.contentData} /> */}
      <NatureView />
      <Food />
      <Gallery />
      <Testimonials {...restobarPageData.testimonialData} />
      <div className="mt-10 mb-12">
        <Form3 />
      </div>
    </main>
  );
}
