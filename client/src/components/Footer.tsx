import { APP_TITLE } from "@/const";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">{APP_TITLE}</h3>
            <p className="text-slate-300 text-sm">
              La carta dedicata agli studenti con convenzioni esclusive presso i migliori negozi.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categorie</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/abbigliamento" className="hover:text-white transition-colors">Abbigliamento</Link></li>
              <li><Link href="/cibo" className="hover:text-white transition-colors">Cibo</Link></li>
              <li><Link href="/salute" className="hover:text-white transition-colors">Salute</Link></li>
              <li><Link href="/sport" className="hover:text-white transition-colors">Sport</Link></li>
              <li><Link href="/varie" className="hover:text-white transition-colors">Varie</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Link Utili</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/acquista" className="hover:text-white transition-colors">Acquista Carta</Link></li>
              <li><Link href="/contatti" className="hover:text-white transition-colors">Contatti</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termini di Servizio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Seguici</h4>
            <div className="flex gap-4 items-center">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors text-2xl"
                title="Instagram"
              >
                📱
              </a>
              <span className="text-slate-400 text-sm">Instagram</span>
            </div>
            <p className="text-slate-400 text-xs mt-2">
              (Link da aggiornare con il vostro profilo)
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            &copy; {currentYear} {APP_TITLE}. Tutti i diritti riservati.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
              Termini
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
              Cookie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
