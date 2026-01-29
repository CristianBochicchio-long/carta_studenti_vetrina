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
      coordinates: { lat: 40.6388, lng: 15.8006 }, // JQMR+2J Potenza
    },
    {
      id: 2,
      name: "Number One Community Bar",
      discount: "15%",
      logo: "/loghi/numberone.jpg",
      coordinates: { lat: 40.6387, lng: 15.8063 }, // JRQ4+H9 Potenza
    },
    {
      id: 3,
      name: "Chiattò",
      discount: "10%",
      logo: "/loghi/chiatto.png",
      coordinates: { lat: 40.6474, lng: 15.7964 }, // JQWW+XH Potenza
    },
    {
      id: 4,
      name: "Gelateria Oliveto",
      discount: "10%",
      logo: "/loghi/gelateria_oliveto.png",
      coordinates: { lat: 40.6435, lng: 15.7898 }, // JQVQ+9W Potenza
    },
    {
      id: 5,
      name: "Capatosta Bakery",
      discount: "10%",
      logo: "/loghi/capatosta_bakery.jpg",
      coordinates: { lat: 40.6413151, lng: 15.8129099 }, // Coordinate esatte
    },
    {
      id: 6,
      name: "Bar Principe",
      discount: "10%",
      logo: "/bar-principe-logo.png",
      coordinates: { lat: 40.6488, lng: 15.8013 }, // JRX2+GG Potenza
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
