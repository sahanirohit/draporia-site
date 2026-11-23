import Link from "next/link";
import { faqs } from "@/content/site";
import Reveal from "./Reveal";

export default function Faq() {
  return (
    <section className="wrap flex flex-wrap items-start gap-x-[72px] gap-y-8 pt-32">
      <Reveal className="flex max-w-[420px] flex-[1_1_260px] flex-col gap-4">
        <span className="eyebrow">FAQ</span>
        <h2 className="display h2">
          Questions sellers <span className="serif text-amber">ask us.</span>
        </h2>
        <p className="body text-[17px]">
          Something else on your mind?{" "}
          <Link href="/contact" className="text-fg underline decoration-violet underline-offset-4">
            Get in touch
          </Link>
          .
        </p>
      </Reveal>
      <div className="faq flex-[2_1_380px] border-t border-line">
        {faqs.map((f, i) => (
          <details key={f.q} name="faq" open={i === 0}>
            <summary>
              <span className="q">Q{i + 1}</span>
              <span>{f.q}</span>
              <span aria-hidden className="plus">+</span>
            </summary>
            <p>
              {f.a}
              {f.link && (
                <>
                  {" "}
                  <Link href={f.link.href} className="text-fg underline decoration-violet underline-offset-4">
                    {f.link.label}
                  </Link>
                  .
                </>
              )}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
