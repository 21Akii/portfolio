"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown } from "@phosphor-icons/react";
import { BrowserFrame, PhoneFrame } from "./Frames";
import { Owner } from "./Owner";
import { HeroFlow } from "./flow/HeroFlow";
import { contactHref } from "../lib/site";
import type { Content } from "../content";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero({ c, automations }: { c: Content["hero"]; automations: Content["automations"] }) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  // Motion values drive the parallax outside React's render cycle.
  const frameY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 36]);
  const phoneY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : -48]);
  const flowY = useTransform(scrollY, [0, 600], [0, reduce ? 0 : -24]);
  const ringsY = useTransform(scrollY, [0, 900], [0, reduce ? 0 : 90]);

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease },
  });

  return (
    <div className="relative overflow-hidden">
      {/* Motif: concentric rings and a soft accent wash behind the screenshots. */}
      <motion.div
        aria-hidden
        style={{ y: ringsY }}
        className="pointer-events-none absolute -right-48 top-1/2 size-[44rem] -translate-y-1/2 md:-right-32 md:size-[64rem] lg:-right-24"
      >
        <div className="motif-wash absolute inset-0" />
        <div className="motif-rings absolute inset-0" />
      </motion.div>

      <section
        id="top"
        className="relative mx-auto grid min-h-dvh max-w-7xl items-center gap-14 px-5 pb-16 pt-28 md:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10 lg:pt-24"
      >
        <div>
          <motion.div {...fade(0)}>
            <Owner who={["fares", "akram"]} label={c.eyebrow} />
          </motion.div>
          <motion.h1
            {...fade(0.08)}
            className="mt-5 text-5xl font-semibold leading-[1.04] tracking-tighter sm:text-6xl lg:text-[3.5rem] xl:text-[4rem]"
          >
            {c.headA}
            <span className="text-accent-text">{c.headAccent}</span>
          </motion.h1>
          <motion.p {...fade(0.18)} className="mt-6 max-w-[46ch] text-lg leading-relaxed text-muted">
            {c.sub}
          </motion.p>
          <motion.div {...fade(0.28)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-[15px] font-medium text-on-accent transition active:scale-[0.98]"
            >
              {c.ctaWork}
              <ArrowDown
                size={16}
                weight="bold"
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
            <a
              href={contactHref}
              className="inline-flex h-12 items-center rounded-full border border-line px-6 text-[15px] font-medium transition hover:bg-surface active:scale-[0.98]"
            >
              {c.ctaContact}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="relative pb-16 pl-6 pt-24 sm:pl-10 sm:pt-20 lg:pt-16"
        >
          {/* Akram's half: the ConstraOps back office and field app. */}
          <motion.div style={{ y: frameY }} className="me-[18%] sm:me-[22%]">
            <BrowserFrame
              src="/projects/cops-dashboard.webp"
              alt={c.frameAlt}
              label={c.frameLabel}
              priority
            />
            <Owner who={["akram"]} label={c.byAkram} className="mt-3 ms-[30%]" />
          </motion.div>
          <motion.div
            style={{ y: phoneY }}
            className="absolute -bottom-2 left-0 w-[26%] min-w-[96px] max-w-[190px]"
          >
            <PhoneFrame src="/projects/cops-m-home.webp" alt={c.phoneAlt} priority />
          </motion.div>
          {/* Fares's half: one of his n8n workflows, running node by node. */}
          <motion.div
            style={{ y: flowY }}
            className="absolute end-0 top-0 w-[46%] min-w-[168px] max-w-[260px] sm:w-[40%]"
          >
            <Owner who={["fares"]} label={c.byFares} className="mb-3" />
            <HeroFlow c={c} a={automations} />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
