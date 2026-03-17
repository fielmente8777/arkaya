import { SectionWithContainer } from "@/components/sectionComponants";
import { policiesPageData } from "./policiesPageData";
import { SectionHeading } from "@/components/typography";

interface Params {
  params: Promise<{ slug: string }>;
}
export async function generateStaticParams() {
  const path = await policiesPageData;

  return path?.map((page) => ({
    slug: page.slug,
    fallback: false,
  }));
}

export async function generateMetadata({ params }: Params) {
  const pages = await params;
  const page = await policiesPageData.find((page) => page.slug === pages.slug);
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
  const pageProps = await policiesPageData.find(
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
      <SectionWithContainer>
        <SectionHeading title={pageProps.title} textCenter line />
        <div
          className="blog-data"
          dangerouslySetInnerHTML={{ __html: pageProps.content }}
        />
      </SectionWithContainer>
    </main>
  );
};

export default page;
