"use client";
import { usePathname } from "next/navigation";
import LandingFooter from "./LandingFooter";
import WebSiteFooter from "./WebSiteFooter";
import { footerData, restoFooterData } from "./footerdata";

const Footer = () => {
  const pathName = usePathname();
  switch (pathName) {
    case "/thank-you/":
      return null;
    case "/landing-page/":
      return <LandingFooter footerData={footerData} />;
    case "/restobar-landing-page/":
      return <LandingFooter footerData={restoFooterData} />;
    default:
      return <WebSiteFooter />;
  }
};

export default Footer;
