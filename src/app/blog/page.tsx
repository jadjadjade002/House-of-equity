import Link from "next/link";

export default function BlogIndex() {
  // CNN-style layout requires distinct article groups
  const leadStory = {
    slug: "rethinking-gender-norms",
    title: "Rethinking Gender Norms: Why Thailand's Youth Are Leading the Charge",
    summary: "As societal expectations shift, a new generation of Thai youth are dismantling traditional gender roles and demanding radical inclusivity in every sector of society. Our latest field research uncovers the driving forces behind this movement.",
    author: "Ploy M.",
    date: "July 4, 2026",
    category: "Gender",
    image: "/images/gender_art_exhibition_1783175227598.jpg"
  };

  const topStories = [
    { slug: "policy-hackathons", title: "How Hackathons Are Becoming The New Protest", date: "July 2, 2026" },
    { slug: "trash-hunter", title: "Inside the 'Trash Hunter' Movement Cleaning Up Lumphini", date: "June 28, 2026" },
    { slug: "education-inequity", title: "The Silent Crisis: Rural Education Inequity Exposed", date: "June 25, 2026" }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-brand-beige pt-20">
      
      {/* Editorial Header */}
      <section className="w-full bg-brand-beige py-12 px-6 border-b-2 border-brand-green">
        <div className="max-w-7xl mx-auto flex items-end justify-between">
          <h1 className="text-5xl md:text-7xl font-bold text-brand-green tracking-tight font-serif">HEq. Perspectives</h1>
          <p className="hidden md:block text-foreground/60 font-medium uppercase tracking-widest text-sm">Latest News & Opinions</p>
        </div>
      </section>

      {/* Main CNN-Style Grid */}
      <section className="w-full py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Lead Story (65% width) */}
          <Link href={`/blog/${leadStory.slug}`} className="lg:w-[65%] group cursor-pointer block">
            <div className="w-full aspect-video bg-brand-gray relative overflow-hidden mb-6">
              <img src={leadStory.image} alt="Lead" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="flex gap-4 items-center text-sm font-bold text-brand-orange uppercase tracking-wider mb-4">
              <span>{leadStory.category}</span>
              <span className="text-brand-gray">|</span>
              <span className="text-foreground/50">{leadStory.date}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-green leading-tight mb-6 group-hover:text-brand-emerald transition-colors">
              {leadStory.title}
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed font-light">
              {leadStory.summary}
            </p>
            <div className="mt-6 font-medium text-brand-green">By {leadStory.author}</div>
          </Link>

          {/* Sidebar Top Stories (35% width) */}
          <div className="lg:w-[35%] flex flex-col gap-8 lg:border-l border-brand-gray/50 lg:pl-12">
            <h3 className="text-2xl font-bold text-brand-green border-b-2 border-brand-emerald pb-4 uppercase tracking-wider">Top Stories</h3>
            <div className="flex flex-col divide-y divide-brand-gray/50">
              {topStories.map((story, i) => (
                <Link href={`/blog/${story.slug}`} key={i} className="py-6 group block">
                  <h4 className="text-2xl font-bold text-brand-green mb-3 leading-snug group-hover:text-brand-emerald transition-colors">
                    {story.title}
                  </h4>
                  <p className="text-sm font-medium text-foreground/50 uppercase tracking-wider">{story.date}</p>
                </Link>
              ))}
            </div>
            
            {/* Newsletter Callout in Sidebar */}
            <div className="bg-brand-green text-white p-8 mt-4 rounded-3xl">
              <h4 className="text-2xl font-bold mb-4">Stay Informed.</h4>
              <p className="font-light text-white/80 mb-6">Get our best advocacy journalism delivered to your inbox.</p>
              <input type="email" placeholder="Email address" className="w-full bg-white/10 border border-white/20 rounded-full px-5 py-3 mb-4 focus:outline-none focus:border-brand-emerald text-white" />
              <button className="w-full bg-brand-emerald py-3 rounded-full font-semibold hover:bg-emerald-600 transition-colors">Subscribe</button>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
