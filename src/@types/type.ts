import { JSX } from "react";

export interface AdventureDataType {
  title: string;
  items: {
    title: string;
    image: string;
  }[];
}

export interface TestimonialDataType {
  title: string;
  image: string;
  testimonials: {
    text: string;
    name: string;
  }[];
}

export interface ExperienceDataType {
  title: string;
  points: {
    title: string;
    icon: JSX.Element;
  }[];
}

