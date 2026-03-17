import Banner from "@/components/Banner/Banner";
import LazyLoadedMap from "@/components/map/LazyLoadedMap";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { DotIcon } from "@/utils/icons";
import Link from "next/link";
import { contactPageData } from "./Components/PageData";
import Form1 from "@/components/forms/Form1";
import { Metadata } from "next";
import { seoMetadata } from "@/utils/metadata";


export const metadata: Metadata = {
  title: seoMetadata.contact.title,
  description: seoMetadata.contact.description,
  keywords: seoMetadata.contact.keywords,
  alternates: {
    canonical: seoMetadata.contact.canonical,
  },
  openGraph: {
    title: seoMetadata.contact.title,
    description: seoMetadata.contact.description,
    images: [seoMetadata.contact.ogImage],
    type: "website",
    url: seoMetadata.contact.canonical,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactUsPage() {
  return (
    <main>
      <Banner
        {...contactPageData.bannerData}
        wrapperClassName="md:aspect-4/2"
      />
      <SectionWithContainer>
        <div className="grid md:grid-cols-[1fr_.95fr] gap-16 px-4">
          <div className="space-y-6">
            <SectionHeading
              title={contactPageData.visitData.title}
              titleClassName="md:text-[2rem]!"
            />
            <ul className="space-y-2 max-w-md">
              {contactPageData.visitData.links.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="flex gap-2.5 text-lg text-p2"
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <SectionHeading
              title={contactPageData.reservationsData.title}
              titleClassName="md:text-[2rem]!"
            />
            <ul className="space-y-2">
              {contactPageData.reservationsData.items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2.5 text-lg text-p2"
                >
                  <span className="text-p1">
                    <DotIcon />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 box-shadow py-6 px-4 bg-white rounded-lg">
            <h2 className="text-2xl text-[#110D3C] uppercase font-primary">{contactPageData.enquiryForm.title}</h2>
            <Form1 />
            <p className=" text-p2">{contactPageData.enquiryForm.privacyNote}</p>
          </div>
        </div>
      </SectionWithContainer>
      {/* Travel info */}
      <SectionWithContainer>
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-16 items-center px-4">
          <div className="space-y-6 w-fit">
            <SectionHeading
              title={contactPageData.travelInfo.title}
              titleClassName="md:text-[2rem]!"
            />
            <ul className="space-y-2">
              {contactPageData.travelInfo.details.map((item, index) => (
                <li key={index} className="flex items-center gap-2.5">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="w-full h-px bg-p2" />
            <div className="space-y-2">
              <p className="text-[1.375rem] text-p2">
                {contactPageData.travelInfo.rating}
              </p>
              <p className="text-lg text-p2">
                {contactPageData.travelInfo.description}
              </p>
            </div>
          </div>
          <div className="w-full md:aspect-4/2.25 aspect-4/3">
            <LazyLoadedMap src={contactPageData.travelInfo.mapUrl} />
          </div>
        </div>
      </SectionWithContainer>
    </main>
  );
}
