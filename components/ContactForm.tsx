"use client";

import { FormEvent, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { contactTopics, ContactFields, validateContact } from "@/lib/contact";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFields, string>>>({});
  const sending = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    const result = validateContact(values);
    setErrors(result.errors);
    if (Object.keys(result.errors).length) {
      setState("error"); setFeedback("Please check the highlighted fields.");
      form.querySelector<HTMLElement>(`[name="${Object.keys(result.errors)[0]}"]`)?.focus();
      return;
    }
    sending.current = true;
    setState("sending"); setFeedback("Sending your message…");
    try {
      const response = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...result.data, website: values.website }),
      });
      const payload = await response.json();
      if (!response.ok) {
        if (payload.errors) setErrors(payload.errors);
        throw new Error(payload.error || "Couldn’t send your message. Please try again later.");
      }
      form.reset(); setState("success"); setFeedback("Thanks! Your message has been submitted. Please check your inbox and spam or junk folder for my reply.");
    } catch (error) {
      setState("error"); setFeedback(error instanceof Error ? error.message : "Couldn’t send your message. Please try again later.");
    } finally { sending.current = false; }
  }

  const accessibility = (field: keyof ContactFields) => ({
    "aria-invalid": !!errors[field],
    "aria-describedby": errors[field] ? `contact-${field}-error` : undefined,
  });
  const error = (field: keyof ContactFields) => errors[field] && <span className="field-error" id={`contact-${field}-error`}>{errors[field]}</span>;

  return <form className="contact-form" onSubmit={submit} noValidate aria-label="Send a message" aria-busy={state === "sending"}>
    <p className="eyebrow">Send a message</p>
    <h3>What can we build together?</h3>
    <div className="contact-form-grid">
      <label htmlFor="contact-name">Full name <span>*</span><input id="contact-name" name="name" autoComplete="name" placeholder="Your full name" required maxLength={100} {...accessibility("name")} />{error("name")}</label>
      <label htmlFor="contact-email">Email <span>*</span><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} {...accessibility("email")} />{error("email")}</label>
      <label htmlFor="contact-phone">Mobile number <span>*</span><input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="+971 50 123 4567" required maxLength={30} {...accessibility("phone")} />{error("phone")}</label>
      <label htmlFor="contact-topic">I am contacting about <span>*</span><div className="contact-select"><select id="contact-topic" name="topic" defaultValue="" required {...accessibility("topic")}><option value="" disabled>Select a topic</option>{contactTopics.map(topic => <option key={topic} value={topic}>{topic}</option>)}</select><FiChevronDown aria-hidden /></div>{error("topic")}</label>
      <label className="contact-message" htmlFor="contact-message">Message description <span>*</span><textarea id="contact-message" name="message" rows={5} placeholder="Tell me a little about what you need…" required maxLength={5000} {...accessibility("message")} />{error("message")}</label>
    </div>
    <div className="contact-honeypot" aria-hidden="true"><label htmlFor="contact-website">Leave this field empty<input id="contact-website" name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <p className="contact-notice">Your contact details and message will be used to respond to your enquiry.</p>
    <button className="button button-primary contact-submit" type="submit" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Send message"}</button>
    <p className={`contact-feedback ${state === "error" ? "is-error" : ""}`} role="status" aria-live="polite">{feedback}</p>
  </form>;
}
