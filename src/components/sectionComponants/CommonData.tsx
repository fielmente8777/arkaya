import { contact } from "@/utils/constent";

export const CommonData = {
  pillarsSection: {
    title: "Four Pillars. One Balanced Life.",
    src: "/home-page/Four-Pillars.png",
    pillars: [
      {
        title: "Chikitsa",
        subtitle: "Deep Care & Nourishment",
        description:
          "Ayurvedic and natural therapies that relieve stress and restore energy.",
        cta: "Read more",
        src: "/home-page/Chikitsa.png",
        popUpData: {
          title: "Posana (Healing and Nourishment)",
          description:
            "True care means tending to every part of you. Naad offers Ayurvedic and natural therapies that relieve stress and restore energy. Experience warm pools, the himalayan salt cave and beautifully designed therapy rooms that bring comfort and renewal in every moment. Each session is guided by skilled therapists who support recovery, ease tension and help your body remember its natural state of balance and strength",
        },
      },
      {
        title: "Ahara",
        subtitle: "Food as Medicine",
        description:
          "Wholesome meals prepared to match your body, needs, and goals.",
        cta: "Read more",
        src: "/home-page/Ahara.png",
        popUpData: {
          title: "Ahara (Wellness Cuisine)",
          description:
            "Food should nourish, comfort and heal. Every meal at Naad is prepared to suit your body, your needs and your goals. Our chefs and wellness experts create dishes that are fresh, natural and deeply satisfying, helping you feel lighter, stronger and more balanced from within. Meals are personalized for your health journey and crafted to support long term wellbeing, while still delighting every bite.",
        },
      },
      {
        title: "Yoga and Meditation",
        subtitle: "Movement. Breath. Stillness.",
        description:
          "Peaceful spaces to stretch, breathe, and reconnect with yourself indoors and outdoors.",
        cta: "Read more",
        src: "/home-page/Yoga-and-Meditation.png",
        popUpData: {
          title: "Yoga and Meditation",
          description:
            "Movement is medicine and stillness is too. Naad offers peaceful spaces to stretch, breathe and reconnect with yourself, both indoors and outdoors. With experienced instructors and sessions designed around you, choose private or group practices that support your physical strength, mental clarity and emotional balance. These practices help you carry calm and focus long after your stay.",
        },
      },
      {
        title: "Nidra",
        subtitle: "Rest That Restores",
        description:
          "Relaxing stays designed to make your nights restful and your days meaningful.",
        cta: "Read more",
        src: "/home-page/Nidra.png",
        popUpData: {
          title: "Nidra (Rest and Sleep)",
          description:
            "Sleep is where healing begins. At Naad, we make sure your nights are as restful as your days are meaningful. From soothing meals and thoughtful room comforts to therapies designed to help you unwind, everything gently supports deep, peaceful rest. Surrounded by calming nature and quiet spaces, you will feel your mind soften and your body recharge. We offer simple routines to help you build a healthier sleep habit.",
        },
      },
    ],
  },

  careTeamSection: {
    title: "Care, Led by Experience",
    members: [
      {
        role: "Chief Ayurveda Consultant",
        name: "Dr. Hrishikesh Ashok",
        src: "/Hrishikesh-Ashok.jpg",
        description:
          "A fifth generation Ayurvedic doctor with more than 10 years of clinical experience, Dr. Hrishikesh specialises in Panchakarma and sports rehabilitation. He holds an MS in Ayurvedic surgery from SSR Ayurveda Medical College & Hospital and is a graduate of JSS Ayurveda Medical College & Hospital.",
      },
      {
        role: "Head Chef",
        name: "Sekh Sahajan",
        src: "/Sekh-Sahajan.jpg",
        description:
          "The 'Millet Chef', chef Sahajan brings over 16 years of culinary experience and specialises in the 'tridosha' form of cooking, based on the principles of Ayurveda. He uses fresh seasonal produce, including herbs from Naad’s kitchen garden to create delectable wellness cuisines.",
      },
      {
        role: "Sr. Ayurveda Consultant",
        name: "Dr. Sreelakshmi K",
        src: "/Sreelakshmi.jpg",
        description:
          "An MD from SSR Ayurveda Medical College and a graduate of the JSS Ayurveda Medical College, Dr. Sreelakshmi has over five years of professional experience, specialising in gynaecological health and Panchakarma therapies. She has worked with leading Ayurvedic hospitals.",
      },
    ],
  },

  findYou: {
    src: "/finds-you.png",
    title: `A sanctuary for the soul, Where stillness finds you.`,
    links: [
      {
        label: contact.email,
        href: `mailto:${contact.email}`,
      },
      ...contact.phone.map((phone) => ({
        label: phone,
        href: `tel:${phone}`,
      })),
    ],
    cta: "Curate My Stay",
  },

  faqSection: {
    title: "Frequently asked questions",
    faqs: [
      {
        question: "How do I make an appointment at Naad?",
        answer: `
        Please drop in an email to 
        <strong>
          <a href="mailto:namaste@naadwellness.com" target="_blank" rel="noopener noreferrer" >namaste@naadwellness.com</a>
        </strong>
        or call on 
        <strong>
          <a href="tel:+911246030400" target="_blank" rel="noopener noreferrer" >+91-124-6030400</a>, 
          <a href="tel:+918222959646" target="_blank" rel="noopener noreferrer" >+91 82229 59646</a>
        </strong>
        with your requirement for <strong>wellness package / medical treatment</strong> and making reservation.
        <br/><br/>
        Once you are fully satisfied with the information furnished by our Reservation team, you can proceed for payment and look forward to your visit to <strong>Naad</strong>.
      `,
      },
      {
        question: "What can I look forward to after I reach?",
        answer: `
        The details of your itinerary are already known to us in advance.
        <br/><br/>
        On arrival, guests are extended a <strong>traditional welcome</strong> by our team and offered a welcome drink.
        After check-in, a <strong>thorough consultation</strong> is scheduled with the doctors as per the requirement for
        wellness package / medical treatment before proceeding to the next step for
        <strong>treatments, therapies, yoga, meditation,</strong> and <strong>customised meals</strong>.
      `,
      },
      {
        question: "What therapies are available at Naad?",
        answer: `
        Naad offers, arguably, the <strong>largest pool of therapies in India</strong> –
        from <strong>Ayurveda</strong> to <strong>Naturopathy</strong>, <strong>Yoga</strong>,
        and <strong>Guided Meditation</strong>.
        <br/><br/>
        You can browse these therapies by clicking the <strong>“Menu”</strong> button and selecting
        <strong>“Therapies”</strong>, <strong>“Experiential”</strong>, or <strong>“Medical”</strong>
        to know more about the therapies, benefits, and other details.
        <br/><br/>
        In case you are looking for something else, you may contact us by <strong>email or phone</strong>.
        All therapies are rendered <strong>only after consultation</strong> with the doctors at <strong>Naad</strong>.
      `,
      },
      {
        question: "Can I choose natural oils for myself?",
        answer: `
        It depends on the <strong>wellness package</strong> or
        <strong>medical treatments</strong> as per the consultation
        by the doctors at <strong>Naad</strong>.
      `,
      },
    ],
  },
};
