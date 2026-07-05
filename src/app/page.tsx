import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CorePillars from "@/components/CorePillars";
import MissionVision from "@/components/MissionVision";
import FeaturedActivities from "@/components/FeaturedActivities";
import InteractiveMosaicHero from "@/components/InteractiveMosaicHero";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-kanit)]">
      
      {/* Scroll-Driven Mosaic Hero */}
      <InteractiveMosaicHero />

      {/* Core Pillars Section */}
      <CorePillars />

      {/* Mission and Vision Section */}
      <MissionVision />

      {/* Featured Activities Section */}
      <FeaturedActivities />
    </div>
  );
}
