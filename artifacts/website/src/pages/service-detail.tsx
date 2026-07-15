import React from "react";
import { Link, useParams, useLocation } from "wouter";
import { Layout } from "@/components/layout";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { useScrollToTop, servicesList } from "@/lib/constants";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

// Content maps strictly to the prompt specifications
const serviceDetails: Record<string, any> = {
  "moderne-webseiten": {
    title: "Moderne Webseiten",
    intro: "Das Fundament Ihres digitalen Auftritts.",
    benefits: [
      "Professioneller Auftritt",
      "Mehr Vertrauen bei Interessenten",
      "Klare Benutzerführung",
      "Bessere Conversion-Raten",
      "Schnelle Ladezeiten",
      "Responsive Darstellung auf allen Geräten",
      "Solide SEO-Grundlage"
    ],
    scope: [
      "Digitale Strategie & Konzeption",
      "User Experience (UX) Design",
      "Modernes Interface Design",
      "Frontend-Entwicklung",
      "Responsive Optimierung",
      "Performance-Optimierung",
      "Sichere Kontaktformulare",
      "Technisches SEO-Setup"
    ]
  },
  "ki-beratung": {
    title: "KI-Beratung",
    intro: "Klarheit im Hype. Finden Sie heraus, wo KI für Ihr Unternehmen Sinn macht.",
    benefits: [
      "Sinnvolle KI-Einsatzbereiche erkennen",
      "Tool-Chaos reduzieren",
      "Klare Prioritäten entwickeln",
      "Konkrete Roadmap erhalten",
      "Sicherheit im Umgang mit KI-Technologien gewinnen",
      "Fehlinvestitionen vermeiden"
    ],
    scope: [
      "Status-Quo Analyse",
      "Identifikation von Potenzialen",
      "Tool-Evaluierung",
      "Risiko- und Datenschutz-Bewertung",
      "Strategie-Entwicklung",
      "Management-Briefings"
    ]
  },
  "prozessautomatisierung": {
    title: "Prozessautomatisierung",
    intro: "Weniger manueller Aufwand, mehr Zeit für das Wesentliche.",
    benefits: [
      "Weniger Fehler durch manuelle Übertragungen",
      "Schnellere Reaktionszeiten",
      "Höhere Skalierbarkeit ohne Personalaufbau",
      "Konsistente Datenbasis",
      "Entlastung von Routinetätigkeiten"
    ],
    scope: [
      "Kontaktanfragen-Verarbeitung",
      "CRM-Prozesse synchronisieren",
      "Angebotserstellung automatisieren",
      "E-Mail Triage & Routing",
      "Terminbuchungs-Abläufe",
      "Dokumentenerstellung",
      "Lead Management & Nurturing"
    ]
  },
  "ai-workflows": {
    title: "Individuelle AI-Workflows",
    intro: "Spezifische KI-Lösungen für Ihre internen Prozesse.",
    benefits: [
      "Unternehmenswissen sofort abrufbar machen",
      "Komplexe Datenmengen strukturiert auswerten",
      "Mitarbeiter im Alltag operativ unterstützen",
      "Effizienz in der Sachbearbeitung steigern"
    ],
    scope: [
      "Automatische Dokumentenanalyse",
      "KI-gestützte Wissensdatenbanken",
      "Interne Assistenten (Copilots)",
      "Spezifische GPT-Systeme",
      "Aufgaben-spezifische AI-Agenten",
      "Automatische Zusammenfassungen von Meetings/Mails"
    ]
  },
  "ai-business-consulting": {
    title: "AI Business Consulting",
    intro: "KI strategisch im Unternehmen verankern.",
    benefits: [
      "Wettbewerbsvorteile durch moderne Arbeitsweisen sichern",
      "Mitarbeiter gezielt qualifizieren",
      "Nachhaltige Implementierung ohne Akzeptanzprobleme",
      "Messbare Effizienzsteigerungen erzielen"
    ],
    scope: [
      "Tiefgehende Prozessanalyse",
      "Entwicklung einer KI-Roadmap",
      "Detaillierte Toolauswahl",
      "Change Management Strategie",
      "Schulungen für Mitarbeiter",
      "Begleitete Implementierung"
    ]
  },
  "content-systeme": {
    title: "Content-Systeme",
    intro: "Strukturierte Prozesse für Ihre Inhalte.",
    benefits: [
      "Konstante Veröffentlichung ohne Stress",
      "Maximale Verwertung von einmal erstellten Inhalten",
      "Klarer Überblick über geplante Themen",
      "Zeitersparnis bei der Texterstellung"
    ],
    scope: [
      "Aufbau von Content Workflows",
      "Einrichtung von Redaktionssystemen",
      "Zentrales Ideenmanagement",
      "KI-gestützte Content-Erstellung",
      "Systeme zur Mehrfachverwertung bestehender Inhalte (Repurposing)",
      "Automatisierte Verteilung"
    ]
  }
};

export default function ServiceDetail() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const slug = params.slug;
  const service = slug ? serviceDetails[slug] : null;

  useScrollToTop();
  useDocumentTitle(service ? service.title : "Leistung nicht gefunden");

  if (!service) {
    return (
      <Layout>
        <div className="site-container py-32 text-center">
          <h1 className="text-3xl font-semibold mb-4">Leistung nicht gefunden</h1>
          <p className="text-muted-foreground mb-8">Die angefragte Seite existiert leider nicht.</p>
          <Link href="/leistungen" className="inline-flex items-center text-primary hover:underline">
            Zurück zur Übersicht
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb & Header */}
      <section className="page-hero">
        <div className="site-container max-w-4xl">
          <Link href="/leistungen" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Alle Leistungen
          </Link>
          <div className="space-y-4 fade-in">
            <h1 className="page-title">
              {service.title}
            </h1>
            <p className="lead">
              {service.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="page-section">
        <div className="site-container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Nutzen */}
            <div className="slide-up">
              <h2 className="text-2xl font-semibold mb-6 pb-4 border-b border-border">Der Nutzen für Sie</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit: string, idx: number) => (
                  <li key={idx} className="flex gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Umfang */}
            <div className="slide-up stagger-1">
              <h2 className="text-2xl font-semibold mb-6 pb-4 border-b border-border">Leistungsumfang</h2>
              <ul className="space-y-4">
                {service.scope.map((item: string, idx: number) => (
                  <li key={idx} className="flex gap-3 text-foreground">
                    <div className="w-1.5 h-1.5 rounded-sm bg-primary shrink-0 mt-2.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Footer CTA */}
      <section className="page-section border-t border-border">
        <div className="site-container text-center max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6">Klingt nach dem, was Sie brauchen?</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Lassen Sie uns im Erstgespräch klären, wie wir {service.title.toLowerCase()} in Ihrem Unternehmen optimal umsetzen können.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={`/kontakt?service=${slug}`} className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-12 px-8">
              Projekt anfragen
            </Link>
            <Link href="/leistungen" className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 px-8">
              Andere Leistungen ansehen
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
