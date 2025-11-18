import { Link } from "wouter";
import { APP_LOGO, APP_TITLE } from "@/const";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          {APP_LOGO && (
            <img 
              src={APP_LOGO} 
              alt={APP_TITLE}
              className="h-10 w-10 object-contain"
            />
          )}
          <span className="font-bold text-xl text-primary hidden sm:inline">
            {APP_TITLE}
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}
