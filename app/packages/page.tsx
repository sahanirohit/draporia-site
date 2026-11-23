import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Packages and pricing",
  description:
    "Amazon.in account management from ₹4,000 a month, plus listing image design and A+ listing design priced per job.",
  alternates: { canonical: "/packages" },
};

export default function Packages() {
  return (
    <>
      <PageHero
        label="Packages — Rate card"
        lead="Account management billed monthly or quarterly, plus listing design priced per job."
      >
        Pick your <span className="serif grad">parcel.</span>
      </PageHero>
      <section className="wrap relative z-10 pt-20">
        <Pricing />
      </section>
      <Faq />
      <Cta />
    </>
  );
}
