import CorePillars from "@/components/CorePillars";
import MissionVision from "@/components/MissionVision";
import FeaturedActivities from "@/components/FeaturedActivities";
import InteractiveMosaicHero from "@/components/InteractiveMosaicHero";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-kanit)]">

      {/* 1. Mosaic Hero */}
      <section id="hero" className="relative">
        <InteractiveMosaicHero />
      </section>

      {/* 2. Core Pillars (3 แขนง) */}
      <CorePillars />

      {/* 3. Our Mission & Our Vision */}
      <MissionVision />

      {/* 4. Featured Activities */}
      <FeaturedActivities />

    </div>
  );
}
