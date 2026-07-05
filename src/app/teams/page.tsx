import { Users, BookOpen, Leaf } from "lucide-react";

export default function TeamsPage() {
  const teams = [
    {
      id: "gender",
      title: "Gender Team",
      icon: Users,
      color: "bg-pink-100 text-pink-700",
      accent: "bg-pink-500",
      description: "Advocating for gender equality, LGBTQIA+ rights, and breaking down social expectations.",
      projects: ["Sexpectation The Exhibition", "Safe Space Workshops"],
      members: ["Ploy (Lead)", "Karn", "Nicha"]
    },
    {
      id: "education",
      title: "Education Team",
      icon: BookOpen,
      color: "bg-blue-100 text-blue-700",
      accent: "bg-blue-500",
      description: "Ensuring educational equity, scholarship access, and empowering youth development.",
      projects: ["Youth Advocacy Equithon", "Mentorship Program"],
      members: ["Win (Lead)", "Fah", "Ohm"]
    },
    {
      id: "environment",
      title: "Environment Team",
      icon: Leaf,
      color: "bg-green-100 text-green-700",
      accent: "bg-brand-emerald",
      description: "Promoting sustainability, circular economy, and community waste management.",
      projects: ["Thoughtful Trash Project", "The Urgent Call Research"],
      members: ["Earth (Lead)", "Mint", "Pond"]
    }
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white pt-20">
      
      {/* Hero */}
      <section className="w-full bg-brand-green text-white py-24 px-6 border-b border-brand-gray/20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Our Core Teams</h1>
          <p className="text-xl md:text-2xl font-light text-white/80 max-w-2xl mx-auto leading-relaxed">
            Meet the passionate youth leaders driving our three pillars of equality across Thailand.
          </p>
        </div>
      </section>

      {/* Teams Grid */}
      <section className="w-full py-24 px-6 bg-brand-beige">
        <div className="max-w-6xl mx-auto flex flex-col gap-24">
          {teams.map((team) => (
            <div key={team.id} id={team.id} className="flex flex-col lg:flex-row gap-12 lg:items-center bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-brand-gray relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-2 h-full ${team.accent}`} />
              
              <div className="flex-1">
                <div className={`w-20 h-20 rounded-2xl ${team.color} flex items-center justify-center mb-8`}>
                  <team.icon size={40} />
                </div>
                <h2 className="text-4xl font-bold text-brand-green mb-6">{team.title}</h2>
                <p className="text-xl text-foreground/80 leading-relaxed font-light mb-10">
                  {team.description}
                </p>
                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="font-semibold text-brand-green mb-3 uppercase tracking-wider text-sm">Key Projects</h4>
                    <ul className="flex flex-wrap gap-2">
                      {team.projects.map((p, i) => (
                        <li key={i} className="bg-brand-gray/50 px-4 py-2 rounded-full text-sm text-foreground/80 font-medium">{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 bg-brand-beige/50 p-8 rounded-3xl border border-brand-gray/50">
                <h4 className="font-semibold text-brand-green mb-6 text-xl">Core Members</h4>
                <ul className="flex flex-col gap-4">
                  {team.members.map((m, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-gray animate-pulse" />
                      <span className="font-medium text-foreground/80">{m}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-8 py-3 rounded-full border-2 border-brand-emerald text-brand-emerald font-medium hover:bg-brand-emerald hover:text-white transition-colors">
                  Join this Team
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
