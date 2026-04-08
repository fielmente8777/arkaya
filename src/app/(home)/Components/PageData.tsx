import {
  BalanceSeclusionAccessibility,
  BoutiqueResidencesWithBespokeDetailing,
  CuratedMountainAndAdventureExperiences,
  ElevatedDiningAt180Restobar,
  PrivatePanoramicHimalayanViews,
  SeamlessAttentiveHospitality,
  StayPet,
} from "@/utils/PageIcons";

export const homePageData = {
  aboutData: {
    title: "A Boutique Retreat in the Himalayas",
    description: [
      "Set high among the whispering forests of Mukteshwar, Arkaya unfolds with the grace of mountain light. Named after Arka, the sun, our retreat moves in harmony with dawn’s first glow and the lingering gold of evening.",
      "Stay in residences inspired by the sacred peaks of Nandakot, Nanda Devi, Trishul, and Panchachuli. Stroll through Bugyal, our orchard garden of apple, plum, peach, persimmon, and walnut. Restore at Buransh Spa, strengthen at Summit Studio, gather with vision at Shikhar Hall, linger in stillness at Himadri Lounge, and dine suspended above the horizon at 180°.",
      "Guided by sustainability and mountain wisdom, Arkaya lives lightly — harnessing solar energy, composting with care, and honoring water as a sacred resource.",
    ],
    ctaSection: {
      title: "Arkaya is not simply a place to stay.",
      description:
        "It is a place to align with the Himalaya. Gently, consciously, and deeply.",
    },
    link: {
      label: "Discover Arkaya",
      href: "/about-us/",
    },
  },

  discoveryData: {
    image: "/home/discovery.png",
    link: {
      label: "Discover 180°",
      href: "/restobar/",
    },
  },

  experienceData: {
    title: "THE ARKAYA EXPERIENCE",
    points: [
      {
        title: "Private panoramic Himalayan views",
        icon: <PrivatePanoramicHimalayanViews />,
      },
      {
        title: "Boutique residences with bespoke detailing",
        icon: <BoutiqueResidencesWithBespokeDetailing />,
      },
      {
        title: "Elevated dining at 180° Restobar",
        icon: <ElevatedDiningAt180Restobar />,
      },
      {
        title: "Curated mountain and adventure experiences",
        icon: <CuratedMountainAndAdventureExperiences />,
      },
      {
        title: "Seamless, attentive hospitality",
        icon: <SeamlessAttentiveHospitality />,
      },
      {
        title: "A rare balance of seclusion and accessibility",
        icon: <BalanceSeclusionAccessibility />,
      },
      { title: "A stay your pet will love too", icon: <StayPet /> },
    ],
  },

  adventureData: {
    title: "ADVENTURE, REFINED",
    items: [
      {
        title: "LOREM IPSUM",
        image: "/home/adventure-1.png",
      },
      {
        title: "LOREM IPSUM",
        image: "/home/adventure-2.png",
      },
      {
        title: "LOREM IPSUM",
        image: "/home/adventure-3.png",
      },
    ],
  },

  testimonialData: {
    title: "Guest Experiences",
    image: "/testimonial.png",
    testimonials: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        name: "Lorem Ipsum",
      },
    ],
  },
};
