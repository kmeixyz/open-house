"use client";

import { useEffect, useState } from "react";
import { LANGUAGE_OPTIONS } from "../lib/languages";
import { useLanguage } from "../contexts/LanguageContext";

const VISITED_KEY = "hecc-visited";

const GREETINGS = [
  { text: "Welcome", lang: "en" },
  { text: "Bienvenido", lang: "es" },
  { text: "Bienvenue", lang: "fr" },
  { text: "مرحباً", lang: "ar" },
  { text: "Hoş geldiniz", lang: "tr" },
  { text: "Ласкаво просимо", lang: "uk" },
  { text: "Byenveni", lang: "ht" },
];

export default function LanguageModal() {
  const { setLang, t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [greetingIdx, setGreetingIdx] = useState(0);

  useEffect(() => {
    try {
      if (!localStorage.getItem(VISITED_KEY)) {
        setVisible(true);
      }
    } catch {
      /* ignore */
    }

    function handleOpen() {
      setExiting(false);
      setVisible(true);
    }
    window.addEventListener("open-language-modal", handleOpen);
    return () => window.removeEventListener("open-language-modal", handleOpen);
  }, []);

  useEffect(() => {
    if (!visible || exiting) return;
    const id = setInterval(() => {
      setGreetingIdx((i) => (i + 1) % GREETINGS.length);
    }, 1600);
    return () => clearInterval(id);
  }, [visible, exiting]);

  function choose(langId) {
    setLang(langId);
    try {
      localStorage.setItem(VISITED_KEY, "1");
    } catch {
      /* ignore */
    }
    setExiting(true);
    setTimeout(() => setVisible(false), 400);
  }

  function dismiss() {
    try {
      localStorage.setItem(VISITED_KEY, "1");
    } catch {
      /* ignore */
    }
    setExiting(true);
    setTimeout(() => setVisible(false), 400);
  }

  if (!visible) return null;

  const greeting = GREETINGS[greetingIdx];

  return (
    <div
      className={`lang-overlay${exiting ? " lang-overlay-exit" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Choose your language"
      onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
    >
      <div className={`lang-overlay-card${exiting ? " lang-card-exit" : ""}`}>
        <button className="lang-dismiss" onClick={dismiss} aria-label="Close language selector">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <p
          key={greetingIdx}
          className="lang-greeting"
          lang={greeting.lang}
          aria-live="polite"
        >
          {greeting.text}
        </p>
        <h2 className="lang-prompt">{t.langModal.heading}</h2>
<div className="lang-btn-grid">
          {LANGUAGE_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              className="lang-choice-btn"
              lang={opt.id}
              onClick={() => choose(opt.id)}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
