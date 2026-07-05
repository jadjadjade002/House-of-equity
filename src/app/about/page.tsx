import { Target, Lightbulb, Heart } from "lucide-react";

export default function AboutPage() {
  const timeline = [
    { year: "2022", title: "The Beginning", description: "Founded by a small group of university students passionate about climate action." },
    { year: "2023", title: "Expanding the Vision", description: "Launched the Gender and Education teams to tackle intersectional equality issues." },
    { year: "2024", title: "First Equithon", description: "Hosted our first national youth hackathon with over 500 participants." },
    { year: "2026", title: "A National Movement", description: "Reached 300+ active volunteers and partnered with major NGOs across Thailand." },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="w-full bg-brand-green text-white py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            We are House of Equity.
          </h1>
          <p className="text-xl md:text-2xl font-light text-white/80 max-w-3xl mx-auto leading-relaxed">
            A youth-led organization empowering young people to create a more equal society through education, advocacy, and community action.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-24 px-6 bg-brand-beige">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-white p-12 rounded-[2rem] shadow-sm border border-brand-gray hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-brand-emerald/10 rounded-2xl flex items-center justify-center mb-8 text-brand-emerald">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-bold text-brand-green mb-4">Our Mission</h2>
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              To equip young people with the knowledge, tools, and platforms they need to advocate for gender, educational, and environmental equality in their communities.
            </p>
          </div>
          
          <div className="bg-white p-12 rounded-[2rem] shadow-sm border border-brand-gray hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-8 text-brand-orange">
              <Lightbulb size={32} />
            </div>
            <h2 className="text-3xl font-bold text-brand-green mb-4">Our Vision</h2>
            <p className="text-lg text-foreground/80 leading-relaxed font-light">
              A Thailand where every young person, regardless of their background, has an equal opportunity to thrive and shape the future of our society.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-green mb-16 text-center tracking-tight">Our Journey</h2>
          
          <div className="flex flex-col gap-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-brand-gray/50">
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                
                {/* Timeline dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-emerald text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-125 duration-300">
                  <Heart size={16} />
                </div>
                
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-3xl bg-brand-beige/50 border border-brand-gray group-hover:bg-brand-beige group-hover:shadow-md transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-brand-green text-xl">{item.title}</h3>
                    <span className="font-semibold text-brand-emerald bg-white px-3 py-1 rounded-full shadow-sm text-sm">{item.year}</span>
                  </div>
                  <p className="text-foreground/70 font-light leading-relaxed">{item.description}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
