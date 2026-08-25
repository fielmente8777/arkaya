import { JSX } from "react";

export interface AdventureDataType {
  title: string;
  description: string;
  items: {
    title: string;
    image: string;
  }[];
  cta?: {
    label: string;
    href: string;
  };
}

export interface TestimonialDataType {
  title: string;
  image?: string;
  images?: string[];
  testimonials: {
    text: string;
    name: string;
  }[];
}

export interface ExperienceDataType {
  title: string;
  description: string;
  points: {
    title: string;
    icon: JSX.Element;
  }[];
  cta?: {
    label: string;
    href: string;
  };
}

