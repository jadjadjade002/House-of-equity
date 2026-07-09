import Link from "next/link";

export default function BlogIndex() {
  const leadStory = {
    slug: "rethinking-gender-norms",
    title: "การทบทวนบรรทัดฐานทางเพศ: ทำไมเยาวชนไทยถึงเป็นผู้นำการเปลี่ยนแปลงในสังคมปัจจุบัน",
    summary: "เมื่อความคาดหวังของสังคมเปลี่ยนไป คนรุ่นใหม่ของไทยกำลังทลายบทบาทเพศดั้งเดิมและเรียกร้องความครอบคลุมอย่างสุดขีดในทุกภาคส่วน งานวิจัยภาคสนามล่าสุดของเราเผยให้เห็นแรงขับเคลื่อนเบื้องหลังการเคลื่อนไหวนี้",
    author: "พลอย ม.",
    date: "4 กรกฎาคม 2569",
    category: "Gender",
    image: "/images/gender_art_exhibition_1783175227598.jpg"
  };

  const topStories = [
    { slug: "policy-hackathons", title: "แฮกกาธอนกำลังกลายเป็นการประท้วงรูปแบบใหม่ในการขับเคลื่อนนโยบายได้อย่างไร", date: "2 กรกฎาคม 2569" },
    { slug: "trash-hunter", title: "เจาะลึกเบื้องหลังขบวนการ 'นักล่าขยะ' ที่ร่วมเปลี่ยนสวนลุมพินีให้สะอาดน่าอยู่", date: "28 มิถุนายน 2569" },
    { slug: "education-inequity", title: "วิกฤตเงียบ: ปัญหาความเหลื่อมล้ำทางการศึกษาในพื้นที่ชนบทที่ยังรอการแก้ไข", date: "25 มิถุนายน 2569" }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-transparent text-brand-green pt-32 pb-24 font-[family-name:var(--font-kanit)]">
      
      {/* Editorial Hero Header matching Teams style */}
      <section className="px-6 md:px-16 max-w-[1400px] mx-auto w-full mb-20">
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-medium tracking-tighter leading-none mb-12 uppercase">
          PERSPECTIVES
        </h1>
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24 border-t border-brand-green/20 pt-8">
          <p className="text-lg md:text-xl font-light leading-relaxed max-w-xl">
            ข่าวสาร บทความวิเคราะห์ และเรื่องราวการรณรงค์เพื่อความเท่าเทียมและสิทธิมนุษยชนจากมุมมองของคนรุ่นใหม่ที่ขับเคลื่อนจริงในพื้นที่
          </p>
          <p className="text-lg md:text-xl font-light leading-relaxed max-w-xl text-brand-green/70">
            เราเชื่อว่าการแบ่งปันความรู้ ความเป็นจริง และการวิเคราะห์อย่างตรงไปตรงมา คือจุดเริ่มต้นสำคัญในการทลายกำแพงความเหลื่อมล้ำและสร้างทัศนคติใหม่
          </p>
        </div>
      </section>

      {/* Main Content Layout with thin borders */}
      <section className="px-6 md:px-16 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 border-t border-brand-green/20 pt-16">
          
          {/* Left Column: Lead Story (65% width) */}
          <div className="lg:w-[65%] flex flex-col gap-6">
            <Link href={`/blog/${leadStory.slug}`} className="group cursor-pointer block">
              <div className="w-full aspect-[16/9] bg-brand-gray/20 mb-8 overflow-hidden relative">
                <img 
                  src={leadStory.image} 
                  alt={leadStory.title} 
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.02]" 
                />
              </div>
              <div className="flex gap-4 items-center text-sm font-medium uppercase tracking-wider mb-4 text-brand-green/60">
                <span>{leadStory.category}</span>
                <span>•</span>
                <span>{leadStory.date}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 leading-tight group-hover:underline transition-all">
                {leadStory.title}
              </h2>
              <p className="text-lg md:text-xl font-light leading-relaxed text-brand-green/80 mb-6">
                {leadStory.summary}
              </p>
              <div className="text-sm font-medium">โดย {leadStory.author}</div>
            </Link>
          </div>

          {/* Right Column: Sidebar (35% width) with thin dividing borders */}
          <div className="lg:w-[35%] flex flex-col gap-12 lg:border-l border-brand-green/20 lg:pl-16">
            <div>
              <h3 className="text-2xl font-medium tracking-tight uppercase mb-8 pb-4 border-b border-brand-green/20">
                บทความยอดนิยม
              </h3>
              <div className="flex flex-col divide-y divide-brand-green/10">
                {topStories.map((story, i) => (
                  <Link href={`/blog/${story.slug}`} key={i} className="py-6 group block">
                    <h4 className="text-xl font-medium leading-snug mb-3 group-hover:underline">
                      {story.title}
                    </h4>
                    <p className="text-xs font-light text-brand-green/60 tracking-wider uppercase">
                      {story.date}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter form customized to match Team layout: thin borders, clean input */}
            <div className="border border-brand-green/20 p-8 rounded-2xl bg-white/40 backdrop-blur-sm">
              <h4 className="text-xl font-medium uppercase tracking-wider mb-4">ติดตามข่าวสาร</h4>
              <p className="font-light text-sm text-brand-green/80 mb-6 leading-relaxed">
                รับบทความวิเคราะห์เจาะลึกและรายงานความเคลื่อนไหวด้านสิทธิมนุษยชนจากเราส่งตรงถึงอีเมลของคุณ
              </p>
              <form className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="อีเมลของคุณ" 
                  className="w-full bg-transparent border-b border-brand-green/45 py-3 text-sm focus:outline-none focus:border-brand-emerald text-brand-green placeholder:text-brand-green/40 transition-colors" 
                  required
                />
                <button 
                  type="submit" 
                  className="w-full mt-4 py-3 rounded-full border border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-medium text-sm tracking-wide uppercase transition-all duration-300"
                >
                  สมัครรับข่าวสาร
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
      
    </main>
  );
}
