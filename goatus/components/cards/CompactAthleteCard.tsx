// src/components/cards/CompactAthleteCard.tsx
import React from "react";
import { Star, Users } from "lucide-react";

interface CompactAthleteCardProps {
 name: string;
 sport: string;
 followerCount?: number;
 imageGradient?: string;
 isTeam?: boolean;
 isRecommended?: boolean;
 isNew?: boolean;
}

export default function CompactAthleteCard({
 name,
 sport,
 followerCount,
 imageGradient = "linear-gradient(135deg,#1e3a8a,40%,#60a5fa)",
 isTeam = false,
 isRecommended = false,
 isNew = false,
}: CompactAthleteCardProps) {
 return (
   <div className="flex-shrink-0 w-36 rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all">
     {/* 画像エリア */}
     <div
       className="aspect-square w-full relative"
       style={{ background: imageGradient }}
     >
       {/* バッジエリア */}
       <div className="absolute top-2 left-2 flex gap-1">
         {isRecommended && (
           <span className="flex items-center gap-0.5 text-[9px] px-1.5 py-0.5 rounded bg-amber-400 text-black font-semibold">
             <Star className="h-2.5 w-2.5 fill-black" />
             おすすめ
           </span>
         )}
         {isNew && (
           <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500 text-white font-semibold">
             NEW
           </span>
         )}
       </div>

       {/* チームタグ */}
       {isTeam && (
         <div className="absolute top-2 right-2">
           <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/20 backdrop-blur-sm">
             TEAM
           </span>
         </div>
       )}

       {/* フォロワー数 */}
       {followerCount !== undefined && (
         <div className="absolute bottom-2 left-2 flex items-center gap-1 text-[10px] text-white/90 bg-black/40 px-1.5 py-0.5 rounded">
           <Users className="h-2.5 w-2.5" />
           <span>{followerCount.toLocaleString()}</span>
         </div>
       )}
     </div>

     {/* 情報 */}
     <div className="p-2 space-y-0.5">
       <div className="font-semibold text-xs leading-tight truncate">{name}</div>
       <div className="text-[10px] text-white/60 truncate">{sport}</div>
     </div>
   </div>
 );
}
