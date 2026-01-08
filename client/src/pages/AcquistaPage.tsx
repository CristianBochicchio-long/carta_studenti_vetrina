import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";

export default function AcquistaPage() {
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
            Acquista la Tua Carta
          </h1>
          <p className="text-sm text-muted-foreground">
            Accedi a tutte le convenzioni esclusive
          </p>
        </section>

        {/* Price Card */}
        <section className="px-4 py-8">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-center text-white mb-8">
            <div className="text-5xl font-bold mb-2">3€</div>
            <p className="text-sm opacity-90">Una volta sola</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <h3 className="font-bold text-foreground">50+ Negozi Partner</h3>
                <p className="text-xs text-muted-foreground">Convenzioni in tutte le categorie</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <h3 className="font-bold text-foreground">Sconti fino al 30%</h3>
                <p className="text-xs text-muted-foreground">Su sport, cibo, salute e altro</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <h3 className="font-bold text-foreground">Notifiche Sconti</h3>
                <p className="text-xs text-muted-foreground">Ricevi aggiornamenti via newsletter</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="text-2xl">✓</div>
              <div>
                <h3 className="font-bold text-foreground">Carta Fisica</h3>
                <p className="text-xs text-muted-foreground">Ricevi la tua carta per posta</p>
              </div>
            </div>
          </div>

          <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white py-6 text-base font-semibold mb-8">
            Procedi all'Acquisto
          </Button>
        </section>

        {/* How it works */}
        <section className="px-4 py-8 bg-slate-50">
          <h2 className="text-xl font-bold text-foreground mb-6">Come Funziona</h2>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm">Compila il modulo</h3>
                <p className="text-xs text-muted-foreground">Inserisci i tuoi dati</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm">Effettua il pagamento</h3>
                <p className="text-xs text-muted-foreground">3€ in contanti presso i nostri punti vendita</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm">Ricevi la carta</h3>
                <p className="text-xs text-muted-foreground">La carta ti verrà spedita a casa</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">
                4
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm">Inizia a usare</h3>
                <p className="text-xs text-muted-foreground">Goditi tutte le convenzioni</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-8">
          <h2 className="text-xl font-bold text-foreground mb-6">Domande Frequenti</h2>
          
          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="font-bold text-sm mb-2">Quanto costa?</h3>
              <p className="text-xs text-muted-foreground">3€ una volta sola</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="font-bold text-sm mb-2">Come pago?</h3>
              <p className="text-xs text-muted-foreground">In contanti presso i nostri punti vendita</p>
            </div>
            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="font-bold text-sm mb-2">Quanto dura?</h3>
              <p className="text-xs text-muted-foreground">Un anno accademico</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="px-4 py-8 bg-slate-900 text-white">
          <h2 className="text-xl font-bold mb-4">Hai domande?</h2>
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
