import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Acquista() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Back Button */}
        <section className="py-4 px-4">
          <Link href="/">
            <Button variant="outline" className="text-sm">
              ← Indietro
            </Button>
          </Link>
        </section>

        {/* Acquista Section */}
        <section className="py-8 px-4">
          <div className="max-w-2xl mx-auto">
            {/* Logo */}
            <div className="mb-8 text-center">
              <div className="bg-gradient-to-br from-primary via-secondary to-primary rounded-2xl p-6 w-fit mx-auto mb-6">
                <img 
                  src="/logo-carta-studenti.png" 
                  alt="Carta Studenti" 
                  className="h-32 w-auto"
                />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Acquista la Carta</h1>
              <p className="text-lg text-muted-foreground">Sconti esclusivi per gli studenti</p>
            </div>

            {/* Prezzo */}
            <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-white text-center mb-8">
              <p className="text-sm opacity-90 mb-2">Prezzo della Carta</p>
              <p className="text-5xl font-bold">3€</p>
              <p className="text-sm opacity-90 mt-2">Pagamento in contanti</p>
            </div>

            {/* Istruzioni */}
            <div className="space-y-6 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Come Acquistare</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Contattaci</h3>
                      <p className="text-muted-foreground mt-1">
                        Scrivi un messaggio o contattaci tramite i canali sottostanti
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
                        2
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Accordati sul ritiro</h3>
                      <p className="text-muted-foreground mt-1">
                        Decidi dove e quando ritirare la tua carta
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Paga in contanti</h3>
                      <p className="text-muted-foreground mt-1">
                        Paga 3€ al momento del ritiro
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-white font-bold">
                        4
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Inizia a risparmiare</h3>
                      <p className="text-muted-foreground mt-1">
                        Usa la tua carta presso i negozi partner per ottenere sconti esclusivi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contatti */}
            <div className="bg-slate-50 rounded-2xl p-6 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Contattaci</h2>
              
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="text-2xl">📧</div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a 
                      href="mailto:info@cartastudenti.it"
                      className="text-primary font-semibold hover:underline"
                    >
                      info@cartastudenti.it
                    </a>
                  </div>
                </div>

                {/* Telefono */}
                <div className="flex items-center gap-4">
                  <div className="text-2xl">📱</div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">Telefono</p>
                    <a 
                      href="tel:+393001234567"
                      className="text-primary font-semibold hover:underline"
                    >
                      +39 300 123 4567
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-center gap-4">
                  <div className="text-2xl">📸</div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground mb-1">Instagram</p>
                    <a 
                      href="https://instagram.com/cartastudenti"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:underline"
                    >
                      @cartastudenti
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-3">
              <a href="mailto:info@cartastudenti.it">
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-semibold">
                  Scrivi un'Email
                </Button>
              </a>
              <a href="https://instagram.com/cartastudenti" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full py-6 text-lg font-semibold">
                  Seguici su Instagram
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
