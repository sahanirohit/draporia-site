type Props = {
  label: string;
  children: React.ReactNode;
  lead?: string;
  small?: boolean;
};

export default function PageHero({ label, children, lead, small }: Props) {
  return (
    <section className="relative">
      <div aria-hidden className="aurora" style={{ height: 700 }}>
        <div className="blob blob-a" />
        <div className="blob blob-b" />
        <div className="gridlines" />
      </div>
      <div className="wrap relative z-10 flex flex-col gap-6 pt-[168px]">
        <span className="pill self-start">
          <span className="dot" />
          <span>{label}</span>
        </span>
        <h1
          className="display h1-page max-w-[1000px]"
          style={small ? { fontSize: "clamp(40px, 6vw, 76px)" } : undefined}
        >
          {children}
        </h1>
        {lead && <p className="lead max-w-[620px]">{lead}</p>}
      </div>
    </section>
  );
}
