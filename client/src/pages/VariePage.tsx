import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { MapView } from "@/components/Map";

export default function VariePage() {
  const stores = [
    {
      id: 1,
      name: "Svapomania",
      discount: "5%",
      logo: "/loghi/svapomania.jpg",
      coordinates: { lat: 40.6528, lng: 15.7981 },
      plusCode: "JQQJ+QX Potenza",
    },
    {
      id: 2,
      name: "Gioielleria Princess",
      discount: "10%",
      logo: "/loghi/princess.png",
      coordinates: { lat: 40.6393, lng: 15.7824 },
      plusCode: "JQQJ+QX Potenza",
    },
    {
      id: 3,
      name: "Riviello Gioielli dal 1951",
      discount: "10% + svariate promozioni",
      logo: "/loghi/riviello.png",
      coordinates: { lat: 40.6383, lng: 15.8028 },
      plusCode: "https://maps.app.goo.gl/sZpirPEw1dkD7Ujo9",
      website: "https://riviellogioielli.it",
    },
    {
      id: 4,
      name: "Festidea Animazione ed Eventi",
      discount: "50€ netti",
      logo: "/festidea_logo.jpg",
      coordinates: { lat: 40.6528, lng: 15.7981 },
      plusCode: "MQ3X+46 Potenza",
      website: "https://www.instagram.com/effea_show?igsh=aXQwNTZkcXVlN2dw",
    },
    {
      id: 5,
      name: "Cineatro Don Bosco",
      discount: "10%",
      logo: "/cineatro-don-bosco-10.png",
      coordinates: { lat: 40.6484, lng: 15.7963 },
      plusCode: "JQXW+3F Potenza",
    },
    {
      id: 6,
      name: "Villa Arcobaleno",
      discount: "150 euro ogni 50 persone (lauree e 18 anni)",
      logo: "/villa_arcobaleno_logo.jpg",
      coordinates: { lat: 40.6121439, lng: 15.9497486 },
      plusCode: "JW6X+VV Brindisi Montagna",
    },
    {
      id: 7,
      name: "Centro Stampa Digitale",
      discount: "10%",
      logo: "/centro-stampa-digitale-logo.jpg",
      coordinates: { lat: 40.6410, lng: 15.7945 },
      plusCode: "JQQJ+5P Potenza",
    },
    {
      id: 8,
      name: "Fire Fly",
      discount: "5% strumenti, 10% resto",
      logo: "/firefly-logo.jpg",
      coordinates: { lat: 40.6456, lng: 15.7892 },
      plusCode: "JQQJ+6X Potenza",
    },
    {
      id: 9,
      name: "Icaro",
      discount: "Promo ingresso: 1€ di sconto | Promo pizza: Pizza margherita, patatine e bibita a 10€ | Promo feste: 150€ in meno ogni 50 persone (18 anni e lauree)",
      logo: "/icaro-logo.jpg",
      coordinates: { lat: 40.6412, lng: 15.7956 },
      plusCode: "JQQJ+5X Potenza",
    },

  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 py-8 px-4">
        {/* Back Button */}
        <Link href="/">
          <button className="mb-6 text-primary font-semibold hover:underline flex items-center gap-2">
            ← Torna alle categorie
          </button>
        </Link>

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-foreground mb-8">Varie</h1>

        {/* Stores Grid */}
        <div className="grid grid-cols-1 gap-8 mb-12">
          {stores.map((store) => (
            <div key={store.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                {/* Left: Logo, Name, Discount */}
                <div className="flex flex-col items-center justify-center">
                  <div className="w-full h-48 bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
                    <img 
                      src={store.logo} 
                      alt={store.name}
                      className="h-40 w-auto object-contain"
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">{store.name}</h2>
                  
                  {/* Discount Badge */}
                  <div className="bg-purple-500 text-white rounded-xl px-6 py-3 text-center font-bold text-2xl">
                    Sconto {store.discount}
                  </div>

                  {store.website && (
                    <a 
                      href={store.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-4 text-primary font-semibold hover:underline"
                    >
                      Visita il sito →
                    </a>
                  )}
                </div>

                {/* Right: Indirizzo */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4">Posizione</h3>
                  <p className="text-gray-600 mb-4">{store.plusCode}</p>
                  {/* Bottone Google Maps */}
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.plusCode)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                  >
                    📍 Apri su Google Maps
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
