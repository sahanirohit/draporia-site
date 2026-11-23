"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { nav } from "@/content/site";
import { LogoMark } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="glass">
        <div className="flex items-center justify-between gap-2">
          <Link href="/" onClick={close} className="brand">
            <LogoMark />
            <span>Draporia</span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-0.5 md:flex">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                aria-current={pathname === n.href ? "page" : undefined}
                className="navlink"
              >
                {n.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary btn-sm ml-1.5">
              Free audit
            </Link>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <Link href="/contact" onClick={close} className="btn btn-primary btn-sm">
              Free audit
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 flex-none cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full border border-white/15 bg-white/5"
            >
              <span
                className={`block h-[2px] w-[18px] bg-fg transition-transform duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`block h-[2px] w-[18px] bg-fg transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-[2px] w-[18px] bg-fg transition-transform duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.nav
              id="mobile-nav"
              aria-label="Mobile"
              className="overflow-hidden md:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex flex-col gap-1 pb-2 pr-3 pt-3">
                {nav.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={close}
                    aria-current={pathname === n.href ? "page" : undefined}
                    className="navlink text-[16px]"
                  >
                    {n.label}
                  </Link>
                ))}
                <Link href="/contact" onClick={close} className="navlink text-[16px]">
                  Contact
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
