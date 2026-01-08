import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCube from "@/components/CategoryCube";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  const categories = [
    {
      title: "Abbigliamento",
      description: "Scopri i migliori negozi di moda e accessori con sconti esclusivi per gli studenti. Da abbigliamento casual a sportivo, troverai tutto quello che ti serve.",
      icon: "👕",
      href: "/abbigliamento",
      color: "bg-gradient-to-br from-pink-500 to-pink-600",
    },
    {
      title: "Cibo",
      description: "Ristoranti, bar e negozi alimentari con convenzioni speciali. Risparmia su colazioni, pranzi e cene con i nostri partner.",
      icon: "🍕",
      href: "/cibo",
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
    },
    {
      title: "Salute",
      description: "Farmacie, palestre e centri wellness con sconti dedicati agli studenti. Prendi cura di te con le nostre convenzioni.",
      icon: "💊",
      href: "/salute",
      color: "bg-gradient-to-br from-green-500 to-green-600",
    },
    {
      title: "Sport",
      description: "Abbigliamento sportivo, scarpe e attrezzature con sconti fino al 30%. Tutto quello che serve per lo sport e l'attività fisica.",
      icon: "⚽",
      href: "/sport",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      title: "Varie",
      description: "Librerie, negozi di elettronica e tanto altro. Scopri tutte le altre categorie di convenzioni disponibili.",
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
        <section className="relative py-20 md:py-32 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="container relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
                Carta Studenti
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Scopri le migliori convenzioni esclusive presso i negozi partner. Sconti e offerte speciali per gli studenti in tutte le categorie.
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                  <p className="text-sm font-semibold text-primary">50+ Negozi Partner</p>
                </div>
                <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                  <p className="text-sm font-semibold text-primary">Sconti fino al 30%</p>
                </div>
                <div className="bg-white px-6 py-3 rounded-lg shadow-md">
                  <p className="text-sm font-semibold text-primary">5 Categorie</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/acquista">
                  <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg">
                    Acquista Carta - 3€
                  </Button>
                </Link>
                <Link href="#categorie">
                  <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                    Scopri Convenzioni
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="categorie" className="py-8 md:py-16">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Esplora le Categorie
              </h2>
              <p className="text-lg text-muted-foreground">
                Seleziona una categoria per scoprire tutti i negozi con convenzioni
              </p>
            </div>

            {/* Alternating Cubes */}
            <div className="space-y-0">
              {categories.map((category, index) => (
                <CategoryCube
                  key={category.href}
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  href={category.href}
                  color={category.color}
                  reversed={index % 2 === 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 md:py-32 bg-gradient-to-r from-primary to-secondary">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Resta Aggiornato
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Iscriviti alla nostra newsletter per ricevere notifiche sui nuovi sconti e offerte esclusive.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Il tuo email"
                  className="flex-1 px-4 py-3 rounded-lg text-foreground"
                />
                <Button className="bg-white text-primary hover:bg-slate-100 px-8 py-3 text-lg">
                  Iscriviti
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Price Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-12 text-center">
                <h2 className="text-4xl font-bold mb-4">Prezzo della Carta</h2>
                <div className="text-6xl font-bold text-primary mb-4">3€</div>
                <p className="text-xl text-muted-foreground mb-8">
                  Una volta sola, per accedere a tutte le convenzioni e sconti esclusivi
                </p>
                <Link href="/acquista">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 px-12 py-6 text-lg">
                    Acquista Ora
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contatti" className="py-20 md:py-32 bg-slate-900 text-white">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Hai Domande?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Contattaci per qualsiasi informazione sulla carta studenti e le convenzioni.
              </p>
              <Link href="/contatti">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 text-lg">
                  Contattaci
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
