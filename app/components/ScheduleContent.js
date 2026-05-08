"use client";

import ScheduleView from "./ScheduleView";
import FloorMap from "./FloorMap";
import { useLanguage } from "../contexts/LanguageContext";

export default function ScheduleContent() {
  const { t } = useLanguage();
  const s = t.schedule;

  return (
    <main className="schedule-page">
      <section className="schedule-block container">
        <p className="section-tag">{s.tag}</p>
        <h1>{s.title}</h1>
        <ScheduleView
          items={s.items}
          labels={{ allDay: s.allDay, happeningNow: s.happeningNow }}
        />
        <FloorMap mapTag={s.mapTag} />
      </section>
    </main>
  );
}
