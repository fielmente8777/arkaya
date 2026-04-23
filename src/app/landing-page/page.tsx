import Banner2 from "@/components/Banner/Banner2";
import Form2 from "@/components/forms/Form2";
import { SectionWithContainer } from "@/components/sectionComponants";
import Adventure from "../(home)/Components/Adventure";
import Experience from "../(home)/Components/Experience";
import GuestExperiences from "./components/GuestExperiences";
import { landingPageData } from "./components/pageData";
import StayExperience from "./components/StayExperience";
import RoomsSection from "./components/RoomsSection";

export default function LandingPage() {
  return (
    <main>
      <Banner2 {...landingPageData.banner} />
      <SectionWithContainer containerClassName="border border-[#3A3939]">
        <Form2 />
      </SectionWithContainer>
      <StayExperience {...landingPageData.introduction} />
      <RoomsSection {...landingPageData.luxurySection} />
      <section className="bg-[#FFF9F0] box-shadow max_screen_width">
        <Experience {...landingPageData.experienceSection} />
      </section>
      <Adventure {...landingPageData.activitySection} />
      <GuestExperiences {...landingPageData.testimonialSection} />
      <SectionWithContainer containerClassName="border border-[#3A3939]">
        <Form2 />
      </SectionWithContainer>
    </main>
  );
}
