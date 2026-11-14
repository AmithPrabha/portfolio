import Image from "next/image";
import { FiDatabase, FiServer, FiShield, FiUserCheck, FiCamera, FiCheckCircle } from "react-icons/fi";
import { projects } from "@/lib/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Portfolio() {
  return <section id="portfolio" className="section shell">
    <Reveal><SectionHeading number="03" eyebrow="Selected work" title="From systems to screens." description="Backend infrastructure, intelligent automation, and the web experiences that bring them together." /></Reveal>
    <div className="projects-grid">{projects.map((project, index) => <Reveal key={project.title} className={`project-card ${index < 2 ? "project-featured" : ""}`} delay={(index % 3) * 0.06}>
      {project.image ? <div className="project-image"><Image src={project.image} alt={`${project.title} preview`} sizes="(max-width: 640px) 90vw, (max-width: 1000px) 45vw, 360px" /></div> : <div className={`project-diagram ${project.diagram}`} aria-label={project.diagram === "gateway" ? "Conceptual API flow: authentication, gateway, database" : "Conceptual attendance flow: capture, recognition, attendance"} role="img"><span className="diagram-label">{project.diagram === "gateway" ? "DISTRIBUTED BY DESIGN" : "AUTOMATION IN FOCUS"}</span><div className="diagram-flow">{(project.diagram === "gateway" ? [{ Icon: FiShield, label: "Authenticate" }, { Icon: FiServer, label: "API gateway" }, { Icon: FiDatabase, label: "Persist" }] : [{ Icon: FiCamera, label: "Capture" }, { Icon: FiUserCheck, label: "Recognize" }, { Icon: FiCheckCircle, label: "Record" }]).map(({ Icon, label }) => <div key={label}><span><Icon aria-hidden /></span><small>{label}</small></div>)}</div><span className="diagram-footnote">Concept overview</span></div>}
      <div className="project-body"><p className="eyebrow">{String(index + 1).padStart(2, "0")} / {project.category}</p><h3>{project.title}</h3><p>{project.description}</p><ul className="tags" aria-label="Technologies">{project.stack.map(tech => <li key={tech}>{tech}</li>)}</ul></div>
    </Reveal>)}</div>
  </section>;
}
