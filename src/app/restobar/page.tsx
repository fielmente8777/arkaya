import LinkButton from "@/components/buttons/LinkButton";
import { Section } from "@/components/sectionComponants";
import { restobarPageData } from "./Components/PageData";
import Image from "next/image";
import Dining from "./Components/Dining";

export default function RestobarPage() {
  return (
    <main>
      <Section defaultPadding={false} className="w-full relative aspect-4/2.25">
        <Image
          src={restobarPageData.bannerData.images[0]}
          alt="Image"
          fill
          className="object-cover"
        />
        <LinkButton
          href={restobarPageData.bannerData.actions[0].href}
          label={restobarPageData.bannerData.actions[0].label}
          className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-[80%] text-p2! bg-white!"
        />
      </Section>
      <Dining {...restobarPageData.contentData} />
    </main>
  );
}
