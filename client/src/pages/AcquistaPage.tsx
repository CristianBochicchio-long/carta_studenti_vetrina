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
        <section className="px-4 py-8 text-center">
          <div className="bg-gradient-to-br from-primary via-secondary to-primary rounded-2xl p-6 w-fit mx-auto mb-6">
            <img 
              src="/logo-carta-studenti.png" 
              alt="Carta Studenti" 
              className="h-32 w-auto"
            />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Acquista la Carta
          </h1>
          <p className="text-sm text-muted-foreground">
            Sconti esclusivi per gli studenti
          </p>
        </section>

        {/* Price Card */}
        <section className="px-4 py-6">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-center text-white mb-6">
            <div className="text-5xl font-bold mb-2">3€</div>
            <p className="text-sm opacity-90">Pagamento in contanti</p>
          </div>
        </section>

        {/* How it works */}
        <section className="px-4 py-6">
          <h2 className="text-xl font-bold text-foreground mb-6">Come Acquistare</h2>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm">Contattaci</h3>
                <p className="text-xs text-muted-foreground mt-1">Scrivi un messaggio o contattaci tramite i canali sottostanti</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm">Accordati sul ritiro</h3>
                <p className="text-xs text-muted-foreground mt-1">Decidi dove e quando ritirare la tua carta</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm">Paga in contanti</h3>
                <p className="text-xs text-muted-foreground mt-1">Paga 3€ al momento del ritiro</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm">Inizia a risparmiare</h3>
                <p className="text-xs text-muted-foreground mt-1">Usa la tua carta presso i negozi partner per ottenere sconti esclusivi</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-4 py-6 bg-slate-50">
          <h2 className="text-xl font-bold text-foreground mb-6 text-center">Contattaci</h2>
          
          <div className="space-y-4 mb-6">
            {/* Email */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl">
              <div className="text-3xl">📧</div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground mb-1">Email</p>
                <a 
                  href="mailto:info@cartastudenti.it"
                  className="text-primary font-semibold hover:underline text-sm"
                >
                  info@cartastudenti.it
                </a>
              </div>
            </div>

            {/* Telefono */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl">
              <div className="text-3xl">📱</div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground mb-1">Telefono</p>
                <a 
                  href="tel:+393001234567"
                  className="text-primary font-semibold hover:underline text-sm"
                >
                  +39 300 123 4567
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl">
              <div className="text-3xl">📸</div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground mb-1">Instagram</p>
                <a 
                  href="https://instagram.com/cartastudenti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline text-sm"
                >
                  @cartastudenti
                </a>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <a href="mailto:info@cartastudenti.it">
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-base font-semibold">
                Scrivi un'Email
              </Button>
            </a>
            <a href="https://instagram.com/cartastudenti" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full py-6 text-base font-semibold">
                Seguici su Instagram
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
