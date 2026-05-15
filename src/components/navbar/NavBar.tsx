"use client";
import { usePathname } from "next/navigation";
import WebSiteNavbar from "./WebSiteNavbar";
import LandingNavbar from "./LandingNavbar";

const NavBar = () => {
  const pathName = usePathname();
  switch (pathName) {
    case "/thank-you/":
      return null;
    case "/landing-page/":
      return <LandingNavbar />;
    case "/restobar-landing-page/":
      return null;  
    default:
      return <WebSiteNavbar />;
  }
};

export default NavBar;
