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
        {/* Categories Section */}
        <section id="categorie" className="py-6 px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Categorie
          </h2>

          <div className="space-y-3">
            {categories.map((category, index) => {
              const isEven = index % 2 === 0;
              return (
                <Link key={category.href} href={category.href}>
                  <div className="flex rounded-xl overflow-hidden shadow-lg active:scale-95 transition-transform h-24">
                    {/* Parte con colore (nome + icona) */}
                    <div className={`${category.color} text-white flex items-center justify-center gap-3 flex-1 px-4 ${isEven ? 'rounded-l-xl' : 'rounded-r-xl order-2'}`}>
                      <div className="text-3xl">{category.icon}</div>
                      <div className={isEven ? 'text-left' : 'text-right'}>
                        <h3 className="text-lg font-bold leading-tight">{category.title}</h3>
                      </div>
                    </div>

                    {/* Parte senza colore (descrizione) */}
                    <div className={`bg-white flex items-center px-4 flex-1 ${isEven ? 'rounded-r-xl' : 'rounded-l-xl order-1'}`}>
                      <p className={`text-sm text-foreground font-medium ${isEven ? 'text-left' : 'text-right'}`}>
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Price Section */}
        <section className="py-6 px-4 bg-slate-50">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-6 text-center text-white">
            <h2 className="text-xl font-bold mb-3">Prezzo della Carta</h2>
            <div className="text-4xl font-bold mb-3">3€</div>
            <p className="text-xs mb-4 opacity-90">
              Una volta sola per accedere a tutte le convenzioni
            </p>
            <Link href="#contatti">
              <Button size="lg" className="w-full bg-white text-primary hover:bg-slate-100 py-5 text-base font-semibold">
                Acquista Ora
              </Button>
            </Link>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-6 px-4">
          <h2 className="text-xl font-bold text-foreground mb-3 text-center">
            Resta Aggiornato
          </h2>
          <p className="text-center text-muted-foreground text-xs mb-4">
            Ricevi notifiche sui nuovi sconti
          </p>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Il tuo email"
              className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
            <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-base font-semibold">
              Iscriviti
            </Button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contatti" className="py-6 px-4 bg-slate-900 text-white">
          <h2 className="text-xl font-bold mb-2 text-center">
            Hai Domande?
          </h2>
          <p className="text-center text-xs opacity-90 mb-4">
            Contattaci per qualsiasi informazione
          </p>
          <Link href="/contatti">
            <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white py-5 text-base font-semibold">
              Contattaci
            </Button>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
