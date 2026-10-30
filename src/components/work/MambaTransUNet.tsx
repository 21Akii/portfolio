import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { Chips } from "../Chips";
import { Reveal } from "../Reveal";
import { ValueNote } from "../ValueNote";
import { repos } from "../../lib/site";
import type { Content } from "../../content";

// Figures and numbers come from the dissertation (tables 7.2 and 7.4, CAMUS dataset).
// The story and the numbers side by side, then the architecture at full width so its labels stay readable.
export function MambaTransUNet({
  c,
  valueLabel,
  codeLabel,
}: {
  c: Content["mamba"];
  valueLabel: string;
  codeLabel: string;
}) {
  return (
    <article id="mamba" className="scroll-mt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <Reveal>
          <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">Mamba-TransUNet</h3>
          <p className="mt-2 text-sm text-muted">{c.tag}</p>
          <p className="mt-5 text-lg leading-relaxed text-muted">{c.lead}</p>
          <p className="mt-4 leading-relaxed text-muted">{c.body}</p>
          <ValueNote label={valueLabel}>{c.value}</ValueNote>
          <Chips
            className="mt-6"
            items={["PyTorch", "Mamba (SSM)", "TransUNet", "nnU-Net", "CAMUS", "Python"]}
          />
          <a
            href={repos.mamba}
            target="_blank"
            rel="noreferrer"
            className="group mt-8 inline-flex h-11 items-center gap-2 rounded-full border border-line px-5 text-sm font-medium transition hover:bg-surface active:scale-[0.98]"
          >
            {codeLabel}
            <ArrowUpRight
              size={14}
              weight="bold"
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[20px] border border-line bg-surface p-6 shadow-[var(--shadow)] sm:p-8">
            <dl className="grid grid-cols-2 gap-4">
              {c.highlights.map((h) => (
                <div key={h.label} className="rounded-[12px] bg-surface-2 p-4 sm:p-5">
                  <dt className="sr-only">{h.label}</dt>
                  <dd>
                    <span className="block font-mono text-4xl font-semibold tracking-tighter text-accent-text sm:text-5xl">
                      {h.value}
                    </span>
                    <span className="mt-1 block text-sm text-muted">{h.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
            <h4 className="mt-8 text-xl font-semibold tracking-tight">{c.tableTitle}</h4>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-line text-muted">
                    <th scope="col" className="pb-3 pe-4 font-normal">
                      {c.colMetric}
                    </th>
                    <th scope="col" className="pb-3 pe-4 text-end font-normal">
                      TransUNet
                    </th>
                    <th scope="col" className="pb-3 text-end font-medium text-accent-text">
                      Mamba-TransUNet
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {c.rows.map((r) => (
                    <tr key={r.metric} className="border-b border-line last:border-0">
                      <th scope="row" className="py-3.5 pe-4 font-normal">
                        {r.metric}
                      </th>
                      <td className="py-3.5 pe-4 text-end font-mono tabular-nums text-muted">{r.before}</td>
                      <td className="py-3.5 text-end font-mono font-semibold tabular-nums">{r.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-12">
        <figure className="overflow-hidden rounded-[20px] border border-line bg-surface">
          <div className="flex h-9 items-center border-b border-line px-4 text-xs text-muted">
            {c.archLabel}
          </div>
          {/* The diagram is drawn on white, so it keeps a white mat in both themes. */}
          <div className="bg-white p-3 sm:p-6 lg:p-10">
            <Image
              src="/projects/mamba-architecture.webp"
              alt={c.archAlt}
              width={1800}
              height={997}
              sizes="(min-width: 1100px) 1024px, 100vw"
              className="mx-auto block h-auto w-full max-w-5xl"
            />
          </div>
        </figure>
      </Reveal>
    </article>
  );
}
