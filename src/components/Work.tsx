import { Attendify } from "./work/Attendify";
import { ConstraOps } from "./work/ConstraOps";
import { MoreProjects } from "./work/MoreProjects";
import { TRG } from "./work/TRG";
import { WeGym } from "./work/WeGym";
import { Reveal } from "./Reveal";
import type { Content } from "../content";

export function Work({ c }: { c: Content }) {
  return (
    <section id="work" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-28 md:px-8 md:py-40">
      <Reveal>
        <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl">{c.work.title}</h2>
        <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-muted">{c.work.sub}</p>
      </Reveal>

      <div className="mt-20 flex flex-col gap-28 md:gap-40">
        <ConstraOps c={c.cops} valueLabel={c.work.valueLabel} />
        <TRG c={c.trg} valueLabel={c.work.valueLabel} />
        <WeGym c={c.gym} valueLabel={c.work.valueLabel} />
        <Attendify c={c.attendify} valueLabel={c.work.valueLabel} />
        <div>
          <Reveal>
            <h3 className="mb-8 text-3xl font-semibold tracking-tight sm:text-4xl">{c.work.more}</h3>
          </Reveal>
          <MoreProjects c={c.more} valueLabel={c.work.valueLabel} />
        </div>
      </div>
    </section>
  );
}
