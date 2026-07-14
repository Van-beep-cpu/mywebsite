import React from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { useScrollToTop, servicesList } from "@/lib/constants";
import { ArrowRight, ChevronRight, Globe, Lightbulb, Settings, Workflow, Briefcase, FileText } from "lucide-react";

export default function Services() {
  useDocumentTitle("Leistungen");
  useScrollToTop();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe": return <Globe className="w-8 h-8 text-primary" />;
      case "Lightbulb": return <Lightbulb className="w-8 h-8 text-primary" />;
      case "Settings": return <Settings className="w-8 h-8 text-primary" />;
      case "Workflow": return <Workflow className="w-8 h-8 text-primary" />;
      case "Briefcase": return <Briefcase className="w-8 h-8 text-primary" />;
      case "FileText": return <FileText className="w-8 h-8 text-primary" />;
      default: return <Settings className="w-8 h-8 text-primary" />;
    }
  };

  return (
    <Layout>
      {/* Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl space-y-6 fade-in">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
              Leistungen
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Digitale Lösungen, die Ihren Arbeitsalltag spürbar verbessern. Keine Insellösungen, sondern durchdachte Systeme.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {servicesList.map((service, idx) => (
              <div key={idx} className="flex flex-col bg-background border border-border rounded-2xl p-8 md:p-10 hover:border-primary/30 hover:shadow-sm transition-all slide-up" style={{ animationDelay: `${idx * 50}ms` }}>
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-8">
                  {getIcon(service.icon)}
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">{service.title}</h2>
                <p className="text-muted-foreground text-lg mb-8 flex-grow">{service.description}</p>
                <div className="pt-6 border-t border-border mt-auto">
                  <Link href={service.slug} className="inline-flex items-center gap-2 text-primary font-medium hover:underline group">
                    Details und Umfang ansehen <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-semibold mb-6">Unsicher, wo Sie anfangen sollen?</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Das ist normal. Im Erstgespräch sortieren wir Ihre Herausforderungen und definieren den sinnvollsten ersten Schritt — völlig unverbindlich.
          </p>
          <Link href="/kontakt" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-14 px-10">
            Kostenloses Erstgespräch
          </Link>
        </div>
      </section>
    </Layout>
  );
}
