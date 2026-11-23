import Link from "next/link";
import { LogoMark } from "./Icons";

const links = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/about", "About"],
  ["/portfolio", "Portfolio"],
  ["/packages", "Packages"],
  ["/faq", "FAQ"],
  ["/contact", "Contact"],
];

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-line">
      <div className="wrap flex flex-wrap justify-between gap-x-14 gap-y-6 pt-12">
        <div className="flex max-w-[360px] flex-col gap-4">
          <Link href="/" className="brand">
            <LogoMark />
            <span>Draporia</span>
          </Link>
          <p className="body text-[15px]">
            Amazon seller account management for the India marketplace. Owned by
            Rohit Sahani.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap content-start gap-x-1 gap-y-1">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className="navlink">
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <div aria-hidden className="wordmark">
        Draporia
      </div>
      <div className="wrap flex flex-wrap justify-between gap-x-6 gap-y-2 py-7 text-[13px] text-dim">
        <span>© 2026 Draporia</span>
        <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-1">
          <Link href="/terms" className="footlink">Terms &amp; Conditions</Link>
          <Link href="/privacy" className="footlink">Privacy Policy</Link>
          <Link href="/refund-policy" className="footlink">Refund &amp; Cancellation</Link>
          <Link href="/security" className="footlink">Security &amp; Data</Link>
        </nav>
        <span>Draporia is an independent agency and is not affiliated with Amazon.</span>
      </div>
    </footer>
  );
}
