"use client";

import { useState } from "react";
import { FiArrowUpRight, FiCheck, FiCopy, FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { profile } from "@/lib/portfolio";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  async function copyEmail() {
    try { await navigator.clipboard.writeText(profile.email); setStatus("copied"); }
    catch { setStatus("failed"); }
  }
  return <section id="contact" className="section shell"><Reveal className="contact-panel">
    <div><p className="eyebrow">06 / Let’s connect</p><h2>Have something<br /><span>worth building?</span></h2><p className="muted-copy">I’m based in Dubai and immediately available for my next opportunity. Let’s talk about the systems and experiences we can build together.</p>
    <div className="contact-links"><div className="email-row"><a href={`mailto:${profile.email}`}><FiMail aria-hidden /><span><small>Email</small>{profile.email}</span></a><button className="copy-button" onClick={copyEmail} aria-label="Copy email address">{status === "copied" ? <FiCheck aria-hidden /> : <FiCopy aria-hidden />}</button></div><p className="copy-status" role="status">{status === "copied" ? "Email copied." : status === "failed" ? "Couldn’t copy. Select the email address or use the email link." : ""}</p><a href={profile.phoneHref}><FiPhone aria-hidden /><span><small>Phone · UAE</small>{profile.phone}</span><FiArrowUpRight aria-hidden /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><FiLinkedin aria-hidden /><span><small>Professional profile</small>LinkedIn</span><FiArrowUpRight aria-hidden /></a><a href={profile.github} target="_blank" rel="noopener noreferrer"><FiGithub aria-hidden /><span><small>Code & projects</small>GitHub</span><FiArrowUpRight aria-hidden /></a></div></div>
    <ContactForm />
  </Reveal></section>;
}
