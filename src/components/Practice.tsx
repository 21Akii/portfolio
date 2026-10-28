"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "@phosphor-icons/react";
import { Reveal } from "./Reveal";
import type { Content } from "../content";

export function Practice({ c }: { c: Content["practice"] }) {
  const [open, setOpen] = useState(0);

  return (
    <section id="practice" className="relative overflow-hidden border-t border-line">
      {/* Motif: diagonal hatch along the left edge, behind the heading. */}
      <div
        aria-hidden
        className="motif-hatch pointer-events-none absolute inset-y-0 left-0 w-1/3 max-lg:hidden"
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-28 md:px-8 md:py-40 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl">{c.title}</h2>
            <p className="mt-4 max-w-[40ch] text-lg leading-relaxed text-muted">{c.sub}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="flex flex-col gap-3">
            {c.items.map((p, i) => {
              const isOpen = open === i;
              return (
                <li key={p.title} className="rounded-[20px] border border-line bg-surface">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-start"
                  >
                    <span className="text-lg font-medium tracking-tight">{p.title}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      className="grid size-8 shrink-0 place-items-center rounded-full border border-line text-muted"
                    >
                      <Plus size={16} weight="bold" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[60ch] px-6 pb-6 leading-relaxed text-muted">{p.body}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
