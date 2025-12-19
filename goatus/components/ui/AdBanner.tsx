// src/components/ui/AdBanner.tsx
import React from "react";

interface AdBannerProps {
 label?: string;
}

export default function AdBanner({ label = "GOATUSグッドデザイン賞2025受賞" }: AdBannerProps) {
 return (
   <div className="mx-4 my-4 rounded-2xl border border-white/10 overflow-hidden">
     <div className="bg-gradient-to-r from-amber-300 to-amber-500 text-black p-4 flex items-center justify-center">
       <div className="text-sm font-semibold">{label}</div>
       {/* <div className="flex gap-2">
         <div className="h-10 w-16 rounded-md bg-black/20" />
         <div className="h-10 w-16 rounded-md bg-black/20" />
       </div> */}
     </div>
   </div>
 );
}
