import Link from "next/link";
import Reveal from "./Reveal";
import { Arrow } from "./Icons";

const faces: React.CSSProperties[] = [
  { transform: "translateZ(70px)", background: "color-mix(in oklab, var(--color-violet) 40%, transparent)" },
  { transform: "rotateY(180deg) translateZ(70px)", background: "color-mix(in oklab, var(--color-violet) 40%, transparent)" },
  { transform: "rotateY(90deg) translateZ(70px)", background: "color-mix(in oklab, var(--color-amber) 35%, transparent)" },
  { transform: "rotateY(-90deg) translateZ(70px)", background: "color-mix(in oklab, var(--color-amber) 35%, transparent)" },
  { transform: "rotateX(90deg) translateZ(70px)", background: "rgba(255,255,255,.22)" },
  { transform: "rotateX(-90deg) translateZ(70px)", background: "rgba(255,255,255,.05)" },
];

export default function Cta() {
  return (
    <section className="wrap pb-24 pt-32">
      <Reveal>
        <div className="cta">
          <div
            aria-hidden
            className="blob"
            style={{ left: "-10%", bottom: "-60%", width: "70%", height: "120%", background: "var(--color-violet)", opacity: 0.35 }}
          />
          <div
            aria-hidden
            className="blob"
            style={{ right: "-10%", top: "-60%", width: "50%", height: "110%", background: "var(--color-amber)", opacity: 0.2 }}
          />
          <div className="relative flex min-w-0 flex-[1_1_460px] flex-col items-start gap-6">
            <h2 className="display" style={{ fontSize: "clamp(44px, 8vw, 112px)", lineHeight: 0.95 }}>
              Hand it <span className="serif">over.</span>
            </h2>
            <p className="m-0 max-w-[480px] text-[18px] text-[#c9c7d6]">
              Start with a free audit of your Amazon.in account. No obligation.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Book a free account audit <Arrow />
            </Link>
          </div>
          <div aria-hidden className="cubebox">
            <div className="cube">
              {faces.map((f, i) => (
                <div key={i} style={f}>
                  {i === 0 ? "D" : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
