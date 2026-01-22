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
      coordinates: { lat: 40.6498381, lng: 15.7958133 }, // Via Domenico di Giura 17-19, Potenza
    },
    {
      id: 2,
      name: "Gioielleria Princess",
      discount: "10%",
      logo: "/loghi/princess.png",
      coordinates: { lat: 40.6393762, lng: 15.7824425 }, // Via del Gallitello 237, Potenza
    },
    {
      id: 3,
      name: "Riviello Gioielli dal 1951",
      discount: "10% + svariate promozioni",
      logo: "/loghi/riviello.png",
      coordinates: { lat: 40.6383504, lng: 15.8028 }, // Via Pretoria 105, Potenza
      website: "https://riviellogioielli.it",
    },
    {
      id: 4,
      name: "Festidea Animazione ed Eventi",
      discount: "15%",
      logo: "/festidea_logo.jpg",
      coordinates: { lat: 40.6527659, lng: 15.7980751 }, // Via Alassio, 20, Potenza
      website: "https://festidea.it",
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
                  <div className="bg-pink-500 text-white rounded-xl px-6 py-3 text-center font-bold text-2xl">
                    Sconto {store.discount}
                  </div>
                  
                  {/* Website Link */}
                  {store.website && (
                    <a 
                      href={store.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-4 text-blue-600 hover:text-blue-800 font-semibold underline"
                    >
                      Visita il sito →
                    </a>
                  )}
                </div>

                {/* Right: Map */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4">Posizione</h3>
                  <div className="rounded-xl overflow-hidden h-80 border border-gray-200">
                    <MapView 
                      initialCenter={store.coordinates}
                      initialZoom={15}
                      onMapReady={(map: google.maps.Map) => {
                        // Create a visible red marker for the store
                        new google.maps.Marker({
                          map: map,
                          position: store.coordinates,
                          title: store.name,
                          animation: google.maps.Animation.DROP,
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
