import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PortfolioGallery from "@/components/PortfolioGallery";
import Cta from "@/components/Cta";
import Reveal from "@/components/Reveal";
import { Arrow } from "@/components/Icons";
import { portfolio } from "@/content/portfolio";

export const metadata: Metadata = {
  title: "Portfolio: A+ content and listing design",
  description:
    "A+ content designed by Draporia for Amazon.in brands in Beauty & Personal Care and Home & Kitchen. A+ design from ₹299 for 6 modules.",
  alternates: { canonical: "/portfolio" },
};

export default function Portfolio() {
  return (
    <>
      <PageHero
        label="Portfolio — Design work"
        lead="A+ content we have designed for Amazon.in brands. Tap any module to see it full size."
      >
        Work that <span className="serif grad">sells the shelf.</span>
      </PageHero>

      {portfolio.map((p, i) => (
        <section key={p.slug} id={p.slug} className="wrap relative z-10 pt-20">
          <Reveal className="mb-7 flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
            <div className="flex max-w-[640px] flex-col gap-3">
              <span className="eyebrow" style={{ color: p.accent }}>
                {String(i + 1).padStart(2, "0")} · {p.category}
              </span>
              <h2 className="display h2" style={{ fontSize: "clamp(32px, 4.4vw, 54px)" }}>
                {p.brand}
              </h2>
              <p className="m-0 text-[17px] text-fg">{p.product}</p>
              <p className="body">{p.summary}</p>
            </div>
            <span className="tag" style={{ borderColor: p.accent, color: p.accent }}>
              {p.work}
            </span>
          </Reveal>
          <PortfolioGallery project={p} />
        </section>
      ))}

      <section className="wrap relative z-10 pt-24">
        <Reveal className="card flex flex-wrap items-center justify-between gap-6">
          <div className="flex max-w-[560px] flex-col gap-2">
            <h2 className="h3">Want A+ content like this for your product?</h2>
            <p className="body">
              A+ design is ₹299 for 6 modules and listing image sets are ₹199 for 7
              images. Order on their own or alongside a management plan.
            </p>
          </div>
          <Link href="/packages" className="btn btn-primary" style={{ boxShadow: "none" }}>
            See design prices <Arrow />
          </Link>
        </Reveal>
      </section>
      <Cta />
    </>
  );
}
