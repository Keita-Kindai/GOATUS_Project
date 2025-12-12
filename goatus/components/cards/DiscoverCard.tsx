// src/components/cards/DiscoverCard.tsx
import React from "react";

interface DiscoverCardProps {
 title: string;
 subtitle?: string;
 tag?: string;
}

export default function DiscoverCard({ title, subtitle, tag }: DiscoverCardProps) {
 return (
   <div className="relative rounded-2xl overflow-hidden border border-white/10">
     <div className="absolute top-3 left-3 z-10">
       {tag && (
         <span className="text-[11px] px-2 py-1 rounded-md bg-white/10 border border-white/15">{tag}</span>
       )}
     </div>
     <div className="aspect-[4/3] w-full bg-[linear-gradient(135deg,#1f2937,40%,#6b7280)]" />
     <div className="p-3">
       <div className="truncate font-semibold">{title}</div>
       {subtitle && <div className="text-xs text-white/60 mt-1">{subtitle}</div>}
     </div>
   </div>
 );
}