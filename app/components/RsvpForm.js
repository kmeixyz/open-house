"use client";

import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

function SpinnerIcon() {
  return (
    <svg className="btn-spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 10 10" strokeLinecap="round"/>
    </svg>
  );
}

export default function RsvpForm() {
  const { t } = useLanguage();
  const f = t.form;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);
  const [phase, setPhase] = useState("form");

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let valid = true;

    if (!name.trim()) {
      setNameError(f.nameError);
      valid = false;
    }
    if (!email.trim()) {
      setEmailError(f.emailError);
      valid = false;
    } else if (!validateEmail(email)) {
      setEmailError(f.emailInvalid);
      valid = false;
    }
    if (!valid) return;

    setLoading(true);
    setSubmitError("");

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

    if (!endpoint) {
      triggerSuccess();
      return;
    }

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email }),
      });
      if (res.ok) {
        triggerSuccess();
      } else {
        setSubmitError(f.submitError);
        setLoading(false);
      }
    } catch {
      setSubmitError(f.submitError);
      setLoading(false);
    }
  }

  function triggerSuccess() {
    setPhase("exiting");
    setTimeout(() => setPhase("success"), 300);
  }

  if (phase === "success") {
    return (
      <div className="rsvp-ticket fade-in">
        <div className="ticket-icon-wrap">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="2.5" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="M7 12l3.5 3.5L17 8" />
          </svg>
        </div>
        <p className="ticket-heading">{f.successHeading}</p>
        <p className="ticket-sub">{f.successSub}</p>
        <div className="ticket-details">
          <div className="ticket-row">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ flexShrink: 0, color: "var(--accent)" }}>
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            <span>Saturday, November 15, 2025</span>
          </div>
          <div className="ticket-row">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ flexShrink: 0, color: "var(--accent)" }}>
              <circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/>
            </svg>
            <span>11:00 AM – 2:30 PM</span>
          </div>
          <div className="ticket-row">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" style={{ flexShrink: 0, color: "var(--accent)" }}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
            </svg>
            <span>Howard &amp; Evanston Community Center, Chicago, IL</span>
          </div>
        </div>
        <a
          className="btn-primary ticket-cal"
          href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=HECC+Adult+Education+Open+House&dates=20251115T110000/20251115T143000&details=Howard+%26+Evanston+Community+Center+Open+House&location=Howard+%26+Evanston+Community+Center%2C+Chicago%2C+IL"
          target="_blank"
          rel="noreferrer"
        >
          {f.calBtn}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>
    );
  }

  return (
    <form
      className={`rsvp-form${phase === "exiting" ? " form-exit" : ""}`}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className={`form-field${nameError ? " has-error" : ""}`}>
        <label htmlFor="rsvp-name">{f.nameLabel}</label>
        <input
          id="rsvp-name"
          type="text"
          value={name}
          autoComplete="name"
          required
          onChange={(e) => {
            setName(e.target.value);
            if (nameError) setNameError("");
          }}
        />
        {nameError && <span className="field-error">{nameError}</span>}
      </div>

      <div className={`form-field${emailError ? " has-error" : ""}`}>
        <label htmlFor="rsvp-email">{f.emailLabel}</label>
        <input
          id="rsvp-email"
          type="email"
          value={email}
          autoComplete="email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
            if (emailError) setEmailError("");
          }}
        />
        {emailError && <span className="field-error">{emailError}</span>}
        {!emailError && (
          <span className="form-microcopy">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            {f.microcopy}
          </span>
        )}
      </div>

      {submitError && <p className="form-submit-error">{submitError}</p>}

      <button
        type="submit"
        className="btn-primary form-submit"
        disabled={loading || !name.trim() || !validateEmail(email)}
        aria-disabled={loading || !name.trim() || !validateEmail(email)}
      >
        {loading ? (
          <>
            <SpinnerIcon />
            {f.sending}
          </>
        ) : (
          f.submit
        )}
      </button>
    </form>
  );
}
