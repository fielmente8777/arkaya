import {
  Container,
  SectionWithContainer,
} from "@/components/sectionComponants";
import { roomsPageData } from "./roomsPageData";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";
import SlidingTitle from "@/components/sliders/SlidingTitle";
import Banner from "@/components/Banner/Banner";
import { DotIcon } from "@/utils/icons";
import React from "react";
import GallerySlider from "./GallerySlider";
import Form2 from "@/components/forms/Form2";

interface Params {
  params: Promise<{ slug: string }>;
}
export async function generateStaticParams() {
  const path = await roomsPageData;

  return path?.map((page) => ({
    slug: page.slug,
    fallback: false,
  }));
}

export async function generateMetadata({ params }: Params) {
  const pages = await params;
  const page = await roomsPageData.find((page) => page.slug === pages.slug);
  return {
    title: page?.metaData.title,
    description: page?.metaData.description,
    // keywords: page?.metaData.keyWords,
    alternate: {
      canonical: `https://arkaya.com/${page?.slug}/`,
    },
    openGraph: {
      title: page?.metaData.title,
      description: page?.metaData.description,
    },
  };
}

const page = async (props: Params) => {
  const params = await props.params;
  const pageProps = await roomsPageData.find(
    (page) => page.slug === params.slug
  );

  if (!pageProps) {
    return (
      <main className="max_screen_width py-10">
        <h1 className="text-2xl font-semibold md:text-4xl text-center">
          Page not found 404
        </h1>
      </main>
    );
  }

  return (
    <main className="bg-background">
      <Banner
        {...pageProps.bannerData}
        wrapperClassName="md:aspect-4/2"
        showForm
      />
      <Container className="my-8 md:hidden">
        <Form2 />
      </Container>
      <Container className="my-8">
        {pageProps?.description?.map((item, index) => (
          <p className="text-lg text-p2 text-center" key={index}>
            {item}
          </p>
        ))}
      </Container>
      <ul className="my-8 max-w-7xl mx-auto flex max-md:flex-col items-center justify-between flex-wrap gap-4">
        {pageProps?.roomHighlights?.map((item, index) => (
          <React.Fragment key={index}>
            <li
              className="text-[2rem] text-p2 font-primary uppercase"
              key={index}
            >
              {item}
            </li>
            {index !== pageProps.roomHighlights.length - 1 && (
              <li className="text-p2">
                <DotIcon />
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
      <GallerySlider {...pageProps?.galleryData} />
      <SlidingTitle titles={pageProps.amenitiesData.items} />
    </main>
  );
};

export default page;
