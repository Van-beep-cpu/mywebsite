import React from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { useScrollToTop, servicesList, processSteps } from "@/lib/constants";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2, ChevronRight, Globe, Lightbulb, Settings, Workflow, Briefcase, FileText } from "lucide-react";

export default function Home() {
  useDocumentTitle("Startseite");
  useScrollToTop();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe": return <Globe className="w-6 h-6 text-primary" />;
      case "Lightbulb": return <Lightbulb className="w-6 h-6 text-primary" />;
      case "Settings": return <Settings className="w-6 h-6 text-primary" />;
      case "Workflow": return <Workflow className="w-6 h-6 text-primary" />;
      case "Briefcase": return <Briefcase className="w-6 h-6 text-primary" />;
      case "FileText": return <FileText className="w-6 h-6 text-primary" />;
      default: return <Settings className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 md:pt-32 md:pb-40 overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-[400px] bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8 fade-in">
            <span className="inline-block py-1 px-3 rounded-full bg-muted text-muted-foreground text-sm font-medium tracking-wide">
              Webseiten, Automatisierung und verständliche digitale Prozesse
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance">
              Moderne Webseiten.<br />Einfache Automatisierung.<br />Klare digitale Prozesse.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ich unterstütze Unternehmen als Builder und strategischer Partner: mit hochwertigen Webseiten, pragmatischen Automatisierungen und klarer Übersetzung zwischen Technik und Geschäftsalltag.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/kontakt" className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-12 px-8">
                Unverbindlich sprechen
              </Link>
              <Link href="/leistungen" className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 px-8">
                Leistungen ansehen
              </Link>
            </div>
            
            {/* Vertrauenszeile */}
            <div className="pt-12 mt-12 border-t border-border/50 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-muted-foreground font-medium">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Ehrlich eingeschätzt.</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Sauber umgesetzt.</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Transparent begleitet.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Digitale Arbeit muss nicht komplizierter werden.</h2>
            <p className="text-lg text-muted-foreground">Oft sind es nicht die großen technischen Fragen, sondern viele kleine Reibungen: unklare Abläufe, veraltete Seiten, manuelle Übergaben oder Tools, die niemand richtig nutzt.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Website passt nicht mehr", desc: "Ihr Auftritt fühlt sich nicht mehr zeitgemäß an und erklärt nicht klar genug, warum Kunden Ihnen vertrauen können." },
              { title: "Zu viel Handarbeit", desc: "Daten werden kopiert, E-Mails manuell sortiert oder Schritte wiederholt, die sich einfacher lösen lassen." },
              { title: "Unsicherheit bei neuen Tools", desc: "Es gibt viele Möglichkeiten, aber wenig Orientierung, welche davon für Ihr Unternehmen wirklich sinnvoll sind." },
              { title: "Tool-Chaos", desc: "Informationen liegen verstreut, Zuständigkeiten sind unklar und einfache Fragen kosten unnötig Zeit." },
              { title: "Keine klare Reihenfolge", desc: "Es gibt Ideen und Baustellen, aber keinen pragmatischen Plan, womit man anfangen sollte." },
              { title: "Begrenzte Ressourcen", desc: "Teams haben genug zu tun. Digitale Lösungen müssen entlasten, nicht zusätzliche Pflegearbeit erzeugen." }
            ].map((problem, idx) => (
              <div key={idx} className="bg-background border border-border p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-xl mb-3 text-foreground">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Meine Leistungen</h2>
              <p className="text-lg text-muted-foreground">Ich entwickle Webauftritte, einfache Automatisierungen und digitale Strukturen, die zu Ihrem Unternehmen passen – verständlich geplant und sauber umgesetzt.</p>
            </div>
            <Link href="/leistungen" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
              Alle Details ansehen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, idx) => (
              <Link key={idx} href={service.slug} className="group block bg-background border border-border rounded-xl p-8 hover:border-primary/50 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  {getIcon(service.icon)}
                </div>
                <h3 className="font-semibold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.shortDesc}</p>
                <div className="flex items-center text-sm font-medium text-primary mt-auto">
                  Mehr erfahren <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/kontakt" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-12 px-8">
              Unverbindliches Gespräch anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* Outcome/Benefits */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Gute digitale Lösungen merkt man im Alltag</h2>
            <p className="text-primary-foreground/80 text-lg">Nicht jedes Problem braucht ein großes System. Entscheidend ist, dass Website, Tools und Prozesse verständlicher werden und zuverlässig funktionieren.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
            <div className="flex gap-4">
              <div className="mt-1 bg-white/20 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Eine Website schafft Orientierung.</h3>
                <p className="text-primary-foreground/80">Besucher verstehen schneller, wer Sie sind, was Sie anbieten und wie der nächste Schritt aussieht.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 bg-white/20 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Automatisierung reduziert Reibung.</h3>
                <p className="text-primary-foreground/80">Wiederkehrende Aufgaben laufen verlässlicher, ohne jeden Tag neu angestoßen werden zu müssen.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 bg-white/20 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Digitale Beratung schafft Klarheit.</h3>
                <p className="text-primary-foreground/80">Sie bekommen eine ehrliche Einschätzung, welche Tools helfen können – und welche aktuell nicht nötig sind.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="mt-1 bg-white/20 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Struktur macht Arbeit nachvollziehbar.</h3>
                <p className="text-primary-foreground/80">Abläufe, Verantwortlichkeiten und Informationen werden so geordnet, dass Teams besser damit arbeiten können.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Wie wir zusammenarbeiten</h2>
            <p className="text-lg text-muted-foreground">Ein klarer Ablauf mit ehrlicher Kommunikation, sichtbaren Zwischenschritten und Raum für Fragen.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0">
                <div className="hidden md:block text-6xl font-bold text-muted/50 mb-4 tracking-tighter">
                  0{step.id}
                </div>
                <div className="md:hidden absolute left-0 top-1 text-primary font-bold">
                  {step.id}.
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-16 border-t border-border flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Möchten Sie Ihr Vorhaben sortieren?</h3>
              <p className="text-muted-foreground">In einem unverbindlichen Gespräch klären wir, wo Sie stehen und welcher nächste Schritt realistisch ist.</p>
            </div>
            <Link href="/kontakt" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-12 px-8 shrink-0">
              Unverbindlich sprechen
            </Link>
          </div>
        </div>
      </section>

      {/* Why me & Build in public */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-semibold">Wie ich arbeite</h2>
              <p className="text-lg text-muted-foreground">
                Ich arbeite transparent, pragmatisch und ohne Guru-Sprache. Ich baue Lösungen, erkläre Entscheidungen und sage offen, wenn etwas noch nicht sinnvoll ist.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="mt-1 text-primary shrink-0"><CheckCircle2 className="w-5 h-5" /></div>
                  <p className="text-foreground"><strong>Ehrliche Einschätzung:</strong> Wenn eine Lösung zu groß, zu früh oder unnötig ist, spreche ich das an. Vertrauen entsteht durch Klarheit.</p>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 text-primary shrink-0"><CheckCircle2 className="w-5 h-5" /></div>
                  <p className="text-foreground"><strong>Builder-Mentalität:</strong> Ich denke strategisch, setze aber auch praktisch um – von Struktur und Text bis zur technischen Umsetzung.</p>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 text-primary shrink-0"><CheckCircle2 className="w-5 h-5" /></div>
                  <p className="text-foreground"><strong>Kontinuierliches Lernen:</strong> Ich entwickle meine Fähigkeiten laufend weiter und arbeite transparent mit dem, was ich sicher beurteilen und sauber liefern kann.</p>
                </div>
              </div>
              <div className="pt-4">
                <Link href="/ueber-mich" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                  Mehr über meine Arbeitsweise <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-muted border border-border rounded-2xl flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                {/* Visual placeholder for personal workspace/portrait */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
                <div className="text-muted-foreground">
                  <div className="w-24 h-24 bg-background border border-border rounded-full mx-auto mb-6 flex items-center justify-center shadow-sm">
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground/50">FOTO</span>
                  </div>
                  <p className="text-sm font-medium border border-border bg-background/50 backdrop-blur px-4 py-2 rounded-full inline-block">
                    Platzhalter – Echtes Foto folgt
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">Projektbeispiele</h2>
              <p className="text-lg text-muted-foreground">Transparente Beispiele für mögliche Projekte. Aktuell noch als Platzhalter gekennzeichnet, bis echte Arbeiten dokumentiert sind.</p>
            </div>
            <Link href="/projekte" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
              Alle Projekte ansehen <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[16/10] bg-muted border border-border rounded-xl mb-6 overflow-hidden relative flex items-center justify-center transition-all group-hover:border-primary/30 group-hover:shadow-sm">
                   <p className="text-sm font-medium border border-border bg-background/50 px-4 py-2 rounded-full z-10">
                    Platzhalter – Echte Projekte folgen in Kürze
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-tr from-muted/50 to-transparent group-hover:opacity-50 transition-opacity"></div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium px-2.5 py-1 rounded bg-secondary text-secondary-foreground">Webentwicklung</span>
                  <span className="text-xs font-medium px-2.5 py-1 rounded bg-secondary text-secondary-foreground">Automatisierung</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">Digitales Setup für Dienstleister {i}</h3>
                <p className="text-muted-foreground line-clamp-2">Beispiel für eine moderne Website mit klarer Anfrageführung und einfachen Automatisierungen im Hintergrund.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Häufige Fragen</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-border">
              <AccordionTrigger className="text-left text-lg font-medium">Was kostet ein typisches Projekt?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Jedes Projekt ist individuell, daher gibt es keine pauschalen Paketpreise. Kleinere Automatisierungen oder Landingpages starten in der Regel bei einem festen Budgetrahmen, umfassende Strategie- und Implementierungsprojekte werden detailliert nach Aufwand kalkuliert. Nach unserem Erstgespräch erhalten Sie ein transparentes, verbindliches Angebot.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-border">
              <AccordionTrigger className="text-left text-lg font-medium">Wie lange dauert die Umsetzung?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Die Dauer hängt vom Umfang ab. Eine übersichtliche Website oder ein einzelner KI-Workflow kann oft innerhalb von 3-4 Wochen realisiert werden. Größere Projekte oder die schrittweise Integration mehrerer Systeme strecken sich meist über 2-3 Monate, wobei wir Meilensteine definieren, damit Sie schnell erste Ergebnisse sehen.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-border">
              <AccordionTrigger className="text-left text-lg font-medium">Sind meine Unternehmensdaten bei KI-Tools sicher?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Datenschutz ist essenziell. Bei der Implementierung von KI-Lösungen achten wir strikt auf DSGVO-Konformität. Wir nutzen vorzugsweise Enterprise-Lösungen oder lokale Modelle, bei denen vertrauliche Daten nicht für das Training öffentlicher KI-Modelle verwendet werden. Dieser Aspekt wird in jedem Projekt explizit geprüft.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-border">
              <AccordionTrigger className="text-left text-lg font-medium">Brauche ich technisches Vorwissen?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Nein, überhaupt nicht. Es ist mein Job, die technischen Aspekte so zu übersetzen und aufzubereiten, dass sie für Sie verständlich und nutzbar sind. Sie bringen das Fachwissen über Ihr Geschäft mit, ich kümmere mich um die technologische Umsetzung und dokumentiere alles so, dass Ihr Team problemlos damit arbeiten kann.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="border-border">
              <AccordionTrigger className="text-left text-lg font-medium">Was passiert nach Projektabschluss?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                Nach dem Live-Gang lassen wir Sie nicht allein. Teil des Prozesses ist immer eine saubere Dokumentation und Einweisung. Darüber hinaus biete ich langfristige Betreuung (Retainer) an, um Systeme aktuell zu halten, Workflows zu optimieren und bei Fragen als technischer Partner zur Seite zu stehen.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-2xl p-8 md:p-16 text-center shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-semibold mb-6">Lassen Sie uns Ihr digitales Vorhaben sortieren.</h2>
              <p className="text-lg text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
                Erzählen Sie mir, was aktuell unklar, umständlich oder veraltet ist. Ich gebe Ihnen eine ehrliche Einschätzung, ob und wie ich helfen kann.
              </p>
              <Link href="/kontakt" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-background text-primary shadow hover:bg-background/90 h-14 px-10">
                Gespräch anfragen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
