import type { LegalDoc } from "@/content/legal";
import PageHero from "./PageHero";

export default function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <PageHero label={doc.label} small>
        {doc.title}
      </PageHero>
      <div className="wrap relative z-10 pb-28">
        <p className="mt-5 text-[13px] uppercase tracking-[0.12em] text-dim">
          Last updated: {doc.updated}
        </p>
        <div className="legal mt-12 max-w-[760px]">
          <p className="m-0 text-[19px] leading-[1.6] [text-wrap:pretty]">{doc.intro}</p>
          {doc.sections.map((s, i) => (
            <section key={s.title}>
              <h2>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span>{s.title}</span>
              </h2>
              {s.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
