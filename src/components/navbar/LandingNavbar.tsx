import { useWeather } from "@/hooks/useWeather";
import { useEffect, useRef, useState } from "react";
import { navUpper } from "./navData";
import { Container } from "../sectionComponants";
import Link from "next/link";
import Image from "next/image";
import { TemIcon } from "./WebSiteNavbar";

const LandingNavbar = () => {
  const { temp } = useWeather({ altitude: navUpper.temperature });
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const lastScrollY = useRef(0);

  // ✅ Detect screen size (below lg)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    const handleResize = () => {
      setIsMobileOrTablet(mediaQuery.matches);
    };

    handleResize(); // initial check
    mediaQuery.addEventListener("change", handleResize);

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobileOrTablet) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY.current) < 10) return;

      if (currentScrollY < 50) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileOrTablet]);

  return (
    <>
      {/* HEADER */}
      <header
        className={`max_screen_width bg-background max-md:border-b-[0.5px] border-p5 
        ${
          isMobileOrTablet
            ? `fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
                showNavbar ? "translate-y-0" : "-translate-y-full"
              }`
            : "relative"
        }`}
      >
        {/* upper nav */}
        <Container className="flex items-center justify-between py-4">
          <Link
            href={navUpper.link.href}
            className="lg:flex items-center gap-2 text-lg text-p2 hidden"
          >
            <span className="sr-only">Location</span>
            <span>{navUpper.link.icon}</span>
            {navUpper.link.name}
          </Link>

          <Link
            href="/"
            className="block md:mr-80 md:w-32 w-18 aspect-4/3 relative"
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
            {temp?.toFixed(2)}°C
          </span>
        </Container>
      </header>
      {/* spacing ONLY for mobile/tablet */}
      {isMobileOrTablet && <div className="pt-[80px] md:pt-[100px]" />}
    </>
  );
};

export default LandingNavbar;
