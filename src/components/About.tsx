import { certifications } from "../lib/site";
import { Reveal } from "./Reveal";
import type { Content } from "../content";

export function About({ c }: { c: Content["about"] }) {
  return (
    <section id="about" className="relative overflow-hidden border-t border-line">
      {/* Motif: rings drifting off the right edge. */}
      <div
        aria-hidden
        className="motif-rings pointer-events-none absolute -right-72 top-10 size-[44rem] max-md:hidden"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-40">
        <Reveal>
          <h2 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tighter sm:text-5xl md:text-6xl">
            {c.heading}
          </h2>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-muted">{c.p1}</p>
          <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-muted">{c.p2}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-20">
          <h3 className="text-xl font-semibold tracking-tight">{c.certs}</h3>
          <ul className="mt-6 grid gap-x-12 gap-y-4 sm:grid-cols-2">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex items-baseline justify-between gap-6">
                <span className="text-muted">{cert.name}</span>
                <span className="font-mono text-sm">{cert.score}%</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
