"use client";
import React from "react";

const TldrBox = ({ items = [] }) => {
  if (!items || items.length === 0) return null;

  return (
    <div style={{
      background: "linear-gradient(135deg, rgba(2,59,91,0.06) 0%, rgba(2,59,91,0.02) 100%)",
      border: "1px solid rgba(2,59,91,0.12)",
      borderLeft: "4px solid #023B5B",
      borderRadius: "0 12px 12px 0",
      padding: "1.25rem 1.5rem",
      marginBottom: "2rem"
    }}>
      <div style={{
        fontSize: "0.75rem",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        fontWeight: "700",
        color: "#023B5B",
        marginBottom: "0.6rem"
      }}>
        Das Wichtigste auf einen Blick
      </div>
      <ul style={{ margin: 0, paddingLeft: "1.1rem", listStyle: "none" }}>
        {items.map((item, i) => (
          <li key={i} style={{
            fontSize: "0.92rem",
            lineHeight: "1.6",
            marginBottom: i < items.length - 1 ? "0.35rem" : 0,
            position: "relative",
            paddingLeft: "0.2rem"
          }}>
            <span style={{ position: "absolute", left: "-1.1rem", color: "#023B5B", fontWeight: "600" }}>✓</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TldrBox;
