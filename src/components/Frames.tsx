import Image from "next/image";
import { BatteryFull, CellSignalFull, WifiHigh } from "@phosphor-icons/react/dist/ssr";
import phoneMeta from "../lib/phone-meta.json";

// Real screenshots only: these frames just give them a window / device edge.

export function BrowserFrame({
  src,
  alt,
  label,
  priority = false,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  src: string;
  alt: string;
  label: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-[20px] border border-line bg-surface shadow-[var(--shadow)] ${className}`}
    >
      <div className="flex h-9 items-center border-b border-line px-4 text-xs text-muted">{label}</div>
      <Image
        src={src}
        alt={alt}
        width={1800}
        height={1125}
        sizes={sizes}
        priority={priority}
        className="block h-auto w-full"
      />
    </figure>
  );
}

type PhoneMeta = {
  width: number;
  height: number;
  padTop: number;
  padBottom: number;
  topDark: boolean;
  bottomDark: boolean;
};

// Written by scripts/prepare-assets.mjs: every phone image has a safe area padded on in the app's own
// edge colours, and this records its size and whether each edge is dark (so the icons stay readable).
const phones = phoneMeta as Record<string, PhoneMeta>;

// All sizes below use container-query units (cqw), so the status bar scales with the phone.
export function PhoneFrame({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const m = phones[src];
  const topInk = m?.topDark ? "#ffffff" : "#0b0c0d";
  const bottomInk = m?.bottomDark ? "#ffffff" : "#0b0c0d";

  return (
    <div
      className={`overflow-hidden rounded-[2rem] border-[6px] border-[#1c1f22] bg-black shadow-[var(--shadow)] ${className}`}
    >
      <div className="@container relative">
        <Image
          src={src}
          alt={alt}
          width={m?.width ?? 640}
          height={m?.height ?? 1385}
          sizes="(min-width: 1024px) 18vw, 40vw"
          priority={priority}
          className="block h-auto w-full"
        />
        {m && (
          <>
            {/* Status bar: time on the left, signal, wifi and battery on the right. */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between"
              style={{ height: `${(m.padTop / m.height) * 100}%`, padding: "0 7.5cqw", color: topInk }}
            >
              <span style={{ fontSize: "3.8cqw", fontWeight: 600, letterSpacing: "-0.01em" }}>9:41</span>
              <span className="flex items-center" style={{ gap: "1.3cqw" }}>
                <CellSignalFull weight="fill" style={{ width: "4.3cqw", height: "4.3cqw" }} />
                <WifiHigh weight="bold" style={{ width: "4.6cqw", height: "4.6cqw" }} />
                <BatteryFull weight="fill" style={{ width: "5.4cqw", height: "5.4cqw" }} />
              </span>
            </div>
            {/* Dynamic island. */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full bg-black"
              style={{ top: "2.4cqw", width: "26cqw", height: "7cqw" }}
            />
            {/* Home indicator. */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-full"
              style={{ bottom: "2.2cqw", width: "33cqw", height: "1.3cqw", background: bottomInk, opacity: 0.85 }}
            />
          </>
        )}
      </div>
    </div>
  );
}
