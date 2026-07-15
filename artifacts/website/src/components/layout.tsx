import React from "react";
import { Link, useLocation } from "wouter";
import { brand } from "../config/brand";
import { Menu, X } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: "Start", href: "/" },
    { label: "Leistungen", href: "/leistungen" },
    { label: "Über mich", href: "/ueber-mich" },
    { label: "Prozess", href: "/#prozess" },
    { label: "Build in Public", href: "/#build-in-public" },
    { label: "Kontakt", href: "/kontakt" }
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-background/75">
        <div className="container mx-auto px-4 md:px-6 h-16 md:h-[4.5rem] flex items-center justify-between">
          <Link href="/" className="font-serif text-xl tracking-tight flex items-center gap-3">
            <span className="w-9 h-9 rounded-md bg-foreground text-background flex items-center justify-center font-bold text-sm">
              {brand.companyName.charAt(0)}
            </span>
            {brand.companyName}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/kontakt" className="ml-4 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-foreground text-background shadow-sm hover:bg-primary-dark h-10 px-5 py-2">
              Projekt besprechen
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 -mr-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü umschalten"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-b border-border/40 bg-background px-4 py-6 space-y-4 shadow-lg slide-up">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    location === link.href ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-border">
                <Link href="/kontakt" className="w-full inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-foreground text-background shadow-sm hover:bg-primary-dark h-11 px-8">
                  Projekt besprechen
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-surface py-12 md:py-16 mt-auto">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
            <div className="md:col-span-2 space-y-4">
              <Link href="/" className="font-serif text-xl tracking-tight flex items-center gap-3">
                <span className="w-9 h-9 rounded-md bg-foreground text-background flex items-center justify-center font-bold text-sm">
                  {brand.companyName.charAt(0)}
                </span>
                {brand.companyName}
              </Link>
              <p className="text-muted-foreground max-w-sm">
                Moderne Websites, intelligente Automatisierungen und verständliche AI Workflows. Kreativ gedacht, klar erklärt und hochwertig umgesetzt.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">Navigation</h3>
              <ul className="space-y-3">
                <li><Link href="/leistungen" className="text-sm text-muted-foreground hover:text-primary transition-colors">Leistungen</Link></li>
                <li><Link href="/ueber-mich" className="text-sm text-muted-foreground hover:text-primary transition-colors">Über mich</Link></li>
                <li><Link href="/projekte" className="text-sm text-muted-foreground hover:text-primary transition-colors">Build in Public</Link></li>
                <li><Link href="/kontakt" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kontakt</Link></li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">Rechtliches</h3>
              <ul className="space-y-3">
                <li><Link href="/impressum" className="text-sm text-muted-foreground hover:text-primary transition-colors">Impressum</Link></li>
                <li><Link href="/datenschutz" className="text-sm text-muted-foreground hover:text-primary transition-colors">Datenschutz</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} {brand.companyName}. Alle Rechte vorbehalten.</p>
            <div className="flex gap-4">
              <a href={brand.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
              <a href={brand.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
