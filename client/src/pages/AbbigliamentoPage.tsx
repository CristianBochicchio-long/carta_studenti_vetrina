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
      logo: "/loghi/vanity.jpg",
      coordinates: { lat: 40.6413, lng: 15.7944 },
      plusCode: "JRR3+VV Potenza",
    },
    {
      id: 2,
      name: "Mina",
      discount: "10%",
      logo: "/loghi/mina.jpg",
      coordinates: { lat: 40.6406, lng: 15.7924 },
      plusCode: "JRP3+6R Potenza",
    },
    {
      id: 3,
      name: "Lifestyle",
      discount: "10%",
      logo: "/loghi/lifestyle.png",
      coordinates: { lat: 40.6410, lng: 15.7948 },
      plusCode: "JRQ3+FV Potenza",
    },
    {
      id: 4,
      name: "Noemi",
      discount: "10%",
      logo: "/loghi/noemi.png",
      coordinates: { lat: 40.6415, lng: 15.7930 },
      plusCode: "JRW3+M4 Potenza",
    },
    {
      id: 5,
      name: "BrandsOffPrice",
      discount: "Extra 20% in non-promozione, Extra 5% in promozione",
      logo: "/brands-off-price-logo.png",
      coordinates: { lat: 40.6394, lng: 15.7876 },
      plusCode: "JRJ6+74 Potenza",
    },
    {
      id: 6,
      name: "Dan John",
      discount: "10%",
      logo: "/danjohn-logo.jpg",
      coordinates: { lat: 40.6440, lng: 15.7890 },
      plusCode: "JQQJ+7X Potenza",
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
