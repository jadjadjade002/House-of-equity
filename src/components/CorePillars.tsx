import { Users, GraduationCap, Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";

const IMAGE_SOURCES = [
  "/images/Screenshot 2026-07-04 225057.png",
  "/images/Screenshot 2026-07-04 225036.png",
  "/images/Screenshot 2026-07-04 224936.png"
];

const IMAGE_OPACITIES = [0.3, 0.3, 0.3];

const PILLARS = [
  {
    title: "ความเท่าเทียมทางเพศ",
    icon: Users,
    color: "bg-brand-emerald",
    href: "/teams#gender"
  },
  {
    title: "ความเท่าเทียมทางการศึกษา",
    icon: GraduationCap,
    color: "bg-[#F59E0B]",
    href: "/teams#education"
  },
  {
    title: "ความยุติธรรมด้านสิ่งแวดล้อม",
    icon: Leaf,
    color: "bg-[#EF4444]",
    href: "/teams#environment"
  }
];

export default function CorePillars() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3 relative z-10 shadow-2xl">
      {PILLARS.map((pillar, index) => (
        <div
          key={index}
          className={`relative ${pillar.color} w-full px-10 py-12 md:py-20 flex flex-col justify-between group transition-all duration-300 hover:brightness-110 min-h-[200px] md:min-h-[350px] shadow-md`}
        >
          <img
            src={IMAGE_SOURCES[index]}
            alt={pillar.title}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{
              WebkitMaskImage: `linear-gradient(to bottom right, rgba(0,0,0,0), rgba(0,0,0,${IMAGE_OPACITIES[index]}))`,
              maskImage: `linear-gradient(to bottom right, rgba(0,0,0,0), rgba(0,0,0,${IMAGE_OPACITIES[index]}))`
            }}
          />

          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <pillar.icon className="w-12 h-12 text-white/90 mb-6" strokeWidth={1.5} />
              <h3 className="text-3xl md:text-4xl font-serif text-white mb-4 pr-4 leading-tight">{pillar.title}</h3>
            </div>
            <div className="mt-8">
              <Link
                href={pillar.href}
                className="inline-flex items-center text-white/90 font-bold text-sm tracking-widest uppercase group-hover:text-white transition-colors"
              >
                อ่านต่อ <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
