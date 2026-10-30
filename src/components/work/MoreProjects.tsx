import { Buildings } from "@phosphor-icons/react/dist/ssr";
import { Chips } from "../Chips";
import { Reveal } from "../Reveal";
import type { Content } from "../../content";

// Work in progress: the CRM banner.
export function MoreProjects({ c }: { c: Content["more"] }) {
  return (
    <Reveal>
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
  );
}
