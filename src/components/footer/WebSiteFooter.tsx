"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "../sectionComponants";
import { websiteFooterData } from "./footerdata";
import { useState } from "react";

const WebSiteFooter = () => {
  // QUICK LINKS open by default
  const [isOpen, setIsOpen] = useState<number | null>(0);

  const dropdownLists = websiteFooterData.lists.slice(0, 2);
  const contactList = websiteFooterData.lists[2];

  return (
    <footer className="max_screen_width bg-background">
      <Container>
        <div className="grid md:py-14 py-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-[.8fr_.6fr_.6fr_1.2fr] md:gap-10 gap-8">
          {/* LOGO */}
          <div className="flex flex-col max-sm:items-center gap-6 max-md:mb-4">
            <Link
              href="/"
              className="relative w-48 aspect-square md:max-w-38 block"
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
                    className="w-11 aspect-square bg-white text-p1 flex items-center justify-center rounded-xs hover:text-white hover:bg-p1 transition-colors duration-300"
                  >
                    <span className="sr-only">{item.label}</span>
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* DROPDOWN LISTS */}
          {dropdownLists.map((list, index) => (
            <div key={index}>
              {/* MOBILE */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsOpen(isOpen === index ? null : index)}
                  className="text-2xl text-p2 font-primary uppercase flex  items-center justify-between w-full"
                >
                  {list.title}

                  <span
                    className={`transition-transform duration-300 as ${
                      isOpen === index ? "rotate-180" : ""
                    }`}
                  >
                    <DropDown />
                  </span>
                </button>

                <ul
                  className={`flex flex-col gap-3 mt-3 ${
                    isOpen === index ? "block" : "hidden"
                  }`}
                >
                  {list.links.map((item, i) => (
                    <li key={i}>
                      {item.href && (
                        <Link
                          href={item.href}
                          className="text-p2 text-lg capitalize"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* DESKTOP */}
              <div className="hidden lg:flex flex-col gap-4">
                <h2 className="text-[2rem] text-p2 font-primary uppercase">
                  {list.title}
                </h2>

                <ul className="flex flex-col gap-3">
                  {list.links?.map((item, i) => (
                    <li key={i}>
                      {item.href && (
                        <Link
                          href={item.href}
                          className="text-p2 md:text-lg capitalize"
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* CONTACT US (ALWAYS VISIBLE) */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl text-p2 font-primary uppercase">
              {contactList.title}
            </h2>

            <ul className="flex flex-col gap-3">
              {contactList.links.map((item, i) => (
                <li key={i}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex gap-2 text-p2 md:text-lg"
                    >
                      <span className="mt-1">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  ) : (
                    <span className="flex gap-2 text-p2">
                      <span className="mt-1">{item.icon}</span>
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* BOTTOM BAR */}
      <div className="bg-p1">
        <Container className="py-4 flex max-md:flex-col items-center gap-3 justify-center">
          <p className="text-white text-center items-center justify-center flex gap-2 flex-wrap">
            <span>© {new Date().getFullYear()} Arkaya</span>
            <span>|</span>
            <span>All Rights Reserved</span>
            <span className="md:block hidden">|</span>

            <span className="text-white ">
              Powered by{" "}
              <Link
                href="https://www.fielmente.com/"
                target="_blank"
                className="font-bold"
              >
                Fielmente
              </Link>
            </span>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default WebSiteFooter;

export const DropDown = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {" "}
    <path d="M12 7L21 16H3L12 7Z" fill="#E94128" />{" "}
  </svg>
);
