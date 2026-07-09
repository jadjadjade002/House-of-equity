import { mockBlogPosts } from "@/lib/mockData";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return mockBlogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const article = mockBlogPosts.find((p) => p.slug === slug);
  if (!article) {
    notFound();
  }

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
