import { FiPlus } from "react-icons/fi";
import { experiences } from "@/lib/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return <section id="experience" className="section section-tinted"><div className="shell">
    <Reveal><SectionHeading number="02" eyebrow="The journey so far" title="Experience, in practice." description="Building, improving, and connecting the systems people depend on." /></Reveal>
    <div className="timeline">{experiences.map((job, index) => <Reveal key={job.company} delay={index * 0.06}>
      <details className="experience-card" open={index === 0}>
        <summary><span className="timeline-dot" aria-hidden /><span className="experience-date">{job.dates}<span>{job.location}</span></span><span className="experience-title"><span className="company">{job.company}</span><span>{job.role}</span></span><FiPlus className="expand-icon" aria-hidden /></summary>
        <div className="experience-details"><ul>{job.highlights.map(item => <li key={item}>{item}</li>)}</ul></div>
      </details>
    </Reveal>)}</div>
  </div></section>;
}
