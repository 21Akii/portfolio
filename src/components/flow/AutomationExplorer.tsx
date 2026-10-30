"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowsHorizontal } from "@phosphor-icons/react";
import { Chips } from "../Chips";
import { WorkflowCanvas, canvasSize } from "./WorkflowCanvas";
import { workflows } from "../../lib/workflows";
import type { Content } from "../../content";

// Below this the labels get too small to read, so the canvas scrolls instead.
const MIN_SCALE = 0.8;

// Eight of the 33 builds: pick one, and its real node graph replays below.
export function AutomationExplorer({ c }: { c: Content["automations"] }) {
  const [active, setActive] = useState(0);
  const wf = workflows[active];
  const build = c.builds[active];
  const frame = useRef<HTMLDivElement>(null);
  const [frameWidth, setFrameWidth] = useState(0);

  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setFrameWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { width } = canvasSize(wf);
  const scale = frameWidth ? Math.min(1, Math.max(MIN_SCALE, frameWidth / width)) : 1;
  const overflows = frameWidth > 0 && width * scale > frameWidth + 1;

  return (
    <div>
      <div
        role="tablist"
        aria-label={c.listAria}
        className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-1 sm:-mx-10 sm:px-10 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {workflows.map((w, i) => {
          const selected = i === active;
          return (
            <button
              key={w.slug}
              id={`flow-tab-${w.slug}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls="flow-panel"
              onClick={() => setActive(i)}
              className={`relative h-10 shrink-0 rounded-full border px-4 text-sm font-medium transition active:scale-[0.98] ${
                selected ? "border-transparent text-on-accent" : "border-line text-muted hover:text-fg"
              }`}
            >
              {selected && (
                <motion.span
                  layoutId="flow-tab"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative whitespace-nowrap">{c.builds[i].title}</span>
            </button>
          );
        })}
      </div>

      <div id="flow-panel" role="tabpanel" aria-labelledby={`flow-tab-${wf.slug}`} className="mt-8 min-w-0">
        <p className="font-mono text-xs text-muted">{c.categories[wf.category]}</p>
        <h4 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">{build.title}</h4>
        <p className="mt-2 max-w-[62ch] leading-relaxed text-muted">{build.tagline}</p>

        <div className="mt-6 overflow-hidden rounded-[12px] border border-line bg-bg">
          <div ref={frame} className="canvas-dots overflow-x-auto">
            {/* Remount per build so the replay starts from the first node. */}
            <WorkflowCanvas key={wf.slug} wf={wf} names={build.nodes} c={c} scale={scale} />
          </div>
        </div>
        <p
          className={`mt-2 flex items-center gap-1.5 font-mono text-[11px] text-muted ${overflows ? "" : "invisible"}`}
        >
          <ArrowsHorizontal size={12} aria-hidden />
          {c.scrollHint}
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
          <div>
            <p className="text-sm font-medium">{c.outcomeLabel}</p>
            <p className="mt-1 max-w-[60ch] leading-relaxed text-muted">{build.outcome}</p>
            <Chips className="mt-4" items={wf.stack} />
          </div>
          <ul className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
            {build.metrics.map((m) => (
              <li
                key={m}
                className="rounded-full bg-accent/15 px-3 py-1 text-sm font-medium text-accent-text"
              >
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
