// src/components/cards/RecommendedAthleteCard.tsx
import React from "react";
import { Star, Users } from "lucide-react";

interface RecommendedAthleteCardProps {
 name: string;
 sport: string;
 followerCount?: number;
 imageGradient?: string;
 isTeam?: boolean;
 isRecommended?: boolean;
}

export default function RecommendedAthleteCard({
 name,
 sport,
 followerCount,
 imageGradient = "linear-gradient(135deg,#1e3a8a,40%,#60a5fa)",
 isTeam = false,
 isRecommended = false
}: RecommendedAthleteCardProps) {
 return (
   <div className="relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all">
     {/* おすすめバッジ */}
     {isRecommended && (
       <div className="absolute top-3 left-3 z-10 flex items-center gap-1 px-2 py-1 rounded-md bg-amber-400/90 backdrop-blur-sm">
         <Star className="h-3 w-3 text-black fill-black" />
         <span className="text-[11px] font-semibold text-black">おすすめ</span>
       </div>
     )}
    
     {/* チームタグ */}
     {isTeam && (
       <div className="absolute top-3 right-3 z-10">
         <span className="text-[11px] px-2 py-1 rounded-md bg-white/10 border border-white/15 backdrop-blur-sm">
           TEAM
         </span>
       </div>
     )}

     {/* アスリート画像 */}
     <div
       className="aspect-[4/3] w-full relative"
       style={{ background: imageGradient }}
     >
       {/* グラデーションオーバーレイ */}
       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
       {/* フォロワー数（画像内） */}
       {followerCount !== undefined && (
         <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white/90">
           <Users className="h-3.5 w-3.5" />
           <span className="text-xs font-semibold">{followerCount.toLocaleString()}</span>
         </div>
       )}
     </div>

     {/* 情報エリア */}
     <div className="p-3 space-y-1">
       <div className="truncate font-semibold text-sm leading-tight">{name}</div>
       <div className="flex items-center justify-between">
         <div className="text-xs text-white/60">{sport}</div>
         <button className="text-xs px-3 py-1 rounded-full border border-white/15 hover:bg-white/5 transition">
           フォロー
         </button>
       </div>
     </div>
   </div>
 );
}
