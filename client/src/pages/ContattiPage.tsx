import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ChevronLeft, Instagram } from "lucide-react";

export default function ContattiPage() {
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

        {/* Hero */}
        <section className="px-4 py-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
          <h1 className="text-3xl font-bold text-foreground mb-3">
            Contattaci
          </h1>
          <p className="text-sm text-muted-foreground">
            Seguici su Instagram per rimanere aggiornato
          </p>
        </section>

        {/* Instagram Section */}
        <section className="px-4 py-16 flex flex-col items-center justify-center">
          <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-8 rounded-3xl shadow-2xl max-w-md w-full text-center">
            <Instagram size={64} className="mx-auto mb-6 text-white" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Seguici su Instagram
            </h2>
            <p className="text-white/90 mb-6">
              Resta aggiornato su tutte le novità, sconti e convenzioni esclusive per gli studenti!
            </p>
            <a
              href="https://instagram.com/cartastudente"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-purple-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors text-lg"
            >
              @cartastudente
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
