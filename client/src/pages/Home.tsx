import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  const categories = [
    {
      title: "Abbigliamento",
      description: "Negozi di moda e accessori con sconti esclusivi",
      icon: "👕",
      href: "/abbigliamento",
      color: "bg-gradient-to-br from-pink-500 to-pink-600",
    },
    {
      title: "Cibo",
      description: "Ristoranti, bar e negozi alimentari",
      icon: "🍕",
      href: "/cibo",
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
    },
    {
      title: "Salute",
      description: "Farmacie, palestre e wellness",
      icon: "💊",
      href: "/salute",
      color: "bg-gradient-to-br from-green-500 to-green-600",
    },
    {
      title: "Sport",
      description: "Abbigliamento sportivo e attrezzature",
      icon: "⚽",
      href: "/sport",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      title: "Varie",
      description: "Librerie, elettronica e altro",
      icon: "📚",
      href: "/varie",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Logo, Descrizione e Acquista Section */}
        <section className="py-6 px-4 flex items-start justify-between gap-4">
          <div className="flex-1">
            {/* Logo senza riquadro */}
            <div className="mb-4">
              <img 
                src="/logo-carta-studenti.png" 
                alt="Carta Studenti" 
                className="h-24 w-auto"
              />
            </div>
            
            {/* Titolo con riquadro multicolor dietro */}
            <div className="mb-2 w-fit">
              <div className="bg-gradient-to-br from-primary via-secondary to-primary rounded-2xl px-4 py-2 inline-block">
                <h1 className="text-2xl font-bold text-white">Carta Studenti</h1>
              </div>
            </div>
            
            {/* Descrizione */}
            <p className="text-sm text-muted-foreground leading-tight max-w-xs">
              Sconti esclusivi per studenti delle superiori e università a Potenza
            </p>
          </div>
          
          {/* Acquista Button */}
          <Link href="/acquista">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-3 text-white text-center min-w-fit h-fit">
              <Button size="sm" className="w-full bg-white text-primary hover:bg-slate-100 py-2 px-4 text-sm font-semibold">
                Acquista
              </Button>
            </div>
          </Link>
        </section>

        {/* Categories Section */}
        <section id="categorie" className="py-8 px-4">
          <h2 className="text-2xl font-bold text-foreground mb-12 text-center">
            Categorie
          </h2>

          <div className="space-y-8 max-w-2xl mx-auto">
            {categories.map((category) => (
              <Link key={category.href} href={category.href}>
                <div className={`${category.color} text-white rounded-2xl p-6 shadow-lg active:scale-95 transition-transform flex items-center justify-between`}>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{category.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                      <p className="text-sm opacity-90">{category.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
