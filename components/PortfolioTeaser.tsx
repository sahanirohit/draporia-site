import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/content/portfolio";
import Reveal from "./Reveal";
import { Arrow } from "./Icons";

export default function PortfolioTeaser() {
  return (
    <section className="wrap flex flex-col gap-[52px] pt-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex max-w-[640px] flex-col gap-4">
          <span className="eyebrow">Recent work</span>
          <h2 className="display h2">
            A+ content that <span className="serif text-amber">sells the shelf.</span>
          </h2>
        </div>
        <Link href="/portfolio" className="btn btn-ghost">
          View portfolio <Arrow />
        </Link>
      </div>
      <div className="grid-auto" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(420px, 100%), 1fr))" }}>
        {portfolio.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <Link href={`/portfolio#${p.slug}`} className="pf-card">
              <span className="pf-card-img">
                <Image src={p.images[0].src} alt={p.images[0].alt} width={1600} height={990} sizes="(max-width: 900px) 100vw, 600px" />
              </span>
              <span className="flex flex-wrap items-center justify-between gap-3 px-6 py-5">
                <span className="flex flex-col">
                  <span className="h3 text-[22px]">{p.brand}</span>
                  <span className="text-[14px] text-dim">{p.category}</span>
                </span>
                <span className="tag text-[13px]">{p.work}</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
