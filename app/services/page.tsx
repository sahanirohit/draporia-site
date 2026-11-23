import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Process from "@/components/Process";
import Cta from "@/components/Cta";
import Reveal from "@/components/Reveal";
import { Check } from "@/components/Icons";
import { services, type Tier } from "@/content/site";

export const metadata: Metadata = {
  title: "Amazon seller account management services",
  description:
    "Amazon.in account management: listing management, account health, promotions and advertising in every plan, plus listing image and A+ design priced per job.",
  alternates: { canonical: "/services" },
};

const groups: { tier: Tier; title: string; note: string }[] = [
  {
    tier: "plan",
    title: "Included in every plan",
    note: "Covered by the monthly or quarterly fee. See Packages for prices.",
  },
  {
    tier: "addon",
    title: "Design, priced per job",
    note: "Order on its own or alongside a plan.",
  },
  {
    tier: "request",
    title: "On request",
    note: "Not part of the monthly fee. We quote it before starting.",
  },
];

export default function Services() {
  return (
    <>
      <PageHero
        label="Services — Scope of work"
        lead="A done-for-you service for sellers on Amazon.in, run by one accountable team. Here is exactly what each plan covers."
      >
        Amazon <span className="serif grad">Management.</span>
      </PageHero>
      {(() => {
        const card = (tier: Tier, i: number) =>
          services
            .filter((s) => s.tier === tier)
            .map((s) => (
              <Reveal key={s.no} className="h-full" delay={(i % 2) * 0.08}>
                <article className="cell h-full justify-start gap-4" style={{ minHeight: 0 }}>
                  <span aria-hidden className="outline-no text-[64px]">{s.no}</span>
                  <h3 className="h3 text-[26px]">{s.title}</h3>
                  <p className="body">{s.long}</p>
                  <ul className="check-list mt-2" style={{ gridTemplateColumns: "1fr" }}>
                    {s.points.map((p) => (
                      <li key={p}>
                        <Check
                          color={
                            tier === "plan"
                              ? undefined
                              : tier === "addon"
                                ? "var(--color-amber)"
                                : "var(--color-dim)"
                          }
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ));
        const head = (g: (typeof groups)[number]) => (
          <div className="mb-6 flex flex-col gap-1">
            <h2 className="h3 text-[28px]">{g.title}</h2>
            <p className="m-0 text-[15px] text-dim">{g.note}</p>
          </div>
        );
        return (
          <>
            <section className="wrap relative z-10 pt-20">
              {head(groups[0])}
              <div className="grid gap-[18px]" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(420px, 100%), 1fr))" }}>
                {card("plan", 0)}
              </div>
            </section>
            <section className="wrap relative z-10 pt-16">
              <div className="grid gap-[18px]" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(420px, 100%), 1fr))" }}>
                <div className="flex flex-col">
                  {head(groups[1])}
                  <div className="flex-1">{card("addon", 0)}</div>
                </div>
                <div className="flex flex-col">
                  {head(groups[2])}
                  <div className="flex-1">{card("request", 1)}</div>
                </div>
              </div>
            </section>
          </>
        );
      })()}
      <Process />
      <Cta />
    </>
  );
}
