import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

export default function AcquistaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
          <div className="container relative z-10">
            <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
              ← Torna alla home
            </Link>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Acquista la Tua Carta Studenti
              </h1>
              <p className="text-xl text-muted-foreground">
                Accedi a tutte le convenzioni esclusive presso i nostri negozi partner
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Card */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <Card className="p-12 border-2 border-primary">
                <div className="text-center mb-12">
                  <div className="text-6xl font-bold text-primary mb-4">3€</div>
                  <h2 className="text-3xl font-bold mb-2">Carta Studenti Convenzioni</h2>
                  <p className="text-muted-foreground">Una volta sola, accesso illimitato</p>
                </div>

                <div className="space-y-4 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">✓</div>
                    <div>
                      <h3 className="font-bold">50+ Negozi Partner</h3>
                      <p className="text-muted-foreground">Accesso a convenzioni in tutte le categorie</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">✓</div>
                    <div>
                      <h3 className="font-bold">Sconti fino al 30%</h3>
                      <p className="text-muted-foreground">Risparmia su sport, cibo, salute, abbigliamento e altro</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">✓</div>
                    <div>
                      <h3 className="font-bold">Notifiche Sconti</h3>
                      <p className="text-muted-foreground">Ricevi aggiornamenti sui nuovi sconti via newsletter</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">✓</div>
                    <div>
                      <h3 className="font-bold">Accesso Personale</h3>
                      <p className="text-muted-foreground">Visualizza la tua carta digitale con codice univoco</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg mb-12">
                  <h3 className="font-bold mb-4">Come Funziona:</h3>
                  <ol className="space-y-3 text-sm">
                    <li className="flex gap-3">
                      <span className="font-bold text-primary">1.</span>
                      <span>Compila il modulo di registrazione con i tuoi dati</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-primary">2.</span>
                      <span>Effettua il pagamento in contanti presso i nostri punti vendita</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-primary">3.</span>
                      <span>Ricevi un codice di attivazione via email</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-primary">4.</span>
                      <span>Attiva la tua carta e inizia a usufruire delle convenzioni</span>
                    </li>
                  </ol>
                </div>

                <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-white py-6 text-lg">
                  Procedi all'Acquisto
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32 bg-slate-50">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Domande Frequenti</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Quanto costa la carta?</h3>
                  <p className="text-muted-foreground">La carta costa 3€ una volta sola. Una volta acquistata, avrai accesso illimitato a tutte le convenzioni.</p>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Come posso pagare?</h3>
                  <p className="text-muted-foreground">Il pagamento avviene in contanti presso i nostri punti vendita. Dopo il pagamento, riceverai un codice di attivazione via email.</p>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Come attivo la mia carta?</h3>
                  <p className="text-muted-foreground">Dopo il pagamento, riceverai un email con il codice di attivazione. Usa il codice per attivare la tua carta nel tuo account personale.</p>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Posso condividere la mia carta?</h3>
                  <p className="text-muted-foreground">No, la carta è personale e non trasferibile. Ogni studente deve avere la propria carta.</p>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Quanto dura la validità della carta?</h3>
                  <p className="text-muted-foreground">La carta è valida per un anno accademico. Potrai rinnovarla successivamente.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
