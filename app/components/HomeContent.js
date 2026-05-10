"use client";

import FadeInSection from "./FadeInSection";
import RsvpForm from "./RsvpForm";
import HeroButton from "./HeroButton";
import { useLanguage } from "../contexts/LanguageContext";

const ACTIVITY_ICONS = [
  <svg key="0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  <svg key="1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  <svg key="2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  <svg key="3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  <svg key="4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>,
  <svg key="5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
];

const STAT_ICONS = [
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>,
  <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  <svg key="5" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
];

export default function HomeContent() {
  const { t } = useLanguage();

  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-left">
            <FadeInSection>
              <p className="eyebrow">{t.hero.eyebrow}</p>
            </FadeInSection>
            <FadeInSection delay={80}>
              <h1>
                {t.hero.title1} <span style={{ color: "var(--accent)" }}>{t.hero.title2}</span>
              </h1>
            </FadeInSection>
            <FadeInSection delay={120}>
              <p className="hero-subtitle">{t.hero.subtitle}</p>
            </FadeInSection>
            <FadeInSection delay={160}>
              <div className="hero-details">
                <div className="hero-detail">
                  <span className="detail-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </span>
                  <span>{t.hero.date}</span>
                </div>
                <div className="hero-detail">
                  <span className="detail-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/>
                    </svg>
                  </span>
                  <span>{t.hero.time}</span>
                </div>
                <div className="hero-detail">
                  <span className="detail-icon" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
                    </svg>
                  </span>
                  <span>{t.hero.location}</span>
                </div>
              </div>
            </FadeInSection>
            <FadeInSection delay={240}>
              <div className="hero-cta-group">
                <HeroButton />
                <a
                  className="hero-btn btn-secondary"
                  href="https://maps.google.com/?q=7648+N.+Paulina+Street+Chicago+IL"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                  {t.hero.directions}
                </a>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section className="about-section">
        <div className="about container">
          <FadeInSection>
            <p className="section-tag">{t.about.tag}</p>
            <h2>{t.about.heading}</h2>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <ul className="about-list">
              {t.about.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p>{t.about.p3}</p>
          </FadeInSection>
          <FadeInSection delay={120} className="stat-grid">
            {t.stats.map((stat, i) => (
              <div className="stat-card" key={i}>
                <span className="stat-icon">{STAT_ICONS[i]}</span>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </FadeInSection>
        </div>
        </section>

        <section className="activities">
          <div className="container">
            <FadeInSection>
              <p className="section-tag">{t.activities.tag}</p>
            </FadeInSection>
            <div className="activities-grid">
              {t.activities.cards.map((card, index) => (
                <FadeInSection key={index} delay={60 * (index % 3)} className="activity-card">
                  <div className="activity-card-icon">{ACTIVITY_ICONS[index]}</div>
                  <h4>{card.title}</h4>
                  <p>{card.body}</p>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        <section className="arrival container" id="arrival">
          <FadeInSection>
            <p className="section-tag">{t.arrival.tag}</p>
          </FadeInSection>
          <div className="arrival-steps">
            {t.arrival.steps.map((step, i) => (
              <FadeInSection key={step.num} delay={100 * i} className="arrival-step">
                <span className="step-num">{step.num}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-body">{step.body}</p>
              </FadeInSection>
            ))}
          </div>
        </section>

        <section className="signup" id="signup">
          <div className="container signup-inner">
            <FadeInSection>
              <p className="section-tag">{t.signup.tag}</p>
              <h2>{t.signup.heading}</h2>
              <p>{t.signup.description}</p>
            </FadeInSection>
            <FadeInSection delay={100} className="form-wrap">
              <RsvpForm />
            </FadeInSection>
          </div>
        </section>
      </main>

<footer className="footer">
        <div>
          <strong>{t.footer.org}</strong>
          <br />
          {t.footer.mfs}
        </div>
        <a href="https://howardevanston.org" className="footer-link" target="_blank" rel="noreferrer">
          howardevanston.org
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-label="Opens in new tab" style={{ marginLeft: "0.3rem", verticalAlign: "middle" }}>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            <polyline points="15 3 21 3 21 9"/>
            <line x1="10" y1="14" x2="21" y2="3"/>
          </svg>
        </a>
      </footer>
    </>
  );
}
