"use client";

import { useEffect, useRef, type RefObject } from "react";

type Entrance = { selector: string; distance?: number; scale?: number; stagger?: number; duration?: number };

// Only animate content, never a sticky ancestor, fixed control, or dialog.
const entrances: Entrance[] = [
  { selector: ".ap-heading > *, .ap-section-heading > *", distance: 28, stagger: 85 },
  { selector: ".ap-about-art, .ap-contact-owl", distance: 40, scale: .96, duration: 1000 },
  { selector: ".ap-value-grid > div, .ap-discipline-grid > a, .ap-journal-grid > a", distance: 35, stagger: 90 },
  { selector: ".ap-manifesto-copy > *, .ap-contact-notes > *, .ap-prose > *, .ap-cta > *", distance: 28, stagger: 80 },
  { selector: ".wd-hero-copy > *, .wd-section-heading > *", distance: 28, stagger: 85 },
  { selector: ".wd-art", distance: 40, scale: .96, duration: 1000 },
  { selector: ".wd-deliverables > div, .wd-steps > div, .wd-questions > details, .wd-related-grid > a", distance: 30, stagger: 80 },
  { selector: ".wd-contact > *", distance: 35, stagger: 90 },
  { selector: ".hero-copy > *", distance: 24, stagger: 85 },
  { selector: ".intro .section-eyebrow, .projects .section-eyebrow, .journal .section-eyebrow, .contact .section-eyebrow", distance: 18 },
  { selector: ".intro-layout > h2", distance: 45 },
  { selector: ".intro-copy > *", distance: 30, stagger: 85 },
  { selector: ".process-line > div", distance: 30, stagger: 110 },
  { selector: ".projects-heading > *", distance: 38, stagger: 110 },
  { selector: ".project-stack", distance: 70, scale: .94, duration: 1100 },
  { selector: ".project-controls", distance: 22 },
  { selector: ".brand-tile-grid", distance: 48, scale: .96, duration: 1250 },
  { selector: ".brand-world-copy > *", distance: 36, stagger: 110 },
  { selector: ".journal-heading > *", distance: 32, stagger: 90 },
  { selector: ".journal-grid > .article-card", distance: 55, scale: .97, stagger: 130, duration: 950 },
  { selector: ".contact-heading > *", distance: 45, stagger: 100 },
  { selector: ".contact-bottom > *", distance: 25, stagger: 100 },
  { selector: ".sf-top > *", distance: 35, stagger: 100 },
  { selector: ".sf-columns > *", distance: 38, stagger: 100 },
  { selector: ".sf-bottom", distance: 20 },
];

export function useScrollEffects(rootRef: RefObject<HTMLElement | null>, motion: boolean) {
  const seen = useRef(new WeakSet<HTMLElement>());

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !motion || !("IntersectionObserver" in window) || typeof HTMLElement.prototype.animate !== "function") return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const running = new Map<HTMLElement, Animation>();
    const settings = new Map<HTMLElement, Entrance & { delay: number }>();
    let observer: IntersectionObserver | null = null;

    entrances.forEach(entrance => {
      root.querySelectorAll<HTMLElement>(entrance.selector).forEach((node, index) => {
        settings.set(node, { ...entrance, delay: (entrance.stagger ?? 0) * (index % 4) });
      });
    });

    const finish = (node: HTMLElement) => {
      seen.current.add(node);
      observer?.unobserve(node);
      running.get(node)?.cancel();
      running.delete(node);
    };

    const connect = () => {
      observer?.disconnect();
      running.forEach(animation => animation.cancel());
      running.clear();
      if (preference.matches) return;

      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const node = entry.target as HTMLElement;
          if (!entry.isIntersecting || seen.current.has(node)) return;
          const options = settings.get(node);
          if (!options) return;
          observer?.unobserve(node);
          seen.current.add(node);

          // Visible by default. No CSS class or inline opacity can strand content
          // invisibly if JS fails, motion is disabled, or the observer is absent.
          if (node.contains(document.activeElement)) return;
          try {
            const compact = window.innerWidth <= 640;
            const animation = node.animate([
              { opacity: 0, translate: `0 ${(options.distance ?? 36) * (compact ? .65 : 1)}px`, scale: options.scale ?? 1 },
              { opacity: 1, translate: "0 0", scale: 1 },
            ], {
              duration: (options.duration ?? 850) * (compact ? .85 : 1),
              delay: options.delay * (compact ? .5 : 1),
              easing: "cubic-bezier(.16, 1, .3, 1)",
              fill: "backwards",
            });
            running.set(node, animation);
            animation.onfinish = () => finish(node);
          } catch {
            finish(node);
          }
        });
      }, { threshold: 0, rootMargin: "0px 0px -24px 0px" });

      settings.forEach((_, node) => {
        if (!seen.current.has(node)) observer?.observe(node);
      });
    };

    // A keyboard user never needs to wait for a control to become visible.
    const onFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Node)) return;
      settings.forEach((_, node) => { if (node.contains(event.target as Node)) finish(node); });
    };
    connect();
    preference.addEventListener("change", connect);
    root.addEventListener("focusin", onFocus);
    return () => {
      observer?.disconnect();
      running.forEach(animation => animation.cancel());
      preference.removeEventListener("change", connect);
      root.removeEventListener("focusin", onFocus);
    };
  }, [motion, rootRef]);
}
