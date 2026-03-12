import { contact } from "@/utils/constent";
import { FillCallIcon, FillLocationIcon, FillMailIcon } from "@/utils/icons";

export const contactPageData = {
  bannerData: {
    title: "Let’s Plan Your Stay at Arkaya",
    description: [
      "Whether you're reserving a room, dining at 180° Restobar, or planning a celebration — we’re here to assist.",
    ],
    images: ["/contact-banner.png"],
    actions: [
      { label: "Check Availability", href: "#" },
      { label: "Call Now", href: "tel:" + contact.phone[0] },
    ],
  },

  visitData: {
    title: "Visit Us in Mukteshwar",
    links: [
      {
        label: contact.address,
        href: contact.addressLink,
        icon: <FillLocationIcon />,
      },
      {
        label: "Call: " + contact.phone[0],
        href: "tel:" + contact.phone[0],
        icon: <FillCallIcon />,
      },
      {
        label: "Email: " + contact.email,
        href: "mailto:" + contact.email,
        icon: <FillMailIcon />,
      },
    ],
  },

  enquiryForm: {
    title: "Send Us an Enquiry",
    privacyNote: "We respect your privacy. Your information is never shared.",
  },

  reservationsData: {
    title: "Reservations & Enquiries",
    items: [
      "Room Bookings",
      "180° Restobar",
      "Private Events",
      "On site Parking Available",
    ],
  },

  travelInfo: {
    title: "Find Us in Mukteshwar",
    details: [
      "Delhi → Mukteshwar: 7–8 hours",
      "Katgodam Railway Station: 1.5 2 hours",
      "Pantnagar Airport: 2.5 hours",
    ],
    rating: "⭐ 4.8 Rating on Google",
    description: "Loved for serene views & curated hospitality.",
    mapUrl: contact.mapUrl,
  },
};
