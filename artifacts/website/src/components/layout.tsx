import React from "react";
import { Link, useLocation } from "wouter";
import { brand } from "../config/brand";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Build in Public", href: "/projekte" },
  { label: "Kontakt", href: "/kontakt" }
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => setIsMobileMenuOpen(false), [location]);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground">
      <header className="site-header sticky top-0 z-50 w-full bg-background/88 backdrop-blur-sm">
        <div className="site-container flex h-20 items-center justify-between md:h-24">
          <Link href="/" className="wordmark" aria-label="Vanessa Truong Startseite">
            VANESSA TRUONG
          </Link>

          <nav className="hidden items-center gap-9 md:flex" aria-label="Hauptnavigation">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`nav-link ${location === link.href ? "active" : ""}`}>
                {link.label}
              </Link>
            ))}
          </nav>

          <button className="md:hidden min-h-11 min-w-11 p-2 -mr-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menü umschalten" aria-expanded={isMobileMenuOpen}>
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-nav md:hidden">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="mobile-nav-link">{link.label}</Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-1 flex flex-col">{children}</main>

      <footer className="footer-minimal mt-auto">
        <div className="site-container">
          <div className="footer-grid">
            <div>
              <Link href="/" className="wordmark">VANESSA TRUONG</Link>
              <p className="mt-6 max-w-xl text-muted-foreground">Moderne Websites, Automatisierungen und AI Workflows — ruhig gestaltet, verständlich erklärt und nah am Arbeitsalltag umgesetzt.</p>
            </div>
            <div>
              <p className="footer-label">Navigation</p>
              <div className="footer-links">{navLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}</div>
            </div>
            <div>
              <p className="footer-label">Kontakt</p>
              <div className="footer-links">
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
                <a href={brand.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <Link href="/impressum">Impressum</Link>
                <Link href="/datenschutz">Datenschutz</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">© {new Date().getFullYear()} {brand.companyName}. Alle Rechte vorbehalten.</div>
        </div>
      </footer>
    </div>
  );
}
