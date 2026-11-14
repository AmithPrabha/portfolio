import { FiBookOpen, FiArrowUpRight } from "react-icons/fi";
import { education } from "@/lib/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return <section id="education" className="section shell"><Reveal><SectionHeading number="05" eyebrow="Always learning" title="Engineering meets new perspectives." /></Reveal><div className="education-grid">{education.map(item => <Reveal className="education-card" key={item.degree}><FiBookOpen className="education-icon" aria-hidden /><p className="eyebrow">{item.dates}</p><h3>{item.degree}</h3><p>{item.institution}</p><div className="education-bottom"><span>{item.location}</span>{item.ongoing && <span className="studying">In progress <FiArrowUpRight aria-hidden /></span>}</div></Reveal>)}</div></section>;
}
