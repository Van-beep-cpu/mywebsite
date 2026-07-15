import React, { useEffect } from 'react';
import { useLocation } from 'wouter';
import { brand } from '../config/brand';

export const servicesList = [
  {
    id: "moderne-webseiten",
    title: "Moderne Webseiten",
    slug: "/leistungen/moderne-webseiten",
    description: "Moderne Websites mit klarer Struktur, sauberer Umsetzung und einem Auftritt, der zu Ihrem Unternehmen passt.",
    shortDesc: "Klare, moderne Webauftritte.",
    icon: "Globe"
  },
  {
    id: "ki-beratung",
    title: "Digitale Prozessklärung",
    slug: "/leistungen/ki-beratung",
    description: "Gemeinsam ordnen wir Tools, Abläufe und digitale Fragen, damit Entscheidungen nachvollziehbar werden.",
    shortDesc: "Prozesse verständlich machen.",
    icon: "Lightbulb"
  },
  {
    id: "prozessautomatisierung",
    title: "Prozessautomatisierung",
    slug: "/leistungen/prozessautomatisierung",
    description: "Einfache Automatisierungen für wiederkehrende Aufgaben, Übergaben und Benachrichtigungen.",
    shortDesc: "Routinearbeit sinnvoll reduzieren.",
    icon: "Settings"
  },
  {
    id: "ai-workflows",
    title: "Einfache KI-Workflows",
    slug: "/leistungen/ai-workflows",
    description: "Pragmatische KI-Unterstützung für Recherche, Strukturierung, Textarbeit oder interne Abläufe.",
    shortDesc: "KI dort nutzen, wo sie hilft.",
    icon: "Workflow"
  },
  {
    id: "ai-business-consulting",
    title: "Digitale Strategie",
    slug: "/leistungen/ai-business-consulting",
    description: "Ein realistischer Plan für Website, Tools und Prozesse – passend zu Budget, Team und Arbeitsweise.",
    shortDesc: "Prioritäten statt Tool-Hype.",
    icon: "Briefcase"
  },
  {
    id: "content-systeme",
    title: "Content-Systeme",
    slug: "/leistungen/content-systeme",
    description: "Strukturen für Inhalte, Ideen und Veröffentlichungen, die im Alltag gepflegt werden können.",
    shortDesc: "Inhalte besser organisieren.",
    icon: "FileText"
  }
];

export const processSteps = [
  {
    id: "1",
    title: "Verstehen",
    description: "Wir sprechen über Ziele, aktuelle Abläufe und die Stellen, an denen digitale Arbeit heute unnötig schwer ist."
  },
  {
    id: "2",
    title: "Strukturieren",
    description: "Ich ordne Anforderungen, mache Abhängigkeiten sichtbar und schlage einen realistischen ersten Schritt vor."
  },
  {
    id: "3",
    title: "Entwickeln",
    description: "Ich konzipiere und entwickle die Lösung so, dass sie verständlich, wartbar und alltagstauglich bleibt."
  },
  {
    id: "4",
    title: "Implementieren",
    description: "Wir führen die Lösung Schritt für Schritt ein und prüfen, ob sie zu Ihrem bestehenden Arbeitsalltag passt."
  },
  {
    id: "5",
    title: "Dokumentieren",
    description: "Sie bekommen eine klare Dokumentation, damit Entscheidungen und Abläufe später nachvollziehbar bleiben."
  },
  {
    id: "6",
    title: "Optimieren",
    description: "Nach dem Start schauen wir auf Nutzung, Feedback und sinnvolle Verbesserungen – ohne unnötige Komplexität."
  }
];

// Utility hook to scroll to top on route change
export function useScrollToTop() {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
