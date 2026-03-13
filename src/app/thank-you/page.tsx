import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";

const page = () => {
  return (
    <main className="bg-background h-dvh flex justify-center items-center">
      <SectionWithContainer containerClassName="space-y-6">
        <div className="max-w-[12.5rem] w-full mx-auto relative aspect-4/4">
          <Image
            src="/arkaya-logo.png"
            alt="thank you"
            fill
            className="object-contain"
          />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl text-p1 font-primary uppercase font-semibold md:text-4xl text-center">
            Thank You!
          </h1>
          <p className="md:text-lg text-p2 text-center">
            Your message has been sent.
          </p>
          <LinkButton href="/" label="Back to Home" className="mx-auto" />
        </div>
      </SectionWithContainer>
    </main>
  );
};

export default page;
