import { useRoute } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CategoryInfo {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const categories: Record<string, CategoryInfo> = {
  abbigliamento: {
    title: "Abbigliamento",
    description: "Negozi di moda e accessori",
    icon: "👕",
    color: "bg-gradient-to-br from-pink-500 to-pink-600",
  },
  cibo: {
    title: "Cibo",
    description: "Ristoranti, bar e negozi alimentari",
    icon: "🍕",
    color: "bg-gradient-to-br from-orange-500 to-orange-600",
  },
  salute: {
    title: "Salute",
    description: "Farmacie, palestre e wellness",
    icon: "💊",
    color: "bg-gradient-to-br from-green-500 to-green-600",
  },
  sport: {
    title: "Sport",
    description: "Abbigliamento sportivo e attrezzature",
    icon: "⚽",
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  varie: {
    title: "Varie",
    description: "Librerie, elettronica e altro",
    icon: "📚",
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
  },
};

export default function CategoryPage() {
  const [, params] = useRoute("/:category");
  const categoryKey = params?.category?.toLowerCase() || "";
  const category = categories[categoryKey];

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Categoria non trovata</h1>
          <Link href="/">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Torna alla home
            </Button>
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
        {/* Back Button */}
        <div className="px-4 py-4 border-b border-border">
          <Link href="/">
            <button className="flex items-center gap-2 text-primary font-semibold">
              <ChevronLeft size={20} />
              Indietro
            </button>
          </Link>
        </div>

        {/* Category Hero */}
        <section className={`${category.color} text-white px-4 py-8`}>
          <div className="text-5xl mb-4">{category.icon}</div>
          <h1 className="text-3xl font-bold mb-2">{category.title}</h1>
          <p className="text-sm opacity-90">{category.description}</p>
        </section>

        {/* Shops List */}
        <section className="py-6 px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Negozi Partner
          </h2>

          <div className="space-y-4">
            <div className="bg-white border-2 border-border rounded-2xl p-4 shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    Negozio Esempio
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Descrizione del negozio
                  </p>
                </div>
                <div className="bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold">
                  15%
                </div>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-base font-semibold">
                  Vedi su Google Maps
                </Button>
              </a>
            </div>
          </div>

          <div className="text-center py-8 text-muted-foreground">
            <p className="text-sm">
              I negozi verranno aggiunti presto
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 px-4 bg-slate-50">
          <h2 className="text-xl font-bold text-foreground mb-4 text-center">
            Non hai ancora la carta?
          </h2>
          <Link href="/acquista">
            <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white py-6 text-base font-semibold">
              Acquista Ora - 3€
            </Button>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
