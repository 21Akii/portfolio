import { Buildings } from "@phosphor-icons/react/dist/ssr";
import { Chips } from "../Chips";
import { PhoneFrame } from "../Frames";
import { Reveal } from "../Reveal";
import { ValueNote } from "../ValueNote";
import type { Content } from "../../content";

// Two cells: HealthMate (text and three real screens of the Flutter app) and the CRM banner.
export function MoreProjects({ c, valueLabel }: { c: Content["more"]; valueLabel: string }) {
  return (
    <div className="grid gap-4">
      <Reveal>
        <div className="grid items-center gap-10 overflow-hidden rounded-[20px] border border-line bg-surface-2 p-6 sm:p-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <div>
            <h4 className="text-2xl font-semibold tracking-tight">HealthMate</h4>
            <p className="mt-1 text-sm text-muted">{c.health.tag}</p>
            <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-muted">{c.health.p1}</p>
            <p className="mt-4 max-w-[52ch] leading-relaxed text-muted">{c.health.p2}</p>
            <ValueNote label={valueLabel}>{c.health.value}</ValueNote>
            <Chips className="mt-6" items={["Flutter", "Flutter Bloc", "Random Forest", "TF-IDF"]} />
          </div>
          <div className="mx-auto grid w-full max-w-md grid-cols-3 items-start gap-3">
            <PhoneFrame src="/projects/healthmate-login.webp" alt={c.health.alts.login} className="mt-8" />
            <PhoneFrame src="/projects/healthmate-chat.webp" alt={c.health.alts.chat} />
            <PhoneFrame
              src="/projects/healthmate-conversations.webp"
              alt={c.health.alts.drawer}
              className="mt-14"
            />
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="flex flex-col gap-5 rounded-[20px] border border-dashed border-line p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <Buildings size={30} weight="regular" className="mt-0.5 shrink-0 text-accent-text" />
            <div>
              <h4 className="text-xl font-semibold tracking-tight">{c.crm.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted">{c.crm.text}</p>
            </div>
          </div>
          <Chips items={["PostgreSQL"]} />
        </div>
      </Reveal>
    </div>
  );
}
