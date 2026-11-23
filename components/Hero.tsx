"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Arrow, Check } from "./Icons";

const spring = { stiffness: 110, damping: 18, mass: 0.6 };

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [33, 19]), spring);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), spring);

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative"
    >
      <div aria-hidden className="aurora">
        <div className="blob blob-a" />
        <div className="blob blob-b" />
        <div className="gridlines" />
      </div>

      <div className="wrap relative z-10 flex flex-col items-center gap-[30px] pt-[168px] text-center">
        <div className="pill rise">
          <span className="dot" />
          <span>Amazon Management · India Marketplace</span>
        </div>

        <h1 className="display h1 rise max-w-[1000px]" style={{ animationDelay: "0.08s" }}>
          Your Amazon.in store, <span className="serif grad">on autopilot.</span>
        </h1>

        <p className="lead rise max-w-[620px]" style={{ animationDelay: "0.18s" }}>
          Draporia takes complete charge of your Amazon seller account: listings,
          account health, promotions and advertising. You make the product. We keep
          the store moving.
        </p>

        <div className="rise flex flex-wrap justify-center gap-3" style={{ animationDelay: "0.28s" }}>
          <Link href="/contact" className="btn btn-primary">
            Book a free account audit <Arrow />
          </Link>
          <Link href="/packages" className="btn btn-ghost">
            From ₹4,000 a month
          </Link>
        </div>

        <div aria-hidden className="stage rise" style={{ animationDelay: "0.35s", animationDuration: "1s" }}>
          <div className="stage-glow" />
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              transformOrigin: "50% 0%",
              position: "relative",
            }}
          >
            <div className="dash">
              <div className="dash-side">
                <div className="flex gap-1.5 px-2 pb-4">
                  <i className="block h-2.5 w-2.5 rounded-full bg-white/20" />
                  <i className="block h-2.5 w-2.5 rounded-full bg-white/20" />
                  <i className="block h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>
                <span className="on">Overview</span>
                <span>Listings</span>
                <span>Advertising</span>
                <span>Promotions</span>
                <span>Account health</span>
              </div>
              <div className="dash-main">
                <div className="dash-card">
                  <div className="dash-row">
                    <span className="dash-label">Account health</span>
                    <span className="ok">Healthy</span>
                  </div>
                  <div className="dash-row"><span>Policy compliance</span><span className="text-dim">Watched</span></div>
                  <div className="dash-row"><span>Notifications</span><span className="text-dim">Watched</span></div>
                  <div className="dash-row"><span>Stock levels</span><span className="text-dim">Watched</span></div>
                </div>
                <div className="dash-card">
                  <span className="dash-label">Listing</span>
                  <div className="flex items-center gap-2.5"><Check /><span>Title and bullets</span></div>
                  <div className="flex items-center gap-2.5"><Check /><span>7 listing images</span></div>
                  <div className="flex items-center gap-2.5"><Check /><span>A+ content, 6 modules</span></div>
                </div>
                <div className="dash-card">
                  <span className="dash-label">Promotions</span>
                  <div className="dash-row"><span>Coupon</span><span className="text-amber">Live</span></div>
                  <div className="dash-row"><span>Deal</span><span className="text-dim">Scheduled</span></div>
                </div>
                <div className="dash-card" style={{ gridColumn: "1 / -1" }}>
                  <div className="dash-row">
                    <span className="dash-label">Sponsored campaigns</span>
                    <span className="text-[13px] text-dim">Running</span>
                  </div>
                  <svg viewBox="0 0 800 150" preserveAspectRatio="none" className="block h-[150px] w-full">
                    <defs>
                      <linearGradient id="hero-line" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0" stopColor="#8B7BFF" />
                        <stop offset="1" stopColor="#FFB454" />
                      </linearGradient>
                      <linearGradient id="hero-fill" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" stopColor="#8B7BFF" stopOpacity=".35" />
                        <stop offset="1" stopColor="#8B7BFF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0 120 C80 110 120 90 190 96 S300 60 380 70 S500 30 590 44 S720 10 800 14 V150 H0Z" fill="url(#hero-fill)" />
                    <path d="M0 120 C80 110 120 90 190 96 S300 60 380 70 S500 30 590 44 S720 10 800 14" fill="none" stroke="url(#hero-line)" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="chip3d chip-r1" style={{ transform: "translateZ(120px)" }}>
              <div className="chip float-a bg-amber text-[#1a1206]">Coupon live</div>
            </div>
            <div className="chip3d chip-l" style={{ transform: "translateZ(160px)" }}>
              <div className="chip float-b border border-white/20 bg-[#1c1c2a] font-medium">
                <i className="block h-2 w-2 rounded-full bg-mint" />
                Listing back live
              </div>
            </div>
            <div className="chip3d chip-r2" style={{ transform: "translateZ(200px)" }}>
              <div className="chip float-c bg-violet text-[#0b0820]">
                <Check color="currentColor" />
                A+ content published
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
