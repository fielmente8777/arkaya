"use client";
import { usePathname } from "next/navigation";
import WebSiteNavbar from "./WebSiteNavbar";

const NavBar = () => {
  const pathName = usePathname();
  switch (pathName) {
    case "/thank-you/":
      return null;
    case "/landing-page/":
      return null;
    default:
      return <WebSiteNavbar />;
  }
}

export default NavBar;