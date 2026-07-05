"use client";
import { useState, useEffect } from "react";
import { MapPin, Calendar, Loader2 } from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function ActivitiesPage() {
  const [filter, setFilter] = useState("All");
  const [activities, setActivities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      const { data, error } = await supabase
        .from('activities')
        .select('*, registrations(count)')
        .order('created_at', { ascending: false });
        
      if (error) {
        console.error("Error fetching activities:", error);
      } else {
        setActivities(data || []);
      }
      setLoading(false);
    };
    fetchActivities();
  }, []);

  const filteredActivities = filter === "All" 
    ? activities 
    : activities.filter(a => a.status === filter);

  return (
    <main className="flex flex-col min-h-screen bg-brand-beige pt-20">
      
      {/* Header */}
      <section className="w-full bg-white py-20 px-6 border-b border-brand-gray/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-green mb-6 tracking-tight">Our Activities</h1>
            <p className="text-xl text-foreground font-light leading-relaxed">
              Discover our workshops, hackathons, and exhibitions. Register to join the movement and make a real impact in your community.
            </p>
          </div>

          {/* Filters */}
          <div className="flex gap-2 bg-brand-gray/30 p-1.5 rounded-full">
            {["All", "Upcoming", "Past"].map((f) => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  filter === f 
                    ? "bg-white shadow-sm text-brand-green" 
                    : "text-foreground/60 hover:text-brand-green"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="w-full py-20 px-6">
        <div className="max-w-7xl mx-auto min-h-[400px]">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-64 gap-4 text-brand-green">
              <Loader2 size={40} className="animate-spin" />
              <p className="font-medium">Loading activities from Supabase...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredActivities.map((activity, index) => {
                const registered = activity.registrations?.[0]?.count || 0;
                const isFull = registered >= activity.capacity;
                
                return (
                  <Link href={`/activities/${activity.slug}`} key={index} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-brand-gray shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="relative h-64 overflow-hidden bg-brand-gray/20">
                      <img 
                        src={activity.image} 
                        alt={activity.title}
                        className={`w-full h-full object-cover transition-transform duration-700 ease-out ${activity.status === 'Past' ? 'grayscale opacity-80' : 'group-hover:scale-105'}`}
                      />
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold text-brand-green shadow-sm">
                        {activity.category}
                      </div>
                      {isFull && activity.status === "Upcoming" && (
                         <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
                          Full
                        </div>
                      )}
                    </div>

                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex flex-col gap-3 mb-6 text-sm text-foreground/80 font-medium">
                        <div className="flex items-center gap-3">
                          <Calendar size={18} className="text-brand-orange" />
                          <span>{activity.date}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin size={18} className="text-brand-orange" />
                          <span>{activity.location}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-brand-green mb-4 leading-tight group-hover:text-brand-emerald transition-colors">
                        {activity.title}
                      </h3>
                      
                      <p className="text-foreground leading-relaxed font-light mb-10 flex-1 line-clamp-3">
                        {activity.description}
                      </p>

                      {activity.status === "Past" ? (
                        <button disabled className="w-full py-4 rounded-full bg-brand-gray text-foreground/50 font-medium cursor-not-allowed">
                          Event Concluded
                        </button>
                      ) : isFull ? (
                        <button disabled className="w-full py-4 rounded-full bg-red-50 text-red-500 font-medium border-2 border-red-100 cursor-not-allowed">
                          Workshop Full
                        </button>
                      ) : (
                        <button className="w-full py-4 rounded-full border-2 border-brand-emerald text-brand-green font-medium group-hover:bg-brand-emerald group-hover:text-white transition-all duration-300">
                          Register Now
                        </button>
                      )}
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>

    </main>
  );
}
