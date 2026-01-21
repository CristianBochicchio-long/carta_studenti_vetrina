import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  const categories = [
    {
      title: "Abbigliamento",
      description: "Negozi di moda e accessori con sconti esclusivi",
      icon: "👕",
      href: "/abbigliamento",
      color: "from-pink-500 to-rose-600",
      lightBg: "bg-pink-50",
    },
    {
      title: "Cibo",
      description: "Ristoranti, bar e negozi alimentari",
      icon: "🍕",
      href: "/cibo",
      color: "from-orange-500 to-red-600",
      lightBg: "bg-orange-50",
    },
    {
      title: "Salute",
      description: "Farmacie, palestre e wellness",
      icon: "💊",
      href: "/salute",
      color: "from-emerald-500 to-teal-600",
      lightBg: "bg-emerald-50",
    },
    {
      title: "Sport",
      description: "Abbigliamento sportivo e attrezzature",
      icon: "⚽",
      href: "/sport",
      color: "from-blue-500 to-cyan-600",
      lightBg: "bg-blue-50",
    },
    {
      title: "Varie",
      description: "Librerie, elettronica e altro",
      icon: "📚",
      href: "/varie",
      color: "from-violet-500 to-purple-600",
      lightBg: "bg-violet-50",
    },
    {
      title: "B&B",
      description: "Alloggi e strutture ricettive",
      icon: "🏨",
      href: "/bb",
      color: "from-amber-500 to-orange-600",
      lightBg: "bg-amber-50",
    },
    {
      title: "Scuola Guida",
      description: "Corsi di guida e patente",
      icon: "🚗",
      href: "/scuola-guida",
      color: "from-cyan-500 to-blue-600",
      lightBg: "bg-cyan-50",
    },
    {
      title: "E-commerce",
      description: "Negozi online e marketplace",
      icon: "🛒",
      href: "/ecommerce",
      color: "from-indigo-500 to-purple-600",
      lightBg: "bg-indigo-50",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-slate-50 to-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 px-4 md:px-8 overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary/5 to-primary/5 rounded-full blur-3xl -z-10"></div>

          <div className="max-w-7xl mx-auto flex items-start justify-between gap-8">
            <div className="flex-1">
              {/* Logo with enhanced styling */}
              <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="/logo-carta-studenti.png" 
                  alt="Carta Studenti" 
                  className="h-48 w-auto drop-shadow-lg"
                />
              </div>
              
              {/* Enhanced title with badge */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex items-center gap-2 bg-gradient-to-r from-primary via-secondary to-primary rounded-full px-4 py-2">
                  <Sparkles className="w-4 h-4 text-white" />
                  <span className="text-xs font-semibold text-white tracking-wide">ESCLUSIVO PER STUDENTI</span>
                </div>
              </div>
              
              {/* Main title */}
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3 leading-tight">
                Carta dello Studente
              </h1>
              
              {/* Enhanced description */}
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md mb-2">
                Sconti esclusivi presso i migliori negozi di Potenza per studenti delle superiori e università
              </p>
              
              {/* Stats */}
              <div className="flex gap-8 mt-6 text-sm">
                <div>
                  <div className="font-bold text-primary text-lg">10+</div>
                  <div className="text-muted-foreground">Categorie</div>
                </div>
                <div>
                  <div className="font-bold text-primary text-lg">20+</div>
                  <div className="text-muted-foreground">Negozi Partner</div>
                </div>
                <div>
                  <div className="font-bold text-primary text-lg">3,5€</div>
                  <div className="text-muted-foreground">Prezzo Card</div>
                </div>
              </div>
            </div>
            
            {/* Acquista Button - Enhanced */}
            <Link href="/acquista" className="flex-shrink-0">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <button className="relative bg-gradient-to-br from-primary to-secondary text-white rounded-2xl px-8 py-6 font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 group-hover:scale-105">
                  Acquista Ora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </Link>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Scopri le Categorie
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trova sconti e offerte speciali in tutte le categorie
              </p>
            </div>

            {/* Grid layout for categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categories.map((category) => (
                <Link key={category.href} href={category.href} className="group">
                  <div className={`${category.lightBg} border-2 border-transparent hover:border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`text-5xl p-4 bg-gradient-to-br ${category.color} bg-clip-text text-transparent`}>
                        {category.icon}
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {category.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl mx-4 md:mx-8 mb-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Inizia a Risparmiare Oggi
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Acquista la tua Carta dello Studente e accedi a sconti esclusivi presso i migliori negozi di Potenza
            </p>
            <Link href="/acquista">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:scale-105 transition-all duration-300">
                Acquista la Card
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
