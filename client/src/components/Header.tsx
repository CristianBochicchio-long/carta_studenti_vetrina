import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
      <div className="container h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img 
            src="/logo-carta-studenti.png" 
            alt="Carta Studenti" 
            className="h-12 w-auto"
          />
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-primary">Carta Studenti</h1>
            <p className="text-xs text-muted-foreground">Convenzioni Esclusive</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4">
          <Link href="#contatti">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Contatti
            </Button>
          </Link>
          <Link href="/acquista">
            <Button className="bg-secondary hover:bg-secondary/90 text-white">
              Acquista
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
