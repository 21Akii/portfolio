"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

export type ViewerShot = {
  id: string;
  label: string;
  src: string;
  alt: string;
  note: string;
};

// A tabbed browser window over real screenshots. Used by both ConstraOps and TRG so they read the same.
export function ScreenViewer({
  shots,
  tabsAria,
  frameLabel,
  groupId,
}: {
  shots: ViewerShot[];
  tabsAria: string;
  frameLabel: string;
  groupId: string;
}) {
  const [active, setActive] = useState(shots[0].id);
  const shot = shots.find((s) => s.id === active) ?? shots[0];

  return (
    <div>
      <div role="tablist" aria-label={tabsAria} className="mb-4 flex flex-wrap gap-2">
        {shots.map((s) => {
          const selected = s.id === active;
          return (
            <button
              key={s.id}
              role="tab"
              type="button"
              aria-selected={selected}
              onClick={() => setActive(s.id)}
              className={`relative h-10 rounded-full px-5 text-sm font-medium transition active:scale-[0.98] ${
                selected ? "text-on-accent" : "text-muted hover:text-fg"
              }`}
            >
              {selected && (
                <motion.span
                  layoutId={`${groupId}-tab`}
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{s.label}</span>
            </button>
          );
        })}
      </div>

      <div className="overflow-hidden rounded-[20px] border border-line bg-surface shadow-[var(--shadow)]">
        <div className="flex h-9 items-center border-b border-line px-4 text-xs text-muted">{frameLabel}</div>
        <div role="tabpanel" className="relative aspect-[1389/868] bg-surface-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={shot.id}
              initial={{ opacity: 0, scale: 1.012 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="object-cover object-top"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted" aria-live="polite">
        {shot.note}
      </p>
    </div>
  );
}
