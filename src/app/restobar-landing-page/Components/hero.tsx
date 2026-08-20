import Image from "next/image";
import LinkButton from "@/components/buttons/LinkButton";
import { Section } from "@/components/sectionComponants";
import { restoLandingPageData } from "./PageData";
import { MenuIcon, ReserveIcon } from "@/utils/landingPageIcons";

const Hero = () => {
  const data = restoLandingPageData.heroData;

  return (
    <Section defaultPadding={false} className="relative w-full h-[500px] md:h-[805px]">
      {/* BACKGROUND IMAGE */}
      <Image
        src={data.image}
        alt="hero"
        fill
        priority
        className="object-cover"
      />
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />
      {/* BORDER */}
      <div className="pointer-events-none absolute inset-3 border border-white/40" />

      {/* CONTENT */}
      <div className="absolute inset-0 flex max-sm:justify-center items-center px-4 md:px-[88px] text-white">
        <div className="flex flex-col items-center text-center gap-4 md:gap-6 w-[280px] md:w-[552px] h-[493px] justify-center md:items-start md:text-left md:h-[460px]">
          {/* LOGO */}
          <Image
            src={data.logo}
            alt="180 Restobar"
            width={169}
            height={136}
            className="w-[120px] h-auto md:w-[169px] md:h-[136px]"
          />

          {/* SUBTITLE */}
          <p className="flex items-center gap-2 text-[16px] leading-[22px] md:text-[22px] md:leading-[26px] font-semibold md:w-[387px]">
            {data.subtitle}
          </p>

          {/* TITLE */}
          <h2 className="font-primary uppercase text-[42px] leading-[46px] md:text-[80px] md:leading-[88px] font-normal md:w-[552px]">
            {data.title}
          </h2>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 md:w-[468px]">
            <LinkButton
              href={data.actions[0].href}
              label={data.actions[0].label}
              className="bg-p1 text-white px-4 py-2 flex justify-center max-md:order-2 text-xs rounded-[4px] w-fit sm:w-auto max-md:w-[191px] md:h-[44px] md:px-6 md:py-3 md:text-sm"
              icon={<ReserveIcon />}
            />

            <LinkButton
              href={data.actions[1].href}
              label={data.actions[1].label}
              download={true}
              className="border border-white/60 text-white px-4 flex justify-center py-2 text-xs rounded-[4px] max-md:w-[191px] md:h-[44px] bg-transparent hover:bg-white/10 w-fit sm:w-auto md:px-6 md:py-3 md:text-sm"
              icon={<MenuIcon />}
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
