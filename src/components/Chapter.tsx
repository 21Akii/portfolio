import { Owner } from "./Owner";
import { Reveal } from "./Reveal";
import type { Person } from "../lib/site";

// Opens a part of the work: whose it is, then what it covers.
export function Chapter({
  id,
  who,
  title,
  sub,
  children,
}: {
  id: string;
  who: Person[];
  title: string;
  sub: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line pt-16 md:pt-24">
      <Reveal>
        <div aria-hidden>
          <Owner who={who} label={null} />
        </div>
        <h2 className="mt-5 text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl">{title}</h2>
        <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-muted">{sub}</p>
      </Reveal>
      <div className="mt-16 flex flex-col gap-28 md:mt-20 md:gap-40">{children}</div>
    </section>
  );
}
