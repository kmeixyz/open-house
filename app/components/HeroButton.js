"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

export default function HeroButton() {
  const [isEventNow, setIsEventNow] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const now = new Date();
    const isNov15 =
      now.getFullYear() === 2025 &&
      now.getMonth() === 10 &&
      now.getDate() === 15;
    const hours = now.getHours() + now.getMinutes() / 60;
    setIsEventNow(isNov15 && hours >= 11.0 && hours < 14.5);
  }, []);

  if (isEventNow) {
    return (
      <Link className="hero-btn btn-primary" href="/schedule">
        {t.hero.todaySchedule}
      </Link>
    );
  }

  return (
    <a className="hero-btn btn-primary" href="#signup">
      {t.hero.cta}
    </a>
  );
}
