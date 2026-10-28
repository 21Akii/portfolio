import { ThemeToggle } from "./ThemeToggle";
import { contactExternal, contactHref } from "../lib/site";
import type { Content } from "../content";

export function Nav({ c }: { c: Content["nav"] }) {
  const links = [
    { href: "#work", label: c.work },
    { href: "#practice", label: c.practice },
    { href: "#about", label: c.about },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/75 backdrop-blur-xl">
      <nav
        aria-label={c.aria}
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8"
      >
        <a href="#top" className="flex items-center gap-2.5 font-medium tracking-tight">
          <span className="grid size-8 place-items-center rounded-full bg-accent text-sm font-semibold text-on-accent">
            AC
          </span>
          <span className="hidden sm:inline">Akram Cherbane</span>
        </a>

        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
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
            {...(contactExternal ? { target: "_blank", rel: "noreferrer" } : {})}
            className="inline-flex h-10 items-center rounded-full bg-fg px-5 text-sm font-medium text-bg transition hover:opacity-90 active:scale-[0.98]"
          >
            {c.contact}
          </a>
        </div>
      </nav>
    </header>
  );
}
