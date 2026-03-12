"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { websiteFooterData } from "../footer/footerdata";

interface MobileNavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/experiences-at-naad/" },
  { label: "Therapies", href: "/therapies/" },
  { label: "Living", href: "/rooms/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Offers", href: "/offers/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Dining & Cuisine", href: "/dining-cuisine/" },
  { label: "Contact Us", href: "/contact-us/" },
  { label: "Media Coverage", href: "/media-coverage/" },
  { label: "Blog", href: "/blog/" },
  { label: "Terms of Stay", href: "/centre-policy/" },
];

const MobileNavbar = ({ isOpen, onClose }: MobileNavbarProps) => {
  const currentYear = new Date().getFullYear();
  // 🔒 Lock body scroll when sidebar open
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
        className={`fixed top-0 left-0 h-full w-80 md:w-90  z-50 transform transition-transform duration-300 ease-in-out bg-[#7c5a50]
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="menu-item flex flex-col gap-8 max-md:p-8 pl-16 pr-10 py-4  overflow-y-auto ">
          {/* Header */}
          <div className="flex gap-4 items-center">
            <IoClose
              size={28}
              className="text-white cursor-pointer"
              onClick={onClose}
            />
            <Link href="/" className="relative w-18 aspect-[4/1.45] block">
              <Image
                src="/logo.png"
                alt="logo"
                fill
                className="object-contain"
              />
            </Link>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6 text-white text-base">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={onClose}
                className="text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <ul className="flex items-center gap-6 w-full">
            {websiteFooterData?.lists[2]?.links?.slice(0).map((link, index) => (
              <li key={index}>
                {link.href && (
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                    <span className="sr-only">{link.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Footer */}
          <p className=" text-white text-sm">
            Copyright © {currentYear} Naad Wellness, Inc. All Rights Reserved.
          </p>
        </div>
      </aside>
    </>
  );
};

export default MobileNavbar;
