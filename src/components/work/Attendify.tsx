import Image from "next/image";
import { Chips } from "../Chips";
import { Reveal } from "../Reveal";
import { ValueNote } from "../ValueNote";
import type { Content } from "../../content";

export function Attendify({ c, valueLabel }: { c: Content["attendify"]; valueLabel: string }) {
  return (
    <article id="attendify" className="scroll-mt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <div className="relative pb-12 pr-4 sm:pr-10">
            <figure className="overflow-hidden rounded-[20px] border border-line bg-surface shadow-[var(--shadow)]">
              <div className="flex h-9 items-center border-b border-line px-4 text-xs text-muted">
                {c.frameLabel}
              </div>
              <Image
                src="/projects/attendify-rooms.webp"
                alt={c.roomsAlt}
                width={1600}
                height={844}
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="block h-auto w-full"
              />
            </figure>
            <figure className="absolute -bottom-0 right-0 w-[62%] overflow-hidden rounded-[14px] border border-line bg-surface shadow-[var(--shadow)]">
              <Image
                src="/projects/attendify-add-person.webp"
                alt={c.addAlt}
                width={1600}
                height={860}
                sizes="(min-width: 1024px) 34vw, 62vw"
                className="block h-auto w-full"
              />
            </figure>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">Attendify</h3>
          <p className="mt-2 text-sm text-muted">{c.tag}</p>
          <p className="mt-5 text-lg leading-relaxed text-muted">{c.lead}</p>
          <p className="mt-4 leading-relaxed text-muted">{c.body}</p>
          <ValueNote label={valueLabel}>{c.value}</ValueNote>
          <dl className="mt-8 grid grid-cols-3 gap-4">
            {c.facts.map((f) => (
              <div key={f.label} className="flex flex-col-reverse justify-end">
                <dt className="mt-1 text-xs leading-snug text-muted">{f.label}</dt>
                <dd className="font-mono text-3xl font-semibold tracking-tight sm:text-4xl">{f.value}</dd>
              </div>
            ))}
          </dl>
          <Chips
            className="mt-8"
            items={["Python", "YOLOv8", "TensorFlow", "VGGFace2", "PyQt6", "MongoDB"]}
          />
        </Reveal>
      </div>
    </article>
  );
}
