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
      coordinates: { lat: 40.6402, lng: 15.7886 },
      plusCode: "JQMR+2J Potenza",
    },
    {
      id: 2,
      name: "Number One Community Bar",
      discount: "15%",
      logo: "/loghi/numberone.jpg",
      coordinates: { lat: 40.6410, lng: 15.7962 },
      plusCode: "JRQ4+H9 Potenza",
    },
    {
      id: 3,
      name: "Chiattò",
      discount: "10%",
      logo: "/loghi/chiatto.jpg",
      coordinates: { lat: 40.6394, lng: 15.7824 },
      plusCode: "JQWW+XH Potenza",
    },
    {
      id: 4,
      name: "Gelateria Oliveto",
      discount: "10%",
      logo: "/loghi/gelateria_oliveto.png",
      coordinates: { lat: 40.6435, lng: 15.7898 },
      plusCode: "JQVQ+9W Potenza",
    },
    {
      id: 5,
      name: "Capatosta Bakery",
      discount: "10%",
      logo: "/loghi/capatosta_bakery.jpg",
      coordinates: { lat: 40.6413151, lng: 15.8129099 },
      plusCode: "40.6413151,15.8129099",
    },
    {
      id: 6,
      name: "Bar Principe",
      discount: "10%",
      logo: "/bar-principe-logo.png",
      coordinates: { lat: 40.6422, lng: 15.8012 },
      plusCode: "JRX2+GG Potenza",
    },
    {
      id: 7,
      name: "Barleo - Teknogame Potenza",
      discount: "20% a partire da 4€ (7:00-15:00)",
      logo: "/barleo_logo.png",
      coordinates: { lat: 40.6426757, lng: 15.7897637 },
      plusCode: "JQVQ+3W Potenza",
    },
    {
      id: 8,
      name: "Caffetteria Don Bosco",
      discount: "10%",
      logo: "/caffetteria_don_bosco_logo.jpg",
      coordinates: { lat: 40.6469793, lng: 15.7967429 },
      plusCode: "JQWW+QM Potenza",
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
                  <div className="bg-orange-500 text-white rounded-xl px-6 py-3 text-center font-bold text-2xl">
                    Sconto {store.discount}
                  </div>
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
