import type { Content } from "../content";

export function Footer({ c }: { c: Content["footer"] }) {
  return (
    <footer className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 pb-10 text-sm text-muted md:px-8">
      <p>{c.copyright}</p>
      <a href="#top" className="transition hover:text-fg">
        {c.top}
      </a>
    </footer>
  );
}
