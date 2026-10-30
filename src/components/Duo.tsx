import { ArrowUpRight, EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { Chips } from "./Chips";
import { Reveal } from "./Reveal";
import { akramContact, certifications, people, type Person } from "../lib/site";
import type { Content } from "../content";

const disc: Record<Person, string> = {
  fares: "bg-accent text-on-accent",
  akram: "bg-fg text-bg",
};

function LinkPill({ href, external, children }: { href: string; external: boolean; children: React.ReactNode }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="group inline-flex h-10 items-center gap-2 rounded-full border border-line px-4 text-sm font-medium transition hover:bg-surface-2 active:scale-[0.98]"
    >
      {children}
      {external && (
        <ArrowUpRight
          size={13}
          weight="bold"
          className="text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </a>
  );
}

function Profile({ who, c }: { who: Person; c: Content["duo"] }) {
  const p = people[who];
  const copy = c.people[who];
  const email = who === "fares" ? { href: `mailto:${p.email}`, external: false } : akramContact;

  return (
    <article className="flex h-full flex-col rounded-[20px] border border-line bg-surface p-6 sm:p-10">
      <div className="flex items-center gap-4">
        <span
          aria-hidden
          className={`grid size-14 shrink-0 place-items-center rounded-full text-lg font-semibold ${disc[who]}`}
        >
          {p.initials}
        </span>
        <div>
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{p.name}</h3>
          <p className="mt-0.5 text-muted">{copy.role}</p>
        </div>
      </div>

      <p className="mt-7 text-lg leading-relaxed">{copy.bio}</p>

      <dl className="mt-8 grid gap-5 border-t border-line pt-7">
        <div className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
          <dt className="text-sm text-muted">{c.nowLabel}</dt>
          <dd className="leading-relaxed">{copy.now}</dd>
        </div>
        <div className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
          <dt className="text-sm text-muted">{c.eduLabel}</dt>
          <dd className="leading-relaxed text-muted">{copy.edu}</dd>
        </div>
        <div className="grid gap-2 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
          <dt className="text-sm text-muted">{c.focusLabel}</dt>
          <dd>
            <Chips items={[...copy.focus]} />
          </dd>
        </div>
      </dl>

      {"certs" in copy && (
        <div className="mt-8 border-t border-line pt-7">
          <h4 className="text-sm text-muted">{copy.certs}</h4>
          <ul className="mt-3 grid gap-2">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex items-baseline justify-between gap-6 text-sm">
                <span>{cert.name}</span>
                <span className="font-mono text-muted">{cert.score}%</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-auto flex flex-wrap gap-2 pt-9">
        <LinkPill href={email.href} external={email.external}>
          <EnvelopeSimple size={16} />
          {c.email}
        </LinkPill>
        <LinkPill href={p.github} external>
          <GithubLogo size={16} />
          {c.github}
        </LinkPill>
        {p.linkedin && (
          <LinkPill href={p.linkedin} external>
            <LinkedinLogo size={16} />
            {c.linkedin}
          </LinkPill>
        )}
      </div>
    </article>
  );
}

// Two profiles of equal weight, joined by the ampersand of the studio name.
export function Duo({ c }: { c: Content["duo"] }) {
  return (
    <section id="duo" className="relative scroll-mt-20 overflow-hidden">
      <div
        aria-hidden
        className="motif-rings pointer-events-none absolute left-1/2 top-1/2 size-[56rem] -translate-x-1/2 -translate-y-1/3 max-md:hidden"
      />
      <div className="relative mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-40">
        <Reveal>
          <h2 className="text-4xl font-semibold tracking-tighter sm:text-5xl md:text-6xl">{c.title}</h2>
          <p className="mt-4 max-w-[60ch] text-lg leading-relaxed text-muted">{c.sub}</p>
        </Reveal>

        <div className="mt-16 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
          <Reveal className="h-full">
            <Profile who="fares" c={c} />
          </Reveal>
          <div
            aria-hidden
            className="grid place-items-center text-6xl font-semibold tracking-tighter text-accent-text lg:text-8xl"
          >
            &amp;
          </div>
          <Reveal delay={0.1} className="h-full">
            <Profile who="akram" c={c} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
