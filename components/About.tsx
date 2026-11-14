import { FiCode, FiDatabase, FiLayers } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section shell">
      <Reveal><SectionHeading number="01" eyebrow="A little context" title="Strong foundations. Thoughtful experiences." /></Reveal>
      <div className="about-grid">
        <Reveal><p className="large-copy">A software engineer who connects <span>what users need</span> with the systems that make it possible.</p><p className="muted-copy">I bring 4+ years of experience designing and building microservices, resilient RESTful APIs, and transaction-critical database solutions. My work spans backend engineering, web automation, full-stack applications, and slot-game platforms.</p><p className="muted-copy">I approach challenges with a logical, systematic mindset — whether I’m tuning a query, integrating third-party systems, or shaping a responsive interface.</p></Reveal>
        <div className="capability-list">
          {[{ Icon: FiLayers, title: "Systems that scale", text: "Distributed services, asynchronous processing, and dependable APIs." }, { Icon: FiDatabase, title: "Data that works harder", text: "Relational design, query optimization, and Redis caching." }, { Icon: FiCode, title: "Experiences that connect", text: "Responsive interfaces, workflow automation, and full-stack delivery." }].map(({ Icon, title, text }, index) => <Reveal className="capability" key={title} delay={index * 0.06}><span className="icon-box"><Icon aria-hidden /></span><div><h3>{title}</h3><p>{text}</p></div></Reveal>)}
        </div>
      </div>
      <Reveal className="metrics"><div><strong>7+</strong><span>Production applications</span></div><div><strong>99.9<span>%</span></strong><span>Operational uptime</span></div><div><strong>25<span>%</span></strong><span>Lower API latency</span></div><p>Highlights from my work<br />at Probability Gaming.</p></Reveal>
    </section>
  );
}
