import { seoMetadata } from "@/utils/metadata";
import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";
import "./style.scss";
import "./animation.scss";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import { contact } from "@/utils/constent";
import Call from "@/components/ContactButton/Call";
import Script from "next/script";
import { WebProvider } from "@/context-api/WebContext";
import PopUpForm from "@/components/popUps/PopUpForm";

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
        className={`${cinzel.variable} ${montserrat.variable} antialiased overflow-x-clip`}
        suppressHydrationWarning={true}
      >
        <WebProvider>
          <NavBar />
          {children}
          <Footer />
          <Whatsapp whatsAppNumber={contact.phone[0]} />
          <Call callNumber={contact.phone[0]} />
          <PopUpForm />
        </WebProvider>
        {/* <Script id="chatbot-config" strategy="afterInteractive">
          {`
            window.eazbotConfig = {
              ndid: "4c2f9cbf-5d53-4386-98a1-c571509a54c4",
              hid: "56303324",
            };
          `}
        </Script>
        <Script
          src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"
          strategy="afterInteractive"
        /> */}
      </body>
    </html>
  );
}
