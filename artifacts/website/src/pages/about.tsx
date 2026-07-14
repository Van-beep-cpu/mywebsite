import React from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { useScrollToTop } from "@/lib/constants";
import { brand } from "@/config/brand";

export default function About() {
  useDocumentTitle("Über mich");
  useScrollToTop();

  return (
    <Layout>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl space-y-6 fade-in">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              Über mich
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Builder, Unternehmer und Ihr strategischer Partner für den sinnvollen Einsatz moderner Technologien.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 slide-up">
              <div className="aspect-[3/4] bg-muted border border-border rounded-2xl flex flex-col items-center justify-center p-8 text-center relative overflow-hidden sticky top-32">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
                <div className="text-muted-foreground relative z-10">
                  <div className="w-32 h-32 bg-background border border-border rounded-full mx-auto mb-8 flex items-center justify-center shadow-sm">
                    <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground/50">PORTRAIT</span>
                  </div>
                  <h3 className="text-lg font-medium text-foreground mb-1">{brand.name}</h3>
                  <p className="text-sm mb-6">{brand.role}</p>
                  <div className="inline-block border border-border bg-background/80 backdrop-blur px-4 py-2 rounded-full text-sm font-medium">
                    Platzhalter – Echtes Foto folgt
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-12 slide-up stagger-1">
              <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                <h2 className="text-2xl font-semibold text-foreground mb-4 mt-0">Technologie ehrlich gemacht.</h2>
                <p>
                  Ich baue {brand.companyName} mit einem klaren Ziel auf: Ich möchte Unternehmen helfen, moderne Technologien wie KI und Automatisierung so einzusetzen, dass sie wirklich einen Mehrwert bieten — abseits vom aktuellen Hype.
                </p>
                <p>
                  Als kreativer Problemlöser und Builder sitze ich selbst jeden Tag an der Tastatur. Ich empfehle nichts, was ich nicht selbst getestet oder gebaut habe. Mein Ansatz ist stark praxisorientiert: Weniger endlose Strategiepapiere, mehr lauffähige Prototypen und echte Ergebnisse.
                </p>

                <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">Build in Public</h3>
                <p>
                  Transparenz ist mir wichtig. Ich dokumentiere meine eigenen Entscheidungen, Experimente, Fehler und Learnings beim Aufbau dieses Unternehmens öffentlich. Das zwingt mich, ehrlich zu bleiben und mein Wissen stetig zu hinterfragen. Für Sie bedeutet das: Sie wissen genau, wie ich denke und arbeite, noch bevor wir das erste Mal miteinander sprechen.
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mt-10 mb-4">Mein Hintergrund</h3>
                <p>
                  Ich verbinde technologisches Verständnis mit einem Gespür für Design und Geschäftsmodelle. Eine gute Lösung ist nicht nur code-technisch sauber, sie muss auch gut aussehen, intuitiv bedienbar sein und ein reales geschäftliches Problem lösen.
                </p>
                <p>
                  Ob Sie ein Selbstständiger, eine Agentur oder ein KMU sind: Wenn Sie einen verlässlichen Partner suchen, der komplexe Technik verständlich übersetzt und sauber implementiert, sind wir wahrscheinlich ein gutes Match.
                </p>
              </div>

              <div className="p-8 bg-muted/50 border border-border rounded-xl">
                <h3 className="text-lg font-medium text-foreground mb-4">Lassen Sie uns connecten</h3>
                <p className="text-muted-foreground mb-6">
                  Ich freue mich immer über neuen Austausch. Folgen Sie mir auf meinen Kanälen oder schreiben Sie mir direkt.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={brand.social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6">
                    LinkedIn Profil
                  </a>
                  <Link href="/kontakt" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-6">
                    Direktnachricht
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
