import React from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { useScrollToTop } from "@/lib/constants";
import { ArrowRight, Box } from "lucide-react";

export default function Projects() {
  useDocumentTitle("Projekte");
  useScrollToTop();

  const caseStudies = [
    {
      id: 1,
      title: "Modernes Website- und Anfrage-Setup",
      category: "Webentwicklung & einfache Automatisierung",
      situation: "Die Website erklärt Angebot und nächsten Schritt nicht klar genug. Anfragen werden manuell weitergeleitet und Termine umständlich per E-Mail abgestimmt.",
      challenge: "Entwicklung eines hochwertigen Auftritts mit klarer Anfrageführung und einfachen Übergaben in bestehende Arbeitsabläufe.",
      goal: "Interessenten sollen schneller verstehen, ob das Angebot passt, und interne Rückfragen sollen reduziert werden.",
      strategy: "Neuentwicklung der Website mit klarer Seitenstruktur, verständlicher Copy und einer einfachen Automatisierung zwischen Formular, Benachrichtigung und Terminprozess.",
      solution: "Moderne, schnelle Website mit klaren Kontaktwegen. Anfragen werden strukturiert erfasst und an die richtigen Stellen weitergeleitet, ohne unnötige manuelle Zwischenschritte.",
      tech: ["React/Vite", "Tailwind CSS", "Make.com", "Pipedrive API", "Calendly"],
      quote: "Platzhalter – Echte Kundenstimme wird hier ergänzt, sobald das Projekt live ist."
    },
    {
      id: 2,
      title: "Interne Wissensstruktur für Agentur",
      category: "Digitale Prozessklärung",
      situation: "Wissen liegt an mehreren Orten, Zuständigkeiten sind nicht immer klar und wiederkehrende Fragen werden häufig neu beantwortet.",
      challenge: "Mehr Orientierung schaffen, ohne direkt alle bestehenden Tools zu ersetzen.",
      goal: "Ein verständlicher Ablauf, mit dem Informationen schneller gefunden, gepflegt und weitergegeben werden können.",
      strategy: "Analyse der bestehenden Ablagen, Entwicklung einer klaren Struktur und Prüfung, wo einfache KI-Unterstützung bei Suche oder Zusammenfassung sinnvoll sein kann.",
      solution: "Eine pragmatische Wissensstruktur mit dokumentierten Prozessen und optionaler KI-Unterstützung für Recherche, Zusammenfassung und Orientierung.",
      tech: ["OpenAI API", "Pinecone (Vector DB)", "Next.js", "OAuth Integrations"],
      quote: "Platzhalter – Echte Kundenstimme wird hier ergänzt, sobald das Projekt live ist."
    }
  ];

  return (
    <Layout>
      <section className="page-hero">
        <div className="site-container">
          <div className="max-w-3xl space-y-6 fade-in">
            <h1 className="page-title">
              Projekte & Beispiele
            </h1>
            <p className="lead">
              Transparente Beispiele dafür, wie Website, Automatisierung und Prozessklarheit zusammen gedacht werden können.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container">
          
          <div className="mb-12 p-4 bg-primary/10 border border-primary/20 rounded-sm flex items-start gap-4 text-primary max-w-4xl slide-up">
            <Box className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-sm">Hinweis zur Transparenz</p>
              <p className="text-sm opacity-90 mt-1">Die folgenden Einträge dienen aktuell als strukturierte Platzhalter, um den inhaltlichen Aufbau der Case Studies zu demonstrieren. Echte Projekte und verifizierte Kundenstimmen werden hier in Kürze ergänzt.</p>
            </div>
          </div>

          <div className="space-y-24">
            {caseStudies.map((project, idx) => (
              <div key={project.id} className={`slide-up ${idx === 1 ? 'stagger-1' : ''}`}>
                <div className="max-w-4xl mb-8">
                  <span className="text-sm font-medium px-3 py-1 rounded bg-secondary text-secondary-foreground mb-4 inline-block">
                    {project.category}
                  </span>
                  <h2 className="text-3xl font-semibold text-foreground mb-6">{project.title}</h2>
                  
                  {/* Visual Placeholder */}
                  <div className="aspect-[21/9] bg-muted border border-border rounded-sm flex items-center justify-center mb-10 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-muted/80 to-transparent"></div>
                    <div className="relative z-10 text-center">
                       <span className="text-sm font-medium border border-border bg-background/80 backdrop-blur px-4 py-2 rounded-sm inline-block text-muted-foreground">
                        Platzhalter – Projekt-Screenshots folgen
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Ausgangssituation & Herausforderung</h3>
                      <p className="text-muted-foreground">{project.situation} {project.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Strategie & Lösung</h3>
                      <p className="text-muted-foreground">{project.strategy} {project.solution}</p>
                    </div>
                    
                    <div className="p-6 quiet-band border border-border rounded-sm italic text-muted-foreground">
                      "{project.quote}"
                    </div>
                  </div>

                  <div className="space-y-8 p-6 bg-background border border-border rounded-sm h-fit">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Ziel</h3>
                      <p className="text-foreground text-sm leading-relaxed">{project.goal}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Technologien</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, i) => (
                          <span key={i} className="text-xs font-medium px-2 py-1 rounded bg-secondary text-secondary-foreground border border-border/50">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="page-section quiet-band border-t border-border">
        <div className="site-container text-center max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6">Ein ähnliches Vorhaben geplant?</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Wenn Ihre Website, Tools oder Abläufe unklar geworden sind, lassen Sie uns gemeinsam sortieren, welcher nächste Schritt sinnvoll ist.
          </p>
          <Link href="/kontakt" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-14 px-10">
            Erstgespräch anfragen
          </Link>
        </div>
      </section>

    </Layout>
  );
}
