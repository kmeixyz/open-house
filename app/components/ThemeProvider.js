"use client";

import { useEffect } from "react";

const STORAGE_KEY = "hecc-theme";

export default function ThemeProvider({ children }) {
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
    } else if (stored === "light") {
      document.documentElement.classList.remove("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return children;
}

export function setThemeClass(dark) {
  if (dark) {
    document.documentElement.classList.add("dark");
    localStorage.setItem(STORAGE_KEY, "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem(STORAGE_KEY, "light");
  }
}

export function isDarkMode() {
  return document.documentElement.classList.contains("dark");
}
