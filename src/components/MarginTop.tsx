"use client";
import { usePathname } from "next/navigation";

const MarginTop = () => {
  const pathName = usePathname();
  const path = ["/", "/thank-you/", "/landing-page/"];
  if (path.includes(pathName)) {
    return null;
  }
  return <div className="mt-16" />;
};

export default MarginTop;
