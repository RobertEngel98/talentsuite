"use client";

import { useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import {
  hasConsent,
  trackScrollDepth,
  trackSectionView,
  trackCTAClick,
  trackFormInteraction,
  trackTimeOnPage,
} from "./Analytics";

const SCROLL_THRESHOLDS = [25, 50, 75, 100];
const TIME_THRESHOLDS = [30, 60, 120, 300];

export default function TrackingProvider({ children }) {
  const pathname = usePathname();
  const scrollFired = useRef(new Set());
  const timeFired = useRef(new Set());
  const observerRef = useRef(null);
  const startTime = useRef(Date.now());

  // GA4 page_view on navigation
  useEffect(() => {
    if (!hasConsent()) return;
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view", {
        page_path: pathname,
        page_title: document.title,
      });
    }
  }, [pathname]);

  // Reset trackers on navigation
  useEffect(() => {
    scrollFired.current = new Set();
    timeFired.current = new Set();
    startTime.current = Date.now();
  }, [pathname]);

  // Scroll depth tracking
  useEffect(() => {
    if (!hasConsent()) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const percent = Math.round((scrollTop / docHeight) * 100);

      for (const threshold of SCROLL_THRESHOLDS) {
        if (percent >= threshold && !scrollFired.current.has(threshold)) {
          scrollFired.current.add(threshold);
          trackScrollDepth(threshold);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Time on page tracking
  useEffect(() => {
    if (!hasConsent()) return;

    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime.current) / 1000);
      for (const threshold of TIME_THRESHOLDS) {
        if (elapsed >= threshold && !timeFired.current.has(threshold)) {
          timeFired.current.add(threshold);
          trackTimeOnPage(threshold);
        }
      }
    }, 5000);

    const handleUnload = () => {
      const elapsed = Math.floor((Date.now() - startTime.current) / 1000);
      if (elapsed > 5) trackTimeOnPage(elapsed);
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => {
      clearInterval(interval);
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, [pathname]);

  // Section visibility tracking (IntersectionObserver)
  useEffect(() => {
    if (!hasConsent()) return;

    const seen = new Set();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target;
            const sectionId = el.getAttribute("data-track-section");
            const sectionName = el.getAttribute("data-track-section-name") || sectionId;
            const key = `${pathname}:${sectionId}`;
            if (!seen.has(key)) {
              seen.add(key);
              trackSectionView(sectionId, sectionName);
            }
          }
        }
      },
      { threshold: 0.3 }
    );

    const observe = () => {
      const elements = document.querySelectorAll("[data-track-section]");
      elements.forEach((el) => observerRef.current?.observe(el));
    };

    // Delay to let page render
    const timer = setTimeout(observe, 500);
    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
  }, [pathname]);

  // CTA click tracking (delegation)
  useEffect(() => {
    if (!hasConsent()) return;

    const handleClick = (e) => {
      const el = e.target.closest("[data-track-click]");
      if (!el) return;
      const label = el.getAttribute("data-track-click");
      const location = el.getAttribute("data-track-location") || "";
      const destination = el.getAttribute("href") || "";
      trackCTAClick(label, destination, location);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [pathname]);

  // Form interaction tracking (delegation)
  useEffect(() => {
    if (!hasConsent()) return;

    const handleFocus = (e) => {
      const form = e.target.closest("[data-track-form]");
      if (!form) return;
      const formName = form.getAttribute("data-track-form");
      const fieldName = e.target.name || e.target.placeholder || e.target.type || "";
      trackFormInteraction("focus", formName, fieldName);
    };

    const handleBlur = (e) => {
      const form = e.target.closest("[data-track-form]");
      if (!form) return;
      const formName = form.getAttribute("data-track-form");
      const fieldName = e.target.name || e.target.placeholder || e.target.type || "";
      trackFormInteraction("blur", formName, fieldName);
    };

    document.addEventListener("focusin", handleFocus, true);
    document.addEventListener("focusout", handleBlur, true);
    return () => {
      document.removeEventListener("focusin", handleFocus, true);
      document.removeEventListener("focusout", handleBlur, true);
    };
  }, [pathname]);

  return children;
}
