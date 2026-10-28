import { Chips } from "../Chips";
import { PhoneFrame } from "../Frames";
import { Reveal } from "../Reveal";
import { ValueNote } from "../ValueNote";
import type { Content } from "../../content";

export function WeGym({ c, valueLabel }: { c: Content["gym"]; valueLabel: string }) {
  return (
    <article id="wegym" className="scroll-mt-24">
      <div className="grid items-center gap-12 overflow-hidden rounded-[20px] border border-line bg-surface-2 p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:p-14">
        <Reveal>
          <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">{c.title}</h3>
          <p className="mt-3 text-lg leading-relaxed text-muted">{c.lead}</p>
          <p className="mt-4 leading-relaxed text-muted">{c.body}</p>
          <ValueNote label={valueLabel}>{c.value}</ValueNote>
          <Chips
            className="mt-6"
            items={["React 19", "Vite", "Zustand", "Capacitor", "Supabase", "Vercel"]}
          />
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mx-auto grid max-w-md grid-cols-3 items-start gap-3 sm:gap-4">
            <PhoneFrame src="/projects/gym-plan.webp" alt={c.phoneAlts.plan} className="mt-8" />
            <PhoneFrame src="/projects/gym-workout.webp" alt={c.phoneAlts.workout} />
            <PhoneFrame src="/projects/gym-stats.webp" alt={c.phoneAlts.stats} className="mt-14" />
          </div>
        </Reveal>
      </div>
    </article>
  );
}
