import { FiArrowDown, FiArrowUpRight, FiMapPin } from "react-icons/fi";
import InteractivePortrait from "./InteractivePortrait";
import FloatingSymbols from "./FloatingSymbols";
import { profile } from "@/lib/portfolio";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-glow" aria-hidden />
      <div className="shell hero-grid">
        <Reveal className="hero-copy">
          <p className="availability"><span aria-hidden /> {profile.availability}</p>
          <p className="hero-intro">Hello, I’m</p>
          <h1>Amith<br /><span>Prabha.</span></h1>
          <p className="hero-role">{profile.role}<span>{profile.specialty}</span></p>
          <p className="hero-description">I build reliable systems behind great digital experiences — from high-concurrency APIs to thoughtful, responsive interfaces.</p>
          <div className="button-row">
            <a href="#portfolio" className="button button-primary">Explore my work <FiArrowUpRight aria-hidden /></a>
            <a href="#contact" className="button button-secondary">Get in touch</a>
          </div>
          <p className="location"><FiMapPin aria-hidden /> {profile.location} <span>·</span> Backend to browser</p>
        </Reveal>
        <Reveal className="portrait-stage" delay={0.12}>
          <div className="portrait-orbit" aria-hidden />
          <InteractivePortrait />
          <FloatingSymbols />
          <div className="portrait-label"><span className="code-symbol" aria-hidden>&lt;/&gt;</span><div>Built for reliability<span>.NET · Python · Node.js</span></div></div>
          <span className="portrait-caption">ENGINEERING WITH INTENT</span>
        </Reveal>
      </div>
      <div className="shell hero-bottom"><span>APIs. Automation. Experiences.</span><a href="#about">A little more about me <FiArrowDown aria-hidden /></a></div>
    </section>
  );
}
