import { homePageData } from "@/app/(home)/Components/PageData";
import {
  BathTubIcon,
  ComplimentaryBreakfastIcon,
  EarlyCheckInIcon,
  FreeWiFiIcon,
  LoungeIcon,
} from "@/utils/amenitiesIcons";
import { contact } from "@/utils/constent";
import { HimalayanViewIcon } from "../../../utils/amenitiesIcons";

export const landingPageData = {
  banner: {
    images: ["/landing-page/bnr-1.png", "/landing-page/bnr-2.png"],
    title: "A Boutique Retreat in the Himalayas!",
  },

  introduction: {
    title: "Not Just a Stay, <br/>It’s An Experience",
    description: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    images: ["/landing-page/intro-1.png", "/landing-page/intro-2.png"],
    cta: { label: "Book Now", href: contact.WhatsappCta },
  },

  luxurySection: {
    title: `
    DISCOVER THE ESSENCE OF <span class='text-p1 inline-flex items-center gap-2'>LUXURY LIVING
    <div class="md:w-16 w-10 aspect-square relative">
                <img
                  src="/logo-2.png"
                  alt="logo"
                  class="object-cover absolute inset-0 w-full h-full"
                />
              </div>
    </span>
    `,
    Cards: [
      {
        images: [
          "/rooms/himalayan-vista/img-4.jpg",
          "/rooms/himalayan-vista/img-3.jpg",
        ],
        title: "Himalayan Vista Room",
        subtitle: "Twin Room with Garden View",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
        commmonAmenities: [
          { label: "Early Check-in *", icon: <EarlyCheckInIcon /> },
          {
            label: "Complimentary Breakfast",
            icon: <ComplimentaryBreakfastIcon />,
          },
        ],
        amenities: [
          { label: "Free & Fast Wi-Fi", icon: <FreeWiFiIcon /> },
          { label: "Bathtub", icon: <BathTubIcon /> },
          { label: "Himalayan View", icon: <HimalayanViewIcon /> },
          { label: "Lounge", icon: <LoungeIcon /> },
        ],
        cta: { label: "Book Now", href: contact.WhatsappCta },
      },
      {
        images: [
          "/rooms/himalayan-vista/img-4.jpg",
          "/rooms/himalayan-vista/img-3.jpg",
        ],
        title: "Himalayan Panorama Room",
        subtitle: "Twin Room with Garden View",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
        commmonAmenities: [
          { label: "Early Check-in *", icon: <EarlyCheckInIcon /> },
          {
            label: "Complimentary Breakfast",
            icon: <ComplimentaryBreakfastIcon />,
          },
        ],
        amenities: [
          { label: "Free & Fast Wi-Fi", icon: <FreeWiFiIcon /> },
          { label: "Bathtub", icon: <BathTubIcon /> },
          { label: "Himalayan View", icon: <HimalayanViewIcon /> },
          { label: "Lounge", icon: <LoungeIcon /> },
        ],
        cta: { label: "Book Now", href: contact.WhatsappCta },
      },
      {
        images: [
          "/rooms/himalayan-vista/img-4.jpg",
          "/rooms/himalayan-vista/img-3.jpg",
        ],
        title: "Panoramic balcony Room",
        subtitle: "Twin Room with Garden View",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
        commmonAmenities: [
          { label: "Early Check-in *", icon: <EarlyCheckInIcon /> },
          {
            label: "Complimentary Breakfast",
            icon: <ComplimentaryBreakfastIcon />,
          },
        ],
        amenities: [
          { label: "Free & Fast Wi-Fi", icon: <FreeWiFiIcon /> },
          { label: "Bathtub", icon: <BathTubIcon /> },
          { label: "Himalayan View", icon: <HimalayanViewIcon /> },
          { label: "Lounge", icon: <LoungeIcon /> },
        ],
        cta: { label: "Book Now", href: contact.WhatsappCta },
      },
      {
        images: [
          "/rooms/himalayan-vista/img-4.jpg",
          "/rooms/himalayan-vista/img-3.jpg",
        ],
        title: "Private deck residence",
        subtitle: "Twin Room with Garden View",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
        commmonAmenities: [
          { label: "Early Check-in *", icon: <EarlyCheckInIcon /> },
          {
            label: "Complimentary Breakfast",
            icon: <ComplimentaryBreakfastIcon />,
          },
        ],
        amenities: [
          { label: "Free & Fast Wi-Fi", icon: <FreeWiFiIcon /> },
          { label: "Bathtub", icon: <BathTubIcon /> },
          { label: "Himalayan View", icon: <HimalayanViewIcon /> },
          { label: "Lounge", icon: <LoungeIcon /> },
        ],
        cta: { label: "Book Now", href: contact.WhatsappCta },
      },
      {
        images: [
          "/rooms/himalayan-vista/img-4.jpg",
          "/rooms/himalayan-vista/img-3.jpg",
        ],
        title: "Arkaya signature suite",
        subtitle: "Twin Room with Garden View",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
        commmonAmenities: [
          { label: "Early Check-in *", icon: <EarlyCheckInIcon /> },
          {
            label: "Complimentary Breakfast",
            icon: <ComplimentaryBreakfastIcon />,
          },
        ],
        amenities: [
          { label: "Free & Fast Wi-Fi", icon: <FreeWiFiIcon /> },
          { label: "Bathtub", icon: <BathTubIcon /> },
          { label: "Himalayan View", icon: <HimalayanViewIcon /> },
          { label: "Lounge", icon: <LoungeIcon /> },
        ],
        cta: { label: "Book Now", href: contact.WhatsappCta },
      },
    ],
  },

  experienceSection: {
    ...homePageData.experienceData,
    cta: {
      label: "Book Now",
      href: contact.WhatsappCta,
    },
  },

  activitySection: {
    title: "Activities",
    items: homePageData.adventureData.items,
    cta: {
      label: "Book Now",
      href: contact.WhatsappCta,
    },
  },

  testimonialSection: {
    title: "Guest Experiences",
    testimonials: homePageData.testimonialData.testimonials,
  },
};
