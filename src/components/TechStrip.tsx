import {
  siDart,
  siDocker,
  siFlutter,
  siNestjs,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siRedis,
  siTailwindcss,
  siTensorflow,
  siTypescript,
} from "simple-icons";

const stack = [
  siTypescript,
  siReact,
  siNextdotjs,
  siNodedotjs,
  siNestjs,
  siFlutter,
  siDart,
  siPython,
  siTensorflow,
  siPostgresql,
  siPrisma,
  siRedis,
  siDocker,
  siTailwindcss,
];

// Logos only. Each one carries its name for screen readers.
export function TechStrip({ aria }: { aria: string }) {
  return (
    <section aria-label={aria} className="border-y border-line">
      <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-6 px-5 py-9 md:px-8">
        {stack.map((icon) => (
          <li key={icon.slug}>
            <svg
              role="img"
              aria-label={icon.title}
              viewBox="0 0 24 24"
              className="size-7 fill-muted transition hover:fill-fg"
            >
              <title>{icon.title}</title>
              <path d={icon.path} />
            </svg>
          </li>
        ))}
      </ul>
    </section>
  );
}
