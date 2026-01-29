import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { MapView } from "@/components/Map";

export default function AbbigliamentoPage() {
  const stores = [
    {
      id: 1,
      name: "Vanity",
      discount: "10%",
      logo: "/loghi/vanity.png?v=3",
      coordinates: { lat: 40.6418, lng: 15.8048 }, // JRR3+VV Potenza
    },
    {
      id: 2,
      name: "Life Style",
      discount: "10%",
      logo: "/loghi/lifestyle.png",
      coordinates: { lat: 40.6387, lng: 15.8047 }, // JRQ3+FV Potenza
      website: "https://lifestyleshop.it",
    },
    {
      id: 3,
      name: "Mina",
      discount: "10%",
      logo: "/loghi/mina.png",
      coordinates: { lat: 40.6356, lng: 15.8045 }, // JRP3+6R Potenza
    },
    {
      id: 4,
      name: "Noemi",
      discount: "15%",
      description: "Una volta al mese su spesa minima di 20€",
      logo: "/loghi/logo_noemi.png",
      coordinates: { lat: 40.6467, lng: 15.8028 }, // JRW3+M4 Potenza
    },
    {
      id: 5,
      name: "BrandsOffPrice",
      discount: "Extra 20% rispetto al prezzo outlet in periodo di non promozione. Extra 5% in periodo di promozioni già in corso",
      logo: "/brandsoffprice-logo.png",
      coordinates: { lat: 40.6313, lng: 15.8106 }, // JRJ6+74 Potenza
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
        <h1 className="text-4xl font-bold text-foreground mb-8">Abbigliamento</h1>

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
                  <div className="bg-pink-500 text-white rounded-xl px-6 py-3 text-center font-bold text-2xl">
                    Sconto {store.discount}
                  </div>
                  
                  {store.description && (
                    <p className="text-sm text-gray-600 mt-2 text-center">{store.description}</p>
                  )}
                </div>

                {/* Right: Map */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4">Posizione</h3>
                  <div className="rounded-xl overflow-hidden h-80 border border-gray-200 relative">
                    <MapView 
                      initialCenter={store.coordinates}
                      initialZoom={15}
                      onMapReady={(map: google.maps.Map) => {
                        // Create DEFAULT Google Maps marker (red pin)
                        new google.maps.Marker({
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
      </main>

      <Footer />
    </div>
  );
}
