import { contact } from "@/utils/constent";
import { SpoonIcon } from "@/utils/landingPageIcons";

export const restoLandingPageData = {
  foodData: [
    {
      type: "video",
      src: "/180/arkaya.mp4",
    },
    {
      type: "image",
      src: "/180/food2.jpg",
    },
    {
      type: "image",
      src: "/180/food3.jpg",
    },
    {
      type: "card",
      title: "SIGNATURE OFFERINGS",
      description:
        "Explore a menu that celebrates taste, creativity and the mountains.",
      icon: <SpoonIcon />,
      button: {
        label: "Download Menu",
        href: "/Arkaya Menu.pdf",
      },
    },
  ],
  testimonialData: {
    title: "Guest Experiences",
    image: "/home/testimonial.png",
    testimonials: [
      {
        text: "The moment the sun began setting over the Himalayas, 180° Restobar turned magical. Between the mountain breeze, handcrafted mocktails, and warm lighting, the entire evening felt cinematic. Easily one of the most memorable dining experiences we’ve had in Mukteshwar.",
        name: "Aditi Mehra, Delhi",
      },
      {
        text: "180° Restobar perfectly balances atmosphere and food. The panoramic valley views paired with beautifully curated dishes made us stay far longer than planned. Their Kumaoni-inspired flavours and signature beverages were exceptional.",
        name: "Raghav Khanna, Chandigarh",
      },
      {
        text: "Watching the sky change colours while dining above the mountains was unforgettable. Every detail — from the music to the service — felt thoughtful and elevated. The sunset here is truly the highlight of the experience.",
        name: "Ishita Roy, Kolkata",
      },
      {
        text: "The rooftop setting at 180° Restobar is stunning. We spent the evening enjoying handcrafted drinks, slow conversations, and uninterrupted Himalayan views. It’s the kind of place that makes you pause and stay present.",
        name: "Kunal Arora, Gurugram",
      },
      {
        text: "The vibe at 180° Restobar feels intimate yet luxurious. Beautiful lighting, incredible views, and food that genuinely surprised us. The chef’s attention to presentation and flavours made the experience feel premium throughout.",
        name: "Mehak Sharma, Jaipur",
      },
      {
        text: "From sunset to starlit skies, every hour here feels different and beautiful in its own way. The cocktails, mountain air, and relaxed atmosphere make 180° Restobar one of the finest rooftop dining experiences in Uttarakhand.",
        name: "Aditya Sinha, Mumbai",
      },
    ],
  },

  galleryData: {
    title: "A Glimpse of",
    highlight: "180° RESTROBAR",
    images: [
      "/180/img1.jpg",
      "/180/img2.jpg",
      "/180/img3.jpg",
      "/180/img4.jpg",
      "/180/img5.jpg",
      "/180/img6.jpg",
    ],
    button: {
      label: "Reserve Table",
      href: contact.WhatsappCta,
    },
  },
  natureViewData: {
    title: "SUNSET",
    highlight: "MOMENTS",
    description:
      "Watch the sky transform as your glass fills, this is where evenings become memories.",
    image: "/180/view.jpg",
    button: {
      label: "Reserve Table",
      href: contact.WhatsappCta,
    },
  },
  experienceData: {
    tag: "THE EXPERIENCE",
    title: "WHERE MOMENTS TURN INTO",
    highlight: "MEMORIES.",
    description:
      "More than a restobar, 180° is an elevated sensory escape, where handcrafted cocktails, curated cuisine, and uninterrupted valley views come together.",
    features: [
      { label: "180° Panoramic Views", icon: "view" },
      { label: "Curated Music & Vibe", icon: "music" },
      { label: "Sunset to Starlight", icon: "sunset" },
    ],
    button: {
      label: "Reserve Table",
      href: contact.WhatsappCta,
    },
    images: ["/180/exp1.jpg", "/180/exp2.jpg"],
  },
  heroData: {
    image: "/180/hero.jpg",
    logo: "/180/180new.png",
    title: "DINE ABOVE EVERYTHING",
    subtitle: "Crafted Drinks • Himalayan Views",
    actions: [
      {
        label: "Reserve Table",
        href: contact.WhatsappCta,
        variant: "primary",
      },
      {
        label: "Download Menu",
        href: "/Arkaya Menu.pdf",
        variant: "secondary",
      },
    ],
  },
};
