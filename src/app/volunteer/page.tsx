"use client";
import { useState } from "react";
import { CheckCircle, Heart, Users, Calendar, Award } from "lucide-react";

export default function VolunteerPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interest, setInterest] = useState("Gender");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;
    setSubmitted(true);
  };

  return (
    <main className="flex flex-col min-h-screen bg-transparent pt-32 pb-24 font-[family-name:var(--font-kanit)]">
      
      {/* Header section matching Teams/Blog style */}
      <section className="px-6 md:px-16 max-w-[1400px] mx-auto w-full mb-16">
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-medium tracking-tighter leading-none mb-12 uppercase text-brand-green">
          VOLUNTEER
        </h1>
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-24 border-t border-brand-green/20 pt-8">
          <p className="text-lg md:text-xl font-light leading-relaxed max-w-xl text-brand-green">
            มาร่วมเป็นพลังขับเคลื่อนความเท่าเทียมกับเรา! House of Equity เปิดรับอาสาสมัครรุ่นใหม่ที่พร้อมลงมือทำและเรียนรู้ไปด้วยกัน
          </p>
          <p className="text-lg md:text-xl font-light leading-relaxed max-w-xl text-brand-green/75">
            ไม่จำเป็นต้องมีประสบการณ์ ขอเพียงมีความมุ่งมั่นและพร้อมเปิดรับสิ่งใหม่ ๆ เรามีพื้นที่จัดเวิร์กชอป โครงการชุมชน และการขับเคลื่อนนโยบายหลากหลายรูปแบบ
          </p>
        </div>
      </section>

      {/* Grid Content */}
      <section className="px-6 md:px-16 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 border-t border-brand-green/20 pt-16">
          
          {/* Left Column: Why Join Us / Perks */}
          <div className="lg:w-[45%] flex flex-col gap-10">
            <h3 className="text-3xl font-medium tracking-tight uppercase text-brand-green">
              ทำไมต้องร่วมเป็นอาสาสมัคร?
            </h3>
            
            <div className="flex flex-col gap-8">
              {[
                {
                  icon: <Users className="text-brand-emerald" size={24} />,
                  title: "เครือข่ายเพื่อนรุ่นใหม่",
                  desc: "พบปะและทำงานร่วมกับเยาวชนผู้มีอุดมการณ์และความมุ่งมั่นเดียวกันจากหลากหลายสาขาอาชีพ"
                },
                {
                  icon: <Calendar className="text-brand-amber" size={24} />,
                  title: "โอกาสพัฒนาทักษะทำงานจริง",
                  desc: "ได้เรียนรู้วิธีการออกแบบกิจกรรม การทำงานเป็นทีม และการลงพื้นที่ขับเคลื่อนปัญหาทางสังคมจริง ๆ"
                },
                {
                  icon: <Award className="text-brand-orange" size={24} />,
                  title: "เกียรติบัตรและการรับรอง",
                  desc: "อาสาสมัครที่ทำงานครบตามเกณฑ์จะได้รับใบรับรองการเข้าร่วมงานสะสมพอร์ตเพื่อต่อยอดในอนาคต"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/60 border border-brand-green/10 flex items-center justify-center shrink-0 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-green mb-1">{item.title}</h4>
                    <p className="text-brand-green/80 font-light text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:w-[55%]">
            {submitted ? (
              <div className="border border-brand-green/20 bg-white/50 backdrop-blur-sm rounded-3xl p-10 text-center flex flex-col items-center gap-6 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-brand-emerald">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-3xl font-medium text-brand-green">ส่งข้อมูลสมัครเรียบร้อย!</h3>
                <p className="text-brand-green/80 font-light max-w-sm">
                  ขอบคุณที่ร่วมก้าวเดินไปกับเรา ทีมงานจะทำการคัดเลือกและติดต่อกลับผ่านช่องทางอีเมลหรือเบอร์โทรศัพท์ของคุณภายใน 3-5 วันทำการ
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-8 py-3 rounded-full bg-brand-green text-white font-medium hover:bg-emerald-950 transition-colors"
                >
                  สมัครใหม่อีกครั้ง
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                className="border border-brand-green/20 bg-white/40 backdrop-blur-sm rounded-3xl p-8 md:p-10 flex flex-col gap-6"
              >
                <h3 className="text-2xl font-medium tracking-tight uppercase text-brand-green border-b border-brand-green/20 pb-4">
                  ฟอร์มใบสมัครอาสาสมัคร
                </h3>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-brand-green">ชื่อ-นามสกุล *</label>
                  <input
                    required
                    type="text"
                    placeholder="กรอกชื่อและนามสกุลของคุณ"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-transparent border-b border-brand-green/30 py-3 text-sm focus:outline-none focus:border-brand-emerald text-brand-green placeholder:text-brand-green/30 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-brand-green">อีเมลติดต่อ *</label>
                    <input
                      required
                      type="email"
                      placeholder="กรอกอีเมลของคุณ"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-transparent border-b border-brand-green/30 py-3 text-sm focus:outline-none focus:border-brand-emerald text-brand-green placeholder:text-brand-green/30 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-brand-green">เบอร์โทรศัพท์ *</label>
                    <input
                      required
                      type="tel"
                      placeholder="กรอกเบอร์โทรศัพท์"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-transparent border-b border-brand-green/30 py-3 text-sm focus:outline-none focus:border-brand-emerald text-brand-green placeholder:text-brand-green/30 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-brand-green">ประเด็นที่สนใจเข้าร่วมขับเคลื่อน *</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                    {[
                      { value: "Gender", label: "ความเท่าเทียมทางเพศ" },
                      { value: "Education", label: "ความเท่าเทียมทางการศึกษา" },
                      { value: "Environment", label: "ความยุติธรรมสิ่งแวดล้อม" }
                    ].map((opt) => (
                      <button
                        type="button"
                        key={opt.value}
                        onClick={() => setInterest(opt.value)}
                        className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all duration-200 ${
                          interest === opt.value
                            ? "bg-brand-green border-brand-green text-white shadow-sm"
                            : "border-brand-green/20 text-brand-green hover:border-brand-green"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-brand-green">ทำไมคุณถึงต้องการร่วมเป็นอาสาสมัครกับเรา? (ระบุสั้น ๆ)</label>
                  <textarea
                    placeholder="เล่าแรงบันดาลใจของคุณให้เราฟังหน่อย..."
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    rows={4}
                    className="w-full bg-transparent border border-brand-green/20 rounded-xl p-4 text-sm focus:outline-none focus:border-brand-emerald text-brand-green placeholder:text-brand-green/30 transition-colors mt-2"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-4 rounded-full bg-brand-green text-white font-medium text-base tracking-wide uppercase hover:bg-emerald-950 transition-all shadow-sm"
                >
                  ส่งใบสมัครเลย
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </main>
  );
}
