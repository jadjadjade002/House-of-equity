import { MapPin, Calendar, Clock, Users } from "lucide-react";
import RegistrationForm from "@/components/RegistrationForm";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";

export default async function ActivityDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Fetch from Supabase based on slug
  const { data: activity, error } = await supabase
    .from('activities')
    .select('*, registrations(count)')
    .eq('slug', slug)
    .single();

  if (error || !activity) {
    notFound();
  }

  const registered = activity.registrations?.[0]?.count || 0;
  const remainingSeats = activity.capacity - registered;
  
  // Agenda is stored as JSONB in Supabase
  const agenda = activity.agenda || [];

  return (
    <main className="flex flex-col min-h-screen bg-brand-beige pt-20">
      
      {/* Hero Banner */}
      <div className="w-full h-80 md:h-[450px] relative bg-brand-green">
        <img src={activity.image} alt={activity.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto w-full px-6 pb-12">
            <span className="inline-block px-5 py-2 bg-brand-emerald text-white rounded-full text-sm font-semibold mb-6 shadow-sm">
              {activity.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">{activity.title}</h1>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto w-full px-6 py-16 flex flex-col lg:flex-row gap-16 relative">
        
        {/* Left Column: Description & Agenda */}
        <div className="flex-1">
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-brand-green mb-6">About this Activity</h2>
            <p className="text-xl text-foreground/80 leading-relaxed font-light">
              {activity.description}
            </p>
          </section>

          {agenda.length > 0 && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-brand-green mb-6">Agenda</h2>
              <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-brand-gray shadow-sm">
                <ul className="flex flex-col gap-8">
                  {agenda.map((item: any, i: number) => (
                    <li key={i} className="flex gap-6 items-start relative before:absolute before:left-[4.5rem] before:top-8 before:bottom-[-2rem] before:w-px before:bg-brand-gray/50 last:before:hidden">
                      <div className="font-bold text-brand-orange shrink-0 mt-0.5 w-16">{item.time}</div>
                      <div className="text-foreground/80 text-lg leading-relaxed">{item.text}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          <section id="registration">
            <h2 className="text-3xl font-bold text-brand-green mb-6">Registration Form</h2>
            <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-brand-gray shadow-sm">
              {activity.status === "Past" ? (
                <div className="text-center py-8 text-foreground/70">
                  This event has concluded. Registration is closed.
                </div>
              ) : remainingSeats <= 0 ? (
                <div className="text-center py-8 text-red-500 font-medium">
                  This workshop has reached its maximum capacity.
                </div>
              ) : (
                <RegistrationForm activityId={activity.id} />
              )}
            </div>
          </section>
        </div>

        {/* Right Column: Sticky Sidebar Info */}
        <div className="w-full lg:w-[420px]">
          <div className="sticky top-28 bg-white rounded-[2rem] p-8 md:p-10 border border-brand-gray shadow-xl flex flex-col gap-8">
            
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-5">
                <div className="bg-brand-orange/10 p-3 rounded-2xl text-brand-orange shrink-0">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-green mb-1">Date</h4>
                  <p className="text-foreground/80 font-light">{activity.date}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="bg-brand-orange/10 p-3 rounded-2xl text-brand-orange shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-green mb-1">Time</h4>
                  <p className="text-foreground/80 font-light">{activity.time}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="bg-brand-orange/10 p-3 rounded-2xl text-brand-orange shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-green mb-1">Venue</h4>
                  <p className="text-foreground/80 font-light">{activity.location}</p>
                  <a href="#" className="text-brand-emerald text-sm font-medium hover:underline mt-1 inline-block">View on Google Maps</a>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="bg-brand-orange/10 p-3 rounded-2xl text-brand-orange shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-green mb-1">Capacity</h4>
                  <p className="text-foreground/80 font-light">
                    {remainingSeats > 0 ? (
                      <span className="text-brand-emerald font-medium bg-brand-emerald/10 px-3 py-1 rounded-full">{remainingSeats} seats remaining</span>
                    ) : (
                      <span className="text-red-500 font-medium bg-red-50 px-3 py-1 rounded-full">Workshop Full</span>
                    )}
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-brand-gray" />

            {activity.status !== "Past" && remainingSeats > 0 && (
              <Link href="#registration" className="w-full py-4 rounded-full bg-brand-emerald text-white text-center font-semibold text-lg hover:bg-emerald-600 transition-colors shadow-sm">
                Register Now
              </Link>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}
