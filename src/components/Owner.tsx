import { people, type Person } from "../lib/site";

// Who built it: one initials disc per person, overlapping when the work is shared.
// Pass label={null} for the discs alone. Fares wears the accent, Akram the foreground, so the two read apart at a glance.
const disc: Record<Person, string> = {
  fares: "bg-accent text-on-accent",
  akram: "bg-fg text-bg",
};

export function Owner({ who, label, className = "" }: { who: Person[]; label?: string | null; className?: string }) {
  const names = who.map((p) => people[p].name).join(" & ");
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex -space-x-2" aria-hidden>
        {who.map((p) => (
          <span
            key={p}
            className={`grid size-7 place-items-center rounded-full text-[11px] font-semibold ring-2 ring-bg ${disc[p]}`}
          >
            {people[p].initials}
          </span>
        ))}
      </span>
      {label === null ? <span className="sr-only">{names}</span> : <span className="whitespace-nowrap text-sm text-muted">{label ?? names}</span>}
    </span>
  );
}
