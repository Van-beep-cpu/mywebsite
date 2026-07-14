import React from "react";
import { Link } from "wouter";
import { Layout } from "@/components/layout";
import { useDocumentTitle } from "@/hooks/use-document-title";

export default function NotFound() {
  useDocumentTitle("Seite nicht gefunden");

  return (
    <Layout>
      <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-6">
          <span className="text-xl font-bold text-muted-foreground">404</span>
        </div>
        <h1 className="text-3xl font-semibold mb-4 text-foreground">Seite nicht gefunden</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Die angefragte Seite konnte nicht gefunden werden. Möglicherweise wurde sie verschoben oder die URL ist nicht korrekt.
        </p>
        <Link href="/" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 h-12 px-8">
          Zurück zur Startseite
        </Link>
      </div>
    </Layout>
  );
}
