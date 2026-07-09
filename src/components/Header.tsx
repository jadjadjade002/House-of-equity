import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-brand-gray">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Home">
          <Image
            src="/images/logo-tran.png"
            alt="House of Equity Logo"
            width={120}
            height={60}
            className="object-contain h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="flex items-center gap-8 font-medium text-foreground/80">
          <Link href="/#hero" className="hover:text-brand-emerald transition-colors">About</Link>
          <Link href="/teams" className="hover:text-brand-emerald transition-colors">Teams</Link>
          <Link href="/activities" className="hover:text-brand-emerald transition-colors">Activities</Link>
          <Link href="/blog" className="hover:text-brand-emerald transition-colors">Blog</Link>
        </nav>


        {/* CTA */}
        <Link
          href="/donate"
          className="bg-[#F59E0B] text-white px-7 py-2.5 rounded-full font-medium hover:bg-amber-600 transition-colors shadow-sm"
        >
          Donate
        </Link>
      </div>
    </header>
  );
}

