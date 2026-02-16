"use client";
import { useEffect } from "react";

export default function useScrollAnimation(className = "card-hidden") {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${className}`);
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-pop");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [className]);
}
