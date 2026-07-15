import React from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { useScrollToTop, servicesList } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function Services() {
  useDocumentTitle("Leistungen");
  useScrollToTop();

  return (
    <Layout>
      <section className="page-hero">
        <div className="site-container">
          <div className="max-w-4xl space-y-7 fade-in">
            <p className="eyebrow">Leistungen</p>
            <h1 className="page-title">Klar gestaltete digitale Arbeit.</h1>
            <p className="lead">Moderne Webseiten, einfache Automatisierungen und Beratung, die digitale Prozesse verständlicher macht — ohne Hype und ohne unnötige Komplexität.</p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container">
          <div className="services-editorial">
            {servicesList.map((service, idx) => (
              <Link href={service.slug} key={service.id} className="service-row slide-up" style={{ animationDelay: `${idx * 50}ms` }}>
                <span className="service-number">{String(idx + 1).padStart(2, "0")}</span>
                <h2>{service.title}</h2>
                <div>
                  <p>{service.description}</p>
                  <span className="text-link mt-6">Details ansehen <ArrowRight className="h-4 w-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section quiet-band">
        <div className="site-container final-cta max-w-4xl">
          <p className="eyebrow mb-5">Orientierung</p>
          <h2 className="section-title">Unsicher, was der sinnvolle erste Schritt ist?</h2>
          <p className="lead mt-6 mb-9">Das ist normal. Wir sortieren gemeinsam Ihre aktuelle Situation und entscheiden ehrlich, welcher Schritt jetzt realistisch und hilfreich ist.</p>
          <Link href="/kontakt" className="btn-primary">Unverbindlich sprechen</Link>
        </div>
      </section>
    </Layout>
  );
}
