"use client";

import { useRef, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const links = [ ["About", "about"], ["Experience", "experience"], ["Projects", "portfolio"], ["Skills", "skills"], ["Education", "education"] ];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <header className="site-header" onKeyDown={(event) => {
      if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); }
    }}>
      <nav className="shell nav-bar" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={() => setOpen(false)} aria-label="Amith Prabha, home">ap<span>.</span></a>
        <div className="desktop-nav">
          {links.map(([name, id]) => <a href={`#${id}`} key={id}>{name}</a>)}
        </div>
        <a className="nav-contact" href="#contact">Let’s talk <FiArrowUpRight aria-hidden /></a>
        <button ref={toggle} className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <FiX /> : <FiMenu />}</button>
      </nav>
      <div id="mobile-menu" className="mobile-nav" hidden={!open}>
        {links.map(([name, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{name}</a>)}
        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
      </div>
    </header>
  );
}
