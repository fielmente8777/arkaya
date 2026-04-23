import { contact } from "@/utils/constent";
import { ClockIcon, EasySccess, GuidedWalk, NatureTrail, PeakThrills, Sunrise } from "@/utils/PageIcons";

export const nearbyPageData = {
  bannerData: {
    title: "EXPLORE <br/>NEARBY EXPERIENCES",
    description: ["Discover the Himalayan Neighborhood"],
    images: ["/nearby/bnr.png"],
    actions: [
      {
        label: "View on Map",
        href: "https://maps.app.goo.gl/UNE7MTPTh84gEPhW7",
      },
      {
        label: "Plan Your Stay",
        href: "#",
        openPopUpForm: true,
      },
    ],
  },

  experiencesData: {
    items: [
      {
        category: "SPIRITUAL EXPERIENCE",
        title: "Mukteshwar Temple",
        description:
          "The 350-year-old Mukteshwar Temple, dedicated to Shiva, sits atop a hill with stunning views of Nanda Devi. The temple houses a white marble Shiva Linga with a copper yoni and idols of Vishnu and Brahma.",
        details: [
          { title: "10 mins drive", icon: <ClockIcon /> },
          { title: "Easy access", icon: <EasySccess /> },
          { title: "Best at sunrise", icon: <Sunrise /> },
        ],
        image: "/nearby/mukteshwar-temple.png",
      },
      {
        category: "ROCK CLIMBING",
        title: "Chauli Ki Jali",
        description:
          "Chauli Ki Jali, near Mukteshwar Dham in Mukteshwar, is a striking cliffside rock formation known for sweeping views of the Kumaon valley and the Himalayan ranges. Linked to legends of Shiva, it offers short treks, stunning sunsets, and a peaceful connection with nature.",
        details: [
          { title: "30 min trek", icon: <ClockIcon /> },
          { title: "Nature trail", icon: <NatureTrail /> },
          { title: "Peak thrills", icon: <PeakThrills /> },
        ],
        image: "/nearby/chauli-ki-jali.png",
      },
      {
        category: "Hidden forest waterfall",
        title: "Bhalugaad Waterfall",
        description:
          "Mukteshwar is home to several beautiful waterfalls tucked within forests and rocky landscapes, where clear pools invite a refreshing swim. Popular ones include Tarikhet Waterfall, Bhalu Ghaad Waterfall, Dhokaney Waterfall, and Rudradhari Waterfall.",
        details: [
          { title: "30 min trek", icon: <ClockIcon /> },
          { title: "Nature trail", icon: <NatureTrail /> },
          { title: "1-2 hrs guided walk", icon: <GuidedWalk /> },
        ],
        image: "/nearby/bhalugaad-waterfall.png",
      },
      {
        category: "SPIRITUAL",
        title: "Kainchi Dham",
        description:
          "Kainchi Dham, dedicated to Neem Karoli Baba, is a revered spiritual site near Nainital, known for its peaceful surroundings and global following.Arkaya Mukteshwar is conveniently located nearby and offers shuttle service to the temple along with breakfast for a comfortable visit.",
        details: [
          { title: "30 min trek", icon: <ClockIcon /> },
          { title: "Nature trail", icon: <NatureTrail /> },
          { title: "1-2 hrs guided walk", icon: <GuidedWalk /> },
        ],
        image: "/nearby/kainchi-dham.png",
      },
      {
        category: "Hidden forest waterfall",
        title: "Bhimtal",
        description:
          "Bhimtal is a scenic lake town known for its boating experiences and thrilling paragliding, offering stunning views of the surrounding hills.",
        details: [
          { title: "30 min trek", icon: <ClockIcon /> },
          { title: "Nature trail", icon: <NatureTrail /> },
          { title: "1-2 hrs guided walk", icon: <GuidedWalk /> },
        ],
        image: "/nearby/bhimtal.png",
      },
      {
        category: "VIEW",
        title: "Sitla",
        description:
          "Mukteshwar is known for its breathtaking Himalayan panoramas that once captivated Jim Corbett. Witnessing the sunrise over Nanda Devi is a must, while nearby Sitla offers views of snow-capped peaks like Panchachuli and Trishul.",
        details: [
          { title: "30 min trek", icon: <ClockIcon /> },
          { title: "Nature trail", icon: <NatureTrail /> },
          { title: "1-2 hrs guided walk", icon: <GuidedWalk /> },
        ],
        image: "/nearby/sitla.png",
      },
      {
        category: "WALK",
        title: "local village walk",
        description:
          "Mukteshwar offers peaceful village walks through nearby Kumaon hamlets, where traditional homes, terraced farms, and orchards reflect the simple rhythm of Himalayan life in Uttarakhand.",
        details: [
          { title: "30 min trek", icon: <ClockIcon /> },
          { title: "Nature trail", icon: <NatureTrail /> },
          { title: "1-2 hrs guided walk", icon: <GuidedWalk /> },
        ],
        image: "/nearby/local-village-walk.png",
      },
      {
        category: "SHOP",
        title: "Kilmora shop stop",
        description:
          "Kilmora Shop is a charming stop for local shopping, offering handcrafted Kumaoni garments, shawls, accessories, and aromatic spices made by artisans from the Kumaon region.",
        details: [
          { title: "30 min trek", icon: <ClockIcon /> },
          { title: "Nature trail", icon: <NatureTrail /> },
          { title: "1-2 hrs guided walk", icon: <GuidedWalk /> },
        ],
        image: "/nearby/kilmora-shop-stop.png",
      },
    ],
  },

  mapData: {
    title: "Mukteshwar. Explore On The Map",
    mapPlaceholder: contact.mapUrl,
  },
};
