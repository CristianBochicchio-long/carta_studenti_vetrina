import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { useState } from "react";

export default function ContattiPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    oggetto: "",
    messaggio: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementare invio email
    console.log("Form submitted:", formData);
    alert("Grazie per il tuo messaggio! Ti contatteremo presto.");
    setFormData({ nome: "", email: "", oggetto: "", messaggio: "" });
  };

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
                Contattaci
              </h1>
              <p className="text-xl text-muted-foreground">
                Hai domande o suggerimenti? Siamo qui per aiutarti.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 md:py-32">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Email */}
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-muted-foreground mb-4">
                  Inviaci un'email per qualsiasi domanda
                </p>
                <a href="mailto:info@cartastudenti.it" className="text-primary font-semibold hover:underline">
                  info@cartastudenti.it
                </a>
              </Card>

              {/* Phone */}
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold mb-2">Telefono</h3>
                <p className="text-muted-foreground mb-4">
                  Chiamaci durante l'orario di ufficio
                </p>
                <a href="tel:+393312345678" className="text-primary font-semibold hover:underline">
                  +39 331 234 5678
                </a>
              </Card>

              {/* Location */}
              <Card className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-bold mb-2">Indirizzo</h3>
                <p className="text-muted-foreground">
                  Via Roma 123<br />
                  00100 Roma, Italia
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <Card className="p-12">
                <h2 className="text-3xl font-bold mb-8">Inviaci un Messaggio</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Nome</label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Il tuo nome"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Il tuo email"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Oggetto</label>
                    <select
                      name="oggetto"
                      value={formData.oggetto}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    >
                      <option value="">Seleziona un argomento</option>
                      <option value="domanda">Domanda sulla carta</option>
                      <option value="supporto">Supporto tecnico</option>
                      <option value="partnership">Partnership</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Messaggio</label>
                    <textarea
                      name="messaggio"
                      value={formData.messaggio}
                      onChange={handleChange}
                      placeholder="Il tuo messaggio..."
                      rows={6}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    ></textarea>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg">
                    Invia Messaggio
                  </Button>
                </form>
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
                  <h3 className="font-bold text-lg mb-2">Qual è l'orario di ufficio?</h3>
                  <p className="text-muted-foreground">Siamo disponibili dal lunedì al venerdì dalle 9:00 alle 18:00.</p>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Quanto tempo impiegate a rispondere?</h3>
                  <p className="text-muted-foreground">Rispondiamo a tutti i messaggi entro 24 ore lavorative.</p>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Posso visitarvi in persona?</h3>
                  <p className="text-muted-foreground">Sì, puoi visitarci presso il nostro ufficio. Ti consigliamo di contattarci prima per assicurarti che siamo disponibili.</p>
                </div>

                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Accettate partnership con negozi?</h3>
                  <p className="text-muted-foreground">Sì! Se sei interessato a una partnership, contattaci tramite il modulo sopra o invia un'email a info@cartastudenti.it</p>
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
