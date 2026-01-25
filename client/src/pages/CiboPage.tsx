import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { MapView } from "@/components/Map";

export default function CiboPage() {
  const stores = [
    {
      id: 1,
      name: "Pasticceria Mancino",
      discount: "10%",
      logo: "/loghi/mancino.jpg",
      coordinates: { lat: 40.6325441, lng: 15.7916009 }, // Via Tirreno 29, Potenza
    },
    {
      id: 2,
      name: "Number One Community Bar",
      discount: "15%",
      logo: "/loghi/numberone.jpg",
      coordinates: { lat: 40.6388956, lng: 15.8058916 }, // Via Pretoria, Potenza
    },
    {
      id: 3,
      name: "Caffetteria Don Bosco",
      discount: "10%",
      logo: "/loghi/don_bosco.jpg",
      coordinates: { lat: 40.6469793, lng: 15.7967429 }, // Piazza S. Giovanni Bosco 26, Potenza
    },
    {
      id: 4,
      name: "Gelateria Oliveto",
      discount: "10%",
      logo: "/loghi/gelateria_oliveto.png",
      coordinates: { lat: 40.6434657, lng: 15.789762 }, // JQVQ+9W Potenza - Piazzale Sofia 18
    },
    {
      id: 5,
      name: "Capatosta Bakery",
      discount: "10%",
      logo: "/loghi/capatosta_bakery.jpg",
      coordinates: { lat: 40.6413151, lng: 15.8129099 }, // JRR7+G5C Potenza - Borgo S. Rocco 10
    },
    {
      id: 6,
      name: "Chiattò",
      discount: "10%",
      logo: "/loghi/chiatto.png",
      coordinates: { lat: 40.6473962, lng: 15.7964117 }, // JQWW+XH Potenza - Piazza S. Giovanni Bosco 15
    },
    {
      id: 7,
      name: "Mazzini Caffè",
      discount: "15%",
      logo: "/bar_mazzini_logo.jpg",
      coordinates: { lat: 40.6388962, lng: 15.8006009 }, // JRQ2+H6 Potenza - Via Giuseppe Mazzini 61
    },
    {
      id: 8,
      name: "Pizzeria Borgo San Michele",
      discount: "10%",
      logo: "/loghi/borgo_san_michele.png",
      coordinates: { lat: 40.6380946, lng: 15.8013649 }, // JRQ2+6G Potenza - Via Giordano Bruno 16
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
        <h1 className="text-4xl font-bold text-foreground mb-8">Cibo</h1>

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
                    {/* HTML Overlay Marker - always visible */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none z-50">
                      <div className="relative">
                        <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg"></div>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-red-500"></div>
                      </div>
                    </div>
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
