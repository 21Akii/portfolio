import { ArrowUpRight, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import { contactExternal, contactHref, site } from "../lib/site";
import { Reveal } from "./Reveal";
import type { Content } from "../content";

export function Contact({ c }: { c: Content["contact"] }) {
  return (
    <section id="contact" className="px-5 pb-16 md:px-8">
      <Reveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[20px] bg-accent px-7 py-16 text-on-accent sm:px-12 md:py-24">
          {/* Motif: rings in the card's own ink colour. */}
          <div
            aria-hidden
            className="motif-rings-ink pointer-events-none absolute -top-24 size-[34rem] ltr:-right-24 rtl:-left-24 md:size-[44rem] md:ltr:-right-10 md:rtl:-left-10"
          />
          <h2 className="relative max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tighter sm:text-5xl md:text-6xl">
            {c.heading}
          </h2>
          <p className="relative mt-5 max-w-[48ch] text-lg leading-snug">{c.text}</p>
          <div className="relative mt-10 flex flex-wrap items-center gap-3">
            <a
              href={contactHref}
              {...(contactExternal ? { target: "_blank", rel: "noreferrer" } : {})}
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-[#11140a] px-6 text-[15px] font-medium text-[#f3f4f0] transition active:scale-[0.98]"
            >
              {c.cta}
              <ArrowUpRight
                size={16}
                weight="bold"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-on-accent/40 px-6 text-[15px] font-medium transition hover:bg-on-accent/10 active:scale-[0.98]"
            >
              <GithubLogo size={18} weight="regular" />
              {c.github}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
