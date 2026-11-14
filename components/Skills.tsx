"use client";

import { useState } from "react";
import { skillGroups } from "@/lib/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const [category, setCategory] = useState("All");
  const visible = category === "All" ? skillGroups : skillGroups.filter(group => group.name === category);
  return <section id="skills" className="section section-tinted"><div className="shell">
    <Reveal><SectionHeading number="04" eyebrow="Tools of the trade" title="A toolkit built for the whole picture." description="From the database and deployment pipeline to the interface in your hands." /></Reveal>
    <div className="skill-filters" role="group" aria-label="Filter skills by category">{["All", ...skillGroups.map(group => group.name)].map(name => <button key={name} aria-pressed={category === name} aria-controls="skill-results" onClick={() => setCategory(name)}>{name}</button>)}</div>
    <p className="sr-only" role="status">{category === "All" ? "Showing all 5 skill categories" : `Showing ${category} skills`}</p>
    <div id="skill-results" className="skill-grid">{visible.map(group => <div key={group.name} className="skill-card"><h3><span aria-hidden>/</span> {group.name}</h3><ul className="tags">{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div>)}</div>
  </div></section>;
}
