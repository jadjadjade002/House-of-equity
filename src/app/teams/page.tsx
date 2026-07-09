"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TeamsPage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      // Calculate max scroll width: total scrollable width - visible width
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Ploy",
      role: "Lead Coordinator",
      motto: "\"Equality is not a privilege, it's a fundamental right.\"",
      image: "/images/Screenshot 2026-07-04 225018.png"
    },
    {
      id: 2,
      name: "Karn",
      role: "Campaign Strategist",
      motto: "\"True impact begins when we listen to marginalized voices.\"",
      image: "/images/Screenshot 2026-07-04 225023.png"
    },
    {
      id: 3,
      name: "Nicha",
      role: "Community Manager",
      motto: "\"Empowering youth is the key to sustainable change.\"",
      image: "/images/Screenshot 2026-07-04 225041.png"
    },
    {
      id: 4,
      name: "Win",
      role: "Education Advocate",
      motto: "\"Education is the most powerful weapon to change the world.\"",
      image: "/images/Screenshot 2026-07-04 225104.png"
    },
    {
      id: 5,
      name: "Fah",
      role: "Sustainability Lead",
      motto: "\"A green future starts with mindful actions today.\"",
      image: "/images/Screenshot 2026-07-04 225115.png"
    }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-brand-beige text-brand-green pt-32 pb-24 font-[family-name:var(--font-kanit)]">
      
      {/* Hero Section */}
      <section className="px-6 md:px-16 max-w-[1400px] mx-auto w-full mb-20">
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-medium tracking-tighter leading-none mb-12">
          MEET OUR TEAM
        </h1>
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24 border-t border-brand-green/20 pt-8">
          <p className="text-lg md:text-xl font-light leading-relaxed max-w-xl">
            At House of Equity, passion, dedication, and youth leadership shape every initiative. Guided by a shared vision for a fairer society, we create impactful programs that elevate everyday lives with purpose and compassion.
          </p>
          <p className="text-lg md:text-xl font-light leading-relaxed max-w-xl">
            Advocacy is a way of life where purpose, feeling, and determination come together to shape meaningful environments. We are the driving force behind the change we wish to see.
          </p>
        </div>
      </section>

      {/* Group Photo */}
      <section className="w-full h-[60vh] md:h-[80vh] relative mb-24">
        <img 
          src="/images/Screenshot 2026-07-04 225200.png" 
          alt="House of Equity Team"
          className="w-full h-full object-cover object-center"
        />
      </section>

      {/* Vision & Mission */}
      <section className="px-6 md:px-16 max-w-[1400px] mx-auto w-full mb-40">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-medium italic tracking-tight uppercase">Inside House of Equity</h2>
          </div>
          <div className="lg:w-2/3 flex flex-col gap-12">
            <p className="text-2xl md:text-3xl font-light leading-snug mb-8">
              Discover a new way of driving impact with our youth-led initiatives. Rooted in inclusivity, our work combines timeless advocacy, modern strategies, and mindful innovation, shaping spaces that feel safe and empowering.
            </p>
            
            <div className="flex flex-col gap-8 border-t border-brand-green/20 pt-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-16">
                <div className="md:w-1/4 flex gap-4 text-xl font-medium">
                  <span className="text-brand-green/40">01</span>
                  Our Vision
                </div>
                <div className="md:w-3/4 text-lg font-light leading-relaxed">
                  We see equality as more than a goal—it's a way of living with intention, empathy, and connection. We bring this vision to life through timeless, refined initiatives that blend advocacy with community engagement to elevate everyday spaces.
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-16 border-t border-brand-green/10 pt-8">
                <div className="md:w-1/4 flex gap-4 text-xl font-medium">
                  <span className="text-brand-green/40">02</span>
                  Our Mission
                </div>
                <div className="md:w-3/4 text-lg font-light leading-relaxed">
                  We are dedicated to crafting a society that blends systemic reform with human-centered advocacy. Through innovation, education, and thoughtful action, we shape environments that are safe, inclusive, and designed to connect people across all backgrounds.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Horizontal Scroll */}
      <section className="w-full overflow-hidden mb-24">
        <div className="px-6 md:px-16 max-w-[1400px] mx-auto w-full mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight uppercase max-w-xl leading-none">
            THE YOUTH <span className="italic font-light">BEHIND THE VISION</span>
          </h2>
          <p className="text-lg md:text-xl font-light leading-relaxed max-w-md">
            Each member of our team brings a unique perspective, bound by a shared passion for thoughtful advocacy and timeless equality.
          </p>
        </div>

        {/* Scrolling Container with Framer Motion */}
        <div className="w-full px-6 md:px-16 pb-12 cursor-grab active:cursor-grabbing">
          <motion.div ref={carouselRef} className="overflow-hidden">
            <motion.div 
              drag="x" 
              dragConstraints={{ right: 0, left: -width }} 
              whileTap={{ cursor: "grabbing" }}
              className="flex gap-8 w-max"
            >
              {teamMembers.map((member) => (
                <motion.div key={member.id} className="w-[300px] md:w-[400px] flex flex-col group min-w-[300px] md:min-w-[400px]">
                  <div className="w-full aspect-[4/5] bg-brand-gray/20 mb-6 overflow-hidden relative pointer-events-none">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex justify-between items-end border-b border-brand-green/20 pb-4 mb-4">
                    <h3 className="text-2xl font-medium">{member.name}</h3>
                    <span className="text-sm font-light text-brand-green/60 uppercase tracking-wider text-right max-w-[50%]">{member.role}</span>
                  </div>
                  <p className="text-base font-light italic text-brand-green/80">
                    {member.motto}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
