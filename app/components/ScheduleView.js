"use client";

import { useEffect, useState } from "react";

const EVENT_DATE = new Date(2025, 10, 15);

function isHappeningNow(startTime, endTime) {
  const now = new Date();
  const isEventDay =
    now.getFullYear() === EVENT_DATE.getFullYear() &&
    now.getMonth() === EVENT_DATE.getMonth() &&
    now.getDate() === EVENT_DATE.getDate();
  if (!isEventDay) return false;

  const hours = now.getHours() + now.getMinutes() / 60;
  if (startTime === null) return false;
  const end = endTime ?? 14.5;
  return hours >= startTime && hours < end;
}

function parseTime(timeStr) {
  if (!timeStr || timeStr === "All day") return null;
  const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!match) return null;
  let h = parseInt(match[1]);
  const m = parseInt(match[2]);
  const ampm = match[3].toUpperCase();
  if (ampm === "PM" && h !== 12) h += 12;
  if (ampm === "AM" && h === 12) h = 0;
  return h + m / 60;
}

const LOCATION_COLORS = {
  "Gymnasium": { bg: "#EBF0F8", text: "var(--primary)", border: "var(--primary)" },
  "Main Hall": { bg: "#FEF0E6", text: "var(--accent)", border: "var(--accent)" },
  "Room 104": { bg: "#F0FBF0", text: "#2E7D32", border: "#2E7D32" },
  "Room 106": { bg: "#F5F0FE", text: "#6B21A8", border: "#6B21A8" },
  "All venues": { bg: "var(--surface)", text: "var(--muted)", border: "var(--border)" },
};

export default function ScheduleView({ items, labels = {} }) {
  const happeningNowLabel = labels.happeningNow ?? "Happening Now";
  const allDayLabel = labels.allDay ?? "All day";
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="timeline">
      {items.map((item) => {
        const startH = parseTime(item.time);
        const endH = item.endTime ? parseTime(item.endTime) : null;
        const happening = now && isHappeningNow(startH, endH);
        const locStyle = item.location ? (LOCATION_COLORS[item.location] ?? LOCATION_COLORS["All venues"]) : null;

        return (
          <article
            className={`timeline-item${happening ? " happening-now" : ""}`}
            key={`${item.time}-${item.title}`}
          >
            {happening && (
              <span className="now-badge">
                <span className="now-dot" aria-hidden="true" />
                {happeningNowLabel}
              </span>
            )}
            <p className="timeline-time">{item.time === "All day" ? allDayLabel : item.time}</p>
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              {item.location && (
                <span
                  className="location-tag"
                  style={{ background: locStyle.bg, color: locStyle.text, borderColor: locStyle.border }}
                >
                  {item.location}
                </span>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
