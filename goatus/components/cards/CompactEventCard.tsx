// src/components/cards/CompactEventCard.tsx
import React from "react";
import { Calendar, MapPin } from "lucide-react";

interface CompactEventCardProps {
 title: string;
 sport: string;
 date: Date;
 location: string;
 imageGradient?: string;
 isHighlight?: boolean;
}

function formatDate(date: Date): string {
 const month = date.getMonth() + 1;
 const day = date.getDate();
 const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
 const weekday = weekdays[date.getDay()];
 return `${month}/${day}（${weekday}）`;
}

function getDaysUntil(date: Date): number {
 const today = new Date();
 today.setHours(0, 0, 0, 0);
 const eventDate = new Date(date);
 eventDate.setHours(0, 0, 0, 0);
 const diffTime = eventDate.getTime() - today.getTime();
 return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export default function CompactEventCard({
 title,
 sport,
 date,
 location,
 imageGradient = "linear-gradient(135deg,#312e81,40%,#6366f1)",
 isHighlight = false,
}: CompactEventCardProps) {
 const daysUntil = getDaysUntil(date);

 return (
   <div className="flex-shrink-0 w-64 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all">
     {/* 画像エリア */}
     <div
       className="h-24 w-full relative"
       style={{ background: imageGradient }}
     >
       {/* 残り日数 */}
       <div className="absolute top-2 left-2">
         <span className={`text-[10px] px-1.5 py-0.5 rounded ${
           daysUntil <= 7
             ? "bg-red-500/90 text-white font-semibold"
             : "bg-black/50 text-white/90"
         }`}>
           {daysUntil === 0 ? "今日" : daysUntil === 1 ? "明日" : `あと${daysUntil}日`}
         </span>
       </div>

       {/* 注目バッジ */}
       {isHighlight && (
         <div className="absolute top-2 right-2">
           <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-400 text-black font-semibold">
             注目
           </span>
         </div>
       )}

       {/* 競技名 */}
       <div className="absolute bottom-2 left-2 text-[10px] text-white/80 bg-black/30 px-1.5 py-0.5 rounded">
         {sport}
       </div>
     </div>

     {/* 情報 */}
     <div className="p-2.5 space-y-1.5">
       <div className="font-semibold text-xs leading-tight line-clamp-2 h-8">{title}</div>
       <div className="flex items-center gap-1.5 text-[10px] text-white/60">
         <Calendar className="h-3 w-3" />
         <span>{formatDate(date)}</span>
       </div>
       <div className="flex items-center gap-1.5 text-[10px] text-white/60">
         <MapPin className="h-3 w-3" />
         <span className="truncate">{location}</span>
       </div>
     </div>
   </div>
 );
}
