import React from 'react';

export default function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-medium tracking-tighter leading-none mb-12 text-center">
      {children}
    </h1>
  );
}
