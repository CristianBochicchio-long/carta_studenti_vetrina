import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";

export default function BedAndBreakfastPage() {
  const stores = [
    {
      id: 1,
      name: "Potenza Experience",
      discount: "10%",
      logo: "/potenza-experience-logo.png",
      coordinates: { lat: 40.6389, lng: 15.8061 },
      plusCode: "8FGQJRQ4+X6",
    },
    {
      id: 2,
      name: "Villa Arcobaleno",
      discount: "150 euro ogni 50 persone (lauree e 18 anni)",
      logo: "/villa_arcobaleno_logo.jpg",
      coordinates: { lat: 40.6121439, lng: 15.9497486 },
      plusCode: "JW6X+VV Brindisi Montagna",
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
        <h1 className="text-4xl font-bold text-foreground mb-4">B&B</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Bed & Breakfast e strutture ricettive
        </p>

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
