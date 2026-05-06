import Link from "next/link";
import { Container } from "../sectionComponants";
import Image from "next/image";
import { footerData } from "./footerdata";
import LazyLoadedMap from "../map/LazyLoadedMap";
import LinkButton from "../buttons/LinkButton";
import { contact } from "@/utils/constent";

const LandingFooter = ({ data = footerData }: any) => {
  return (
    <footer className="max_screen_width bg-p4">
      <Container>
        <div className="grid md:py-14 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
          <div className=" flex flex-col gap-6 md:max-w-[218px] w-full">
            <div
              className={`relative 
                  w-full aspect-4/2 md:aspect-square `}
            >
              <Image
                src={footerData.logo}
                alt="logo"
                fill
                sizes="100%"
                className="object-contain"
              />
            </div>

            <LinkButton
              href={footerData.cta.href}
              label={footerData.cta.label}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center text-white uppercase rounded-full max-md:mx-auto"
            />
          </div>

          {footerData.lists.map((list, index) => (
            <div
              className={`${index === 1 ? "lg:w-fit lg:ml-auto" : ""} flex flex-col gap-4 md:gap-6`}
              key={index}
            >
              <h2 className="md:text-3xl text-p2 font-eb  text-3xl font-primary uppercase">
                {list.title}
              </h2>

              <ul className={`flex flex-col md:gap-2 gap-4`}>
                {list.links.map((item, suIndex) => (
                  <li
                    className={`flex gap-2 ${suIndex === 1 ? "flex-wrap" : ""}`}
                    key={suIndex}
                  >
                    <span
                      className={`mt-1 ${
                        index === 1
                          ? "text-p2 flex items-center justify-center rounded-sm bg-white w-10 aspect-square"
                          : "text-p2 inline-block"
                      }`}
                    >
                      {item.icon}
                      <span className="sr-only">{item.label}</span>
                    </span>

                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.href}
                      className="flex gap-2"
                    >
                      <span
                        className={`${
                          index === 1
                            ? "text-p2 font-mont text-2xl my-auto"
                            : "md:text-lg text-p2 inline-block"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                    {item.label2 && <span className="text-p2 -ml-1">,</span>}
                    {item.label2 && item.href2 && (
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.href2}
                        className="flex gap-2 max-md:ml-0"
                      >
                        <span
                          className={`${
                            index === 1
                              ? "text-p2 font-aboreto text-2xl my-auto"
                              : "md:text-lg text-p2"
                          }`}
                        >
                          {item.label2}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="w-full md:rounded-lg rounded-md overflow-hidden max-md:aspect-4/3">
            <LazyLoadedMap src={contact.mapUrl} />
          </div>
        </div>
      </Container>
      <div className="bg-p2 h-[0.5px] w-full max_width" />
      <Container className="py-4 flex max-md:flex-col items-center gap-3.5 justify-between">
        <div className="md:flex max-md:space-x-2 text-center flex-wrap items-center justify-center gap-2 text-p2 md:text-lg">
          {" "}
          <span className="text-p2">© {new Date().getFullYear()} Arkaya</span>
          <span className="md:block hidden">|</span>
          <span className="text-p2">All Rights Reserved</span>
        </div>
        <p className="text-p2!">
          Powered by{" "}
          <Link
            href="https://www.fielmente.com/"
            className="font-bold"
            target="_blank"
          >
            Fielmente
          </Link>
        </p>
      </Container>
    </footer>
  );
};

export default LandingFooter;
