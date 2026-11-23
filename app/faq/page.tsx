import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import { faqs } from "@/content/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Amazon seller account management in India: onboarding, account access, FBA, ads, suspensions, contracts and pricing.",
  alternates: { canonical: "/faq" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <>
      <PageHero label="FAQ — Frequently asked">
        Asked &amp; <span className="serif grad">answered.</span>
      </PageHero>
      <div className="relative z-10 -mt-12">
        <Faq />
      </div>
      <Cta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
