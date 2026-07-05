export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Mock data for the specific article
  const article = {
    title: "Rethinking Gender Norms: Why Thailand's Youth Are Leading the Charge",
    author: "Ploy M.",
    role: "Gender Team Lead",
    date: "July 4, 2026",
    readTime: "6 min read",
    category: "Gender",
    image: "/images/gender_art_exhibition_1783175227598.jpg",
    content: `
      <p class="mb-8">The landscape of gender roles in Thailand is undergoing a seismic shift. While traditional expectations have long dictated the paths of young men and women, a new wave of youth-led activism is demanding a radical reimagining of these norms.</p>
      <h3 class="text-3xl font-bold text-brand-green mt-12 mb-6">The Breaking Point</h3>
      <p class="mb-8">In our recent field research, we spoke with over 500 high school and university students across Bangkok. The consensus was overwhelming: the rigid boxes of the past are no longer sufficient to contain the multifaceted identities of today's youth.</p>
      <p class="mb-8">"It's not just about pronouns or clothing," notes one participant from our Sexpectation exhibition. "It's about the freedom to choose our careers, our partners, and our futures without the weight of societal judgment."</p>
      <blockquote class="border-l-4 border-brand-emerald pl-6 py-2 my-12 text-2xl font-light text-brand-green italic bg-brand-emerald/5">
        "The rigid boxes of the past are no longer sufficient to contain the multifaceted identities of today's youth."
      </blockquote>
      <h3 class="text-3xl font-bold text-brand-green mt-12 mb-6">Policy Over Platitudes</h3>
      <p class="mb-8">What makes this current movement distinct is its focus on structural change. Rather than relying solely on awareness campaigns, youth organizations like HEq are drafting actionable policy proposals. These range from inclusive sex education curriculums in public schools to workplace discrimination protections.</p>
      <p class="mb-8">As we look to the future, it is clear that the momentum is unstoppable. The question is no longer whether gender norms will change, but rather how quickly institutions will adapt to the reality that the youth have already established.</p>
    `
  };

  return (
    <main className="flex flex-col min-h-screen bg-brand-beige pt-20">
      
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
