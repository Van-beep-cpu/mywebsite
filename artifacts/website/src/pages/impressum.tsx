import React from "react";
import { Layout } from "@/components/layout";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { brand } from "@/config/brand";

export default function Impressum() {
  useDocumentTitle("Impressum");

  return (
    <Layout>
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground mb-6">
            Impressum
          </h1>
          <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-primary text-sm font-medium mb-8">
            Platzhalter – Rechtlich verbindliche Angaben müssen hier noch durch den Seitenbetreiber ergänzt werden.
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              {brand.name}<br />
              {brand.companyName}<br />
              [Musterstraße 1]<br />
              [12345 Musterstadt]<br />
              {brand.location}
            </p>

            <h2>Kontakt</h2>
            <p>
              Telefon: {brand.phone}<br />
              E-Mail: {brand.email}
            </p>

            <h2>Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              [DE 123 456 789]
            </p>

            <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              {brand.name}<br />
              [Musterstraße 1]<br />
              [12345 Musterstadt]
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
