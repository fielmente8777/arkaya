import { Section, SectionWithContainer } from "@/components/sectionComponants";
import Adventure from "./Components/Adventure";
import Experience from "./Components/Experience";
import HomeAbout from "./Components/HomeAbout";
import { homePageData } from "./Components/PageData";
import Testimonials from "./Components/Testimonials";
import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";
import Form2 from "@/components/forms/Form2";

export default function HomePage() {
  return (
    <main className="bg-background">
      <SectionWithContainer defaultPadding={false} sectionClassName="md:py-12 py-8">
        <div className="relative w-full md:aspect-4/2 aspect-square">
        <Image src='/home-banner.png' alt="bnr" fill className="object-cover" />
        </div>
        <Form2 />
      </SectionWithContainer>
      <HomeAbout {...homePageData.aboutData} />
      <Section>
        <div className="w-full relative md:aspect-4/2.25 aspect-4/2.5">
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
