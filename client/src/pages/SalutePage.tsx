import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { MapView } from "@/components/Map";

export default function SalutePage() {
  const stores = [
    {
      id: 1,
      name: "Irene Beauty Specialist",
      discount: "15%",
      logo: "/loghi/irene.png",
      coordinates: { lat: 40.5752, lng: 15.7815 },
    },
    {
      id: 2,
      name: "Zone 14 barber shop",
      discount: "10%",
      logo: "/zone14_logo.png",
      coordinates: { lat: 40.6394, lng: 15.7839 },
    },
    {
      id: 3,
      name: "Make Difference",
      discount: "Offerte Speciali",
      logo: "/loghi/make_difference.jpg",
      coordinates: { lat: 40.6393, lng: 15.7824 },
      offers: [
        {
          title: "Colore + piega 'Study Break'",
          description: "Colore + piega con trattamento omaggio"
        },
        {
          title: "Taglio smart student",
          description: "Taglio + piega a prezzo fisso 29 euro"
        },
        {
          title: "Porta un'amica",
          description: "Se vengono in 2 la piega è scontata del 10%"
        }
      ]
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
        <h1 className="text-4xl font-bold text-foreground mb-8">Salute</h1>

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
                  <div className="bg-green-500 text-white rounded-xl px-6 py-3 text-center font-bold text-2xl">
                    Sconto {store.discount}
                  </div>

                  {/* Offers List */}
                  {store.offers && (
                    <div className="mt-6 w-full">
                      <h3 className="text-lg font-bold text-foreground mb-3">Offerte:</h3>
                      <ul className="space-y-2">
                        {store.offers.map((offer, idx) => (
                          <li key={idx} className="bg-gray-50 p-3 rounded-lg">
                            <p className="font-semibold text-foreground">{offer.title}</p>
                            <p className="text-sm text-gray-600">{offer.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Right: Map */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4">Posizione</h3>
                  <div className="rounded-xl overflow-hidden h-80 border border-gray-200 relative">
                    <MapView 
                      initialCenter={store.coordinates}
                      initialZoom={16}
                      onMapReady={(map: google.maps.Map) => {
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
