import { ThemeToggle } from "./ThemeToggle";
import { contactHref, site } from "../lib/site";
import type { Content } from "../content";

export function Nav({ c }: { c: Content["nav"] }) {
  const links = [
    { href: "#duo", label: c.duo },
    { href: "#together", label: c.together },
    { href: "#fares", label: c.fares },
    { href: "#akram", label: c.akram },
    { href: "#practice", label: c.practice },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/75 backdrop-blur-xl">
      <nav
        aria-label={c.aria}
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8"
      >
        <a href="#top" aria-label={site.name} className="flex items-center gap-2.5 font-medium tracking-tight">
          {/* Monogram: two overlapping discs, one per person, the same pairing as the owner badges. */}
          <span aria-hidden className="flex -space-x-2.5">
            <span className="grid size-8 place-items-center rounded-full bg-accent text-[11px] font-semibold text-on-accent ring-2 ring-bg">
              N
            </span>
            <span className="grid size-8 place-items-center rounded-full bg-fg text-[11px] font-semibold text-bg ring-2 ring-bg">
              C
            </span>
          </span>
          <span className="hidden sm:inline">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm text-muted lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <a
            href={c.switchHref}
            aria-label={c.switchAria}
            hrefLang={c.switchLabel.toLowerCase()}
            className="grid h-10 min-w-10 place-items-center rounded-full border border-line px-3 text-sm font-medium text-muted transition hover:text-fg active:scale-95"
          >
            {c.switchLabel}
          </a>
          <ThemeToggle toLight={c.toLight} toDark={c.toDark} />
          <a
            href={contactHref}
            className="inline-flex h-10 items-center rounded-full bg-fg px-5 text-sm font-medium text-bg transition hover:opacity-90 active:scale-[0.98]"
          >
            {c.contact}
          </a>
        </div>
      </nav>
    </header>
  );
}
