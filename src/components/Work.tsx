import { Attendify } from "./work/Attendify";
import { ConstraOps } from "./work/ConstraOps";
import { FaresMore } from "./work/FaresMore";
import { MambaTransUNet } from "./work/MambaTransUNet";
import { MoreProjects } from "./work/MoreProjects";
import { TRG } from "./work/TRG";
import { WeGym } from "./work/WeGym";
import { Chapter } from "./Chapter";
import { Reveal } from "./Reveal";
import type { Content } from "../content";

// Three parts: the product built together, then each person's own work.
export function Work({ c }: { c: Content }) {
  const v = c.work.valueLabel;
  return (
    <div id="work" className="mx-auto flex max-w-7xl flex-col gap-28 px-5 pb-28 md:gap-40 md:px-8 md:pb-40">
      <Chapter id="together" who={["fares", "akram"]} title={c.work.togetherTitle} sub={c.work.togetherSub}>
        <ConstraOps c={c.cops} valueLabel={v} creditsLabel={c.work.creditsLabel} />
      </Chapter>

      <Chapter id="fares" who={["fares"]} title={c.work.faresTitle} sub={c.work.faresSub}>
        <MambaTransUNet c={c.mamba} valueLabel={v} codeLabel={c.work.code} />
        <FaresMore c={c} />
      </Chapter>

      <Chapter id="akram" who={["akram"]} title={c.work.akramTitle} sub={c.work.akramSub}>
        <TRG c={c.trg} valueLabel={v} />
        <WeGym c={c.gym} valueLabel={v} />
        <Attendify c={c.attendify} valueLabel={v} />
        <div>
          <Reveal>
            <h3 className="mb-8 text-3xl font-semibold tracking-tight sm:text-4xl">{c.work.more}</h3>
          </Reveal>
          <MoreProjects c={c.more} />
        </div>
      </Chapter>
    </div>
  );
}
