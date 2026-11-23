import { tape } from "@/content/site";

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden}>
      {tape.map((t, i) => (
        <span key={t} className="contents">
          <span>{t}</span>
          <i className={`diamond block${i % 2 ? " alt" : ""}`} />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section aria-label="What Draporia covers" className="marquee relative z-10 -mt-10">
      <div className="track">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
