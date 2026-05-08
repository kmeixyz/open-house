"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../contexts/LanguageContext";
import { LANGUAGE_OPTIONS } from "../lib/languages";

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { lang, t } = useLanguage();
  const langLabel = LANGUAGE_OPTIONS.find((o) => o.id === lang)?.label ?? "English";

  function openLanguageModal() {
    window.dispatchEvent(new CustomEvent("open-language-modal"));
  }

  return (
    <header className="top-nav">
      <div className="nav-logo">
        <span className="org">Howard and Evanston Community Center</span>
        <span className="event">Adult Education Open House</span>
      </div>
      <div className="nav-actions">
        {isHome ? (
          <Link href="/schedule" className="nav-link">
            <CalendarIcon />
            {t.nav.schedule}
          </Link>
        ) : (
          <Link href="/" className="nav-link">
            {t.nav.home}
          </Link>
        )}
        <Link href="/#signup" className="nav-cta">
          {t.nav.cta}
        </Link>
        <button
          type="button"
          className="nav-lang-btn"
          onClick={openLanguageModal}
          aria-label="Choose language"
        >
          <GlobeIcon />
          <span>Language: {langLabel}</span>
        </button>
      </div>
    </header>
  );
}
