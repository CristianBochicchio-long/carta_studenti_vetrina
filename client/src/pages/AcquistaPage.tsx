import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Mail, Phone, Instagram, CheckCircle2, Zap } from "lucide-react";

export default function AcquistaPage() {
  const steps = [
    {
      number: 1,
      title: "Contattaci",
      description: "Scrivi un messaggio o contattaci tramite i canali sottostanti",
      icon: "💬",
    },
    {
      number: 2,
      title: "Accordati sul ritiro",
      description: "Decidi dove e quando ritirare la tua carta",
      icon: "📍",
    },
    {
      number: 3,
      title: "Paga in contanti",
      description: "Paga 3,5€ al momento del ritiro",
      icon: "💳",
    },
    {
      number: 4,
      title: "Inizia a risparmiare",
      description: "Usa la tua carta presso i negozi partner per ottenere sconti esclusivi",
      icon: "🎉",
    },
  ];

  const contacts = [
    {
      type: "Email",
      value: "info@cartastudenti.it",
      href: "mailto:info@cartastudenti.it",
      icon: Mail,
      color: "from-blue-500 to-cyan-500",
    },
    {
      type: "Telefono",
      value: "+39 300 123 4567",
      href: "tel:+393001234567",
      icon: Phone,
      color: "from-green-500 to-emerald-500",
    },
    {
      type: "Instagram",
      value: "@cartastudenti",
      href: "https://instagram.com/cartastudenti",
      icon: Instagram,
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-blue-50/20 to-white">
      <Header />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/">
            <button className="mb-6 sm:mb-8 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Torna alle categorie
            </button>
          </Link>

          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="relative w-24 sm:w-32 h-24 sm:h-32 mx-auto mb-6 sm:mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-lg opacity-50"></div>
              <div className="relative bg-white rounded-2xl p-4 flex items-center justify-center shadow-xl">
                <img 
                  src="/logo-carta-studenti.png" 
                  alt="Carta Studenti" 
                  className="h-16 sm:h-24 w-auto"
                />
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4">
              Acquista la Carta
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ottieni accesso a sconti esclusivi presso i migliori negozi di Potenza
            </p>
          </div>

          {/* Price Card */}
          <div className="relative mb-12 sm:mb-16 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl sm:rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-br from-primary to-secondary rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-white shadow-2xl">
              <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
                <Zap className="w-6 sm:w-8 h-6 sm:h-8" />
                <span className="text-base sm:text-lg font-semibold">OFFERTA SPECIALE</span>
              </div>
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2">3,5€</div>
              <p className="text-base sm:text-lg opacity-90">Pagamento in contanti al ritiro</p>
              <p className="text-xs sm:text-sm opacity-75 mt-2">Accesso a 20+ negozi partner</p>
            </div>
          </div>

          {/* Steps Section */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 sm:mb-12 text-center">
              Come Acquistare
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {steps.map((step, index) => (
                <div 
                  key={step.number}
                  className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-gray-100 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  {/* Step number badge */}
                  <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center font-bold text-base sm:text-lg shadow-lg group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-2xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Decorative line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
              Contattaci
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {contacts.map((contact) => {
                const Icon = contact.icon;
                return (
                  <a 
                    key={contact.type}
                    href={contact.href}
                    target={contact.type === "Instagram" ? "_blank" : undefined}
                    rel={contact.type === "Instagram" ? "noopener noreferrer" : undefined}
                    className="group"
                  >
                    <div className="relative h-full bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
                      {/* Gradient background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>

                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7" />
                      </div>

                      {/* Content */}
                      <p className="text-sm text-muted-foreground mb-2">
                        {contact.type}
                      </p>
                      <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <a href="mailto:info@cartastudenti.it">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:scale-105 transition-all duration-300 py-6 text-base font-semibold"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Scrivi un'Email
                </Button>
              </a>
              <a href="https://instagram.com/cartastudenti" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full py-6 text-base font-semibold border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Seguici su Instagram
                </Button>
              </a>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Cosa Ottieni
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: "🏪", title: "20+ Negozi", desc: "Partner esclusivi" },
                { icon: "💰", title: "Sconti fino al 15%", desc: "Su tutti i servizi" },
                { icon: "⚡", title: "Subito Attiva", desc: "Usa la card al ritiro" },
              ].map((benefit, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="text-5xl mb-3">{benefit.icon}</div>
                  <h4 className="font-bold text-lg text-foreground mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
