"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import profilepic from "@/assets/profilepic-hq.png";

// Coordinates use the original 750 × 750 design grid. The HQ image and SVG share
// one square so the eyes stay aligned at every responsive size.
const eyes = [
  { x: 294, y: 421, shape: "M250 430 C266 378 318 376 338 431 Q296 474 250 430Z", skin: "#b98968" },
  { x: 454, y: 421, shape: "M411 431 C429 377 478 377 500 431 Q455 474 411 431Z", skin: "#b48462" },
];

export default function InteractivePortrait() {
  const id = useId().replace(/:/g, "");
  const wrapper = useRef<HTMLDivElement>(null);
  const pupils = useRef<Array<SVGGElement | null>>([]);
  const [motionOverride, setMotionOverride] = useState<boolean | null>(null);
  const [animationOn, setAnimationOn] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [blinking, setBlinking] = useState(false);

  useEffect(() => {
    const element = wrapper.current;
    if (!element) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    let active = false;
    let blinkTimer: ReturnType<typeof setTimeout> | undefined;
    let openTimer: ReturnType<typeof setTimeout> | undefined;
    let frame = 0;
    let pointer: { x: number; y: number } | null = null;

    function center() {
      pointer = null;
      pupils.current.forEach(pupil => pupil?.setAttribute("transform", "translate(0 0)"));
    }
    function scheduleBlink(first = false) {
      blinkTimer = setTimeout(() => {
        if (!active) return;
        setBlinking(true);
        openTimer = setTimeout(() => {
          setBlinking(false);
          scheduleBlink();
        }, 155);
      }, first ? 1200 : 3000 + Math.random() * 3000);
    }
    function updateActivity() {
      const allowed = motionOverride ?? !reducedMotion.matches;
      setAnimationOn(allowed);
      const nextActive = visible && !document.hidden && allowed;
      // Repeated observer notifications must not postpone the next blink.
      if (nextActive === active) return;
      active = nextActive;
      clearTimeout(blinkTimer);
      clearTimeout(openTimer);
      cancelAnimationFrame(frame);
      frame = 0;
      setEnabled(active);
      setBlinking(false);
      center();
      if (active) scheduleBlink(true);
    }
    function move(event: PointerEvent) {
      if (!active || !event.isPrimary) return;
      pointer = { x: event.clientX, y: event.clientY };
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!pointer || !active) return;
        const bounds = element!.getBoundingClientRect();
        const x = (pointer.x - bounds.left) * 750 / bounds.width;
        const y = (pointer.y - bounds.top) * 750 / bounds.height;
        eyes.forEach((eye, index) => {
          const dx = x - eye.x;
          const dy = y - eye.y;
          const distance = Math.hypot(dx, dy);
          // Keep gaze subtle, with an elliptical range inside the eyelids.
          const amount = Math.min(distance / 240, 1);
          const offsetX = distance ? dx / distance * 10 * amount : 0;
          const offsetY = distance ? dy / distance * 6 * amount : 0;
          pupils.current[index]?.setAttribute("transform", `translate(${offsetX} ${offsetY})`);
        });
      });
    }
    function endTouch(event: PointerEvent) {
      if (event.pointerType === "touch" && event.isPrimary) center();
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updateActivity();
    }, { threshold: 0.1 });
    observer.observe(element);
    updateActivity();
    reducedMotion.addEventListener("change", updateActivity);
    document.addEventListener("visibilitychange", updateActivity);
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", move, { passive: true });
    window.addEventListener("pointerup", endTouch, { passive: true });
    window.addEventListener("pointercancel", endTouch, { passive: true });
    window.addEventListener("blur", center);
    document.documentElement.addEventListener("pointerleave", center);
    return () => {
      active = false;
      setEnabled(false);
      setBlinking(false);
      center();
      observer.disconnect();
      clearTimeout(blinkTimer);
      clearTimeout(openTimer);
      cancelAnimationFrame(frame);
      reducedMotion.removeEventListener("change", updateActivity);
      document.removeEventListener("visibilitychange", updateActivity);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", move);
      window.removeEventListener("pointerup", endTouch);
      window.removeEventListener("pointercancel", endTouch);
      window.removeEventListener("blur", center);
      document.documentElement.removeEventListener("pointerleave", center);
    };
  }, [motionOverride]);

  return (
    <div className="portrait-frame">
      <div className="interactive-portrait" ref={wrapper}>
        <Image src={profilepic} alt="Amith Prabha" priority quality={95} sizes="(max-width: 760px) 85vw, 480px" className="portrait" />
        <svg className="portrait-eyes" viewBox="0 0 750 750" aria-hidden="true" focusable="false" style={{ visibility: enabled ? "visible" : "hidden" }} data-blinking={blinking}>
          <defs>
            <radialGradient id={`${id}-white`} cx="48%" cy="60%" r="65%"><stop offset="0" stopColor="#ffffff" /><stop offset=".75" stopColor="#f5f3ed" /><stop offset="1" stopColor="#b7afa0" /></radialGradient>
            <radialGradient id={`${id}-iris`}><stop offset="0" stopColor="#1d190e" /><stop offset=".65" stopColor="#413821" /><stop offset=".87" stopColor="#63573a" /><stop offset="1" stopColor="#29251b" /></radialGradient>
            <linearGradient id={`${id}-lid-left`} x1="0" y1="0" x2="1" y2=".4">
              <stop offset="0" stopColor="#a97653" /><stop offset=".5" stopColor="#ba8c70" /><stop offset="1" stopColor="#c39b83" />
            </linearGradient>
            <linearGradient id={`${id}-lid-right`} x1="0" y1=".4" x2="1" y2="0">
              <stop offset="0" stopColor="#c49c84" /><stop offset=".5" stopColor="#bb8f72" /><stop offset="1" stopColor="#a97754" />
            </linearGradient>
            <linearGradient id={`${id}-eye-shadow`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#443026" stopOpacity=".65" /><stop offset=".4" stopColor="#443026" stopOpacity="0" />
            </linearGradient>
            <filter id={`${id}-soft-edge`} x="-15%" y="-20%" width="130%" height="140%"><feGaussianBlur stdDeviation=".65" /></filter>
            {eyes.map((eye, index) => <clipPath id={`${id}-eye-${index}`} key={index}><path d={eye.shape} /></clipPath>)}
          </defs>
          {eyes.map((eye, index) => <g key={index}>
            <path d={eye.shape} fill={`url(#${id}-lid-${index === 0 ? "left" : "right"})`} stroke={`url(#${id}-lid-${index === 0 ? "left" : "right"})`} strokeWidth="8" filter={`url(#${id}-soft-edge)`} />
            <path className="portrait-closed-lid" d={`M${eye.x - 40} 424 Q${eye.x} 442 ${eye.x + 39} 424`} fill="none" stroke="#79543d" strokeWidth="2.3" strokeLinecap="round" />
            <g className="portrait-eye-opening" style={{ transformOrigin: `${eye.x}px 426px` }}>
              <g clipPath={`url(#${id}-eye-${index})`}>
                <path d={eye.shape} fill={`url(#${id}-white)`} />
                <g ref={node => { pupils.current[index] = node; }} className="portrait-pupil">
                  <ellipse cx={eye.x} cy={eye.y} rx="27" ry="29" fill={`url(#${id}-iris)`} />
                  <ellipse cx={eye.x} cy={eye.y - 1} rx="18" ry="20" fill="#080905" />
                  <circle cx={eye.x - 9} cy={eye.y - 13} r="6" fill="#fff" />
                  <circle cx={eye.x + 10} cy={eye.y + 13} r="2" fill="#fff" opacity=".35" />
                </g>
                <path d={eye.shape} fill={`url(#${id}-eye-shadow)`} />
                <path d={eye.shape} fill="none" stroke="#806149" strokeWidth="1.5" />
                <path d={`M${index === 0 ? 250 : 411} 430 C${index === 0 ? "266 378 318 376 338" : "429 377 478 377 500"} 431`} fill="none" stroke="#30241b" strokeWidth="3.5" />
              </g>
            </g>
          </g>)}
        </svg>
      </div>
      <button type="button" className="eye-animation-toggle"
        aria-label="Eye animation" aria-pressed={animationOn}
        onClick={() => setMotionOverride(!animationOn)}>
        <span aria-hidden="true">{animationOn ? "◉" : "○"}</span>
        {animationOn ? "Pause eyes" : "Animate eyes"}
      </button>
    </div>
  );
}
