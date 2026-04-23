import { contact } from "@/utils/constent";
import {
  Facebook,
  FillCallIcon,
  FillLocationIcon,
  FillMailIcon,
  Instagram,
  LinkedIn,
} from "@/utils/icons";
import { JSX } from "react";

interface WebsiteFooterData {
  logo: string;
  socialMedia: {
    label: string;
    href: string;
    icon: JSX.Element;
  }[];
  lists: {
    title?: string;
    subtitle?: string;
    links: {
      title?: string;
      icon?: React.ReactNode;
      label: string;
      href?: string;
      label2?: string;
      href2?: string;
    }[];
  }[];
}

interface FooterData {
  logo: string;
  cta: {
    label: string;
    href: string;
  };
  lists: {
    title?: string;
    links: {
      title?: string;
      icon: React.ReactNode;
      label: string;
      href: string;
      label2?: string;
      href2?: string;
    }[];
  }[];
}

export const websiteFooterData: WebsiteFooterData = {
  logo: "/arkaya-logo.png",
  socialMedia: [
    {
      label: "Facebook",
      href: contact.socialMedia.facebook,
      icon: <Facebook />,
    },
    {
      label: "linkedIn",
      href: contact.socialMedia.linkedin,
      icon: <LinkedIn />,
    },
    {
      label: "instagram",
      href: contact.socialMedia.instagram,
      icon: <Instagram />,
    },
  ],
  lists: [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about-us/" },
        { label: "Rooms", href: "/rooms/" },
        { label: "Gallery", href: "/gallery/" },

        { label: "Contact Us", href: "/contact-us/" },
      ],
    },
    {
      title: "Explore",
      links: [
        { label: "180° Restobar", href: "/restobar/" },
        { label: "Meeting & Events", href: "/meetings-and-events/" },
        { label: "Pet Welcoming", href: "/pet-welcoming/" },
        { label: "Nearby Places", href: "/nearby-places/" },
      ],
    },
    // {
    //   title: "Policies",
    //   links: [
    //     // { label: "check in Policy", href: "/check-in-policy" },
    //     { label: "Privacy Policy", href: "/privacy-policy" },
    //     // { label: "Terms & Conditions", href: "/terms-and-conditions" },
    //   ],
    // },
    {
      title: "Contact Us",
      links: [
        {
          label: contact.address,
          href: contact.addressLink,
          icon: <FillLocationIcon />,
        },
        {
          label: "Call: " + contact.phone[0],
          href: `tel:${contact.phone[0]}`,
          icon: <FillCallIcon />,
        },
        {
          label: "Email: " + contact.email,
          href: "mailto:" + contact.email,
          icon: <FillMailIcon />,
        },
      ],
    },
  ],
};

export const footerData: FooterData = {
  logo: "/arkaya-logo.png",
  cta: {
    label: "Book Now",
    href: contact.WhatsappCta,
  },
  lists: [
    {
      title: "Contact us",
      links: [
        {
          icon: <FillLocationIcon />,
          label: contact.address,
          href: contact.addressLink,
        },
        {
          title: "Call: ",
          icon: <FillCallIcon />,
          label: contact.phone[0],
          href: "tel:" + contact.phone[0],
          label2: contact.phone[1],
          href2: "tel:" + contact.phone[1],
        },

        {
          title: "Email: ",
          icon: <FillMailIcon />,
          label: contact.email,
          href: "mailto:" + contact.email,
        },
      ],
    },
  ],
};
