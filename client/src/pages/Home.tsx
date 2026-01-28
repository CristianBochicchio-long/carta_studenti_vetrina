import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  const stores = [
    {
      name: "Cineatro Don Bosco",
      location: "JQXW+3F Potenza, Provincia di Potenza",
      category: "Varie",
      discount: "Sconti esclusivi"
    }
  ];

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
      description: "Librerie, elettronica, cinema e altro",
      icon: "📚",
      href: "/varie",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
    },
    {
      title: "B&B",
      description: "Alloggi e strutture ricettive",
      icon: "🏨",
      href: "/bb",
      color: "bg-gradient-to-br from-amber-500 to-amber-600",
    },
    {
      title: "Scuola Guida",
      description: "Corsi di guida e patente",
      icon: "🚗",
      href: "/scuola-guida",
      color: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    },
    {
      title: "E-commerce",
      description: "Negozi online e marketplace",
      icon: "🛒",
      href: "/ecommerce",
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Logo, Descrizione e Acquista Section */}
        <section className="py-4 md:py-6 px-4 flex flex-col md:flex-row items-start justify-between gap-4">
          <div className="flex-1">
            {/* Logo senza riquadro */}
            <div className="mb-3 md:mb-4">
              <img 
                src="/logo-carta-studenti.png" 
                alt="Carta Studenti" 
                className="h-28 md:h-40 w-auto"
              />
            </div>
            
            {/* Titolo con riquadro multicolor dietro */}
            <div className="mb-2 w-fit">
              <div className="bg-gradient-to-br from-primary via-secondary to-primary rounded-xl md:rounded-2xl px-3 md:px-4 py-1.5 md:py-2 inline-block">
                <h1 className="text-xl md:text-2xl font-bold text-white">Carta Studenti</h1>
              </div>
            </div>
            
            {/* Descrizione */}
            <p className="text-xs md:text-sm text-muted-foreground leading-tight max-w-xs">
              Sconti esclusivi per studenti delle superiori e università a Potenza
            </p>
          </div>
          
          {/* Acquista Button */}
          <Link href="/acquista" className="w-full md:w-auto">
            <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-2.5 md:p-3 text-white text-center w-full md:min-w-fit h-fit shadow-xl hover:shadow-[0_20px_50px_rgba(79,70,229,0.4)] transition-all duration-300 hover:-translate-y-2 hover:scale-105">
              <Button size="sm" className="w-full bg-white text-primary hover:bg-slate-100 py-2 px-4 text-sm md:text-base font-semibold transition-all duration-200">
                Acquista
              </Button>
            </div>
          </Link>
        </section>

        {/* Categories Section */}
        <section id="categorie" className="py-6 md:py-8 px-4">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8 md:mb-12 text-center">
            Categorie
          </h2>

          <div className="grid grid-cols-1 gap-y-8 md:gap-y-12">
            {categories.map((category, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={category.href} className={`flex gap-2 md:gap-4 ${!isEven ? 'flex-row-reverse' : ''}`}>
                  {/* Parte con colore (nome + icona) */}
                  <Link href={category.href} className="flex-1">
                    <div className={`${category.color} text-white rounded-2xl p-4 md:p-6 shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] active:scale-95 transition-all duration-300 hover:-translate-y-2 hover:scale-105 flex items-center justify-center gap-3 md:gap-4 h-full min-h-[80px]`}>
                      <div className="text-3xl md:text-4xl">{category.icon}</div>
                      <h3 className="text-base md:text-xl font-bold">{category.title}</h3>
                    </div>
                  </Link>

                  {/* Parte senza colore (descrizione) */}
                  <div className="flex-1 flex items-center px-2 md:px-4 transition-all duration-300">
                    <p className="text-xs md:text-sm text-foreground font-medium leading-tight">
                      {category.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
