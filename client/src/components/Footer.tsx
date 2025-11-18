import { APP_TITLE } from "@/const";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">{APP_TITLE}</h3>
            <p className="text-slate-300 text-sm">
              La carta dedicata agli studenti con convenzioni esclusive presso i migliori negozi.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categorie</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="/sport" className="hover:text-white transition-colors">Sport</a></li>
              <li><a href="/cibo" className="hover:text-white transition-colors">Cibo</a></li>
              <li><a href="/salute" className="hover:text-white transition-colors">Salute</a></li>
              <li><a href="/abbigliamento" className="hover:text-white transition-colors">Abbigliamento</a></li>
              <li><a href="/varie" className="hover:text-white transition-colors">Varie</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contatti</h4>
            <p className="text-slate-300 text-sm">
              Per informazioni sulle convenzioni e partnership, contattaci tramite il modulo di contatto.
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
