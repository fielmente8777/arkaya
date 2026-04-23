import { JSX } from "react";

export interface RoomsSectionProps {
  title: string;
  Cards: {
    images: string[];
    title: string;
    subtitle: string;
    description: string;
    commmonAmenities: {
      label: string;
      icon: JSX.Element;
    }[];
    amenities: {
      label: string;
      icon: JSX.Element;
    }[];
    cta: {
      label: string;
      href: string;
    };
  }[];
}
