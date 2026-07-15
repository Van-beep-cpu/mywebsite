import React from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout";
import { PortraitVisual } from "@/components/portrait-visual";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { useScrollToTop } from "@/lib/constants";
import { brand } from "@/config/brand";

export default function About() {
  useDocumentTitle("Über mich");
  useScrollToTop();

  return (
    <Layout>
      <section className="page-hero">
        <div className="site-container grid gap-12 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
          <div className="space-y-7 fade-in">
            <p className="eyebrow">Über mich</p>
            <h1 className="page-title">Digitale Arbeit ehrlich gemacht.</h1>
            <p className="lead">Builder und strategischer Partner für moderne Webseiten, einfache Automatisierungen und verständlichere digitale Prozesse.</p>
          </div>
          <PortraitVisual label={brand.name} />
        </div>
      </section>

      <section className="page-section">
        <div className="site-container grid gap-16 lg:grid-cols-[0.35fr_0.65fr]">
          <p className="eyebrow">Ansatz</p>
          <div className="space-y-10 text-[clamp(1.25rem,2.2vw,2rem)] leading-[1.45] tracking-[-0.03em]">
            <p>Ich baue {brand.companyName} mit einem klaren Ziel auf: Unternehmen dabei zu helfen, digitale Themen verständlicher zu machen und konkrete Lösungen umzusetzen, die im Alltag wirklich nutzbar sind.</p>
            <p>Als Builder arbeite ich nah an der Umsetzung. Struktur, Design, Entwicklung und einfache Automatisierungen gehören für mich zusammen.</p>
            <p>Ich mache keine übertriebenen Versprechen und verkaufe keine fertige Wahrheit. Entscheidungen sollen nachvollziehbar sein, Grenzen offen bleiben und Lösungen zu Menschen passen.</p>
            <div className="pt-8 flex flex-col gap-4 sm:flex-row">
              <a href={brand.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">LinkedIn Profil</a>
              <Link href="/kontakt" className="btn-primary">Direktnachricht</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
