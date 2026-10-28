import { Chips } from "../Chips";
import { PhoneFrame } from "../Frames";
import { Reveal } from "../Reveal";
import { ScreenViewer, type ViewerShot } from "../ScreenViewer";
import { ValueNote } from "../ValueNote";
import type { Content } from "../../content";

// Every image is a capture of the running demo build (web ERP and Flutter driver app, seeded demo data).
const SRC: Record<string, string> = {
  dashboard: "/projects/trg-dashboard.webp",
  deliveries: "/projects/trg-deliveries.webp",
  fuel: "/projects/trg-fuel.webp",
  equipment: "/projects/trg-fleet.webp",
  vehicle: "/projects/trg-vehicle.webp",
  parts: "/projects/trg-inventory.webp",
  safety: "/projects/trg-hse.webp",
  cash: "/projects/trg-treasury.webp",
  arabic: "/projects/trg-arabic.webp",
};

// Same structure as ConstraOps: a tabbed viewer, then a six-column grid: driver app (6), three tiles of two, access (6).
export function TRG({ c, valueLabel }: { c: Content["trg"]; valueLabel: string }) {
  const shots: ViewerShot[] = c.shots.map((s) => ({ ...s, src: SRC[s.id] }));

  return (
    <article id="trg" className="scroll-mt-24">
      <Reveal>
        <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">TRG</h3>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">{c.intro}</p>
        <Chips
          className="mt-6"
          items={["Next.js 16", "NestJS 11", "PostgreSQL 17", "Prisma 6", "Flutter", "Leaflet"]}
        />
        <ValueNote label={valueLabel}>{c.value}</ValueNote>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <ScreenViewer shots={shots} tabsAria={c.tabsAria} frameLabel={c.frameLabel} groupId="trg" />
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <div className="grid gap-4 md:grid-cols-6">
          <div className="grid items-center gap-8 overflow-hidden rounded-[20px] border border-line bg-surface-2 p-6 sm:p-8 md:col-span-6 md:grid-cols-[1fr_1.2fr]">
            <div>
              <h4 className="text-xl font-semibold tracking-tight">{c.driverTitle}</h4>
              <p className="mt-2 leading-relaxed text-muted">{c.driverText}</p>
            </div>
            <div className="mx-auto grid w-full max-w-xs grid-cols-2 items-start gap-3">
              <PhoneFrame src="/projects/trg-m-incident.webp" alt={c.phoneAlts.incident} />
              <PhoneFrame
                src="/projects/trg-m-notifications.webp"
                alt={c.phoneAlts.notifications}
                className="mt-8"
              />
            </div>
          </div>

          <div className="rounded-[20px] border border-line bg-surface p-6 md:col-span-2">
            <h4 className="font-medium">{c.langTitle}</h4>
            <p className="mt-2 leading-relaxed text-muted">{c.langText}</p>
          </div>

          <div className="rounded-[20px] border border-line bg-surface-2 p-6 md:col-span-2">
            <h4 className="font-medium">{c.equipTitle}</h4>
            <p className="mt-2 leading-relaxed text-muted">{c.equipText}</p>
          </div>

          <div className="flex flex-col justify-between rounded-[20px] bg-accent p-6 text-on-accent md:col-span-2">
            <p className="font-mono text-6xl font-semibold tracking-tighter">7</p>
            <p className="mt-6 text-sm font-medium leading-snug">{c.statLabel}</p>
          </div>

          <div className="rounded-[20px] border border-line bg-surface p-6 sm:p-8 md:col-span-6">
            <h4 className="text-xl font-semibold tracking-tight">{c.accessTitle}</h4>
            <div className="mt-3 grid gap-8 lg:grid-cols-2 lg:gap-10">
              <div>
                <p className="leading-relaxed text-muted">{c.accessP1}</p>
                <p className="mt-3 leading-relaxed text-muted">{c.accessP2}</p>
              </div>
              <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {c.roles.map((r) => (
                  <div key={r.role}>
                    <dt className="font-medium">{r.role}</dt>
                    <dd className="text-sm leading-snug text-muted">{r.can}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted">{c.footnote}</p>
      </Reveal>
    </article>
  );
}
