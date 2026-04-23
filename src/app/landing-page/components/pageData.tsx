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
      "Set high among the whispering forests of Mukteshwar, Arkaya unfolds with the grace of mountain light. Named after Arka, the sun, our retreat moves in harmony with dawn’s first glow and the lingering gold of evening.",
      "Stay in residences inspired by the sacred peaks of Nandakot, Nanda Devi, Trishul, and Panchachuli. Stroll through Bugyal, our orchard garden of apple, plum, peach, persimmon, and walnut. Restore at Buransh Spa, strengthen at Summit Studio, gather with vision at Shikhar Hall, linger in stillness at Himadri Lounge, and dine suspended above the horizon at 180°.",
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
        subtitle: "1 Room | Twin / Double Bed | Garden + Oakwood Deck Access",
        description:
          "A versatile and intimate space featuring two single beds that can be combined into a double. The garden and the Oakwood Deck, this room is ideal for guests who enjoy easy outdoor access and a relaxed setting.",
        commmonAmenities: [
          { label: "Early Check-in *", icon: <EarlyCheckInIcon /> },
          {
            label: "Complimentary Breakfast",
            icon: <ComplimentaryBreakfastIcon />,
          },
        ],
        amenities: [
          { label: "Free & Fast Wi-Fi", icon: <FreeWiFiIcon /> },
          { label: "Housekeeping", icon: <BathTubIcon /> },
          { label: "Himalayan View", icon: <HimalayanViewIcon /> },
          { label: "Lounge", icon: <LoungeIcon /> },
        ],
        cta: { label: "Book Now", href: contact.WhatsappCta },
      },
      {
        images: [
          "/rooms/himalayan-panorama/himalayan-panorama-2.jpeg",
          "/rooms/himalayan-panorama/himalayan-panorama-3.jpeg",
          "/rooms/himalayan-panorama/himalayan-panorama-4.jpeg",
          "/rooms/himalayan-panorama/himalayan-panorama-5.jpeg",
          "/rooms/himalayan-panorama/himalayan-panorama-6.jpeg",
          
        ],
        title: "Himalayan Panorama Room",
        subtitle: "5 Rooms | King Bed | Garden Access",
        description:
          "Designed for quiet comfort, these rooms feature king size beds and open into garden spaces. A perfect blend of indoor warmth and outdoor freshness.",
        commmonAmenities: [
          { label: "Early Check-in *", icon: <EarlyCheckInIcon /> },
          {
            label: "Complimentary Breakfast",
            icon: <ComplimentaryBreakfastIcon />,
          },
        ],
        amenities: [
          { label: "Free & Fast Wi-Fi", icon: <FreeWiFiIcon /> },
          { label: "Housekeeping", icon: <BathTubIcon /> },
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
        subtitle: "14 Rooms | King Bed | Private Himalayan Balcony",
        description:
          "Wake up to expansive Himalayan views from your own private balcony. These rooms are ideal for guests who want a personal outdoor space to soak in the landscape.",
        commmonAmenities: [
          { label: "Early Check-in *", icon: <EarlyCheckInIcon /> },
          {
            label: "Complimentary Breakfast",
            icon: <ComplimentaryBreakfastIcon />,
          },
        ],
        amenities: [
          { label: "Free & Fast Wi-Fi", icon: <FreeWiFiIcon /> },
          { label: "Housekeeping", icon: <BathTubIcon /> },
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
        subtitle: "2 Rooms | King Bed | Expansive Private Deck",
        description:
          "A more elevated experience, these rooms open onto large private decks facing the Himalayas—perfect for slow mornings, sunset views, and complete privacy.",
        commmonAmenities: [
          { label: "Early Check-in *", icon: <EarlyCheckInIcon /> },
          {
            label: "Complimentary Breakfast",
            icon: <ComplimentaryBreakfastIcon />,
          },
        ],
        amenities: [
          { label: "Free & Fast Wi-Fi", icon: <FreeWiFiIcon /> },
          { label: "Housekeeping", icon: <BathTubIcon /> },
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
        subtitle: "2 Suites | King Bed | Dry Kitchenette | Monal Deck",
        description:
          "Our signature suites are designed for extended comfort, featuring a king bed, a dry kitchenette, and a private Himalaya-facing Monal Deck. Ideal for guests seeking space, privacy, and a more refined stay experience.",
        commmonAmenities: [
          { label: "Early Check-in *", icon: <EarlyCheckInIcon /> },
          {
            label: "Complimentary Breakfast",
            icon: <ComplimentaryBreakfastIcon />,
          },
        ],
        amenities: [
          { label: "Free & Fast Wi-Fi", icon: <FreeWiFiIcon /> },
          { label: "Housekeeping", icon: <BathTubIcon /> },
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
        title: "Arkaya Signature Suite – Family Villa",
        subtitle:
          "1 Villa | One Bedroom | Living Room | Private Himalayan Deck",
        description:
          "A spacious family villa offering a separate bedroom and living room, along with a private deck facing the Himalayas. Perfect for families or longer stays that require both comfort and space.",
        commmonAmenities: [
          { label: "Early Check-in *", icon: <EarlyCheckInIcon /> },
          {
            label: "Complimentary Breakfast",
            icon: <ComplimentaryBreakfastIcon />,
          },
        ],
        amenities: [
          { label: "Free & Fast Wi-Fi", icon: <FreeWiFiIcon /> },
          { label: "Housekeeping", icon: <BathTubIcon /> },
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
    description: homePageData.adventureData.description,
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
