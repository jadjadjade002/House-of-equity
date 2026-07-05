import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-brand-gray">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Home"><img src="/images/logo-tran.png" alt="Home" className="h-10 w-auto sm:h-12 filter drop-shadow" /></Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-foreground/80">
          <Link href="/about" className="hover:text-brand-emerald transition-colors">About</Link>
          <Link href="/teams" className="hover:text-brand-emerald transition-colors">Teams</Link>
          <Link href="/activities" className="hover:text-brand-emerald transition-colors">Activities</Link>
          <Link href="/blog" className="hover:text-brand-emerald transition-colors">Blog</Link>
        </nav>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:flex bg-brand-emerald text-white px-7 py-2.5 rounded-full font-medium hover:bg-emerald-600 transition-colors shadow-sm">
            Volunteer
          </Link>
          <button className="md:hidden text-brand-green p-2 hover:bg-brand-gray rounded-full transition-colors">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
