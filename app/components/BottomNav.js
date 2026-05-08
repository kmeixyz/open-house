"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../contexts/LanguageContext";

function HomeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
      <line x1="8" y1="2" x2="8" y2="18"/>
      <line x1="16" y1="6" x2="16" y2="22"/>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}

export default function BottomNav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  function openLanguageModal() {
    window.dispatchEvent(new CustomEvent("open-language-modal"));
  }

  return (
    <nav className="bottom-nav" aria-label="Mobile navigation">
      <Link href="/" className={`bottom-nav-item${pathname === "/" ? " active" : ""}`}>
        <HomeIcon />
        <span>{t.bottomNav.home}</span>
      </Link>
      <Link href="/#arrival" className="bottom-nav-item">
        <MapIcon />
        <span>{t.bottomNav.map}</span>
      </Link>
      <Link href="/schedule" className={`bottom-nav-item${pathname === "/schedule" ? " active" : ""}`}>
        <CalendarIcon />
        <span>{t.bottomNav.schedule}</span>
      </Link>
      <button type="button" className="bottom-nav-item" onClick={openLanguageModal}>
        <GlobeIcon />
        <span>{t.bottomNav.language}</span>
      </button>
    </nav>
  );
}
