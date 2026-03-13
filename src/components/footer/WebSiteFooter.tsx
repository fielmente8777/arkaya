import Image from "next/image";
import Link from "next/link";
import { Container } from "../sectionComponants";
import { websiteFooterData } from "./footerdata";

const WebSiteFooter = () => {
  return (
    <footer className="max_screen_width bg-background">
      <Container>
        <div className="grid md:py-14 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-[.8fr_.6fr_.6fr_1.2fr] gap-10 ">
          <div className=" flex flex-col max-sm:items-center gap-6">
            <Link
              href="/"
              className={`relative 
                  w-[18rem] aspect-square md:max-w-38 block`}
            >
              <Image
                src={websiteFooterData.logo}
                alt="logo"
                fill
                sizes="100%"
                className="object-contain"
              />
            </Link>
            <ul className="flex items-center gap-4">
              {websiteFooterData.socialMedia.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 aspect-square bg-white text-p1 flex items-center justify-center rounded-xs hover:text-white hover:bg-p1 transition-colors duration-300 ease-in-out"
                  >
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {websiteFooterData.lists.map((list, index) => (
            <div className={`flex flex-col gap-4`} key={index}>
              <h2
                className="text-[2rem] text-p2 font-primary uppercase"
                dangerouslySetInnerHTML={{ __html: list.title ?? "" }}
              />
              <ul className={`flex gap-3 flex-col`}>
                {list.links.map((item, suIndex) => (
                  <li key={suIndex}>
                    {item.href ? (
                      <Link
                        target={
                          item.href.includes("https") ? "_blank" : "_self"
                        }
                        rel="noopener noreferrer"
                        href={item.href}
                        className={`flex gap-2 text-p2 md:text-lg ${index !== 2 ? "capitalize" : ""}`}
                      >
                        {item.icon && (
                          <span className="text-xl">
                            {item.icon}
                            <span className="sr-only">{item.label}</span>
                          </span>
                        )}
                        <span>{item.label}</span>
                      </Link>
                    ) : (
                      <span className="text-p2 text-base">{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
      <div className="bg-p1">
        <Container className="py-4 flex max-md:flex-col items-center gap-3.5 justify-center">
          <div className="md:flex max-md:space-x-2 text-center flex-wrap items-center justify-center gap-2 text-white">
            {" "}
            <span className="text-white">
              © {new Date().getFullYear()} Arkaya,
            </span>
            <span className="md:block hidden">|</span>
            <span className="text-white"> All Rights Reserved</span>
            <span className="md:block hidden">|</span>
          </div>
          <p className="text-white text-sm">
            Develop by{" "}
            <Link
              href="https://www.fielmente.com/"
              className="font-bold"
              target="_blank"
            >
              Fielmente
            </Link>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default WebSiteFooter;
