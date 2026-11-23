import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import WhatsAppCta from "@/components/WhatsAppCta";
import { Analytics } from "@vercel/analytics/next";
import { googleSiteVerification, siteUrl } from "@/content/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-tight",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Draporia | Amazon Management for sellers on Amazon.in",
    template: "%s | Draporia",
  },
  description:
    "Draporia manages Amazon seller accounts on the India marketplace: listings, account health, promotions and advertising. Owned by Rohit Sahani.",
  openGraph: {
    siteName: "Draporia",
    type: "website",
    locale: "en_IN",
  },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#05050A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${instrument.variable}`}
    >
      <body>
        <MotionProvider>
          <div className="shell">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <WhatsAppCta />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  );
}
