import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { MapPin, Phone, Globe } from "lucide-react";
import { MapView } from "@/components/Map";

export default function AbbigliamentoPage() {
  const stores = [
    {
      id: 1,
      name: "Vanity",
      description: "Negozio di moda e accessori con collezioni esclusive",
      discount: "10%",
      address: "Via Giuseppe Mazzini 96b, Potenza",
      phone: "+39 0971 XXXXX",
      website: "www.vanity.it",
      logo: "/vanity-logo.png",
      coordinates: { lat: 40.6029, lng: 15.8009 }, // Potenza coordinates
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                {/* Store Logo and Info */}
                <div className="md:col-span-1">
                  <img 
                    src={store.logo} 
                    alt={store.name}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                  <h2 className="text-2xl font-bold text-foreground mb-2">{store.name}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{store.description}</p>
                  
                  {/* Discount Badge */}
                  <div className="bg-pink-500 text-white rounded-xl px-4 py-2 text-center font-bold text-lg mb-4">
                    Sconto {store.discount}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="md:col-span-1">
                  <h3 className="text-lg font-bold text-foreground mb-4">Contatti</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">Indirizzo</p>
                        <p className="text-sm text-muted-foreground">{store.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">Telefono</p>
                        <a href={`tel:${store.phone}`} className="text-sm text-primary hover:underline">
                          {store.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">Sito Web</p>
                        <a href={`https://${store.website}`} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                          {store.website}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="md:col-span-1">
                  <h3 className="text-lg font-bold text-foreground mb-4">Posizione</h3>
                  <div className="rounded-xl overflow-hidden h-64 border border-gray-200">
                    <MapView 
                      initialCenter={store.coordinates}
                      initialZoom={15}
                      onMapReady={(map: google.maps.Map) => {
                        // Create a marker for the store
                        const marker = new google.maps.marker.AdvancedMarkerElement({
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
