import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { MotionProvider } from "./MotionProvider";
import { getContent, type Lang } from "../content";
import type { Metadata, Viewport } from "next";
import "../app/globals.css";

// Applies a saved theme before first paint so there is no flash.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export const rootViewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0c0d" },
    { media: "(prefers-color-scheme: light)", color: "#f3f4f0" },
  ],
};

export function rootMetadata(lang: Lang): Metadata {
  const { meta } = getContent(lang);
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.ogDescription,
      type: "website",
      locale: lang === "fr" ? "fr_FR" : "en_US",
    },
  };
}

// Two root layouts (French at "/" and English at "/en/") share this shell, so each page gets the right <html lang>.
export function RootShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const { htmlLang } = getContent(lang);
  return (
    <html lang={htmlLang} className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="grain min-h-dvh antialiased">
        <div aria-hidden className="motif-dots pointer-events-none fixed inset-0 -z-10" />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
