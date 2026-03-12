import { seoMetadata } from "@/utils/metadata";
import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import "./style.scss";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: seoMetadata.home.title,
  description: seoMetadata.home.description,
  keywords: seoMetadata.home.keywords,
  alternates: {
    canonical: seoMetadata.home.canonical,
  },
  openGraph: {
    title: seoMetadata.home.title,
    description: seoMetadata.home.description,
    images: [seoMetadata.home.ogImage],
    type: "website",
    url: seoMetadata.home.canonical,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${montserrat.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
