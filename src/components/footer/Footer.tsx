"use client";
import { usePathname } from "next/navigation";
import LandingFooter from "./LandingFooter";
import WebSiteFooter from "./WebSiteFooter";
import { restoFooterData } from "./footerdata";

const Footer = () => {
  const pathName = usePathname();
  switch (pathName) {
    case "/thank-you/":
      return null;
    case "/landing-page/":
      return <LandingFooter />;
    case "/restrobarlandingpage/":
      return <LandingFooter data={restoFooterData}/>;
    default:
      return <WebSiteFooter />;
  }
};

export default Footer;
