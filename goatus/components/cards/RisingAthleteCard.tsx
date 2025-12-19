// src/components/cards/RisingAthleteCard.tsx
import React from "react";
import Image from "next/image";

export default function RisingAthleteCard() {
 return (
   <div className="rounded-3xl overflow-hidden border border-white/10">
    <div className="relative aspect-[16/10] w-full bg-[linear-gradient(135deg,#222,40%,#4b5563)]">
      <Image src="/images/goatus_logo.png" alt="goatus-logo" fill className="object-cover" />
    </div>
     <div className="p-4">
       <div className="font-semibold">GOATUS運営チーム</div>
       <div className="text-xs text-white/60">[その他]</div>
     </div>
   </div>
 );
}