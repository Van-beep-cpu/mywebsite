import React, { useEffect } from 'react';
import { useLocation } from 'wouter';
import { brand } from '../config/brand';

export const servicesList = [
  {
    id: "moderne-webseiten",
    title: "Moderne Webseiten",
    slug: "/leistungen/moderne-webseiten",
    description: "Professioneller Auftritt mit klarer Benutzerführung und starken SEO-Grundlagen.",
    shortDesc: "Schnelle, professionelle Webauftritte.",
    icon: "Globe"
  },
  {
    id: "ki-beratung",
    title: "KI-Beratung",
    slug: "/leistungen/ki-beratung",
    description: "Klarheit und Fokus. Erkennen, wo KI wirklich Sinn macht, ohne im Tool-Chaos zu versinken.",
    shortDesc: "Strategischer Einsatz von KI-Tools.",
    icon: "Lightbulb"
  },
  {
    id: "prozessautomatisierung",
    title: "Prozessautomatisierung",
    slug: "/leistungen/prozessautomatisierung",
    description: "Wiederkehrende Aufgaben automatisieren, um mehr Zeit für das Wesentliche zu gewinnen.",
    shortDesc: "Zeitfresser eliminieren.",
    icon: "Settings"
  },
  {
    id: "ai-workflows",
    title: "Individuelle AI-Workflows",
    slug: "/leistungen/ai-workflows",
    description: "Maßgeschneiderte interne Assistenten und Systeme, die exakt zu Ihren Anforderungen passen.",
    shortDesc: "Eigene Assistenten & GPT-Systeme.",
    icon: "Workflow"
  },
  {
    id: "ai-business-consulting",
    title: "AI Business Consulting",
    slug: "/leistungen/ai-business-consulting",
    description: "Strategische Beratung zur Implementierung von KI-Systemen in bestehende Geschäftsabläufe.",
    shortDesc: "KI-Roadmaps & Implementierung.",
    icon: "Briefcase"
  },
  {
    id: "content-systeme",
    title: "Content-Systeme",
    slug: "/leistungen/content-systeme",
    description: "Reibungslose Workflows für die Erstellung, Verwaltung und Mehrfachverwertung von Inhalten.",
    shortDesc: "Effiziente Redaktions-Workflows.",
    icon: "FileText"
  }
];

export const processSteps = [
  {
    id: "1",
    title: "Verstehen",
    description: "Wir analysieren die Ausgangssituation, Ziele und bestehenden Prozesse."
  },
  {
    id: "2",
    title: "Strukturieren",
    description: "Wir definieren Prioritäten und entwickeln eine klare Strategie."
  },
  {
    id: "3",
    title: "Entwickeln",
    description: "Wir gestalten und bauen die passende digitale Lösung."
  },
  {
    id: "4",
    title: "Implementieren",
    description: "Die Lösung wird sauber in den Arbeitsalltag integriert."
  },
  {
    id: "5",
    title: "Dokumentieren",
    description: "Alle wichtigen Abläufe werden nachvollziehbar dokumentiert."
  },
  {
    id: "6",
    title: "Optimieren",
    description: "Wir analysieren die Nutzung und verbessern das System kontinuierlich."
  }
];

// Utility hook to scroll to top on route change
export function useScrollToTop() {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
