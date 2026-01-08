import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  const categories = [
    {
      title: "Abbigliamento",
      description: "Negozi di moda e accessori",
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
        {/* Hero Section */}
        <section className="relative py-8 px-4 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Carta Studenti
            </h1>
            <p className="text-base text-muted-foreground mb-6">
              Scopri le migliori convenzioni esclusive presso i negozi partner.
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <div className="bg-white px-4 py-2 rounded-lg shadow-md inline-block mx-auto">
                <p className="text-xs font-semibold text-primary">50+ Negozi Partner</p>
              </div>
              <div className="bg-white px-4 py-2 rounded-lg shadow-md inline-block mx-auto">
                <p className="text-xs font-semibold text-primary">Sconti fino al 30%</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <Link href="/acquista">
                <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white py-6 text-base font-semibold">
                  Acquista Carta - 3€
                </Button>
              </Link>
              <Link href="#categorie">
                <Button size="lg" variant="outline" className="w-full py-6 text-base font-semibold">
                  Scopri Convenzioni
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categorie" className="py-8 px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Categorie
          </h2>

          <div className="space-y-4">
            {categories.map((category) => (
              <Link key={category.href} href={category.href}>
                <button className={`w-full ${category.color} rounded-2xl p-6 text-white shadow-lg active:scale-95 transition-transform`}>
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                  <p className="text-sm opacity-90">{category.description}</p>
                  <div className="mt-4 text-sm font-semibold">Scopri →</div>
                </button>
              </Link>
            ))}
          </div>
        </section>

        {/* Price Section */}
        <section className="py-8 px-4 bg-slate-50">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Prezzo della Carta</h2>
            <div className="text-5xl font-bold mb-4">3€</div>
            <p className="text-sm mb-6 opacity-90">
              Una volta sola, per accedere a tutte le convenzioni
            </p>
            <Link href="/acquista">
              <Button size="lg" className="w-full bg-white text-primary hover:bg-slate-100 py-6 text-base font-semibold">
                Acquista Ora
              </Button>
            </Link>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-8 px-4">
          <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
            Resta Aggiornato
          </h2>
          <p className="text-center text-muted-foreground text-sm mb-6">
            Ricevi notifiche sui nuovi sconti e offerte esclusive
          </p>
          <div className="flex flex-col gap-3">
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
        <section id="contatti" className="py-8 px-4 bg-slate-900 text-white">
          <h2 className="text-2xl font-bold mb-3 text-center">
            Hai Domande?
          </h2>
          <p className="text-center text-sm opacity-90 mb-6">
            Contattaci per qualsiasi informazione
          </p>
          <Link href="/contatti">
            <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white py-6 text-base font-semibold">
              Contattaci
            </Button>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
