import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

/**
 * Dev and build write to separate folders, so running `npm run build`
 * never breaks a running `npm run dev` (they used to share .next).
 *
 * @param {string} phase
 * @returns {import('next').NextConfig}
 */
export default function config(phase) {
  return {
    // Fully static site: `npm run build` writes ./out, deployable to any static host.
    output: "export",
    images: { unoptimized: true },
    trailingSlash: true,
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
  };
}
