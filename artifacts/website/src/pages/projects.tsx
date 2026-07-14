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
      title: "Digitales Setup für Beratungsunternehmen",
      category: "Webentwicklung & Automatisierung",
      situation: "Veraltete Website ohne klare Positionierung. Kontaktanfragen mussten manuell ins CRM (Pipedrive) übertragen werden. Termine wurden per E-Mail Ping-Pong vereinbart.",
      challenge: "Schaffung eines professionellen digitalen Auftritts, der Vertrauen ausstrahlt, gekoppelt mit einem System, das administrative Arbeit minimiert.",
      goal: "Steigerung der qualifizierten Anfragen und Reduktion der administrativen Zeit pro Lead um 80%.",
      strategy: "Neuentwicklung der Website mit klarem UX-Fokus. Anbindung an Make.com zur Orchestrierung der Datenflüsse zwischen Website, CRM und Terminbuchungstool.",
      solution: "Moderne, schnelle Website mit integriertem Qualifizierungs-Funnel. Automatische Anlage von Deals im CRM bei Anfrage. Automatischer Versand von Termin-Links bei passendem Lead-Scoring.",
      tech: ["React/Vite", "Tailwind CSS", "Make.com", "Pipedrive API", "Calendly"],
      quote: "Platzhalter – Echte Kundenstimme wird hier ergänzt, sobald das Projekt live ist."
    },
    {
      id: 2,
      title: "KI-Wissensdatenbank für Agentur",
      category: "AI-Workflows",
      situation: "Das Agenturwissen war über Google Drive, Notion und Slack verstreut. Neue Mitarbeiter brauchten Monate fürs Onboarding. Antworten auf häufige Fragen wurden ständig neu getippt.",
      challenge: "Zentralisierung des Wissens ohne die bestehenden Systeme komplett ersetzen zu müssen.",
      goal: "Ein System, das Fragen in natürlicher Sprache beantwortet und dabei auf die verstreuten Dokumente zugreift.",
      strategy: "Aufbau eines RAG (Retrieval-Augmented Generation) Systems, das bestehende Dokumentenablagen indiziert und per Chat-Interface durchsuchbar macht.",
      solution: "Ein interner KI-Assistent im Agentur-Look, der Projekt-Briefings, Guidelines und vergangene Konzepte kennt und Fragen direkt mit Quellenangabe beantwortet.",
      tech: ["OpenAI API", "Pinecone (Vector DB)", "Next.js", "OAuth Integrations"],
      quote: "Platzhalter – Echte Kundenstimme wird hier ergänzt, sobald das Projekt live ist."
    }
  ];

  return (
    <Layout>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl space-y-6 fade-in">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              Projekte & Case Studies
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Eine Auswahl an realen Use-Cases. So sieht die Verbindung von Strategie, Design und Technologie in der Praxis aus.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          
          <div className="mb-12 p-4 bg-primary/10 border border-primary/20 rounded-lg flex items-start gap-4 text-primary max-w-4xl slide-up">
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
                  <div className="aspect-[21/9] bg-muted border border-border rounded-xl flex items-center justify-center mb-10 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-muted/80 to-transparent"></div>
                    <div className="relative z-10 text-center">
                       <span className="text-sm font-medium border border-border bg-background/80 backdrop-blur px-4 py-2 rounded-full inline-block text-muted-foreground">
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
                    
                    <div className="p-6 bg-muted/30 border border-border rounded-xl italic text-muted-foreground">
                      "{project.quote}"
                    </div>
                  </div>

                  <div className="space-y-8 p-6 bg-background border border-border rounded-xl h-fit">
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
      <section className="py-24 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6">Ein ähnliches Projekt geplant?</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Wenn Sie vor ähnlichen Herausforderungen stehen, lassen Sie uns sprechen. Wir finden heraus, welcher Ansatz für Sie der beste ist.
          </p>
          <Link href="/kontakt" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-14 px-10">
            Erstgespräch anfragen
          </Link>
        </div>
      </section>

    </Layout>
  );
}
