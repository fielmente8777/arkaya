import Banner from "@/components/Banner/Banner";
import { petWelcomingPageData } from "./Components/PageData";
import WelcomeKit from "./Components/WelcomeKit";
import StaySection from "./Components/StaySection";
import PetDiningMenu from "./Components/PetDiningMenu";
import PetPolicyFaq from "./Components/PetPolicyFaq";

export default function PetWelcomingPage() {
  return (
    <main className="bg-background">
      <Banner
        {...petWelcomingPageData.bannerData}
        contentWrapperClassName="max-w-2xl! w-fit mx-auto"
      />
      <WelcomeKit {...petWelcomingPageData.welcomeKitData} />
      <StaySection {...petWelcomingPageData.staySection} />
      <PetDiningMenu items={petWelcomingPageData.petDiningMenu} />
      <PetPolicyFaq {...petWelcomingPageData.petPolicyFaq} />
    </main>
  );
}
