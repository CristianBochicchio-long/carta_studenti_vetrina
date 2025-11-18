import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";

export default function Home() {
  const categories = [
    {
      title: "Sport",
      description: "Abbigliamento sportivo, attrezzature e palestre",
      icon: "⚽",
      href: "/sport",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
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
      title: "Abbigliamento",
      description: "Negozi di moda e accessori",
      icon: "👕",
      href: "/abbigliamento",
      color: "bg-gradient-to-br from-pink-500 to-pink-600",
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
        <section className="relative py-16 md:py-24 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Carta Studenti
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Scopri le migliori convenzioni esclusive presso i negozi partner. Sconti e offerte speciali per gli studenti in tutte le categorie.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
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
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Esplora le Categorie
              </h2>
              <p className="text-lg text-muted-foreground">
                Seleziona una categoria per scoprire tutti i negozi con convenzioni
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {categories.map((category) => (
                <CategoryCard
                  key={category.href}
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  href={category.href}
                  color={category.color}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-bold mb-2">Convenzioni Esclusive</h3>
                <p className="text-muted-foreground">
                  Accesso a sconti e offerte speciali riservate ai possessori della carta studenti.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2">Facile da Usare</h3>
                <p className="text-muted-foreground">
                  Naviga facilmente tra le categorie e scopri tutti i negozi partner disponibili.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2">Risparmia Subito</h3>
                <p className="text-muted-foreground">
                  Inizia a usufruire delle convenzioni e risparmia su tutti i tuoi acquisti.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
