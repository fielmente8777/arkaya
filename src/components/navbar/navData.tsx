import { contact } from "@/utils/constent";
import { FillLocationIcon } from "../../utils/icons";
export const navUpper = {
  logo: "/arkaya-logo.png",
  link: {
    name: "Mukteshwar, Uttarkhand",
    href: contact.addressLink,
    icon: <FillLocationIcon />,
  },
  temperature: "29.396657201082572, 79.6496019576717",
};

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us/" },
  { name: "Accommodation", href: "/rooms/" },
  { name: "Meeting & Events", href: "/meetings-and-events/" },
  { name: "Pet Welcoming", href: "/pet-welcoming/" },
  { name: "180° Restobar", href: "/restobar/" },
  { name: "Nearby Places", href: "/nearby-places/" },
  { name: "Contact Us", href: "/contact-us/" },
];
