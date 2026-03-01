"use client";

/**
 * Zentrale Tracking-Utility — wrapt GA4 + Meta Pixel
 * Alle Events sind consent-gated (cookie_consent=accepted)
 */

export function hasConsent() {
  if (typeof document === "undefined") return false;
  return document.cookie.indexOf("cookie_consent=accepted") !== -1;
}

function ga4Event(eventName, params = {}) {
  if (!hasConsent()) return;
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params);
  }
}

function metaEvent(eventName, params = {}) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, params);
  }
}

/** Formular-Submit: GA4 generate_lead + Meta Lead */
export function trackLead(data = {}) {
  ga4Event("generate_lead", {
    currency: "EUR",
    value: data.value || 0,
    form_name: data.formName || "lead_form",
    category: data.category || "recruiting",
    industry: data.industry || "",
  });
  metaEvent("Lead", {
    content_name: data.formName || "lead_form",
    content_category: data.category || "recruiting",
    value: data.value || 0,
    currency: "EUR",
    ...data,
  });
}

/** LP-Load: GA4 view_content + Meta ViewContent */
export function trackViewContent(data = {}) {
  ga4Event("view_content", {
    content_name: data.contentName || "page",
    content_category: data.category || "",
    content_type: data.contentType || "landing_page",
  });
  metaEvent("ViewContent", {
    content_name: data.contentName || "page",
    content_category: data.category || "",
    content_type: data.contentType || "landing_page",
    ...data,
  });
}

/** Termin-Click: GA4 begin_checkout + Meta Schedule */
export function trackSchedule(data = {}) {
  ga4Event("begin_checkout", {
    currency: "EUR",
    value: data.value || 50,
    items: [{ item_name: data.formName || "termin_buchung" }],
  });
  metaEvent("Schedule", {
    content_name: data.formName || "termin_buchung",
    content_category: data.category || "",
    value: data.value || 50,
    currency: "EUR",
    ...data,
  });
}

/** CTA-Click: GA4 only */
export function trackCTAClick(label, destination, location) {
  ga4Event("cta_click", {
    cta_label: label || "",
    cta_destination: destination || "",
    cta_location: location || "",
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
  });
}

/** Scroll-Tiefe: GA4 only */
export function trackScrollDepth(percent) {
  ga4Event("scroll_depth", {
    percent_scrolled: percent,
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
  });
}

/** Sektionen-Sichtbarkeit: GA4 only */
export function trackSectionView(sectionId, sectionName) {
  ga4Event("section_view", {
    section_id: sectionId || "",
    section_name: sectionName || "",
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
  });
}

/** Formular-Interaktion: GA4 only */
export function trackFormInteraction(action, formName, fieldName) {
  ga4Event("form_interaction", {
    form_action: action || "",
    form_name: formName || "",
    field_name: fieldName || "",
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
  });
}

/** Zeit auf Seite: GA4 only */
export function trackTimeOnPage(seconds) {
  ga4Event("time_on_page", {
    engagement_time_sec: seconds,
    page_path: typeof window !== "undefined" ? window.location.pathname : "",
  });
}
