import { Section } from "@/components/sectionComponants";
import Adventure from "./Components/Adventure";
import Experience from "./Components/Experience";
import HomeAbout from "./Components/HomeAbout";
import { homePageData } from "./Components/PageData";
import Testimonials from "./Components/Testimonials";
import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";

export default function HomePage() {
  return (
    <main>
      <HomeAbout {...homePageData.aboutData} />
      <Section>
        <div className="w-full relative aspect-4/2.25">
          <Image
            src={homePageData.discoveryData.image}
            alt="Image"
            fill
            className="object-cover"
          />
        </div>
        <LinkButton
          href={homePageData.discoveryData.link.href}
          label={homePageData.discoveryData.link.label}
          className="mx-auto mt-10"
        />
      </Section>
      <Experience {...homePageData.experienceData} />
      <Adventure {...homePageData.adventureData} />
      <Testimonials {...homePageData.testimonialData} />
    </main>
  );
}
