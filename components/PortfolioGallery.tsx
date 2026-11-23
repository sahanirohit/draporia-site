"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { PortfolioProject } from "@/content/portfolio";

export default function PortfolioGallery({ project }: { project: PortfolioProject }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const count = project.images.length;

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = useCallback((d: number) => setIndex((i) => (i + d + count) % count), [count]);

  useEffect(() => {
    const dlg = dialogRef.current;
    if (!dlg) return;
    const onKey = (e: KeyboardEvent) => {
      if (!dlg.open) return;
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    dlg.addEventListener("keydown", onKey);
    return () => dlg.removeEventListener("keydown", onKey);
  }, [step]);

  const [first, ...rest] = project.images;
  const current = project.images[index];

  return (
    <>
      <div className="pf-grid">
        <button type="button" className="pf-thumb pf-main" onClick={() => open(0)} aria-label={`Open ${project.brand} module 1 of ${count}`}>
          <Image src={first.src} alt={first.alt} width={first.width} height={first.height} sizes="(max-width: 900px) 100vw, 760px" priority />
        </button>
        {rest.map((im, i) => (
          <button
            key={im.src}
            type="button"
            className="pf-thumb"
            onClick={() => open(i + 1)}
            aria-label={`Open ${project.brand} module ${i + 2} of ${count}`}
          >
            <Image src={im.src} alt={im.alt} width={im.width} height={im.height} sizes="(max-width: 900px) 50vw, 380px" />
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="pf-dialog"
        aria-label={`${project.brand} A+ modules`}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        <div className="pf-dialog-inner">
          <div className="flex items-center justify-between gap-4 px-1 pb-3 text-[14px] text-muted">
            <span>
              {project.brand} · Module {index + 1} of {count}
            </span>
            <button type="button" className="pf-icon-btn" onClick={close} aria-label="Close">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4l10 10M14 4 4 14" /></svg>
            </button>
          </div>
          <Image
            key={current.src}
            src={current.src}
            alt={current.alt}
            width={current.width}
            height={current.height}
            sizes="(max-width: 1300px) 94vw, 1200px"
            className="pf-full"
          />
          <div className="flex items-center justify-between gap-4 pt-3">
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => step(-1)}>
              Previous
            </button>
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => step(1)}>
              Next
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
