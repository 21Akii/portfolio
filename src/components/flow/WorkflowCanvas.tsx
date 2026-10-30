"use client";

import { motion, useReducedMotion } from "motion/react";
import { NodeIcon, tileClass } from "./NodeIcon";
import type { Workflow } from "../../lib/workflows";
import type { Content } from "../../content";

const W = 176;
const H = 64;
const GX = 52;
const GY = 20;
const PAD = 20;
const R = 9;
// One column every STEP seconds, then a pause before the run replays.
const STEP = 0.5;
const REST = 1.6;

export function canvasSize(wf: Workflow) {
  return {
    width: PAD * 2 + wf.cols * W + (wf.cols - 1) * GX,
    height: PAD * 2 + wf.rows * H + (wf.rows - 1) * GY,
  };
}

const at = (col: number, row: number) => ({ x: PAD + col * (W + GX), y: PAD + row * (H + GY) });

// Output port to input port: straight on the same row, otherwise out, down (or up) on a rounded corner, and in.
function edgePath(a: Workflow["nodes"][number], b: Workflow["nodes"][number]) {
  const p = at(a[1], a[2]);
  const q = at(b[1], b[2]);
  const x1 = p.x + W;
  const y1 = p.y + H / 2;
  const x2 = q.x;
  const y2 = q.y + H / 2;
  if (y1 === y2) return `M${x1} ${y1} H${x2}`;
  const mx = x1 + GX / 2;
  const down = y2 > y1;
  const s = down ? 1 : -1;
  return `M${x1} ${y1} H${mx - R} A${R} ${R} 0 0 ${down ? 1 : 0} ${mx} ${y1 + s * R} V${y2 - s * R} A${R} ${R} 0 0 ${down ? 0 : 1} ${mx + R} ${y2} H${x2}`;
}

// A workflow drawn from its real node graph, with an n8n-style execution replay: each column lights up in turn.
export function WorkflowCanvas({
  wf,
  names,
  c,
  scale = 1,
}: {
  wf: Workflow;
  names: string[];
  c: Pick<Content["automations"], "families" | "edgeLabels">;
  scale?: number;
}) {
  const reduce = useReducedMotion();
  const { width, height } = canvasSize(wf);
  const period = wf.cols * STEP + REST;
  const edgeLabels: Record<string, string> = c.edgeLabels;

  const pulse = (col: number, duration: number) => ({
    duration,
    delay: col * STEP,
    repeat: Infinity,
    repeatDelay: period - duration,
    ease: "easeInOut" as const,
  });

  return (
    <div style={{ width: width * scale, height: height * scale }}>
      <div className="relative origin-top-left" style={{ width, height, transform: `scale(${scale})` }}>
        <svg aria-hidden className="absolute inset-0" width={width} height={height}>
          {wf.edges.map(([a, b], i) => {
            const d = edgePath(wf.nodes[a], wf.nodes[b]);
            return (
              <g key={i}>
                <path d={d} fill="none" stroke="var(--line)" strokeWidth={2} />
                {!reduce && (
                  <motion.path
                    d={d}
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 1, 1], opacity: [1, 1, 0] }}
                    transition={{ ...pulse(wf.nodes[a][1] + 0.6, STEP * 1.6), times: [0, 0.6, 1] }}
                  />
                )}
              </g>
            );
          })}
        </svg>

        {wf.nodes.map(([family, col, row], i) => {
          const { x, y } = at(col, row);
          return (
            <div
              key={i}
              className={`absolute flex items-center gap-3 border border-line bg-surface px-3 ${
                family === "trigger" ? "rounded-l-[32px] rounded-r-[12px] ps-4" : "rounded-[12px]"
              }`}
              style={{ left: x, top: y, width: W, height: H }}
            >
              <span className={`grid size-8 shrink-0 place-items-center rounded-[9px] ${tileClass(family)}`}>
                <NodeIcon family={family} className="size-4" />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[10px] uppercase tracking-wider text-muted">
                  {c.families[family]}
                </span>
                <span className="line-clamp-2 text-[13px] font-medium leading-snug">{names[i]}</span>
              </span>
              {!reduce && (
                <motion.span
                  aria-hidden
                  className={`pointer-events-none absolute -inset-px border-2 border-accent ${
                    family === "trigger" ? "rounded-l-[32px] rounded-r-[12px]" : "rounded-[12px]"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={pulse(col, STEP * 1.4)}
                />
              )}
            </div>
          );
        })}

        {/* Branch labels sit as a tab on the node the branch leads into, so a fan-out never stacks them. */}
        {wf.edges.map(([, b, label], i) => {
          if (!label) return null;
          const { x, y } = at(wf.nodes[b][1], wf.nodes[b][2]);
          return (
            <span
              key={i}
              className="absolute -translate-y-1/2 whitespace-nowrap rounded-full border border-line bg-bg px-1.5 py-px font-mono text-[10px] text-muted"
              style={{ left: x + 14, top: y }}
            >
              {edgeLabels[label] ?? label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
