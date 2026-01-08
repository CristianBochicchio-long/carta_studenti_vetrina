import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img 
            src="/logo-carta-studenti.png" 
            alt="Carta Studenti" 
            className="h-10 w-auto"
          />
          <div className="hidden xs:block">
            <h1 className="text-sm font-bold text-primary">Carta Studenti</h1>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="#contatti">
            <Button variant="ghost">Contatti</Button>
          </Link>
          <Link href="/acquista">
            <Button className="bg-secondary hover:bg-secondary/90 text-white">
              Acquista
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <Link href="#contatti" onClick={() => setMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Contatti
              </Button>
            </Link>
            <Link href="/acquista" onClick={() => setMenuOpen(false)}>
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                Acquista - 3€
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
