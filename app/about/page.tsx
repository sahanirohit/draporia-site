import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import Reveal from "@/components/Reveal";
import { values } from "@/content/site";

export const metadata: Metadata = {
  title: "About Draporia",
  description:
    "Draporia is an Amazon seller account management agency for the India marketplace, founded by Rohit Sahani.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      <PageHero label="About — The proprietor's note">
        Small desk. <span className="serif grad">Serious</span> books.
      </PageHero>
      <section className="wrap relative z-10 flex flex-wrap items-start gap-x-16 gap-y-12 pt-20">
        <Reveal className="flex-[1_1_280px]" >
          <div className="plan featured mx-auto max-w-[380px] items-start" style={{ aspectRatio: "4 / 5", justifyContent: "space-between" }}>
            <span className="eyebrow">Founder &amp; Owner</span>
            <span aria-hidden className="stat" style={{ fontSize: "clamp(110px, 16vw, 180px)" }}>RS</span>
            <div className="flex flex-col gap-1">
              <span className="h3 text-[24px]">Rohit Sahani</span>
              <span className="text-[15px] text-muted">Draporia · Surat, Gujarat</span>
            </div>
          </div>
        </Reveal>
        <Reveal className="flex flex-[1.5_1_340px] flex-col gap-6" delay={0.1}>
          <p className="display m-0" style={{ fontSize: "clamp(26px, 3.2vw, 44px)", lineHeight: 1.08, letterSpacing: "-0.03em" }}>
            Draporia was founded by Rohit Sahani to give Indian sellers the kind of
            account management usually reserved for large brands.
          </p>
          <p className="body max-w-[620px] text-[18px] leading-[1.6]">
            Rohit started Draporia after helping a few small sellers untangle their
            Amazon.in accounts and seeing how much a little discipline could change.
            Selling on Amazon.in rewards consistency: accurate listings, disciplined
            advertising, healthy inventory and a clean account record. Most sellers
            do not have the time to do all four well. We do it for them.
          </p>
          <p className="body max-w-[620px] text-[18px] leading-[1.6]">
            Today Draporia is based in Surat, Gujarat. Every client works with a
            dedicated account manager, supported by specialists in catalogue,
            advertising and compliance. We report openly on what we did, what it cost
            and what it returned.
          </p>
          <div className="flex flex-wrap justify-between gap-x-6 gap-y-1 border-t border-line pt-5 text-[13px] uppercase tracking-[0.1em]">
            <span>Signed — Rohit Sahani</span>
            <span className="text-dim">Founder &amp; Owner, Draporia</span>
          </div>
        </Reveal>
      </section>
      <section className="wrap grid-auto pt-24">
        {values.map((v, i) => (
          <Reveal key={v.title} className="card flex flex-col gap-3" delay={i * 0.08}>
            <span aria-hidden className="outline-no text-[56px]">{String(i + 1).padStart(2, "0")}</span>
            <h2 className="h3 text-[24px]">{v.title}</h2>
            <p className="body text-[17px]">{v.body}</p>
          </Reveal>
        ))}
      </section>
      <Cta />
    </>
  );
}
