import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Logo + Testo - Sinistra */}
        <Link href="/" className="flex items-center gap-3 flex-1">
          <img 
            src="/logo-carta-studenti.png" 
            alt="Carta Studenti" 
            className="h-14 w-auto"
          />
          <div>
            <h1 className="text-lg font-bold text-foreground">Carta Studenti</h1>
          </div>
        </Link>

        {/* Navigation - Destra */}
        <div className="flex items-center gap-2">
          <Link href="#contatti">
            <Button variant="ghost" size="sm" className="text-xs">Contatti</Button>
          </Link>
          <Link href="#contatti">
            <Button className="bg-green-500 hover:bg-green-600 text-white text-xs py-2 px-3">
              Acquista
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
