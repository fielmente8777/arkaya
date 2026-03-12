import { contact } from "@/utils/constent";
import { FillLocationIcon } from "../../utils/icons";
export const navUpper = {
  logo: "/arkaya-logo.png",
  link: {
    name: "Mukteshwar, Uttarkhand",
    href: contact.addressLink,
    icon: <FillLocationIcon />,
  },
  temperature: "29.3966478536649, 79.64959122883585",
};

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us/" },
  { name: "Accommodation", href: "/rooms/" },
  { name: "Meeting & Events", href: "/meetings-and-events/" },
  { name: "Pet Welcoming", href: "/pet-welcoming/" },
  { name: "180° Restobar", href: "/restobar/" },
  { name: "Contact Us", href: "/contact-us/" },
];
