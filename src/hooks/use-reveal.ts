"use client";
import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const elements =
      ref.current?.querySelectorAll<HTMLElement>("[data-reveal]");

    if (!elements || matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-6");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.08 },
    );

    elements.forEach((element) => {
      element.classList.add(
        "transition-all",
        "duration-700",
        "ease-out",
        "motion-reduce:transition-none",
      );
      if (element.getBoundingClientRect().top > innerHeight)
        element.classList.add("opacity-0", "translate-y-6");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}
