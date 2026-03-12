"use client";

import { useWeather } from "@/hooks/useWeather";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "../sectionComponants";
import MobileNavbar from "./MobileNavbar";
import { navLinks, navUpper } from "./navData";

const WebSiteNavbar = () => {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { temp } = useWeather({ altitude: navUpper.temperature });

  return (
    <>
      <header className="max_screen_width bg-background">
        {/* upper nav */}
        <Container className="flex items-center justify-between py-4">
          <Link
            href={navUpper.link.href}
            className="flex items-center gap-2 text-lg text-p2"
          >
            <span className="sr-only">Location</span>
            <span className="">{navUpper.link.icon}</span>
            {navUpper.link.name}
          </Link>
          <Link
            href="/"
            className="block md:mr-50 md:w-32 w-28 aspect-square relative"
          >
            <Image
              src={navUpper.logo}
              alt="logo"
              fill
              className="object-contain"
            />
          </Link>
          <span className="flex items-center gap-2 text-lg text-p2">
            <TemIcon />
            {temp}°C
          </span>
        </Container>
        {/* nav links */}
        <nav className="border-y-[0.5px] border-p5 lg:block hidden">
          <ul className="max_width flex items-center py-3 justify-between">
            {navLinks.map((link, index) => (
              <li key={index} className="md:text-lg text-p5 uppercase">
                <Link
                  href={link.href}
                  className={
                    pathName === link.href ? "font-medium text-p1" : ""
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <MobileNavbar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default WebSiteNavbar;

export const TemIcon = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_297_556)">
      <path
        d="M8.79492 13.4929V7.97754C8.79492 7.54605 8.44516 7.19629 8.01367 7.19629C7.58219 7.19629 7.23242 7.54605 7.23242 7.97754V13.4929C6.32223 13.8146 5.66992 14.6823 5.66992 15.7027C5.66992 16.9971 6.71926 18.0464 8.01367 18.0464C9.30809 18.0464 10.3574 16.9971 10.3574 15.7027C10.3574 14.6823 9.70516 13.8146 8.79492 13.4929Z"
        fill="#3A3939"
      />
      <path
        d="M10.3574 12.5787V2.73438C10.3574 1.44203 9.30602 0.390625 8.01367 0.390625C6.72133 0.390625 5.66992 1.44203 5.66992 2.73438V12.5787C4.70531 13.3038 4.10742 14.4543 4.10742 15.7031C4.10742 17.8571 5.85977 19.6094 8.01367 19.6094C10.1676 19.6094 11.9199 17.8571 11.9199 15.7031C11.9199 14.4543 11.322 13.3038 10.3574 12.5787Z"
        stroke="#3A3939"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.0625 2.26562H2.5"
        stroke="#3A3939"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.0625 4.42578H2.5"
        stroke="#3A3939"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.0625 6.58691H2.5"
        stroke="#3A3939"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.0625 8.74707H2.5"
        stroke="#3A3939"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.0625 10.9072H2.5"
        stroke="#3A3939"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.584 0.390625C12.1525 0.390625 11.8027 0.740391 11.8027 1.17188C11.8027 1.60336 12.1525 1.95312 12.584 1.95312C13.0155 1.95312 13.3652 1.60336 13.3652 1.17188C13.3652 0.740391 13.0155 0.390625 12.584 0.390625Z"
        stroke="#3A3939"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.4993 1.5716C17.1858 1.36535 16.8107 1.24512 16.4074 1.24512C15.3087 1.24512 14.418 2.13582 14.418 3.23457C14.418 4.33332 15.3087 5.22402 16.4074 5.22402C16.8537 5.22402 17.2207 5.07711 17.4993 4.82898"
        stroke="#3A3939"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_297_556">
        <rect width={20} height={20} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
