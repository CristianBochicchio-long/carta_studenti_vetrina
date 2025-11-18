import { useRoute } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShopCard from "@/components/ShopCard";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

interface Shop {
  id: string;
  name: string;
  description?: string;
  image?: string;
  discount?: string;
}

interface CategoryInfo {
  title: string;
  description: string;
  icon: string;
  color: string;
  shops: Shop[];
}

const categories: Record<string, CategoryInfo> = {
  sport: {
    title: "Sport",
    description: "Abbigliamento sportivo, attrezzature e palestre con convenzioni esclusive",
    icon: "⚽",
    color: "from-blue-500 to-blue-600",
    shops: [
      {
        id: "1",
        name: "In attesa di dati",
        description: "I negozi verranno aggiunti presto",
        discount: "Sconto",
      },
    ],
  },
  cibo: {
    title: "Cibo",
    description: "Ristoranti, bar e negozi alimentari con le migliori convenzioni",
    icon: "🍕",
    color: "from-orange-500 to-orange-600",
    shops: [
      {
        id: "1",
        name: "In attesa di dati",
        description: "I negozi verranno aggiunti presto",
        discount: "Sconto",
      },
    ],
  },
  salute: {
    title: "Salute",
    description: "Farmacie, palestre e servizi wellness con sconti speciali",
    icon: "💊",
    color: "from-green-500 to-green-600",
    shops: [
      {
        id: "1",
        name: "In attesa di dati",
        description: "I negozi verranno aggiunti presto",
        discount: "Sconto",
      },
    ],
  },
  abbigliamento: {
    title: "Abbigliamento",
    description: "Negozi di moda e accessori per uno stile impeccabile",
    icon: "👕",
    color: "from-pink-500 to-pink-600",
    shops: [
      {
        id: "1",
        name: "In attesa di dati",
        description: "I negozi verranno aggiunti presto",
        discount: "Sconto",
      },
    ],
  },
  varie: {
    title: "Varie",
    description: "Librerie, elettronica e tanto altro con offerte vantaggiose",
    icon: "📚",
    color: "from-purple-500 to-purple-600",
    shops: [
      {
        id: "1",
        name: "In attesa di dati",
        description: "I negozi verranno aggiunti presto",
        discount: "Sconto",
      },
    ],
  },
};

export default function CategoryPage() {
  const [match, params] = useRoute("/:category");
  const categoryKey = params?.category?.toLowerCase() || "";
  const category = categories[categoryKey];

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Categoria non trovata</h1>
          <p className="text-muted-foreground mb-8">
            La categoria che stai cercando non esiste.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft size={20} />
            Torna alla home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className={`relative py-16 md:py-20 bg-gradient-to-r ${category.color} overflow-hidden`}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>

          <div className="container relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-white hover:opacity-80 transition-opacity mb-6">
              <ArrowLeft size={20} />
              Torna alla home
            </Link>

            <div className="max-w-3xl">
              <div className="text-6xl mb-4">{category.icon}</div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {category.title}
              </h1>
              <p className="text-lg text-white/90">
                {category.description}
              </p>
            </div>
          </div>
        </section>

        {/* Shops Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Negozi Partner
              </h2>
              <p className="text-muted-foreground">
                Scopri tutti i negozi con convenzioni in questa categoria
              </p>
            </div>

            {category.shops.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.shops.map((shop) => (
                  <ShopCard
                    key={shop.id}
                    name={shop.name}
                    description={shop.description}
                    image={shop.image}
                    discount={shop.discount}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">
                  Nessun negozio disponibile in questa categoria al momento.
                </p>
                <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline">
                  <ArrowLeft size={20} />
                  Torna alla home
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Scopri Tutte le Categorie</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Torna alla home per esplorare tutte le categorie di negozi con convenzioni.
            </p>
            <Link href="/" className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Vai alla Home
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
