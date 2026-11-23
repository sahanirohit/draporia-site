import Link from "next/link";
import { services, tierLabel, type Tier } from "@/content/site";
import Reveal from "./Reveal";
import { Arrow } from "./Icons";

const spans = ["s4", "s2", "s2", "s4", "s3", "s3"];
const stackShades = ["#1b1b2a", "#22223a", "#2b2a4c", "#37346a"];

function TierTag({ tier }: { tier: Tier }) {
  const cls =
    tier === "plan"
      ? "border-violet/50 text-violet"
      : tier === "addon"
        ? "border-amber/50 text-amber"
        : "border-white/20 text-dim";
  return <span className={`tag self-start text-[12px] ${cls}`}>{tierLabel[tier]}</span>;
}

function Art({ i }: { i: number }) {
  if (i === 0)
    return (
      <div aria-hidden className="cell-art justify-center" style={{ perspective: 900, minHeight: 170 }}>
        <div className="stack">
          {stackShades.map((c, k) => (
            <span key={c} style={{ background: c, transform: `translateZ(${k * 18}px)` }} />
          ))}
          <span style={{ transform: "translateZ(72px)" }} />
        </div>
      </div>
    );
  if (i === 1)
    return (
      <div aria-hidden className="cell-art">
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-mint/35">
          <span
            className="dot block"
            style={{
              width: 36,
              height: 36,
              background: "rgba(127,233,180,.2)",
              border: "1px solid var(--color-mint)",
              boxShadow: "0 0 30px rgba(127,233,180,.5)",
            }}
          />
        </span>
        <span className="ok text-[13px]">Healthy</span>
      </div>
    );
  if (i === 2)
    return (
      <div aria-hidden className="cell-art">
        <span className="chip bg-amber text-[#1a1206]" style={{ rotate: "-6deg", height: 46 }}>
          Coupon
        </span>
        <span
          className="chip border border-dashed border-white/35 bg-[#1e1e2e]"
          style={{ rotate: "5deg", translate: "-6px 14px", height: 46 }}
        >
          Deal
        </span>
      </div>
    );
  if (i === 3)
    return (
      <div aria-hidden className="cell-art">
        <svg viewBox="0 0 800 160" preserveAspectRatio="none" className="h-[140px] w-full">
          <defs>
            <linearGradient id="ads-line" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="#8B7BFF" stopOpacity="0" />
              <stop offset=".3" stopColor="#8B7BFF" />
              <stop offset="1" stopColor="#FFB454" />
            </linearGradient>
          </defs>
          <path
            d="M0 140 C90 130 140 100 220 108 S330 66 410 76 S520 34 610 46 S730 8 800 12"
            fill="none"
            stroke="url(#ads-line)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  if (i === 4)
    return (
      <div aria-hidden className="cell-art flex-wrap gap-2" style={{ maxWidth: 260 }}>
        {Array.from({ length: 7 }, (_, k) => (
          <span
            key={k}
            className="block h-12 w-12 rounded-lg border border-white/15"
            style={{ background: k === 0 ? "var(--color-amber)" : "rgba(255,255,255,.08)" }}
          />
        ))}
      </div>
    );
  return (
    <div aria-hidden className="cell-art flex-wrap content-center gap-2">
      <span className="tag">GST</span>
      <span className="tag">Approvals</span>
      <span className="tag">Brand Registry</span>
      <span className="tag">FBA</span>
    </div>
  );
}

export default function ServicesBento() {
  return (
    <section className="wrap flex flex-col gap-[52px] pt-32">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="eyebrow">Scope of work</span>
        <h2 className="display h2 max-w-[780px]">
          Everything inside Seller Central, <span className="serif text-amber">handled.</span>
        </h2>
        <p className="lead max-w-[580px]">
          Four services in every plan, design work priced per job, and setup or
          fulfilment work quoted when you need it.
        </p>
      </div>
      <div className="bento">
        {services.map((s, i) => (
          <Reveal key={s.no} className={spans[i]} delay={(i % 2) * 0.08}>
            <article className="cell h-full">
              <Art i={i} />
              <TierTag tier={s.tier} />
              <h3 className="h3">{s.title}</h3>
              <p className="body max-w-[440px]">{s.short}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="flex justify-center">
        <Link href="/services" className="btn btn-ghost">
          Read the full scope <Arrow />
        </Link>
      </div>
    </section>
  );
}
