// src/components/layout/BottomTab.tsx
import React from "react";
import { Home, Compass, Plus, Handshake, User } from "lucide-react";
import { cx, bg, brand } from "../colors";

interface BottomTabProps {
 active: string;
 setActive: (key: string) => void;
}

export default function BottomTab({ active, setActive }: BottomTabProps) {
 const items = [
   { key: "feed", label: "フィールド", icon: Home },
   { key: "discover", label: "みつける", icon: Compass },
   { key: "post", label: "投稿", icon: Plus },
   { key: "community", label: "コミュニティ", icon: Handshake },
   { key: "mypage", label: "マイページ", icon: User },
 ];
 return (
   <div className="sticky bottom-0 z-40">
     <div className={cx("pb-2 pt-3", bg, "border-t border-white/10")}>
       <div className="relative">
         {/* floating + */}
         <button
           className="absolute left-1/2 -translate-x-1/2 -translate-y-6 grid place-items-center h-16 w-16 rounded-full shadow-xl"
           style={{ background: brand }}
           onClick={() => setActive("post")}
         >
           <Plus className="h-8 w-8 text-black" />
         </button>
       </div>
       <div className="grid grid-cols-5 px-2 gap-1">
         {items.map((it) => (
           <button
             key={it.key}
             onClick={() => setActive(it.key)}
             className={cx(
               "flex flex-col items-center pt-4 pb-1 text-xs",
               active === it.key ? "text-white" : "text-white/60"
             )}
           >
             <it.icon className="h-5 w-5" />
             <span className="mt-1">{it.label}</span>
           </button>
         ))}
       </div>
     </div>
   </div>
 );
}
