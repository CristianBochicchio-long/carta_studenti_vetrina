import { APP_TITLE } from "@/const";
import { Link } from "wouter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white mt-12">
      <div className="px-4 py-8">
        {/* Brand */}
        <div className="mb-8">
          <h3 className="font-bold text-lg mb-2">{APP_TITLE}</h3>
          <p className="text-slate-400 text-xs">
            La carta dedicata agli studenti con convenzioni esclusive presso i migliori negozi.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h4 className="font-semibold text-sm mb-3">Categorie</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>
              <Link href="/abbigliamento" className="hover:text-white transition-colors">
                Abbigliamento
              </Link>
            </li>
            <li>
              <Link href="/cibo" className="hover:text-white transition-colors">
                Cibo
              </Link>
            </li>
            <li>
              <Link href="/salute" className="hover:text-white transition-colors">
                Salute
              </Link>
            </li>
            <li>
              <Link href="/sport" className="hover:text-white transition-colors">
                Sport
              </Link>
            </li>
            <li>
              <Link href="/varie" className="hover:text-white transition-colors">
                Varie
              </Link>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div className="mb-8">
          <h4 className="font-semibold text-sm mb-3">Link Utili</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>
              <Link href="/acquista" className="hover:text-white transition-colors">
                Acquista Carta
              </Link>
            </li>
            <li>
              <Link href="/contatti" className="hover:text-white transition-colors">
                Contatti
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="mb-8">
          <h4 className="font-semibold text-sm mb-3">Seguici</h4>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors text-sm font-semibold"
          >
            📱 Instagram
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-6">
          <p className="text-slate-400 text-xs text-center">
            &copy; {currentYear} {APP_TITLE}. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
