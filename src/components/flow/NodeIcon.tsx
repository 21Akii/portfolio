import type { Family } from "../../lib/workflows";

// One stroke icon per node family, from the automation portfolio's drawn set.
const PATHS: Record<Family, string> = {
  trigger: "M13.5 2.5 4 13.8h5.6L8.4 21.5 18.5 9.9h-5.7z",
  ai: "M12 2.8l2.05 6.35a1 1 0 00.64.64L21 11.85l-6.3 2.05a1 1 0 00-.65.65L12 21l-2.05-6.45a1 1 0 00-.65-.65L3 11.85l6.3-2.06a1 1 0 00.65-.64z",
  data: "M4.2 6.4c0-1.6 3.5-2.9 7.8-2.9s7.8 1.3 7.8 2.9-3.5 2.9-7.8 2.9-7.8-1.3-7.8-2.9zM4.2 6.4v11.2c0 1.6 3.5 2.9 7.8 2.9s7.8-1.3 7.8-2.9V6.4M4.2 12c0 1.6 3.5 2.9 7.8 2.9s7.8-1.3 7.8-2.9",
  out: "M21 3.4L3.4 11.2l7.2 2.2 2.2 7.2zM10.6 13.4L21 3.4",
  logic: "M4.4 3.6v6.1a3 3 0 003 3h9.1M4.4 20.4v-6.1a3 3 0 013-3h9.1M14.4 8.6l3.1 4-3.1 4",
  http: "M12 3a9 9 0 100 18 9 9 0 000-18zM3.2 12h17.6M12 3a13.5 9 0 000 18 13.5 9 0 000-18z",
};

export function NodeIcon({ family, className = "" }: { family: Family; className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className}>
      <path
        d={PATHS[family]}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Model nodes carry the accent: they are where the AI does the work.
export function tileClass(family: Family) {
  return family === "ai" ? "bg-accent text-on-accent" : "bg-surface-2 text-muted";
}
