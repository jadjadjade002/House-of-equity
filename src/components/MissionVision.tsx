import Link from "next/link";

export default function MissionVision() {
  return (
    <section className="w-full bg-white py-24 md:py-32 overflow-hidden relative">
      {/* Decorative background elements (matching reference stars/dots) */}
      <div className="absolute top-24 left-16 text-[#F59E0B] opacity-30 text-3xl pointer-events-none select-none">✨</div>
      <div className="absolute bottom-40 right-20 text-brand-emerald opacity-30 text-5xl pointer-events-none select-none">✨</div>
      <div className="absolute top-1/2 right-12 text-[#EF4444] opacity-20 text-3xl pointer-events-none select-none">❄</div>
      <div className="absolute bottom-20 left-20 text-brand-orange opacity-20 text-3xl pointer-events-none select-none">✳</div>
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Mission Section (Text Left, Image Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mb-32 md:mb-48">
          <div className="order-2 md:order-1 flex flex-col items-start">
            <span className="text-[#F59E0B] font-bold tracking-wider uppercase text-sm mb-4">เกี่ยวกับเรา</span>
            <h2 className="text-5xl md:text-7xl font-serif text-[#1F2937] font-bold mb-6">Our Mission</h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-10 max-w-lg">
              Choose your training and register for free. If you are a freelancer, the courses are entirely taken care of, you have nothing to pay and no money to advance.
            </p>
            <Link href="/about" className="bg-[#F59E0B] text-white px-8 py-3 rounded-full font-bold hover:bg-amber-600 transition-colors shadow-sm hover:shadow">
              LEARN MORE
            </Link>
          </div>
          <div className="order-1 md:order-2 relative w-full flex justify-end">
            <div className="relative w-[90%] md:w-[85%] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/youth_hackathon_1783175238231.jpg" 
                alt="Our Mission in action" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Diagonal line decoration matching reference */}
            <div className="absolute -z-10 top-1/2 -right-10 w-32 h-32 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#F59E0B_2px,#F59E0B_4px)]"></div>
          </div>
        </div>

        {/* Vision Section (Image Collage Left, Text Right) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Creative 3-image collage - desktop absolute layout */}
          <div className="relative w-full aspect-square md:aspect-[4/3] hidden md:block">
            {/* Top Left / Main Background Image */}
            <div className="absolute top-0 left-0 w-[65%] h-[80%] rounded-tl-[3rem] rounded-bl-[3rem] rounded-tr-[3rem] rounded-br-[1rem] overflow-hidden shadow-xl z-10">
              <img 
                  src="/images/Screenshot 2026-07-04 225057.png" 
                  className="w-full h-full object-cover" 
                  alt="Vision 1" 
                />
            </div>
            
            {/* Top Right smaller image */}
            <div className="absolute top-0 right-[5%] w-[35%] h-[45%] rounded-[1.5rem] overflow-hidden shadow-lg z-20">
                <img src="/images/Screenshot 2026-07-04 225036.png" className="w-full h-full object-cover" alt="Vision 2" />
            </div>
            
            {/* Bottom Right image */}
            <div className="absolute bottom-[10%] right-[10%] w-[45%] h-[40%] rounded-bl-[1rem] rounded-br-[3rem] rounded-tl-[1rem] rounded-tr-[1rem] overflow-hidden shadow-2xl z-30">
                <img src="/images/Screenshot 2026-07-04 224936.png" className="w-full h-full object-cover" alt="Vision 3" />
            </div>
            
             {/* Radial line decoration */}
             <div className="absolute -z-10 top-0 -left-10 w-32 h-32 opacity-20 bg-[repeating-radial-gradient(circle_at_bottom_right,transparent,transparent_4px,#F59E0B_5px,#F59E0B_6px)]"></div>
          </div>
          
          {/* Mobile stacked collage */}
          <div className="flex flex-col md:hidden space-y-4">
            <img src="/images/Screenshot 2026-07-04 225057.png" className="w-full h-auto object-cover rounded-tl-[3rem] rounded-bl-[3rem] rounded-tr-[3rem]" alt="Vision 1" />
            <img src="/images/Screenshot 2026-07-04 225036.png" className="w-full h-auto object-cover rounded-[1.5rem]" alt="Vision 2" />
            <img src="/images/Screenshot 2026-07-04 224936.png" className="w-full h-auto object-cover rounded-bl-[1rem] rounded-br-[3rem] rounded-tl-[1rem] rounded-tr-[1rem]" alt="Vision 3" />
          </div>

          <div className="flex flex-col items-start pl-0 md:pl-10">
            <span className="text-[#F59E0B] font-bold tracking-wider uppercase text-sm mb-4">What We Do</span>
            <h2 className="text-5xl md:text-7xl font-serif text-[#1F2937] font-bold mb-6">Our Vision</h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-10 max-w-lg">
              Choose your training and register for free. If you are a freelancer, the courses are entirely taken care of, you have nothing to pay and no money to advance.
            </p>
            <Link href="/activities" className="bg-[#F59E0B] text-white px-8 py-3 rounded-full font-bold hover:bg-amber-600 transition-colors shadow-sm hover:shadow">
              LEARN MORE
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
