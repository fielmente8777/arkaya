"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { websiteFooterData } from "../footer/footerdata";
import { navLinks } from "./navData";
import { usePathname } from "next/navigation";

interface MobileNavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavbar = ({ isOpen, onClose }: MobileNavbarProps) => {
  const pathName = usePathname();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 md:w-90  z-50 transform transition-transform duration-300 ease-in-out border-l-2 border-p1 bg-[#FFF9F0]
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col gap-8 max-md:p-8 pl-16 pr-10 py-4 ">
          {/* Header */}
          <div className="flex gap-4 items-center">
            <IoClose
              size={34}
              className="text-p1 cursor-pointer"
              onClick={onClose}
            />
            {/* <Link href="/" className="relative w-18 aspect-[4/1.45] block">
              <Image
                src="/logo.png"
                alt="logo"
                fill
                className="object-contain"
              />
            </Link> */}
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4 ">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={onClose}
                className={`text-lg  ${
                  pathName === link.href
                    ? "text-p1 font-semibold"
                    : "text-p2 hover:text-p1 transition-colors duration-300 ease-in-out"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <ul className="flex items-center gap-6 w-full">
            {websiteFooterData?.socialMedia?.slice(0).map((link, index) => (
              <li key={index}>
                {link.href && (
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 aspect-square bg-white text-p1 flex items-center justify-center rounded-xs hover:text-white hover:bg-p1 transition-colors duration-300 ease-in-out"
                  >
                    {link.icon}
                    <span className="sr-only">{link.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default MobileNavbar;
