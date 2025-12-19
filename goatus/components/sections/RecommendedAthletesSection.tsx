// src/components/sections/RecommendedAthletesSection.tsx
import React from "react";
import SectionHeader from "../ui/SectionHeader";
import RecommendedAthleteCard from "../cards/RecommendedAthleteCard";

interface Athlete {
 id: string;
 name: string;
 sport: string;
 followerCount?: number;
 imageGradient?: string;
 isTeam?: boolean;
 image: string;
 isRecommended?: boolean;
}

// サンプルデータ
const recommendedAthletes: Athlete[] = [
 {
   id: "1",
   name: "山田 太郎",
   sport: "[陸上競技]",
   followerCount: 1234,
   image: "/images/sports_man.jpg",
   imageGradient: "linear-gradient(135deg,#1e3a8a,40%,#60a5fa)",
   isRecommended: true,
 },
 {
   id: "2",
   name: "鈴木 花子",
   sport: "[競泳]",
   followerCount: 2567,
   image: "/images/sports_woman.jpg",
   imageGradient: "linear-gradient(135deg,#0c4a6e,40%,#0ea5e9)",
   isRecommended: true,
 },
 {
   id: "3",
   name: "東京大学体育会サッカー部",
   sport: "[サッカー]",
   followerCount: 5432,
   image: "/images/sports_soccer_man.jpg",
   imageGradient: "linear-gradient(135deg,#14532d,40%,#22c55e)",
   isTeam: true,
 },
 {
   id: "4",
   name: "佐藤 健",
   sport: "[柔道]",
   followerCount: 892,
   image: "/images/sports_man_sweating.jpg",
   imageGradient: "linear-gradient(135deg,#7c2d12,40%,#f97316)",
 },
];

export default function RecommendedAthletesSection() {
 return (
   <div className="space-y-2">
     <SectionHeader title="おすすめアスリート" />
     <div className="px-4 grid grid-cols-2 gap-4">
       {recommendedAthletes.map((athlete) => (
         <RecommendedAthleteCard
           key={athlete.id}
           name={athlete.name}
           sport={athlete.sport}
           image={athlete.image}
           followerCount={athlete.followerCount}
           imageGradient={athlete.imageGradient}
           isTeam={athlete.isTeam}
           isRecommended={athlete.isRecommended}
         />
       ))}
     </div>
   </div>
 );
}
