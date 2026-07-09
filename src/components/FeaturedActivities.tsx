import { MapPin, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { mockActivities } from "@/lib/mockData";

export default function FeaturedActivities() {
  const displayActivities = mockActivities.filter(a => a.status === 'Upcoming').slice(0, 3);

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 bg-transparent">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-green mb-4 tracking-tight">Featured Activities</h2>
          <p className="text-xl text-foreground font-light max-w-2xl">
            ร่วมกับเวิร์กชอป นิทรรศการ และโครงการชุมชนที่กำลังจะมาถึง มาเป็นส่วนหนึ่งของการเคลื่อนไหวเพื่อความเท่าเทียม
          </p>
        </div>
        <Link href="/activities" className="mt-6 md:mt-0 text-brand-emerald font-medium flex items-center gap-2 hover:gap-4 transition-all group text-lg">
          ดูกิจกรรมทั้งหมด <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {displayActivities.map((activity, index) => (
          <Link href={`/activities/${activity.slug}`} key={index} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-brand-gray shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden bg-brand-gray/20">
              <img 
                src={activity.image} 
                alt={activity.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold text-brand-green shadow-sm">
                {activity.category}
              </div>
            </div>

            {/* Content Container */}
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
              
              <p className="text-foreground leading-relaxed font-light mb-10 flex-1 text-lg line-clamp-3">
                {activity.description}
              </p>

              <div className="w-full py-4 text-center rounded-full border-2 border-brand-emerald text-brand-green font-medium text-lg group-hover:bg-brand-emerald group-hover:text-white transition-all duration-300">
                ลงทะเบียนเลย
              </div>
            </div>
          </Link>
        ))}
        {displayActivities.length === 0 && (
          <div className="col-span-3 text-center py-12 text-foreground/50">
            ยังไม่มีกิจกรรมที่กำลังจะมาถึง โปรดกลับมาตรวจสอบในภายหลัง!
          </div>
        )}
      </div>
    </section>
  );
}
