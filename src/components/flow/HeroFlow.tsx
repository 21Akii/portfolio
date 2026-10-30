"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check } from "@phosphor-icons/react";
import { NodeIcon, tileClass } from "./NodeIcon";
import { workflows } from "../../lib/workflows";
import type { Content } from "../../content";

// Short, single-path builds that read well as a vertical run.
const PICKS = ["invoice-parser", "stripe-clickup-onboarding", "proposal-generator"];
const ROWS = 6;
const TICK = 700;
// Ticks spent on the finished run before moving to the next build.
const HOLD = 4;

const ease = [0.16, 1, 0.3, 1] as const;

// The hero's AI half: a real n8n workflow running node by node, then the next one.
export function HeroFlow({ c, a }: { c: Content["hero"]; a: Content["automations"] }) {
  const reduce = useReducedMotion();
  const [{ pick, step }, setRun] = useState({ pick: 0, step: 0 });

  const index = workflows.findIndex((w) => w.slug === PICKS[pick]);
  const wf = workflows[index];
  const build = a.builds[index];
  // The main path is the top row of the graph; branches below it are left out of this compact view.
  const path = wf.nodes
    .map((n, i) => ({ family: n[0], row: n[2], name: build.nodes[i] }))
    .filter((n) => n.row === 0);
  const current = reduce ? path.length : step;
  const done = current >= path.length;

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setRun((r) =>
        r.step < path.length + HOLD
          ? { ...r, step: r.step + 1 }
          : { pick: (r.pick + 1) % PICKS.length, step: 0 },
      );
    }, TICK);
    return () => clearInterval(id);
  }, [reduce, path.length]);

  return (
    <figure className="overflow-hidden rounded-[20px] border border-line bg-surface shadow-[var(--shadow)]">
      <div className="flex h-9 items-center gap-2 border-b border-line px-4 text-xs text-muted">
        <span className="relative flex size-2 shrink-0">
          {!reduce && <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-60" />}
          <span className="relative size-2 rounded-full bg-accent" />
        </span>
        <span className="truncate">{c.flowTitle}</span>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={wf.slug}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease }}
          className="p-3 sm:p-4"
        >
          <figcaption className="line-clamp-2 min-h-[2lh] text-[13px] font-semibold leading-snug tracking-tight sm:text-sm">
            {build.title}
          </figcaption>

          <ol className="mt-3" style={{ minHeight: `${ROWS * 2.125}rem` }}>
            {path.map((n, i) => {
              const state = i < current ? "done" : i === current ? "active" : "idle";
              return (
                <li key={i} className="relative flex h-[2.125rem] items-center gap-2.5">
                  {/* Connector to the next node, filled once this one has run. */}
                  {i < path.length - 1 && (
                    <span
                      aria-hidden
                      className="absolute start-[11px] top-[26px] h-[12px] w-0.5 rounded-full bg-line"
                    >
                      <motion.span
                        className="absolute inset-0 origin-top rounded-full bg-accent"
                        initial={false}
                        animate={{ scaleY: state === "done" ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                  )}
                  <span
                    className={`relative grid size-6 shrink-0 place-items-center rounded-[7px] transition duration-300 ${
                      state === "idle" ? "bg-surface-2 text-muted opacity-50" : tileClass(n.family)
                    } ${state === "active" ? "ring-2 ring-accent ring-offset-2 ring-offset-surface" : ""}`}
                  >
                    <NodeIcon family={n.family} className="size-3.5" />
                  </span>
                  <span
                    className={`truncate text-[11px] transition-colors duration-300 sm:text-xs ${
                      state === "idle" ? "text-muted" : "text-fg"
                    }`}
                  >
                    {n.name}
                  </span>
                </li>
              );
            })}
          </ol>
        </motion.div>
      </AnimatePresence>

      <div
        className="flex h-9 items-center gap-1.5 border-t border-line px-4 text-[11px] sm:text-xs"
        aria-live="off"
      >
        {done ? (
          <>
            <Check size={12} weight="bold" className="shrink-0 text-accent-text" />
            <span className="truncate font-medium text-accent-text">{build.metrics[0]}</span>
          </>
        ) : (
          <span className="truncate font-mono text-muted">
            {c.flowRunning} {Math.min(current + 1, path.length)}/{path.length}
          </span>
        )}
      </div>
    </figure>
  );
}
