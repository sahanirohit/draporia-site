import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import ServicesBento from "@/components/ServicesBento";
import Process from "@/components/Process";
import PortfolioTeaser from "@/components/PortfolioTeaser";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: { absolute: "Draporia | Amazon Management for sellers on Amazon.in" },
  description:
    "Draporia takes complete charge of your Amazon.in seller account: listings, advertising, inventory and account health. Book a free account audit.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <ServicesBento />
      <PortfolioTeaser />
      <Process />
      <section className="wrap flex flex-col gap-[52px] pt-32">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="eyebrow">Packages</span>
          <h2 className="display h2 max-w-[760px]">
            Flat fees. <span className="serif text-amber">No cut of your sales.</span>
          </h2>
        </div>
        <Pricing />
      </section>
      <Faq />
      <Cta />
    </>
  );
}
