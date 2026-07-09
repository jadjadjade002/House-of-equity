import { MapPin, Clock, ArrowRight, Mail } from "lucide-react";

const VALUES = [
  {
    emoji: "⚖️",
    title: "ความเท่าเทียม",
    description: "เราเชื่อว่าทุกคนมีคุณค่าเท่ากัน และร่วมสร้างพื้นที่ที่ทุกเสียงได้รับการรับฟัง",
    color: "from-amber-50 to-yellow-50",
    border: "border-amber-200",
    accent: "text-amber-600",
  },
  {
    emoji: "🌱",
    title: "การเติบโต",
    description: "เราลงทุนในการพัฒนาทีมงานทุกคน เพื่อให้คุณเติบโตทั้งด้านอาชีพและด้านส่วนตัว",
    color: "from-emerald-50 to-green-50",
    border: "border-emerald-200",
    accent: "text-emerald-600",
  },
  {
    emoji: "🤝",
    title: "ความร่วมมือ",
    description: "เราทำงานร่วมกันข้ามสาขา ฟังความเห็นหลากหลาย และตัดสินใจร่วมกัน",
    color: "from-blue-50 to-indigo-50",
    border: "border-blue-200",
    accent: "text-blue-600",
  },
  {
    emoji: "🌍",
    title: "ความยั่งยืน",
    description: "ทุกโครงการที่เราทำมุ่งสร้างผลกระทบที่ยั่งยืนต่อสังคมและสิ่งแวดล้อม",
    color: "from-orange-50 to-amber-50",
    border: "border-orange-200",
    accent: "text-orange-600",
  },
];

const POSITIONS = [
  {
    title: "ผู้ประสานงานโครงการ",
    subtitle: "Project Coordinator",
    type: "เต็มเวลา",
    location: "กรุงเทพฯ",
    description:
      "ดูแลและประสานงานโครงการชุมชนหลายโครงการพร้อมกัน วางแผนกิจกรรม และรายงานผลการดำเนินงานต่อผู้บริหาร",
    tags: ["การจัดการโครงการ", "ประสานงาน", "ชุมชน"],
    color: "border-emerald-300 hover:border-emerald-500",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "นักออกแบบ UX/UI",
    subtitle: "UX/UI Designer",
    type: "เต็มเวลา",
    location: "Remote",
    description:
      "ออกแบบประสบการณ์ผู้ใช้ที่สวยงามและเข้าถึงง่ายสำหรับแพลตฟอร์มดิจิทัลของเรา โดยยึดหลักการออกแบบที่ครอบคลุม",
    tags: ["Figma", "UX Research", "Prototyping"],
    color: "border-purple-300 hover:border-purple-500",
    badge: "bg-purple-100 text-purple-700",
  },
  {
    title: "ผู้จัดการชุมชน",
    subtitle: "Community Manager",
    type: "ครึ่งเวลา",
    location: "กรุงเทพฯ",
    description:
      "สร้างและดูแลชุมชนออนไลน์และออฟไลน์ จัดกิจกรรมสร้างความสัมพันธ์ระหว่างสมาชิก และพัฒนากลยุทธ์การมีส่วนร่วม",
    tags: ["Social Media", "Event Planning", "Communication"],
    color: "border-amber-300 hover:border-amber-500",
    badge: "bg-amber-100 text-amber-700",
  },
  {
    title: "นักสื่อสารองค์กร",
    subtitle: "Communications Officer",
    type: "เต็มเวลา",
    location: "กรุงเทพฯ",
    description:
      "พัฒนาและดูแลกลยุทธ์การสื่อสารขององค์กร เขียนข่าวสาร บทความ และสื่อสารกับสาธารณชนและสื่อมวลชน",
    tags: ["Content Writing", "PR", "Media Relations"],
    color: "border-blue-300 hover:border-blue-500",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    title: "ผู้ประสานงานอาสาสมัคร",
    subtitle: "Volunteer Coordinator",
    type: "ครึ่งเวลา",
    location: "กรุงเทพฯ",
    description:
      "สรรหา ฝึกอบรม และดูแลเครือข่ายอาสาสมัครทั่วกรุงเทพฯ พัฒนาโปรแกรมอาสาสมัครที่มีความหมายและผลกระทบสูง",
    tags: ["Volunteer Management", "Training", "Networking"],
    color: "border-orange-300 hover:border-orange-500",
    badge: "bg-orange-100 text-orange-700",
  },
];

export default function CareersPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FDFBF7] pt-20">
      {/* ── Hero ── */}
      <section className="relative w-full overflow-hidden py-28 px-6 bg-[#064E3B]">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#10B981]/10 -translate-y-1/2 translate-x-1/4 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#F59E0B]/10 translate-y-1/2 -translate-x-1/4 blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <span className="inline-block bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/30 rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wider mb-8">
            ร่วมงานกับเรา
          </span>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
            ร่วมงานกับเรา<br />
            <span className="text-[#10B981]">สร้างสังคม</span>ที่ดีกว่า
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-2xl">
            เข้าร่วมทีมที่ขับเคลื่อนด้วยพันธกิจ ทำงานที่มีความหมาย และสร้างผลกระทบที่แท้จริงต่อชุมชนไทย
          </p>

          <div className="flex flex-wrap gap-6 mt-12">
            {[
              { label: "5 ตำแหน่งที่เปิดรับ", icon: "🎯" },
              { label: "ทำงานแบบ Hybrid", icon: "💻" },
              { label: "ค่าตอบแทนที่แข่งขันได้", icon: "💚" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 bg-white/10 rounded-full px-5 py-2.5 text-white text-sm font-medium">
                <span>{b.icon}</span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="w-full py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#F59E0B] font-bold tracking-wider uppercase text-sm">สิ่งที่เราเชื่อ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#064E3B] mt-3">ค่านิยมของเรา</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className={`p-8 rounded-3xl border-2 bg-gradient-to-b ${v.color} ${v.border} hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="text-4xl mb-5">{v.emoji}</div>
                <h3 className={`text-xl font-bold mb-3 ${v.accent}`}>{v.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions ── */}
      <section className="w-full py-24 px-6 bg-[#FDFBF7]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#F59E0B] font-bold tracking-wider uppercase text-sm">เปิดรับสมัคร</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#064E3B] mt-3">ตำแหน่งงานที่เปิดรับ</h2>
          </div>

          <div className="flex flex-col gap-5">
            {POSITIONS.map((pos) => (
              <div
                key={pos.title}
                className={`group bg-white rounded-3xl border-2 p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 ${pos.color}`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-[#064E3B]">{pos.title}</h3>
                      <span className="text-base text-gray-400 font-medium">— {pos.subtitle}</span>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-4 text-sm font-semibold">
                      <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full ${pos.badge}`}>
                        <Clock size={13} />
                        {pos.type}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                        <MapPin size={13} />
                        {pos.location}
                      </span>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-5">{pos.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {pos.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex-shrink-0 self-center">
                    <a
                      href={`mailto:careers@houseofequity.org?subject=สมัครตำแหน่ง: ${pos.title}`}
                      className="flex items-center gap-2 bg-[#064E3B] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#10B981] transition-colors duration-200 whitespace-nowrap"
                    >
                      สมัครตำแหน่งนี้
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-gradient-to-br from-[#064E3B] to-[#10B981] rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">ไม่เห็นตำแหน่งที่ใช่?</h3>
            <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
              ส่ง CV มาหาเราได้เลย เรายินดีรับฟังผู้ที่มีความมุ่งมั่นในทุกสาขา
            </p>
            <a
              href="mailto:careers@houseofequity.org?subject=ส่ง CV - สมัครทั่วไป"
              className="inline-flex items-center gap-3 bg-[#F59E0B] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-500 transition-colors shadow-lg hover:shadow-xl"
            >
              <Mail size={20} />
              ส่ง CV มาที่เรา
            </a>
            <p className="mt-4 text-white/50 text-sm">careers@houseofequity.org</p>
          </div>
        </div>
      </section>
    </main>
  );
}
