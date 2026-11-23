import Reveal from "./Reveal";

const categories = ["Home & Kitchen", "Beauty", "Clothing", "Cleaning Supplies"];

export default function Stats() {
  return (
    <section aria-label="Experience" className="wrap grid-auto pt-24">
      <Reveal className="card flex flex-col gap-2">
        <span className="stat">100+</span>
        <span className="body text-[15px]">
          seller accounts managed by our founder at two Amazon agencies
        </span>
      </Reveal>
      <Reveal className="card flex flex-col gap-2" delay={0.08}>
        <span className="stat">4</span>
        <span className="body text-[15px]">
          people on the Draporia team, each working under their own Seller Central user
        </span>
      </Reveal>
      <Reveal className="card flex flex-col justify-between gap-4" delay={0.16}>
        <span className="body text-[15px]">Categories our founder has managed</span>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <span key={c} className="tag">{c}</span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
