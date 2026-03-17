import Banner from "@/components/Banner/Banner";
import { galleryPageData } from "./Components/PageData";
import Grid from "./Components/Grid";
import { Metadata } from "next";
import { seoMetadata } from "@/utils/metadata";


export const metadata: Metadata = {
  title: seoMetadata.gallery.title,
  description: seoMetadata.gallery.description,
  keywords: seoMetadata.gallery.keywords,
  alternates: {
    canonical: seoMetadata.gallery.canonical,
  },
  openGraph: {
    title: seoMetadata.gallery.title,
    description: seoMetadata.gallery.description,
    images: [seoMetadata.gallery.ogImage],
    type: "website",
    url: seoMetadata.gallery.canonical,
  },
  robots: {
    index: true,
    follow: true,
  },
};



export default function GalleryPage() {
  return (
    <main>
      <Banner
        {...galleryPageData.bannerData}
        contentWrapperClassName="max-w-4xl! w-fit mx-auto"
        wrapperClassName="md:aspect-[4/2.1]"
      />
      <Grid {...galleryPageData.ctaSection} />
    </main>
  );
}
