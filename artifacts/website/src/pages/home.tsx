import React from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { useScrollToTop, processSteps } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { PortraitVisual } from "@/components/portrait-visual";

const coreServices = [
  {
    eyebrow: "01",
    title: "Moderne Websites",
    text: "Ein professioneller Auftritt, der Vertrauen aufbaut, Ihre Angebote klar erklärt und Besuchende ohne Umwege zur passenden Anfrage führt.",
    outcomes: ["bessere Nutzerführung", "mehr qualifizierte Anfragen", "stärkerer erster Eindruck"],
    href: "/leistungen/moderne-webseiten"
  },
  {
    eyebrow: "02",
    title: "Prozessautomatisierung",
    text: "Wiederkehrende Aufgaben werden so verbunden, dass weniger manuelle Arbeit, weniger Fehler und mehr Übersicht im Alltag entstehen.",
    outcomes: ["schnellere Abläufe", "klare Übergaben", "weniger Kopieren & Nachfassen"],
    href: "/leistungen/prozessautomatisierung"
  },
  {
    eyebrow: "03",
    title: "KI-Beratung & AI Workflows",
    text: "Ich helfe bei sinnvoller Tool-Auswahl und entwickle verständliche KI-Workflows, die praktisch unterstützen statt zusätzlichen Hype zu erzeugen.",
    outcomes: ["klare Entscheidungen", "verständliche Anwendung", "praxisnahe KI-Lösungen"],
    href: "/leistungen/ki-beratung"
  }
];

const buildNotes = [
  "Aktuelles Learning: KI wird wertvoll, wenn der Prozess vorher klar ist.",
  "Workflow-Idee: Anfrageformular → Sortierung → Aufgabenübersicht → nächste Antwort.",
  "Fortschritt der Woche: mehr Fokus auf klare Sprache statt Tool-Showcase."
];

export default function Home() {
  useDocumentTitle("Startseite");
  useScrollToTop();

  return (
    <Layout>
      <section className="hero-composition page-hero">
        <div className="site-container">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.6fr)_minmax(320px,0.4fr)] lg:items-center">
            <div className="fade-in">
              <p className="eyebrow mb-7">WEB DESIGN · AUTOMATION · AI SOLUTIONS</p>
              <h1 className="display-title text-balance">Moderne Websites und intelligente Systeme, die Arbeit abnehmen.</h1>
              <p className="lead mt-8">
                Ich unterstütze Unternehmen dabei, professioneller aufzutreten, wiederkehrende Abläufe zu automatisieren und moderne Technologie verständlich einzusetzen.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/kontakt" className="btn-primary">Projekt besprechen <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/leistungen" className="btn-secondary">Leistungen ansehen</Link>
              </div>
            </div>
            <PortraitVisual />
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container">
          <div className="editorial-heading">
            <p className="kicker">Leistungen</p>
            <h2>Digitale Lösungen, die Kunden verstehen und Teams entlasten.</h2>
            <p>Der Nutzen steht vor dem Tool: klare Websites, nachvollziehbare Abläufe und KI dort, wo sie wirklich hilft.</p>
          </div>
          <div className="services-editorial mt-14">
            {coreServices.map((service) => (
              <Link href={service.href} className="service-row group" key={service.title}>
                <span className="service-number">{service.eyebrow}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <ul>
                  {service.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section quiet-band">
        <div className="container mx-auto grid gap-10 px-4 md:grid-cols-2 md:px-6">
          <div className="before-after before"><p className="kicker">Vorher</p><h2>Viele Ideen, aber unklare Reihenfolge.</h2><p>Veraltete Seiten, manuelle Übergaben, verstreute Informationen und Unsicherheit bei neuen Tools kosten Aufmerksamkeit.</p></div>
          <div className="before-after after"><p className="kicker">Nachher</p><h2>Ein digitales Setup, das Orientierung gibt.</h2><p>Besuchende finden schneller den nächsten Schritt, Routineaufgaben laufen verlässlicher und Entscheidungen werden nachvollziehbar.</p></div>
        </div>
      </section>

      <section id="prozess" className="page-section">
        <div className="site-container">
          <div className="editorial-heading"><p className="kicker">Prozess</p><h2>Ruhig, klar und Schritt für Schritt.</h2><p>Ein transparenter Ablauf mit sichtbaren Zwischenschritten, ehrlicher Einschätzung und Raum für Fragen.</p></div>
          <div className="process-line mt-14">
            {processSteps.map((step) => <article key={step.id}><span>0{step.id}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="page-section about-composition">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-center md:px-6">
          <div>
            <p className="kicker">Über Vanessa</p>
            <h2>Technologie, Kreativität und unternehmerisches Denken — ohne Hype-Verkauf.</h2>
            <p>Ich baue eine moderne AI-First-Unternehmensmarke auf und dokumentiere den Weg ehrlich. Mich interessiert, wie Websites, Automatisierungen und KI im echten Arbeitsalltag helfen: verständlich, praktisch und mit Persönlichkeit.</p>
            <p>Musik und Kreativität prägen meine Arbeitsweise genauso wie Struktur und Systemdenken. So entstehen Lösungen, die nicht künstlich wirken, sondern zu Menschen und Unternehmen passen.</p>
            <Link href="/ueber-mich" className="text-link">Mehr über meine Arbeitsweise <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="portrait-system" aria-label="Visuelle Komposition zu Vanessa Truong">
            <div className="portrait-mark">VT</div>
            <div className="principle one">praktisch vor übertrieben</div>
            <div className="principle two">klar sprechen</div>
            <div className="principle three">kreativ bauen</div>
          </div>
        </div>
      </section>

      <section className="page-section quiet-band">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[0.8fr_1.2fr] md:px-6">
          <div className="automation-card"><p className="kicker">Automatisierungsbeispiel</p><h2>Von der Anfrage zur Übersicht.</h2><p>Eine Anfrage kommt rein, wird automatisch vorsortiert, relevante Informationen landen in einer klaren Übersicht und die nächste Antwort ist vorbereitet.</p></div>
          <div className="automation-flow">{['Formular', 'Sortierung', 'Aufgabe', 'Antwort'].map((item) => <div key={item}>{item}</div>)}</div>
        </div>
      </section>

      <section id="build-in-public" className="page-section quiet-band">
        <div className="site-container">
          <div className="editorial-heading"><p className="kicker">Build in Public</p><h2>Der Aufbau bleibt sichtbar.</h2><p>Ich teile Learnings, Experimente und Verbesserungen, damit die Marke persönlicher bleibt als eine statische Agentur-Seite.</p></div>
          <div className="notes-grid mt-12">{buildNotes.map((note) => <article key={note}>{note}</article>)}</div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container">
          <div className="final-cta">
            <p className="kicker">Nächster Schritt</p>
            <h2>Lassen Sie uns Ihr digitales Vorhaben sortieren.</h2>
            <p>Erzählen Sie mir, was aktuell unklar, umständlich oder veraltet ist. Ich gebe Ihnen eine ehrliche Einschätzung, ob und wie ich helfen kann.</p>
            <Link href="/kontakt" className="btn-primary">Projekt besprechen <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
