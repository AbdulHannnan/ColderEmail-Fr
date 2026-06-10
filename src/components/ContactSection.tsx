"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

const EMAILJS_SERVICE_ID = "service_xnep0qg";
const EMAILJS_TEMPLATE_ID = "template_39a5otg";
const EMAILJS_PUBLIC_KEY = "X-L1r-2Fj6JCNhCIk";

export function ContactSection() {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSending) return;

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const goal = String(form.get("goal") || "").trim();
    const message = String(form.get("message") || "").trim();

    setStatus("");
    setIsSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          goal,
          message,

          // Extra aliases in case your EmailJS template uses these names
          user_name: name,
          user_email: email,
          from_name: name,
          from_email: email,
          monthly_goal: goal,
          reply_to: email,

          subject: `Campaign audit request from ${name || "website visitor"}`,
          to_email: site.email,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      formElement.reset();
      setStatus("Your enquiry has been sent successfully.");
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSending(false);
    }
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
          {/* Added Contact Details with Icons */}
          <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <a href={`mailto:${site.email}`} className="nav-brand" style={{ gap: "12px", fontWeight: "500" }}>
              <Mail size={20} />
              {site.email}
            </a>
            <div className="nav-brand" style={{ gap: "12px", fontWeight: "500", color: "var(--muted-strong)" }}>
              <MapPin size={20} />
              The Mansion Apartment, JKT Utara, Jakarta 14410, Indonesia
            </div>
          </div>
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
          <button className="btn btn-primary form-button" type="submit" disabled={isSending}>
            Request campaign audit
          </button>
          {status ? <p className="form-status">{status}</p> : null}
        </form>
      </div>
    </section>
  );
}