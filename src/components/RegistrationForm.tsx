"use client";
import { useState } from "react";

export default function RegistrationForm({ activityId }: { activityId: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    
    // Construct payload based on schema
    const data = {
      activity_id: activityId,
      full_name: formData.get("full_name") as string,
      nickname: formData.get("nickname") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      school_university: formData.get("school_university") as string,
      age: parseInt(formData.get("age") as string),
      dietary_restrictions: formData.get("dietary_restrictions") as string,
      emergency_contact: formData.get("emergency_contact") as string,
      consent_given: formData.get("consent") === "on",
    };

    // Simulate network delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="bg-brand-emerald/10 border border-brand-emerald/20 p-8 rounded-3xl text-center">
        <div className="w-16 h-16 bg-brand-emerald text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
        <h3 className="text-2xl font-bold text-brand-green mb-2">Registration Successful!</h3>
        <p className="text-foreground/80">Your spot is secured. We will email you the confirmation details shortly.</p>
        <button onClick={() => window.location.reload()} className="mt-6 text-brand-emerald font-medium hover:underline">
          View Event Details
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {errorMsg && (
        <div className="bg-red-50 text-red-500 p-4 rounded-xl text-sm font-medium border border-red-100">
          {errorMsg}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-brand-green text-sm">Full Name *</label>
          <input required name="full_name" type="text" className="w-full border border-brand-gray bg-brand-gray/20 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-emerald focus:bg-white transition-colors" placeholder="e.g. Somchai Jaidee" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-brand-green text-sm">Nickname *</label>
          <input required name="nickname" type="text" className="w-full border border-brand-gray bg-brand-gray/20 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-emerald focus:bg-white transition-colors" placeholder="e.g. Som" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-brand-green text-sm">Email Address *</label>
          <input required name="email" type="email" className="w-full border border-brand-gray bg-brand-gray/20 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-emerald focus:bg-white transition-colors" placeholder="e.g. somchai@example.com" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-brand-green text-sm">Phone Number *</label>
          <input required name="phone" type="tel" className="w-full border border-brand-gray bg-brand-gray/20 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-emerald focus:bg-white transition-colors" placeholder="e.g. 0812345678" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="font-medium text-brand-green text-sm">School / University *</label>
          <input required name="school_university" type="text" className="w-full border border-brand-gray bg-brand-gray/20 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-emerald focus:bg-white transition-colors" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-brand-green text-sm">Age *</label>
          <input required name="age" type="number" min="15" max="35" className="w-full border border-brand-gray bg-brand-gray/20 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-emerald focus:bg-white transition-colors" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium text-brand-green text-sm">Dietary Restrictions</label>
        <input name="dietary_restrictions" type="text" className="w-full border border-brand-gray bg-brand-gray/20 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-emerald focus:bg-white transition-colors" placeholder="None, Halal, Vegan, Allergy..." />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium text-brand-green text-sm">Emergency Contact * (Name & Phone)</label>
        <input required name="emergency_contact" type="text" className="w-full border border-brand-gray bg-brand-gray/20 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-emerald focus:bg-white transition-colors" />
      </div>

      <label className="flex items-start gap-3 mt-4 cursor-pointer">
        <input required name="consent" type="checkbox" className="mt-1.5 w-5 h-5 accent-brand-emerald rounded border-brand-gray shrink-0" />
        <span className="text-sm text-foreground/80 leading-relaxed">
          I consent to the collection and use of my personal data for the purpose of this event. I also consent to being photographed or recorded during the activity for HEq's promotional materials.
        </span>
      </label>

      <button disabled={isSubmitting} type="submit" className="w-full mt-6 py-4 rounded-full bg-brand-emerald text-white font-semibold text-lg hover:bg-emerald-600 transition-colors disabled:opacity-70">
        {isSubmitting ? "Submitting Registration..." : "Complete Registration"}
      </button>
    </form>
  );
}
