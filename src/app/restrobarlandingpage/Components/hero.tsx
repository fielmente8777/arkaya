import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";
import { Section } from "@/components/sectionComponants";
import { restoLandingPageData } from "./PageData";
import { MenuIcon, ReserveIcon } from "@/utils/landingPageIcons";

const Hero = () => {
  const data = restoLandingPageData.heroData;

  return (
    <Section defaultPadding={false} className="relative w-full h-[805px]">
      <Image
        src={data.image}
        alt="hero"
        fill
        priority
        className="object-cover"
      />

      <div className="pointer-events-none absolute inset-4 border border-white/40" />

      <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 text-white">
        <Image
          src={data.logo}
          alt="180 Restobar"
          width={169}
          height={136}
          className="mb-4"
        />

        <p className="flex items-center gap-2 mb-4 text-sm opacity-90 max-w-[387px]">
          {data.subtitle}
        </p>

        <h2 className="font-primary uppercase text-[80px] leading-[88px] font-normal mb-6 max-w-[600px]">
          {data.title}
        </h2>

       
        <div className="flex gap-4">
          <LinkButton
            href={data.actions[0].href}
            label={data.actions[0].label}
            className="bg-p1 text-white px-5 py-2"
            icon= {<ReserveIcon />}
          />

          <LinkButton
            href={data.actions[1].href}
            label={data.actions[1].label}
            className="border border-white/60 text-white px-5 py-2 bg-transparent hover:bg-white/10"
            icon={<MenuIcon />}
          />
        </div>
      </div>

     
      <div className="absolute bottom-6 right-6 flex gap-2">
        <button className="bg-white/90 w-8 h-8 rounded-full flex items-center justify-center">
          ‹
        </button>
        <button className="bg-white/90 w-8 h-8 rounded-full flex items-center justify-center">
          ›
        </button>
      </div>
    </Section>
  );
};

export default Hero;
