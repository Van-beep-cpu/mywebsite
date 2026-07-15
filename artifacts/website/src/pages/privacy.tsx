import React from "react";
import { Layout } from "@/components/layout";
import { useDocumentTitle } from "@/hooks/use-document-title";

export default function Privacy() {
  useDocumentTitle("Datenschutz");

  return (
    <Layout>
      <section className="page-hero">
        <div className="site-container max-w-3xl">
          <h1 className="page-title mb-6">
            Datenschutzerklärung
          </h1>
          <div className="p-4 bg-primary/10 border border-primary/20 rounded-sm text-primary text-sm font-medium mb-8">
            Platzhalter – Ein vollständiger, anwaltlich geprüfter Datenschultzhinweis muss hier ergänzt werden.
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container max-w-3xl">
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
            <h2>1. Datenschutz auf einen Blick</h2>
            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
            
            <h2>2. Datenerfassung auf dieser Website</h2>
            <h3>Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
            </p>

            <h2>3. Analyse-Tools und Tools von Drittanbietern</h2>
            <p>
              [Hier Angaben zu verwendeten Trackern, Cookies, Hosting-Providern, etc. einfügen]
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
