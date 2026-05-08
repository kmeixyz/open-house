"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "../lib/translations";
import { LANG_STORAGE_KEY } from "../lib/languages";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      if (saved && translations[saved]) setLangState(saved);
    } catch {}
  }, []);

  useEffect(() => {
    const t = translations[lang] || translations.en;
    document.documentElement.dir = t.dir || "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  function setLang(id) {
    if (!translations[id]) return;
    setLangState(id);
    try { localStorage.setItem(LANG_STORAGE_KEY, id); } catch {}
  }

  const t = translations[lang] || translations.en;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
