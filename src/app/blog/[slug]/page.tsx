export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Mock data for the specific article
  const article = {
    title: "การทบทวนบรรทัดฐานทางเพศ: ทำไมเยาวชนไทยถึงเป็นผู้นำการเปลี่ยนแปลงในสังคมปัจจุบัน",
    author: "พลอย ม.",
    role: "หัวหน้าทีมสื่อสารเพศสภาพ",
    date: "4 กรกฎาคม 2569",
    readTime: "อ่าน 6 นาที",
    category: "Gender",
    image: "/images/gender_art_exhibition_1783175227598.jpg",
    content: `
      <p class="mb-8">ภูมิทัศน์ของบทบาททางเพศในประเทศไทยกำลังเกิดการเปลี่ยนแปลงครั้งใหญ่ แม้ความคาดหวังแบบดั้งเดิมจะกำหนดเส้นทางของเยาวชนชายหญิงมาอย่างยาวนาน แต่คลื่นการเคลื่อนไหวใหม่ที่นำโดยเยาวชนกำลังเรียกร้องให้มีการคิดทบทวนบรรทัดฐานเหล่านี้ใหม่อย่างจริงจัง</p>
      <h3 class="text-3xl font-bold text-brand-green mt-12 mb-6">จุดเปลี่ยนครั้งสำคัญ</h3>
      <p class="mb-8">ในงานวิจัยภาคสนามล่าสุดของเรา เราได้พูดคุยกับนักเรียนมัธยมปลายและมหาวิทยาลัยกว่า 500 คนทั่วกรุงเทพฯ ข้อสรุปที่ได้ตรงกันอย่างเป็นเอกฉันท์คือ กรอบความคิดที่ตายตัวในอดีตไม่เพียงพอที่จะรองรับอัตลักษณ์ที่หลากหลายของเยาวชนในปัจจุบันอีกต่อไป</p>
      <p class="mb-8">"มันไม่ใช่แค่เรื่องของคำสรรพนามหรือเสื้อผ้า" หนึ่งในผู้เข้าร่วมกิจกรรมจากนิทรรศการ Sexpectation กล่าว "แต่มันคือเสรีภาพในการเลือกอาชีพ คู่ชีวิต และอนาคตของเราเอง โดยไม่ต้องถูกกดทับด้วยการตัดสินจากกรอบของสังคม"</p>
      <blockquote class="border-l-4 border-brand-emerald pl-6 py-2 my-12 text-2xl font-light text-brand-green italic bg-brand-emerald/5">
        "กรอบความคิดที่ตายตัวในอดีตไม่เพียงพอที่จะรองรับอัตลักษณ์ที่หลากหลายของเยาวชนในปัจจุบันอีกต่อไป"
      </blockquote>
      <h3 class="text-3xl font-bold text-brand-green mt-12 mb-6">ขับเคลื่อนเชิงนโยบายมากกว่าคำพูดสวยหรู</h3>
      <p class="mb-8">สิ่งที่ทำให้การเคลื่อนไหวในครั้งนี้แตกต่างออกไปคือการมุ่งเน้นไปที่การเปลี่ยนแปลงเชิงโครงสร้าง แทนที่จะพึ่งพาเพียงแค่แคมเปญสร้างความตระหนักรู้ องค์กรเยาวชนอย่าง HEq กำลังร่างข้อเสนอนโยบายที่นำไปปฏิบัติได้จริง ตั้งแต่หลักสูตรสุขศึกษาเรื่องเพศที่ครอบคลุมในโรงเรียนรัฐบาล ไปจนถึงการปกป้องสิทธิ์จากการเลือกปฏิบัติในสถานที่ทำงาน</p>
      <p class="mb-8">เมื่อเรามองไปที่อนาคต เป็นที่ชัดเจนว่าการขับเคลื่อนนี้ไม่มีวันหยุดยั้ง คำถามไม่ได้อยู่ที่ว่าบรรทัดฐานทางเพศจะเปลี่ยนแปลงไปหรือไม่ แต่อยู่ที่ว่าสถาบันและองค์กรต่าง ๆ จะปรับตัวได้เร็วเพียงใดเพื่อรับมือกับความเป็นจริงที่เยาวชนได้สร้างขึ้นแล้วต่างหาก</p>
    `
  };

  return (
    <main className="flex flex-col min-h-screen bg-transparent pt-20">
      
      {/* Article Header */}
      <header className="max-w-4xl mx-auto w-full px-6 pt-16 pb-12">
        <div className="flex gap-4 items-center text-sm font-bold text-brand-orange uppercase tracking-wider mb-6">
          <span>{article.category}</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-brand-green leading-[1.1] mb-8 tracking-tight font-serif">
          {article.title}
        </h1>
        
        {/* Author Metadata */}
        <div className="flex items-center justify-between border-y border-brand-gray/50 py-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-emerald/20 flex items-center justify-center text-brand-emerald font-bold text-xl">
              {article.author.charAt(0)}
            </div>
            <div>
              <div className="font-bold text-brand-green">{article.author}</div>
              <div className="text-sm font-medium text-foreground/60 uppercase tracking-widest">{article.date} · {article.readTime}</div>
            </div>
          </div>
          
          {/* Social Share Mobile */}
          <div className="flex md:hidden gap-3 text-foreground/50">
            <button className="hover:text-brand-emerald">TW</button>
            <button className="hover:text-brand-emerald">FB</button>
            <button className="hover:text-brand-emerald">LINK</button>
          </div>
        </div>
      </header>

      {/* Hero Image Full Width (CNN Style) */}
      <div className="w-full max-w-6xl mx-auto px-6 mb-16">
        <div className="w-full aspect-[21/9] bg-brand-gray rounded-lg overflow-hidden">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>
        <p className="text-sm text-foreground/50 mt-3 text-right">Photograph: HEq Archives</p>
      </div>

      {/* Reading Layout */}
      <div className="max-w-7xl mx-auto w-full px-6 flex flex-row gap-16 relative">
        
        {/* Sticky Social Share (Desktop) */}
        <div className="hidden md:flex flex-col gap-6 sticky top-32 h-fit text-foreground/40 w-12 items-center font-bold text-sm">
          <button className="hover:text-brand-emerald transition-colors">TW</button>
          <button className="hover:text-brand-emerald transition-colors">FB</button>
          <button className="hover:text-brand-emerald transition-colors">LINK</button>
          <div className="w-px h-24 bg-brand-gray mt-4"></div>
        </div>

        {/* Central Reading Column (Max ~65 chars wide for optimal reading) */}
        <article 
          className="flex-1 max-w-2xl mx-auto text-xl leading-[1.8] font-light text-foreground/90 pb-32"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
        {/* Empty right column for balance */}
        <div className="hidden lg:block w-[300px]" />
      </div>
    </main>
  );
}
