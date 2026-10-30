import Image from "next/image";
import { Chips } from "../Chips";
import { Owner } from "../Owner";
import { PhoneFrame } from "../Frames";
import { Reveal } from "../Reveal";
import { ScreenViewer, type ViewerShot } from "../ScreenViewer";
import { ValueNote } from "../ValueNote";
import type { Content } from "../../content";

// Every image is a capture of the running label prototype (web app and Flutter field app, demo data).
const SRC: Record<string, string> = {
  dashboard: "/projects/cops-dashboard.webp",
  tenders: "/projects/cops-tenders.webp",
  wizard: "/projects/cops-tender-wizard.webp",
  staff: "/projects/cops-staff.webp",
  equipment: "/projects/cops-equipment.webp",
  planning: "/projects/cops-equipment-planning.webp",
  fleet: "/projects/cops-equipment-dashboard.webp",
  machine: "/projects/cops-equipment-cockpit.webp",
};

function RoleGroup({ title, roles }: { title: string; roles: string[] }) {
  return (
    <div>
      <p className="mb-2 text-sm text-muted">{title}</p>
      <Chips items={roles} />
    </div>
  );
}

// Credits split the joint work between the two of us. Six columns: OCR (6), field app (6), three tiles of two (compliance, equipment, stat), then access (6).
export function ConstraOps({
  c,
  valueLabel,
  creditsLabel,
}: {
  c: Content["cops"];
  valueLabel: string;
  creditsLabel: string;
}) {
  const shots: ViewerShot[] = c.shots.map((s) => ({ ...s, src: SRC[s.id] }));

  return (
    <article id="constraops" className="scroll-mt-24">
      <Reveal>
        <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">ConstraOps</h3>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">{c.intro}</p>
        <Chips
          className="mt-6"
          items={["Next.js 16", "NestJS 10", "Flutter", "Prisma 5", "PostgreSQL 16", "Redis", "MinIO", "Docker"]}
        />
        <ValueNote label={valueLabel}>{c.value}</ValueNote>
        <div className="mt-8 max-w-3xl">
          <p className="text-sm text-muted">{creditsLabel}</p>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {c.credits.map((cr) => (
              <li key={cr.who} className="rounded-[20px] border border-line bg-surface p-5">
                <Owner who={[cr.who === "Fares" ? "fares" : "akram"]} />
                <p className="mt-3 text-sm leading-relaxed text-muted">{cr.what}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-10">
        <ScreenViewer shots={shots} tabsAria={c.tabsAria} frameLabel={c.frameLabel} groupId="cops" />
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <div className="grid gap-4 md:grid-cols-6">
          <div className="rounded-[20px] border border-line bg-surface p-6 sm:p-8 md:col-span-6">
            <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
              <div>
                <h4 className="text-xl font-semibold tracking-tight">{c.ocrTitle}</h4>
                <p className="mt-3 leading-relaxed text-muted">{c.ocrText}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.ocrNote}</p>
              </div>
              <div className="grid items-start gap-4 sm:grid-cols-[0.8fr_1.1fr]">
                <figure>
                  <div className="overflow-hidden rounded-[12px] border border-line bg-surface-2">
                    <Image
                      src="/projects/cops-ocr-employee.webp"
                      alt={c.ocrAlts.employee}
                      width={757}
                      height={646}
                      sizes="(min-width: 1024px) 28vw, 100vw"
                      className="block h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-2 text-sm text-muted">{c.ocrCaptions.employee}</figcaption>
                </figure>
                <figure>
                  <div className="overflow-hidden rounded-[12px] border border-line bg-surface-2">
                    <Image
                      src="/projects/cops-ocr-dqe.webp"
                      alt={c.ocrAlts.dqe}
                      width={1003}
                      height={693}
                      sizes="(min-width: 1024px) 38vw, 100vw"
                      className="block h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-2 text-sm text-muted">{c.ocrCaptions.dqe}</figcaption>
                </figure>
              </div>
            </div>
          </div>

          <div className="grid items-center gap-8 overflow-hidden rounded-[20px] border border-line bg-surface-2 p-6 sm:p-8 md:col-span-6 md:grid-cols-[1fr_1.2fr]">
            <div>
              <h4 className="text-xl font-semibold tracking-tight">{c.fieldTitle}</h4>
              <p className="mt-2 leading-relaxed text-muted">{c.fieldText}</p>
            </div>
            <div className="mx-auto grid w-full max-w-md grid-cols-3 items-start gap-3">
              <PhoneFrame src="/projects/cops-m-home.webp" alt={c.phoneAlts.home} className="mt-6" />
              <PhoneFrame src="/projects/cops-m-site.webp" alt={c.phoneAlts.site} />
              <PhoneFrame src="/projects/cops-m-equipment.webp" alt={c.phoneAlts.equipment} className="mt-12" />
            </div>
          </div>

          <div className="rounded-[20px] border border-line bg-surface p-6 md:col-span-2">
            <h4 className="font-medium">{c.complianceTitle}</h4>
            <p className="mt-2 leading-relaxed text-muted">{c.complianceText}</p>
          </div>

          <div className="rounded-[20px] border border-line bg-surface-2 p-6 md:col-span-2">
            <h4 className="font-medium">{c.equipTitle}</h4>
            <p className="mt-2 leading-relaxed text-muted">{c.equipText}</p>
          </div>

          <div className="flex flex-col justify-between rounded-[20px] bg-accent p-6 text-on-accent md:col-span-2">
            <p className="font-mono text-6xl font-semibold tracking-tighter">38</p>
            <p className="mt-6 text-sm font-medium leading-snug">{c.statLabel}</p>
          </div>

          <div className="rounded-[20px] border border-line bg-surface p-6 sm:p-8 md:col-span-6">
            <h4 className="text-xl font-semibold tracking-tight">{c.accessTitle}</h4>
            <div className="mt-3 grid gap-8 lg:grid-cols-2 lg:gap-10">
              <div>
                <p className="leading-relaxed text-muted">{c.accessP1}</p>
                <p className="mt-3 leading-relaxed text-muted">{c.accessP2}</p>
              </div>
              <div className="flex flex-col gap-4">
                <RoleGroup title={c.groupCompany} roles={c.rolesCompany} />
                <RoleGroup title={c.groupClient} roles={c.rolesClient} />
                <RoleGroup title={c.groupSupplier} roles={c.rolesSupplier} />
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted">{c.footnote}</p>
      </Reveal>
    </article>
  );
}
