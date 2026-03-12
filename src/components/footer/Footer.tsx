"use client";
import { usePathname } from "next/navigation";
import LandingFooter from "./LandingFooter";
import WebSiteFooter from "./WebSiteFooter";

const Footer = () => {
  const pathName = usePathname();
  switch (pathName) {
    case "/thank-you/":
      return null;
    case "/landing-page/":
      return <LandingFooter />;
    default:
      return <WebSiteFooter />;
  }
};

export default Footer;
