import Link from "next/link";
import { designJobs, planFeatures, plans, pricingNote } from "@/content/site";
import Reveal from "./Reveal";
import { Check } from "./Icons";

export default function Pricing() {
  return (
    <div className="flex flex-col gap-[18px]">
      <div className="bento">
        {plans.map((p, i) => (
          <Reveal key={p.id} className="s3" delay={i * 0.08}>
            <article className={`plan h-full${p.featured ? " featured" : ""}`}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="h3 text-[22px]">{p.name}</h3>
                {p.featured ? (
                  <span className="badge">{p.tag}</span>
                ) : (
                  <span className="text-[13px] text-dim">{p.tag}</span>
                )}
              </div>
              <p className="m-0 flex flex-wrap items-baseline gap-2.5">
                <span className="price">{p.price}</span>
                <span className="text-muted">{p.unit}</span>
              </p>
              {p.note && <p className="m-0 -mt-3 text-[14px] text-dim">{p.note}</p>}
              <p className="body">{p.body}</p>
              <ul className="check-list">
                {planFeatures.map((f) => (
                  <li key={f}>
                    <Check color={p.featured ? "var(--color-amber)" : undefined} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`btn mt-auto ${p.featured ? "btn-primary" : "btn-ghost"}`}
                style={p.featured ? { boxShadow: "none" } : undefined}
              >
                {p.cta}
              </Link>
            </article>
          </Reveal>
        ))}
        {designJobs.map((d, i) => (
          <Reveal key={d.name} className="s3" delay={i * 0.08}>
            <article className="card flex h-full flex-col gap-4">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[13px] text-dim">{d.tag}</span>
                  <h3 className="h3 text-[22px]">{d.name}</h3>
                </div>
                <p className="m-0 text-right">
                  <span className="price block text-[44px]">{d.price}</span>
                  <span className="text-[14px] text-muted">{d.unit}</span>
                </p>
              </div>
              <p className="body">{d.body}</p>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                <ul className="check-list flex-1">
                  {d.points.map((pt) => (
                    <li key={pt}>
                      <Check />
                      {pt}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn btn-ghost btn-sm">
                  {d.cta}
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <p className="m-0 mt-3 text-center text-[14px] text-dim">{pricingNote}</p>
    </div>
  );
}
