"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Scroll position drives every frame, so the transition also reverses naturally. */
export function ServiceStack({ children, motion }: { children: ReactNode; motion: boolean }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const cards = Array.from(root.querySelectorAll<HTMLElement>(".service-section"));
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let heights: number[] = [];
    let offsets: number[] = [];
    let enabled = false;

    const update = () => {
      frame = 0;
      if (!enabled) return;
      const rootTop = root.getBoundingClientRect().top;
      const header = window.innerWidth <= 640 ? 74 : window.innerWidth <= 980 ? 80 : 94;
      cards.forEach((card, index) => {
        const top = Math.min(header, window.innerHeight - heights[index] - 24);
        const nextTop = rootTop + (offsets[index + 1] ?? offsets[index] + heights[index]);
        const distance = Math.min(heights[index], window.innerHeight - header);
        const covered = Math.min(1, Math.max(0, (top + distance - nextTop) / distance));
        card.style.setProperty("--stack-top", `${top}px`);
        card.style.setProperty("--stack-scale", String(1 - covered * .075));
        card.style.setProperty("--stack-blur", `${covered * 7}px`);
        card.style.setProperty("--stack-radius", `${covered * 42}px`);
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const measure = () => {
      enabled = motion && !preference.matches;
      root.classList.toggle("stack-active", enabled);
      let offset = 0;
      heights = cards.map(card => card.offsetHeight);
      offsets = heights.map(height => { const value = offset; offset += height; return value; });
      if (!enabled) cards.forEach(card => {
        ["--stack-top", "--stack-scale", "--stack-blur", "--stack-radius"].forEach(name => card.style.removeProperty(name));
      });
      schedule();
    };
    const resize = new ResizeObserver(measure);
    cards.forEach(card => resize.observe(card));
    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", measure);
    preference.addEventListener("change", measure);
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", measure);
      preference.removeEventListener("change", measure);
      root.classList.remove("stack-active");
    };
  }, [motion]);

  return <div ref={rootRef} id="hizmetler" className="service-stack">{children}</div>;
}
