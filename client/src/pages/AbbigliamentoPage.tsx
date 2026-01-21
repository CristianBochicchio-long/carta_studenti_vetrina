import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { MapView } from "@/components/Map";
import { ArrowLeft, ExternalLink, MapPin } from "lucide-react";

export default function AbbigliamentoPage() {
  const stores = [
    {
      id: 1,
      name: "Vanity",
      discount: "10%",
      logo: "/loghi/vanity.png?v=3",
      coordinates: { lat: 40.640362, lng: 15.8044015 }, // Via Giuseppe Mazzini 96, Potenza
    },
    {
      id: 2,
      name: "Life Style",
      discount: "10%",
      logo: "/loghi/lifestyle.png",
      coordinates: { lat: 40.6387142, lng: 15.8046618 }, // Via Pretoria 212, Potenza
      website: "https://lifestyleshop.it",
    },
    {
      id: 3,
      name: "Mina",
      discount: "10%",
      logo: "/loghi/mina.png",
      coordinates: { lat: 40.6378, lng: 15.8058 }, // V.le Guglielmo Marconi 96, Potenza
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-pink-50/30 to-white">
      <Header />

      <main className="flex-1 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link href="/">
            <button className="mb-8 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Torna alle categorie
            </button>
          </Link>

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              Abbigliamento
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Scopri i migliori negozi di moda e accessori con sconti esclusivi per studenti
            </p>
          </div>

          {/* Stores Grid */}
          <div className="grid grid-cols-1 gap-10">
            {stores.map((store, index) => (
              <div 
                key={store.id} 
                className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-transparent to-pink-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white">
                  {/* Left: Logo, Name, Discount */}
                  <div className={`flex flex-col items-center justify-center p-8 md:p-12 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    {/* Logo Container */}
                    <div className="w-full h-56 bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl mb-6 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                      <img 
                        src={store.logo} 
                        alt={store.name}
                        className="h-48 w-auto object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Store Name */}
                    <h2 className="text-4xl font-bold text-foreground mb-6 text-center">
                      {store.name}
                    </h2>
                    
                    {/* Discount Badge */}
                    <div className="relative mb-6">
                      <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative bg-white rounded-xl px-8 py-4 text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                          Sconto {store.discount}
                        </div>
                      </div>
                    </div>
                    
                    {/* Website Link */}
                    {store.website && (
                      <a 
                        href={store.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-pink-100 to-rose-100 text-primary font-semibold rounded-xl hover:from-pink-200 hover:to-rose-200 transition-all duration-300 group-hover:scale-105"
                      >
                        Visita il sito
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Right: Map */}
                  <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="flex items-center gap-2 mb-6">
                      <MapPin className="w-5 h-5 text-pink-500" />
                      <h3 className="text-2xl font-bold text-foreground">Posizione</h3>
                    </div>
                    <div className="rounded-2xl overflow-hidden h-80 border-2 border-pink-100 shadow-lg group-hover:shadow-xl transition-shadow">
                      <MapView 
                        initialCenter={store.coordinates}
                        initialZoom={15}
                        onMapReady={(map: google.maps.Map) => {
                          // Create a marker for the store
                          const marker = new google.maps.marker.AdvancedMarkerElement({
                            map: map,
                            position: store.coordinates,
                            title: store.name,
                          });
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
