"use client";
import { useState } from "react";
import { Heart, Zap, Users, Leaf, Star, CheckCircle, ArrowUpRight, Smile } from "lucide-react";

const DONATION_AMOUNTS = [100, 300, 500, 1000, 5000];


export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(500);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const effectiveAmount = customAmount
    ? parseInt(customAmount) || 0
    : selectedAmount ?? 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !effectiveAmount) return;
    setSubmitted(true);
  };

  return (
    <main className="flex flex-col min-h-screen bg-[#FDFBF7] pt-20">
      {/* ── Hero matching reference ── */}
      <section className="relative w-full py-20 px-6 text-center bg-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-[#064E3B] mb-6 leading-tight tracking-tight max-w-3xl mx-auto">
            Great futures are built with a small charity
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            เงินบริจาคของคุณทำอะไรได้บ้าง? ร่วมเป็นส่วนหนึ่งในการสร้างการเปลี่ยนแปลงและมอบโอกาสที่เท่าเทียมให้กับเยาวชนและชุมชนที่ต้องการความช่วยเหลือ
          </p>

          <div className="flex justify-center gap-4 mb-16">
            <a 
              href="#donate-form" 
              className="bg-[#064E3B] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-emerald-950 transition-colors shadow-sm"
            >
              Donate now
            </a>
            <a 
              href="/activities" 
              className="bg-gray-100 text-gray-800 px-8 py-3.5 rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <span>Watch Activities</span>
            </a>
          </div>
        </div>

        {/* ── Grid of Styled Cards matching reference image layout ── */}
        <div className="max-w-7xl mx-auto px-4 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-stretch text-left">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-4 h-full justify-between">
              {/* Card 1: 65% Dark Green Tabbed Card */}
              <div className="bg-[#064E3B] text-white p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-[260px] flex-1">
                <div className="absolute top-0 right-0 w-16 h-4 bg-white/10 rounded-bl-2xl"></div>
                <div>
                  <div className="text-5xl font-bold mb-4 font-serif text-[#10B981]">65%</div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    คือสัดส่วนของทุนการศึกษาและเวิร์กชอปเรียนรู้ที่เรามอบให้กับเยาวชนในชุมชนห่างไกลทั่วประเทศ เพื่อลดช่องว่างความเหลื่อมล้ำทางการศึกษา
                  </p>
                </div>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                  <span className="text-xs font-semibold">Donate now</span>
                  <div className="w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center text-white">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              {/* Card 2: Black smiley card */}
              <div className="bg-[#111827] text-white p-5 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Smile size={20} className="text-[#10B981]" />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight">Let them</p>
                  <p className="text-xs text-white/60">be heard</p>
                </div>
              </div>
            </div>

            {/* Column 2: Health Card (Image overlay) */}
            <div className="relative rounded-3xl overflow-hidden min-h-[340px] flex flex-col justify-end p-6 bg-cover bg-center" 
                 style={{ backgroundImage: "url('/images/gender_art_exhibition_1783175227598.jpg')" }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              <div className="relative z-10 text-white">
                <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold mb-3">Health & Gender</span>
                <h3 className="text-lg font-bold leading-tight">
                  ทักษะชีวิตและความคิดสร้างสรรค์สำหรับเยาวชน 2,587 คน
                </h3>
              </div>
            </div>

            {/* Column 3: Join 5000+ Donate */}
            <div className="bg-gray-100 text-gray-800 p-6 rounded-3xl flex flex-col justify-between min-h-[340px] border border-gray-200/50">
              <div></div>
              <div className="text-center py-6">
                <h4 className="text-3xl font-bold text-[#064E3B] mb-2 leading-tight">Join 5000+</h4>
                <p className="text-sm text-gray-500 font-semibold">People Donate</p>
              </div>
              <a href="#donate-form" className="flex items-center justify-between p-3 bg-white rounded-2xl shadow-sm hover:shadow transition-shadow">
                <span className="text-xs font-bold text-gray-700">Join community</span>
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <ArrowUpRight size={16} className="text-gray-700" />
                </div>
              </a>
            </div>

            {/* Column 4: Education Card (Image overlay) */}
            <div className="relative rounded-3xl overflow-hidden min-h-[340px] flex flex-col justify-end p-6 bg-cover bg-center"
                 style={{ backgroundImage: "url('/images/environmental_workshop_1783175249155.jpg')" }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              <div className="relative z-10 text-white">
                <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold mb-3">Education</span>
                <h3 className="text-lg font-bold leading-tight">
                  สนับสนุนทุนการศึกษา อาหารกลางวัน และการเรียนรู้นอกห้องเรียน
                </h3>
              </div>
            </div>

            {/* Column 5 */}
            <div className="flex flex-col gap-4 h-full justify-between">
              {/* Card 5.1: Lime green card */}
              <div className="bg-[#D9F99D] text-gray-900 p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-[260px] flex-1">
                <div className="absolute top-0 right-0 w-16 h-4 bg-black/5 rounded-bl-2xl"></div>
                <div>
                  <div className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center mb-4">
                    <Heart size={20} className="text-red-500 fill-red-500" />
                  </div>
                  <p className="text-sm font-bold text-gray-800 leading-tight">
                    ความรักและความอบอุ่นถูกส่งต่อถึงมือผู้รับโดยตรง
                  </p>
                </div>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-black/5">
                  <span className="text-xs font-semibold text-gray-700">Explore more</span>
                  <div className="w-8 h-8 rounded-full bg-gray-950 flex items-center justify-center text-white">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              {/* Card 5.2: Dark green mini card */}
              <div className="bg-[#022C22] text-[#D9F99D] p-5 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Heart size={20} className="text-[#D9F99D] fill-[#D9F99D]" />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight">Your home</p>
                  <p className="text-xs text-white/50">for help</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ── Donation Form ── */}
      <section className="w-full py-24 px-6">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center py-20 flex flex-col items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center">
                <CheckCircle size={48} className="text-[#10B981]" />
              </div>
              <h2 className="text-4xl font-bold text-[#064E3B]">ขอบคุณมากครับ/ค่ะ!</h2>
              <p className="text-lg text-gray-600 max-w-md">
                เราได้รับข้อมูลการบริจาคของคุณแล้ว ทีมงานจะติดต่อกลับเร็ว ๆ นี้
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-8 py-3 rounded-full bg-[#10B981] text-white font-semibold hover:bg-emerald-600 transition-colors"
              >
                บริจาคอีกครั้ง
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
            >
              {/* Form header */}
              <div className="bg-gradient-to-br from-[#064E3B] to-[#10B981] px-10 py-10 text-white">
                <h2 className="text-3xl font-bold mb-2">เลือกจำนวนเงินที่ต้องการบริจาค</h2>
                <p className="text-white/70 text-sm">ทุกจำนวนล้วนมีความหมาย</p>
              </div>

              <div className="px-10 py-10 flex flex-col gap-8">
                {/* Amount grid */}
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">เลือกจำนวนเงิน</p>
                  <div className="grid grid-cols-3 gap-3">
                    {DONATION_AMOUNTS.map((amt) => (
                      <button
                        type="button"
                        key={amt}
                        onClick={() => { setSelectedAmount(amt); setCustomAmount(""); }}
                        className={`py-4 rounded-2xl font-bold text-lg border-2 transition-all duration-200 ${
                          selectedAmount === amt && !customAmount
                            ? "bg-[#064E3B] border-[#064E3B] text-white shadow-lg scale-105"
                            : "border-gray-200 text-gray-700 hover:border-[#10B981] hover:text-[#064E3B]"
                        }`}
                      >
                        ฿{amt.toLocaleString()}
                      </button>
                    ))}
                    {/* Custom amount spanning full width */}
                    <div className="col-span-3 relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-lg">฿</span>
                      <input
                        type="number"
                        min="1"
                        placeholder="จำนวนอื่น ๆ"
                        value={customAmount}
                        onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(null); }}
                        className="w-full pl-9 pr-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#10B981] focus:outline-none text-lg font-semibold text-gray-700 placeholder:font-normal placeholder:text-gray-400 transition-colors"
                      />
                    </div>
                  </div>

                  {effectiveAmount > 0 && (
                    <div className="mt-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-800 text-sm font-medium">
                      💚 คุณกำลังจะบริจาค <span className="font-bold text-lg">฿{effectiveAmount.toLocaleString()}</span> — ขอบคุณสำหรับความใจดีของคุณ!
                    </div>
                  )}
                </div>

                {/* Donor info */}
                <div className="flex flex-col gap-4">
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">ข้อมูลผู้บริจาค</p>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">ชื่อ-นามสกุล</label>
                    <input
                      required
                      type="text"
                      placeholder="กรอกชื่อของคุณ"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#10B981] focus:outline-none text-gray-700 placeholder:text-gray-400 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-gray-700">อีเมล</label>
                    <input
                      required
                      type="email"
                      placeholder="กรอกอีเมลของคุณ"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-[#10B981] focus:outline-none text-gray-700 placeholder:text-gray-400 transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#10B981] to-[#064E3B] text-white font-bold text-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-100 transition-all duration-200"
                >
                  ❤️ บริจาคเลย{effectiveAmount > 0 ? ` ฿${effectiveAmount.toLocaleString()}` : ""}
                </button>

                <p className="text-center text-xs text-gray-400">
                  ข้อมูลของคุณปลอดภัยและได้รับการเก็บรักษาอย่างเป็นความลับ
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
