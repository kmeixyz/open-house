"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";

export default function HeroButton() {
  const [isEventNow, setIsEventNow] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const now = new Date();
    const isNov14 =
      now.getFullYear() === 2026 &&
      now.getMonth() === 10 &&
      now.getDate() === 14;
    const hours = now.getHours() + now.getMinutes() / 60;
    setIsEventNow(isNov14 && hours >= 11.0 && hours < 14.5);
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
