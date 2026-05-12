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
        text: "Arkaya Mukteshwar is easily one of the most serene luxury escapes I’ve experienced. Waking up to uninterrupted views of the snow-capped Himalayas from our room in Nanda Devi block felt surreal. Morning meditation at Brahmkamal deck was deeply grounding, and evenings at Oakwood deck with curated mocktails were just perfect. The attention to detail across the property is exceptional.",
        name: "Ananya Kapoor, New Delhi",
      },
      {
        text: "The property is beautifully spread out, giving each residential block its own character. We stayed in Trishul and loved the privacy. The Himadri Lounge quickly became our favorite spot—with its thoughtful library and stunning valley views. Kudos to Mr. Ramesh Mehta and his team for impeccable hospitality.",
        name: "Rohit Bansal, Gurugram",
      },
      {
        text: "A rare combination of luxury and soul. The Phool Dei deck, surrounded by flowers, was where we spent our afternoons soaking in the sun. The food at 180° Restobar was outstanding—especially the Kumaoni dishes curated by Chef Mahesh. Every meal felt like a culinary experience.",
        name: "Shreya Sen, Kolkata",
      },
      {
        text: "Arkaya is not just a stay, it’s an experience. The altitude, the silence, the views—it all comes together beautifully. Our suite had access to the Monal deck, which made the stay feel incredibly exclusive. Perfect for anyone looking to disconnect in style.",
        name: "Karan Malhotra, Mumbai",
      },
      {
        text: "I was impressed by how seamlessly luxury meets spirituality here. The in-house mandir adds a calming presence, and the morning sessions at Brahmkamal deck were truly rejuvenating. Temperature-controlled rooms ensured absolute comfort despite the altitude.",
        name: "Dr. Nidhi Arora, Chandigarh",
      },
      {
        text: "The layout of Arkaya Mukteshwar is brilliant—25 rooms across distinct blocks give it a boutique yet expansive feel. The valley-facing design of every space, including the Himadri Lounge, ensures you’re always connected to the breathtaking landscape.",
        name: "Vikram Singh, Jaipur",
      },
      {
        text: "What stood out for me was the thoughtful curation of spaces—the Oakwood deck for evenings, Phool Dei for daytime relaxation, and Monal deck for private moments. Each space has its own mood. The service team was warm, intuitive, and highly professional.",
        name: "Ritika Shah, Ahmedabad",
      },
      {
        text: "The 180° Restobar is a highlight in itself. From global cuisine to authentic Kumaoni flavors, everything was executed beautifully. Pair that with handcrafted mocktails and a Himalayan sunset—simply unforgettable.",
        name: "Aditya Mehra, Bangalore",
      },
      {
        text: "Our stay in Panchachuli block was peaceful and luxurious. The architecture blends perfectly with the natural surroundings. Even indoors, the panoramic Himalayan views remain the star. It’s rare to find a place that feels this exclusive yet so connected to nature.",
        name: "Pooja Khanna, Lucknow",
      },
      {
        text: "Arkaya Mukteshwar delivers understated luxury at its finest. No overcrowding, no noise—just pristine views, elegant spaces, and exceptional hospitality. Special mention to GM Ramesh Mehta for ensuring every detail of our stay was flawless.",
        name: "Sandeep Verma, Pune",
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
