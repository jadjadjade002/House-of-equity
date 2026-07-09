import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-green text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Join Our Community</h3>
            <p className="text-white/80 font-light text-lg">
              Subscribe to get updates on monthly workshops, volunteer opportunities, and our latest projects.
            </p>
          </div>
          <form className="w-full max-w-md flex relative">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full bg-white/10 border border-white/20 rounded-full py-4 pl-6 pr-16 text-white placeholder:text-white/50 focus:outline-none focus:border-brand-emerald focus:bg-white/15 transition-all"
              required
            />
            <button type="submit" className="absolute right-2 top-2 bottom-2 bg-brand-emerald aspect-square rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors shadow-sm">
              <ArrowRight size={20} />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1 flex flex-col gap-6">
          <Link href="/" className="text-4xl font-bold tracking-tight">HEq.</Link>
          <p className="text-white/70 font-light leading-relaxed">
            A youth-led organization empowering young people to create a more equal society in Thailand.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-emerald hover:-translate-y-1 transition-all"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-emerald hover:-translate-y-1 transition-all"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-emerald hover:-translate-y-1 transition-all"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-6 tracking-wide">Explore</h4>
          <ul className="flex flex-col gap-4 text-white/70 font-light">
            <li><Link href="/about" className="hover:text-brand-emerald hover:translate-x-1 inline-block transition-all">About HEq</Link></li>
            <li><Link href="/teams" className="hover:text-brand-emerald hover:translate-x-1 inline-block transition-all">Our Teams</Link></li>
            <li><Link href="/activities" className="hover:text-brand-emerald hover:translate-x-1 inline-block transition-all">Activities</Link></li>
            <li><Link href="/blog" className="hover:text-brand-emerald hover:translate-x-1 inline-block transition-all">Blog & News</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-6 tracking-wide">Get Involved</h4>
          <ul className="flex flex-col gap-4 text-white/70 font-light">
            <li><Link href="/donate" className="hover:text-brand-emerald hover:translate-x-1 inline-block transition-all">Donate</Link></li>
            <li><Link href="/careers" className="hover:text-brand-emerald hover:translate-x-1 inline-block transition-all">Careers</Link></li>
            <li><Link href="/careers" className="hover:text-brand-emerald hover:translate-x-1 inline-block transition-all">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-6 tracking-wide">Contact</h4>
          <ul className="flex flex-col gap-4 text-white/70 font-light">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-brand-emerald" />
              <a href="mailto:hello@houseofequity.org" className="hover:text-brand-emerald transition-colors">hello@heq.org</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50 font-light">
          <p>© {new Date().getFullYear()} House of Equity (HEq). All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-default">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-default">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
