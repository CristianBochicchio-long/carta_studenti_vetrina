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
      coordinates: { lat: 40.5751716, lng: 15.7815401 }, // Via Aldo Moro 69, Pignola
    },
    {
      id: 3,
      name: "Zone 14 barber shop",
      discount: "10%",
      logo: "/zone14_logo.png",
      coordinates: { lat: 40.6393832, lng: 15.7839286 }, // Viale Vincenzo Verrastro, 21c, Potenza
      website: "zone14barbershop.it"
    },
    {
      id: 2,
      name: "Make Difference",
      discount: "Offerte Speciali",
      logo: "/loghi/make_difference.jpg?v=1",
      coordinates: { lat: 40.637942, lng: 15.781883 }, // JQQJ+5QC, Via Isca del Pioppo, Iper Futura, Potenza
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
                  <div className="bg-pink-500 text-white rounded-xl px-6 py-3 text-center font-bold text-2xl">
                    {store.discount}
                  </div>
                  
                  {/* Website Link */}
                  {store.website && (
                    <a 
                      href={`https://${store.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-4 text-blue-600 hover:text-blue-800 font-semibold underline"
                    >
                      Visita il sito →
                    </a>
                  )}
                  
                  {/* Offers List for Make Difference */}
                  {store.offers && (
                    <div className="mt-6 w-full space-y-3">
                      {store.offers.map((offer, idx) => (
                        <div key={idx} className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                          <h4 className="font-bold text-blue-900 text-sm">{offer.title}</h4>
                          <p className="text-blue-700 text-xs mt-1">{offer.description}</p>
                        </div>
                      ))}
                    </div>
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
                        // Create a classic red marker (works without mapId)
                        new google.maps.Marker({
                          map: map,
                          position: store.coordinates,
                          title: store.name,
                          icon: {
                            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                            scaledSize: new google.maps.Size(40, 40),
                          },
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
