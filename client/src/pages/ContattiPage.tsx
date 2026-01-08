import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

export default function ContattiPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    oggetto: "",
    messaggio: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Grazie per il tuo messaggio! Ti contatteremo presto.");
    setFormData({ nome: "", email: "", oggetto: "", messaggio: "" });
  };

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
            Abbiamo domande? Siamo qui per aiutarti
          </p>
        </section>

        {/* Contact Info */}
        <section className="px-4 py-8">
          <h2 className="text-xl font-bold text-foreground mb-6">
            Informazioni di Contatto
          </h2>

          <div className="space-y-4 mb-8">
            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="font-bold text-foreground mb-2">Email</h3>
              <a href="mailto:info@cartastudenti.it" className="text-primary text-sm font-semibold">
                info@cartastudenti.it
              </a>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="font-bold text-foreground mb-2">Telefono</h3>
              <a href="tel:+393912345678" className="text-primary text-sm font-semibold">
                +39 391 234 5678
              </a>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="font-bold text-foreground mb-2">Indirizzo</h3>
              <p className="text-sm text-muted-foreground">
                Via Esempio 123<br />
                00100 Roma (RM)
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="font-bold text-foreground mb-2">Social</h3>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-semibold">
                Seguici su Instagram
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="px-4 py-8 bg-slate-50">
          <h2 className="text-xl font-bold text-foreground mb-6">
            Inviaci un Messaggio
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Nome
              </label>
              <input
                type="text"
                required
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                placeholder="Il tuo nome"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                placeholder="La tua email"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Oggetto
              </label>
              <input
                type="text"
                required
                value={formData.oggetto}
                onChange={(e) => setFormData({ ...formData, oggetto: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                placeholder="Oggetto del messaggio"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Messaggio
              </label>
              <textarea
                required
                value={formData.messaggio}
                onChange={(e) => setFormData({ ...formData, messaggio: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                placeholder="Il tuo messaggio"
                rows={5}
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-base font-semibold">
              Invia Messaggio
            </Button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
