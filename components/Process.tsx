import { steps } from "@/content/site";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section className="wrap flex flex-col gap-[52px] pt-32">
      <div className="flex flex-col gap-4">
        <span className="eyebrow">Method</span>
        <h2 className="display h2">
          Four steps to <span className="serif text-violet">hands-off.</span>
        </h2>
      </div>
      <ol className="grid-auto m-0 list-none p-0" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))" }}>
        {steps.map((s, i) => (
          <li key={s.title}>
            <Reveal className="card flex h-full flex-col gap-3" delay={i * 0.08}>
              <span
                aria-hidden
                className="outline-no"
                style={i === steps.length - 1 ? { WebkitTextStroke: "1.5px var(--color-amber)" } : undefined}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="h3 text-[24px]">{s.title}</h3>
              <p className="body">{s.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
