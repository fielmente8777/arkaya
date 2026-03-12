import Banner from "@/components/Banner/Banner";
import { galleryPageData } from "./Components/PageData";
import Grid from "./Components/Grid";

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
