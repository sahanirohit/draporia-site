"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { whatsappLink } from "@/content/site";

function ChatIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.5L3 21l2-5.5A8.4 8.4 0 1 1 21 11.5Z" />
      <path d="M9 10h.01M12 10h.01M15 10h.01" />
    </svg>
  );
}

export default function WhatsAppCta() {
  const pathname = usePathname();
  const onContact = pathname === "/contact";

  return (
    <>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener"
        className="wa-float"
        aria-label="Chat with Draporia on WhatsApp"
      >
        <ChatIcon />
        <span className="wa-float-label">Chat on WhatsApp</span>
      </a>

      <div className="mobile-bar" role="region" aria-label="Quick contact">
        {!onContact && (
          <Link href="/contact" className="btn btn-primary btn-sm flex-1" style={{ boxShadow: "none" }}>
            Free audit
          </Link>
        )}
        <a href={whatsappLink} target="_blank" rel="noopener" className="btn btn-sm wa-btn flex-1">
          <ChatIcon size={18} />
          WhatsApp
        </a>
      </div>
    </>
  );
}
