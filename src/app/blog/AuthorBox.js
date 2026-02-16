"use client";
import React from "react";
import Link from "next/link";

/* ── Mini-Autorenzeile (oben im Artikel) ── */
export const AuthorMini = ({ name = "Robert Engel", role = "Gründer & Geschäftsführer", date, updatedDate }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap", marginBottom: "0.25rem" }}>
    <div style={{
      width: "36px", height: "36px", borderRadius: "50%",
      background: "linear-gradient(135deg, #023B5B 0%, #035a8c 100%)",
      display: "flex", alignItems: "center", justifyContent: "center",
      color: "white", fontWeight: "700", fontSize: "0.85rem"
    }}>RE</div>
    <div style={{ fontSize: "0.88rem", lineHeight: "1.3" }}>
      <Link href="/autor/robert-engel" style={{ fontWeight: "600", color: "#023B5B", textDecoration: "none" }}>{name}</Link>
      <span style={{ opacity: 0.5 }}> · {role}</span>
    </div>
    {date && (
      <div style={{ fontSize: "0.82rem", opacity: 0.5, marginLeft: "auto" }}>
        {new Date(date).toLocaleDateString("de-DE", { year: "numeric", month: "long", day: "numeric" })}
        {updatedDate && updatedDate !== date && (
          <span> · Aktualisiert: {new Date(updatedDate).toLocaleDateString("de-DE", { year: "numeric", month: "short", day: "numeric" })}</span>
        )}
      </div>
    )}
  </div>
);

/* ── Vollständige Autorenbox (unter dem Artikel) ── */
const AuthorBox = ({ 
  name = "Robert Engel", 
  role = "Gründer & Geschäftsführer bei TalentSuite",
  bio = "Robert Engel ist Experte für Performance Recruiting und Social Media Marketing im Mittelstand. Mit seiner Agentur TalentSuite hilft er Handwerksbetrieben, Pflegeeinrichtungen und Industrieunternehmen in Südwestfalen und dem Märkischen Kreis, qualifizierte Fachkräfte über digitale Kanäle zu gewinnen. Durch datengetriebene Social-Media-Kampagnen hat er bereits hunderte erfolgreiche Besetzungen für seine Kunden realisiert.",
  credentials = [
    "Performance Recruiting Spezialist seit 2020+",
    "100+ erfolgreiche Recruiting-Kampagnen durchgeführt",
    "Spezialisiert auf Handwerk, Pflege, Gastronomie & Industrie",
    "Lokale Expertise: Märkischer Kreis & Südwestfalen",
    "Zusätzlich: Videomarketing & Employer Branding (MadebyMEE)"
  ],
  linkedin = "https://www.linkedin.com/in/robert-engel",
  profileUrl = "/autor/robert-engel"
}) => {
  return (
    <div style={{
      background: "rgba(2,59,91,0.04)",
      border: "1px solid rgba(2,59,91,0.1)",
      borderRadius: "16px",
      padding: "1.75rem",
      marginTop: "2.5rem",
      marginBottom: "1.5rem"
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "1rem" }}>
        <div style={{
          width: "56px", height: "56px", borderRadius: "50%",
          background: "linear-gradient(135deg, #023B5B 0%, #035a8c 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "white", fontWeight: "700", fontSize: "1.2rem",
          flexShrink: 0
        }}>RE</div>
        <div>
          <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", opacity: 0.5, marginBottom: "2px" }}>Über den Autor</div>
          <Link href={profileUrl} style={{ fontSize: "1.1rem", fontWeight: "700", color: "#023B5B", textDecoration: "none" }}>{name}</Link>
          <div style={{ fontSize: "0.88rem", opacity: 0.65, marginTop: "1px" }}>{role}</div>
        </div>
      </div>

      {/* Bio */}
      <p style={{ fontSize: "0.95rem", lineHeight: "1.7", margin: "0 0 1rem", color: "#333" }}>{bio}</p>

      {/* Credentials */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1.25rem" }}>
        {credentials.map((c, i) => (
          <span key={i} style={{
            background: "rgba(2,59,91,0.08)",
            color: "#023B5B",
            padding: "4px 10px",
            borderRadius: "6px",
            fontSize: "0.78rem",
            fontWeight: "500"
          }}>✓ {c}</span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
        <Link href={profileUrl} style={{
          fontSize: "0.88rem", fontWeight: "600", color: "#023B5B", textDecoration: "none",
          padding: "6px 16px", border: "1px solid rgba(2,59,91,0.2)", borderRadius: "8px"
        }}>Vollständiges Profil →</Link>
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{
            fontSize: "0.88rem", fontWeight: "500", color: "#0A66C2", textDecoration: "none",
            padding: "6px 16px", border: "1px solid rgba(10,102,194,0.2)", borderRadius: "8px"
          }}>LinkedIn</a>
        )}
      </div>
    </div>
  );
};

export default AuthorBox;
