"use client";
import { useRef, useMemo, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

// 31 Screenshots provided by the user in public/images
const RAW_IMAGES = [
  "/images/Screenshot 2026-07-04 224847.png",
  "/images/Screenshot 2026-07-04 224850.png",
  "/images/Screenshot 2026-07-04 224853.png",
  "/images/Screenshot 2026-07-04 224857.png",
  "/images/Screenshot 2026-07-04 224900.png",
  "/images/Screenshot 2026-07-04 224913.png",
  "/images/Screenshot 2026-07-04 224918.png",
  "/images/Screenshot 2026-07-04 224922.png",
  "/images/Screenshot 2026-07-04 224930.png",
  "/images/Screenshot 2026-07-04 224936.png",
  "/images/Screenshot 2026-07-04 224950.png",
  "/images/Screenshot 2026-07-04 224956.png",
  "/images/Screenshot 2026-07-04 225002.png",
  "/images/Screenshot 2026-07-04 225013.png",
  "/images/Screenshot 2026-07-04 225018.png",
  "/images/Screenshot 2026-07-04 225023.png",
  "/images/Screenshot 2026-07-04 225029.png",
  "/images/Screenshot 2026-07-04 225036.png",
  "/images/Screenshot 2026-07-04 225041.png",
  "/images/Screenshot 2026-07-04 225049.png",
  "/images/Screenshot 2026-07-04 225057.png",
  "/images/Screenshot 2026-07-04 225104.png",
  "/images/Screenshot 2026-07-04 225115.png",
  "/images/Screenshot 2026-07-04 225118.png",
  "/images/Screenshot 2026-07-04 225121.png",
  "/images/Screenshot 2026-07-04 225127.png",
  "/images/Screenshot 2026-07-04 225131.png",
  "/images/Screenshot 2026-07-04 225133.png",
  "/images/Screenshot 2026-07-04 225138.png",
  "/images/Screenshot 2026-07-04 225152.png",
  "/images/Screenshot 2026-07-04 225200.png",
];


function getShuffledGrid() {
  const expanded = [];
  // 25 columns * 12 rows = 300 items
  for (let i = 0; i < 800; i++) {
    expanded.push(RAW_IMAGES[i % RAW_IMAGES.length]);
  }

  // Shuffle array thoroughly
  for (let i = expanded.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [expanded[i], expanded[j]] = [expanded[j], expanded[i]];
  }

  // Assign Sliding (Accordion) parameters
  return expanded.map((src, idx) => {
    const col = idx % 32;
    const row = Math.floor(idx / 32);

    // Grid center is approx col 16, row 12
    const distX = col - 16;
    const distY = row - 12;

    // Push them outwards based on distance. 
    const scatterMultiplierX = 150 + Math.random() * 50;
    const scatterMultiplierY = 150 + Math.random() * 50;

    let initialX = distX * scatterMultiplierX;
    let initialY = distY * scatterMultiplierY;

    // Enforce strictly straight lines (no diagonal movement)
    // We only keep the offset for the dominant axis.
    if (Math.abs(distX) > Math.abs(distY)) {
      initialY = 0; // Move only horizontally
    } else {
      initialX = 0; // Move only vertically
    }

    const finishThreshold = 0.5 + Math.random() * 0.25;

    return { src, initialX, initialY, finishThreshold };
  });
}

function GridItem({ src, initialX, initialY, finishThreshold, progress }: { src: string, initialX: number, initialY: number, finishThreshold: number, progress: MotionValue<number> }) {
  // Tiles are placed directly in the grid (no initial scatter)
  const x = useTransform(progress, [0, 1], [0, 0]);
  const y = useTransform(progress, [0, 1], [0, 0]);

  return (
    <motion.div
      style={{ x, y }}
      className="group relative w-full aspect-square overflow-hidden cursor-pointer bg-brand-gray/20"
    >
      <img
        src={src}
        alt="Mosaic tile"
        className="w-full h-full object-cover object-center transition-all duration-300"
      />
    </motion.div>
  );
}

export default function InteractiveMosaicHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);

  // Update isMobile on resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind sm breakpoint
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Start zoomed in (scale 3.0), and as you scroll down, it zooms OUT to scale 0.38.
  const scale = useTransform(scrollYProgress, [0, 1], [1.0, 0.38]);

  // Hydration fix
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const gridData = useMemo(() => {
    if (!isMounted) return [];
    return getShuffledGrid();
  }, [isMounted]);

  if (!isMounted) {
    return <div ref={containerRef} className="h-[600vh] relative bg-white"><div className="sticky top-0 h-screen w-full bg-brand-beige" /></div>;
  }

  return (
    <div ref={containerRef} className="h-[600vh] relative bg-white z-0">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-brand-beige">

        {/* Central Logo / Text */}
        <motion.div
          className="absolute z-10 flex flex-col items-center text-center pointer-events-none drop-shadow-2xl"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-2 tracking-wide drop-shadow-[0_6px_15px_rgba(0,0,0,0.85)]">Better Living.</h1>
          <p className="text-2xl md:text-3xl text-white/90 font-medium tracking-widest uppercase drop-shadow-[0_4px_10px_rgba(0,0,0,0.85)]">Together, we build equality.</p>
        </motion.div>

        {/* The Mosaic Grid */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center grid gap-0 p-0"
          style={{
            scale,
            // Responsive column count: 12 cols on mobile, 32 on larger screens
            gridTemplateColumns: isMobile ? 'repeat(12, minmax(0, 1fr))' : 'repeat(32, minmax(0, 1fr))',
            // Adjust container size for mobile to avoid huge overflow
            width: isMobile ? '700vw' : '600vw',
            height: isMobile ? '700vh' : '600vh'
          }}
        >
          {gridData.map((item, idx) => {
            return (
              <GridItem
                key={idx}
                src={item.src}
                initialX={item.initialX}
                initialY={item.initialY}
                finishThreshold={item.finishThreshold}
                progress={scrollYProgress}
              />
            );
          })}
        </motion.div>

      </div>
    </div>
  );
}
