"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "@phosphor-icons/react";

type Theme = "light" | "dark";

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

export function ThemeToggle({ toLight, toDark }: { toLight: string; toDark: string }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const saved = document.documentElement.dataset.theme;
    setTheme(saved === "light" || saved === "dark" ? saved : systemTheme());
  }, []);

  function toggle() {
    const next: Theme = (theme ?? systemTheme()) === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage can be blocked; the toggle still works for this visit */
    }
    setTheme(next);
  }

  const Icon = theme === "light" ? Moon : Sun;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "light" ? toDark : toLight}
      className="grid size-10 place-items-center rounded-full border border-line text-muted transition hover:text-fg active:scale-95"
    >
      <Icon size={18} weight="regular" />
    </button>
  );
}
