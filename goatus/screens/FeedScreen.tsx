// src/screens/FeedScreen.tsx
import React from "react";
import TopNav from "../components/layout/TopNav";
import FeedCard from "../components/cards/FeedCard";
import AdBanner from "../components/ui/AdBanner";

interface FeedScreenProps {
 onOpenOrg: () => void;
}

export default function FeedScreen({ onOpenOrg }: FeedScreenProps) {
 return (
   <div>
     <TopNav />
     <div className="pb-28">{/* space for bottom bar */}
       <div className="px-4 pt-2 text-white/80 text-sm">このたび、ご縁をいただき「GOATUS」にアスリート登… <button className="text-amber-300">さらに表示</button></div>
       <FeedCard onOpen={onOpenOrg} />
       <AdBanner />
       <FeedCard onOpen={onOpenOrg} />
     </div>
   </div>
 );
}
