"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-brand-gray">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-50 bg-transparent">
        {/* Logo */}
        <Link href="/" aria-label="Home" onClick={closeMenu}>
          <Image
            src="/images/logo-tran.png"
            alt="House of Equity Logo"
            width={120}
            height={60}
            className="object-contain h-12 md:h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-foreground/80">
          <Link href="/#hero" className="hover:text-brand-emerald transition-colors">About</Link>
          <Link href="/teams" className="hover:text-brand-emerald transition-colors">Teams</Link>
          <Link href="/activities" className="hover:text-brand-emerald transition-colors">Activities</Link>
          <Link href="/blog" className="hover:text-brand-emerald transition-colors">Blog</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/donate"
            className="bg-[#F59E0B] text-white px-7 py-2.5 rounded-full font-medium hover:bg-amber-600 transition-colors shadow-sm"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-brand-green hover:bg-brand-gray rounded-full transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Stateful Animated Mobile Dropdown (Not full screen) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-md border-b border-brand-gray shadow-lg z-40 px-6 py-8 flex flex-col gap-6"
          >
            <nav className="flex flex-col gap-4 text-lg font-medium text-foreground/80">
              <Link 
                href="/#hero" 
                onClick={closeMenu}
                className="hover:text-brand-emerald py-2 border-b border-brand-gray/10 transition-colors"
              >
                About
              </Link>
              <Link 
                href="/teams" 
                onClick={closeMenu}
                className="hover:text-brand-emerald py-2 border-b border-brand-gray/10 transition-colors"
              >
                Teams
              </Link>
              <Link 
                href="/activities" 
                onClick={closeMenu}
                className="hover:text-brand-emerald py-2 border-b border-brand-gray/10 transition-colors"
              >
                Activities
              </Link>
              <Link 
                href="/blog" 
                onClick={closeMenu}
                className="hover:text-brand-emerald py-2 border-b border-brand-gray/10 transition-colors"
              >
                Blog
              </Link>
            </nav>

            <div className="flex gap-3 mt-2">
              <Link
                href="/donate"
                onClick={closeMenu}
                className="flex-1 text-center bg-[#F59E0B] text-white py-3 rounded-full font-semibold text-sm hover:bg-amber-600 transition-colors shadow-sm"
              >
                Donate
              </Link>
              <Link
                href="/volunteer"
                onClick={closeMenu}
                className="flex-1 text-center border-2 border-brand-emerald text-brand-green py-3 rounded-full font-semibold text-sm hover:bg-brand-emerald hover:text-white transition-all"
              >
                Volunteer
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
