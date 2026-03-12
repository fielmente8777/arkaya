import Image from "next/image";
import Link from "next/link";
import PopUpFormBtn from "../buttons/PopUpFormBtn";
import Container from "./Container";
import Section from "./Section";

interface FindYouProps {
  src: string;
  title: string;
  links: {
    label: string;
    href: string;
  }[];
  cta: string;
}

const FindYou: React.FC<FindYouProps> = ({ src, title, links, cta }) => {
  return (
    <Section className="bg-white">
      <div className="w-full md:aspect-[4/1.6] aspect-[4/3.5] relative">
        <Image src={src} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <Container className="max-w-xl! md:space-y-12 space-y-10">
            <h2 className="text-2xl md:text-5xl capitalize text-white primary-font max-w-4xl text-center mx-auto">
              {title}
            </h2>
            <div className="relative w-full md:aspect-[4/.12] aspect-[4/.2]  z-10">
              <Image src="/find-you.png" alt="alt" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <ul className="flex flex-col items-center gap-2">
              {links.map((link, index) => (
                <li key={index} className="md:text-lg text-white">
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <PopUpFormBtn cta={cta} />
          </Container>
        </div>
      </div>
    </Section>
  );
};

export default FindYou;
