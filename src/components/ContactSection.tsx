"use client";

import { FormEvent, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export function ContactSection() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const goal = String(form.get("goal") || "");
    const message = String(form.get("message") || "");

    const subject = encodeURIComponent(`Campaign audit request from ${name || "website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMonthly goal: ${goal}\nMessage: ${message}`
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with the enquiry ready to send. Backend can be connected later.");
  }

  return (
    <section className="section-pad contact-section" id="contact">
      <div className="container contact-grid">
        <div>
          <SectionHeader
            eyebrow="Start here"
            title="Get a cleaner cold email plan before spending more on leads."
            text="Request a Quick campaign audit. I'll review your current setup and send you a clear plan to get better results, even if you don't end up working with me."
          />
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="form-row">
            <label htmlFor="email">Work email</label>
            <input id="email" name="email" type="email" placeholder="you@company.com" required />
          </div>
          {/* Website field removed from here */}
          <div className="form-row">
            <label htmlFor="goal">Monthly goal</label>
            <select id="goal" name="goal" defaultValue="">
              <option value="" disabled>
                Choose one
              </option>
              <option>More qualified replies</option>
              <option>More booked sales calls</option>
              <option>Fix current cold email campaigns</option>
              <option>Launch from scratch</option>
            </select>
          </div>
          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Briefly explain what you sell and who you want to reach." rows={4} />
          </div>
          <button className="btn btn-primary form-button" type="submit">
            Request campaign audit
          </button>
          {status ? <p className="form-status">{status}</p> : null}
        </form>
      </div>
    </section>
  );
}