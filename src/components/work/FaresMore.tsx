import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Chips } from "../Chips";
import { Reveal } from "../Reveal";
import { AutomationExplorer } from "../flow/AutomationExplorer";
import { repos } from "../../lib/site";
import type { Content } from "../../content";

function CodeLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-text underline-offset-4 hover:underline"
    >
      {label}
      <ArrowUpRight
        size={13}
        weight="bold"
        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}

// Six columns: the support agent stat (2) beside the DDoS internship (4), then the automations explorer (6).
export function FaresMore({ c }: { c: Content }) {
  const { support, ddos, automations } = c;
  return (
    <Reveal>
      <div className="grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-6">
        <article className="flex flex-col justify-between rounded-[20px] bg-accent p-6 text-on-accent sm:p-8 md:col-span-2">
          <div>
            <p className="font-mono text-6xl font-semibold tracking-tighter sm:text-7xl">{support.stat}</p>
            <p className="mt-2 text-sm font-medium">{support.statLabel}</p>
          </div>
          <div className="mt-12">
            <h3 className="text-xl font-semibold tracking-tight">{support.title}</h3>
            <p className="mt-1 text-sm opacity-75">{support.tag}</p>
            <p className="mt-3 leading-relaxed">{support.text}</p>
          </div>
        </article>

        <article className="flex flex-col rounded-[20px] border border-line bg-surface p-6 sm:p-8 md:col-span-4">
          <h3 className="text-2xl font-semibold tracking-tight">{ddos.title}</h3>
          <p className="mt-1 text-sm text-muted">{ddos.tag}</p>
          <p className="mt-4 max-w-[62ch] leading-relaxed text-muted">{ddos.text}</p>
          <Chips className="mt-6" items={["Python", "scikit-learn", "Isolation Forest", "pandas", "FortiGate", "Syslog"]} />
          <div className="mt-auto">
            <CodeLink href={repos.ddos} label={c.work.code} />
          </div>
        </article>

        <article className="min-w-0 rounded-[20px] border border-line bg-surface-2 p-6 sm:p-10 md:col-span-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">{automations.title}</h3>
              <p className="mt-1 text-sm text-muted">{automations.tag}</p>
              <p className="mt-4 leading-relaxed text-muted">{automations.text}</p>
              <Chips className="mt-6" items={["n8n", "Make.com", "Claude", "Apify", "Google Sheets", "ClickUp"]} />
              <CodeLink href={repos.automations} label={c.work.code} />
            </div>
            <dl className="grid content-start gap-px overflow-hidden rounded-[12px] border border-line bg-line sm:grid-cols-3 lg:grid-cols-1">
              {automations.results.map((r) => (
                <div key={r.value} className="bg-surface p-5">
                  <dt className="sr-only">{r.label}</dt>
                  <dd>
                    <span className="font-mono text-3xl font-semibold tracking-tighter text-accent-text">{r.value}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">{r.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-12 border-t border-line pt-10">
            <AutomationExplorer c={automations} />
          </div>
        </article>
      </div>
    </Reveal>
  );
}
