import { Section } from "@/components/sectionComponants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface RoomSectionProps {
  items: {
    title: string;
    description: string;
    image: string;
  }[];
}

const RoomSection: React.FC<RoomSectionProps> = ({ items }) => {
  return (
    <Section
      defaultPadding={false}
      className="grid md:grid-cols-2 md:pb-16 md:gap-y-6 max-md:gap-8"
    >
      {items.map((item, index) => (
        <RoomCard key={index} {...item} index={index} />
      ))}
    </Section>
  );
};

export default RoomSection;

export const RoomCard: React.FC<
  RoomSectionProps["items"][0] & { index: number }
> = ({ title, description, image }) => {
  const slugify = (str: string) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  return (
    <Link
      href={`/rooms/${slugify(title)}`}
      className={`w-full relative block aspect-4/3`}
      // className={`w-full relative block ${index === 4 ? "md:col-span-2 md:aspect-4/1.5 aspect-4/3" : "aspect-4/3"}`}
    >
      <Image src={image} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-linear-to-t from-black/50 from-2% to-transparent" />
      <div className="absolute inset-x-0 bottom-0 text-center p-4 text-white md:space-y-3.5 space-y-1">
        <h2 className="md:text-[1.75rem] text-[1.375rem] font-primary font-semibold uppercase">
          {title}
        </h2>
        <p className="text-lg">{description}</p>
      </div>
    </Link>
  );
};
