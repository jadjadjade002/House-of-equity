import Link from "next/link";

export default function MissionVision() {
  return (
    <section className="w-full bg-transparent py-24 md:py-32 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-24 left-16 text-[#F59E0B] opacity-30 text-3xl pointer-events-none select-none">✨</div>
      <div className="absolute bottom-40 right-20 text-brand-emerald opacity-30 text-5xl pointer-events-none select-none">✨</div>
      <div className="absolute top-1/2 right-12 text-[#EF4444] opacity-20 text-3xl pointer-events-none select-none">❄</div>
      <div className="absolute bottom-20 left-20 text-brand-orange opacity-20 text-3xl pointer-events-none select-none">✳</div>

      <div className="max-w-7xl mx-auto px-6">

        {/* ── Our Mission ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mb-32 md:mb-48">
          <div className="order-2 md:order-1 flex flex-col items-start">
            <span className="text-[#F59E0B] font-bold tracking-wider uppercase text-sm mb-4">เกี่ยวกับเรา</span>
            <h2 className="text-5xl md:text-7xl font-serif text-[#1F2937] font-bold mb-6">Our Mission</h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-10 max-w-lg">
              เราเชื่อว่าความเท่าเทียมคือรากฐานของสังคมที่ดี House of Equity มุ่งสร้างพื้นที่ปลอดภัยให้เยาวชนได้แสดงออก เรียนรู้ และลงมือเปลี่ยนแปลงโลกรอบข้าง
            </p>
            <Link href="/about" className="bg-[#F59E0B] text-white px-8 py-3 rounded-full font-bold hover:bg-amber-600 transition-colors shadow-sm hover:shadow">
              เรียนรู้เพิ่มเติม
            </Link>
          </div>
          <div className="order-1 md:order-2 relative w-full">
            <div className="grid grid-cols-2 gap-3 h-[420px]">
              {/* Left column: two equal-height images */}
              <div className="flex flex-col gap-3 h-full">
                <div className="flex-1 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/gender_art_exhibition_1783175227598.jpg" alt="กิจกรรม 1" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/environmental_workshop_1783175249155.jpg" alt="กิจกรรม 2" className="w-full h-full object-cover" />
                </div>
              </div>
              {/* Right column: tall top + shorter bottom */}
              <div className="flex flex-col gap-3 h-full">
                <div className="rounded-2xl overflow-hidden shadow-lg" style={{ flex: "3" }}>
                  <img src="/images/youth_hackathon_1783175238231.jpg" alt="กิจกรรม 3" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg" style={{ flex: "2" }}>
                  <img src="/images/Screenshot 2026-07-04 225057.png" alt="กิจกรรม 4" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 -right-10 w-32 h-32 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,#F59E0B_2px,#F59E0B_4px)]"></div>
          </div>
        </div>

        {/* ── Our Vision ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center mb-32 md:mb-48">
          {/* Image collage */}
          <div className="grid grid-cols-2 gap-3 h-[420px]">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src="/images/gender_art_exhibition_1783175227598.jpg" alt="กิจกรรม 1" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-3 h-full">
              <div className="flex-1 rounded-2xl overflow-hidden shadow-lg">
                <img src="/images/environmental_workshop_1783175249155.jpg" alt="กิจกรรม 2" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden shadow-lg">
                <img src="/images/youth_hackathon_1783175238231.jpg" alt="กิจกรรม 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start pl-0 md:pl-10">
            <span className="text-[#F59E0B] font-bold tracking-wider uppercase text-sm mb-4">เราทำอะไร</span>
            <h2 className="text-5xl md:text-7xl font-serif text-[#1F2937] font-bold mb-6">Our Vision</h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-10 max-w-lg">
              เราวาดฝันถึงสังคมที่ทุกคนมีสิทธิ์เท่าเทียมกัน ไม่ว่าจะเป็นเพศ การศึกษา หรือสิ่งแวดล้อม เราทำงานร่วมกับเยาวชนและชุมชนเพื่อสร้างการเปลี่ยนแปลงที่ยั่งยืน
            </p>
            <a href="/activities" className="bg-[#F59E0B] text-white px-8 py-3 rounded-full font-bold hover:bg-amber-600 transition-colors shadow-sm hover:shadow">
              เรียนรู้เพิ่มเติม
            </a>
          </div>
        </div>

        {/* ── Our Journey (Timeline) ── */}
        <div>
          <div className="text-center mb-20">
            <span className="text-[#F59E0B] font-bold tracking-wider uppercase text-sm">เส้นทางของเรา</span>
            <h2 className="text-5xl md:text-7xl font-serif text-[#1F2937] font-bold mt-4">Our Journey</h2>
          </div>

          <div className="relative flex flex-col gap-20">
            {/* Vertical center line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#F59E0B] via-brand-emerald to-[#EF4444] opacity-20 hidden md:block"></div>

            {/* 2022 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
              <div className="md:text-right order-2 md:order-1">
                <span className="inline-block bg-[#F59E0B] text-white text-sm font-bold px-4 py-1 rounded-full mb-3">2022</span>
                <h3 className="text-2xl font-serif font-bold text-[#1F2937] mb-3">จุดเริ่มต้น</h3>
                <p className="text-foreground/70 leading-relaxed max-w-sm md:ml-auto">
                  House of Equity ก่อตั้งขึ้นโดยกลุ่มเยาวชนผู้มีความฝันอยากเห็นสังคมที่เป็นธรรม เราเริ่มต้นจากการรวมตัวในห้องเล็ก ๆ พร้อมความมุ่งมั่น
                </p>
              </div>
              <div className="order-1 md:order-2 flex md:justify-start justify-center">
                <div className="w-full max-w-xs aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/Screenshot 2026-07-04 224950.png" alt="จุดเริ่มต้น 2022" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* 2023 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
              <div className="flex md:justify-end justify-center">
                <div className="w-full max-w-xs aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/Screenshot 2026-07-04 225013.png" alt="ก้าวแรก 2023" className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <span className="inline-block bg-brand-emerald text-white text-sm font-bold px-4 py-1 rounded-full mb-3">2023</span>
                <h3 className="text-2xl font-serif font-bold text-[#1F2937] mb-3">ก้าวแรกสู่ชุมชน</h3>
                <p className="text-foreground/70 leading-relaxed max-w-sm">
                  เราจัดกิจกรรมแรกอย่างเป็นทางการ มีผู้เข้าร่วมกว่า 200 คน และได้รับการตอบรับอย่างอบอุ่นจากเยาวชนทั่วกรุงเทพฯ
                </p>
              </div>
            </div>

            {/* 2024 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
              <div className="md:text-right order-2 md:order-1">
                <span className="inline-block bg-[#EF4444] text-white text-sm font-bold px-4 py-1 rounded-full mb-3">2024</span>
                <h3 className="text-2xl font-serif font-bold text-[#1F2937] mb-3">ขยายผล</h3>
                <p className="text-foreground/70 leading-relaxed max-w-sm md:ml-auto">
                  โปรแกรมของเราขยายครอบคลุม 3 แขนงหลัก ความเท่าเทียมทางเพศ การศึกษา และสิ่งแวดล้อม พร้อมทีมงานที่เติบโตขึ้นเป็น 20 คน
                </p>
              </div>
              <div className="order-1 md:order-2 flex md:justify-start justify-center">
                <div className="w-full max-w-xs aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/Screenshot 2026-07-04 225057.png" alt="ขยายผล 2024" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* 2025 – present */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
              <div className="flex md:justify-end justify-center">
                <div className="w-full max-w-xs aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <img src="/images/Screenshot 2026-07-04 225127.png" alt="ปัจจุบัน" className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <span className="inline-block bg-[#1F2937] text-white text-sm font-bold px-4 py-1 rounded-full mb-3">2025 – ปัจจุบัน</span>
                <h3 className="text-2xl font-serif font-bold text-[#1F2937] mb-3">วันนี้และก้าวต่อไป</h3>
                <p className="text-foreground/70 leading-relaxed max-w-sm">
                  เราดำเนินกิจกรรมมากกว่า 20 โครงการต่อปี สร้างผลกระทบเชิงบวกให้กับเยาวชนกว่า 2,000 คน และยังคงเติบโตอยู่ทุกวัน
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
