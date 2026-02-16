"use client";
import React from "react";
import Link from "next/link";
import Head from "next/head";
import AuthorBox, { AuthorMini } from "./AuthorBox";

const BlogArticle = ({ 
  title, metaTitle, metaDescription, metaKeywords, canonical, 
  publishDate, updatedDate, readingTime, author, category, 
  children, relatedArticles, tldr,
  authorName, authorRole, authorBio, authorCredentials, authorLinkedin
}) => {
  
  const authorData = {
    "@type": "Person",
    "name": authorName || "Robert Engel",
    "jobTitle": authorRole || "Gründer & Geschäftsführer",
    "url": "https://talentsuite.io/autor/robert-engel",
    "sameAs": [
      authorLinkedin || "https://www.linkedin.com/in/robert-engel"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "TalentSuite",
      "url": "https://talentsuite.io"
    },
    "knowsAbout": [
      "Performance Recruiting",
      "Social Media Recruiting",
      "Employer Branding",
      "Fachkräftegewinnung",
      "Social Media Marketing",
      "Personalgewinnung Handwerk"
    ]
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "author": authorData,
    "publisher": { 
      "@type": "Organization", 
      "name": "TalentSuite", 
      "url": "https://talentsuite.io",
      "logo": {
        "@type": "ImageObject",
        "url": "https://talentsuite.io/logo.png"
      }
    },
    "datePublished": publishDate || "2026-02-16",
    "dateModified": updatedDate || publishDate || "2026-02-16",
    "description": metaDescription,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonical
    },
    "inLanguage": "de-DE",
    "isPartOf": {
      "@type": "Blog",
      "name": "TalentSuite Blog",
      "url": "https://talentsuite.io/blog"
    }
  };

  return (
    <>
      <Head>
        <title>{metaTitle || title} | TalentSuite Blog</title>
        <meta name="description" content={metaDescription} />
        {metaKeywords && <meta name="keywords" content={metaKeywords} />}
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={metaTitle || title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        <meta property="article:published_time" content={publishDate || "2026-02-16"} />
        {updatedDate && <meta property="article:modified_time" content={updatedDate} />}
        <meta property="article:author" content={authorName || "Robert Engel"} />
      </Head>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <section className="appointment_section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              {/* Category & Reading Time */}
              <div style={{ marginBottom: "0.75rem", display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
                {category && <span style={{ background: "rgba(2,59,91,0.15)", color: "#023B5B", padding: "4px 12px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: "600" }}>{category}</span>}
                {readingTime && <span style={{ opacity: 0.6, fontSize: "0.9rem" }}>📖 {readingTime}</span>}
              </div>

              {/* Title */}
              <h1 style={{ fontSize: "2.2rem", fontWeight: "800", lineHeight: "1.3", marginBottom: "1rem" }}>{title}</h1>
              
              {/* Author Mini + Dates */}
              <AuthorMini 
                name={authorName || "Robert Engel"} 
                role={authorRole || "Gründer & Geschäftsführer"} 
                date={publishDate}
                updatedDate={updatedDate}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="policies pt-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <article className="blog-content" style={{ fontSize: "1.05rem", lineHeight: "1.8" }}>
                {children}
              </article>

              {/* Author Box */}
              <AuthorBox 
                name={authorName}
                role={authorRole}
                bio={authorBio}
                credentials={authorCredentials}
                linkedin={authorLinkedin}
              />

              {/* CTA */}
              <div style={{ background: "linear-gradient(135deg, #023B5B 0%, #035a8c 100%)", borderRadius: "16px", padding: "2rem", marginTop: "1.5rem", marginBottom: "2rem", textAlign: "center" }}>
                <h3 style={{ color: "white", fontSize: "1.4rem", marginBottom: "0.75rem" }}>Bereit für messbare Ergebnisse?</h3>
                <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "1.25rem" }}>In einem kostenlosen Erstgespräch analysieren wir deine Situation und zeigen dir konkret, wie wir helfen können.</p>
                <a href="https://calendar.app.google/mU29snzEsgqsnMXy8" style={{ display: "inline-block", background: "white", color: "#023B5B", padding: "12px 32px", borderRadius: "8px", fontWeight: "700", textDecoration: "none" }}>Jetzt kostenloses Erstgespräch buchen</a>
              </div>

              {/* Related Articles */}
              {relatedArticles && relatedArticles.length > 0 && (
                <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
                  <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Weitere Artikel</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" }}>
                    {relatedArticles.map((article, i) => (
                      <Link key={i} href={article.href} style={{ display: "block", padding: "1rem", background: "rgba(2,59,91,0.04)", borderRadius: "10px", textDecoration: "none", color: "inherit", border: "1px solid rgba(0,0,0,0.06)" }}>
                        <span style={{ fontSize: "0.8rem", opacity: 0.5 }}>{article.category}</span>
                        <p style={{ fontWeight: "600", margin: "4px 0 0", fontSize: "0.95rem" }}>{article.title}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ marginTop: "2rem", textAlign: "center" }}>
                <Link href="/blog" style={{ color: "#023B5B", fontWeight: "600" }}>← Zurück zur Übersicht</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogArticle;
