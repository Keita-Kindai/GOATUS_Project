// src/screens/DiscoverScreen.tsx
import React from "react";
import TopNav from "../components/layout/TopNav";
import SectionHeader from "../components/ui/SectionHeader";
import AdBanner from "../components/ui/AdBanner";
import RisingAthleteCard from "../components/cards/RisingAthleteCard";
import HorizontalScrollSection from "../components/ui/HorizontalScrollSection";
import CompactAthleteCard from "../components/cards/CompactAthleteCard";
import FeaturedEventsSection from "../components/sections/FeaturedEventsSection";

// 今日から相対的な日付を作成する関数
function getRelativeDate(daysFromNow: number): Date {
 const date = new Date();
 date.setDate(date.getDate() + daysFromNow);
 date.setHours(12, 0, 0, 0);
 return date;
}

// 大会データ
const upcomingEvents = [
 {
   id: "1",
   title: "第102回全国高校サッカー選手権大会 決勝",
   sport: "[サッカー]",
   date: getRelativeDate(3),
   image: "/iamges/soccer_1.jpg",
   location: "国立競技場",
   link: "https://www.kindai.ac.jp/",
   participants: ["大好少年","近代太郎"],
   imageGradient: "linear-gradient(135deg,#14532d,40%,#22c55e)",
   isHighlight: true,
 },
 {
   id: "2",
   title: "Bリーグ オールスター2025",
   sport: "[バスケ]",
   date: getRelativeDate(5),
   image: "/images/basketball.jpg",
   location: "さいたまスーパーアリーナ",
   link: "https://www.kindai.ac.jp/",
   participants: ["大好少年","近代太郎"],
   imageGradient: "linear-gradient(135deg,#581c87,40%,#a855f7)",
   isHighlight: true,
 },
 {
   id: "3",
   title: "日本卓球選手権大会",
   sport: "[卓球]",
   date: getRelativeDate(7),
   image: "/images/table_tennis.jpg",
   location: "東京体育館",
   link: "https://www.kindai.ac.jp/",
   participants: ["大好少年","近代太郎"],
   imageGradient: "linear-gradient(135deg,#1e3a8a,40%,#60a5fa)",
 },
 {
   id: "4",
   title: "大阪国際女子マラソン",
   sport: "[陸上]",
   date: getRelativeDate(14),
   image: "/images/track_and_field.jpg",
   location: "ヤンマースタジアム長居",
   link: "https://www.kindai.ac.jp/",
   participants: ["大好少年","近代太郎"],
   imageGradient: "linear-gradient(135deg,#7c2d12,40%,#f97316)",
   isHighlight: true,
 },
 {
   id: "5",
   title: "全日本スキー選手権大会",
   sport: "[スキー]",
   date: getRelativeDate(21),
   image: "/images/ski.webp",
   location: "北海道ニセコ",
   link: "https://www.kindai.ac.jp/",
   participants: ["大好少年","近代太郎"],
   imageGradient: "linear-gradient(135deg,#0c4a6e,40%,#0ea5e9)",
 },
];

// おすすめアスリートデータ
const recommendedAthletes = [
 { id: "1", name: "山田 太郎", sport: "[陸上]", followerCount: 1234, image:"/images/track_and_field.jpg", imageGradient: "linear-gradient(135deg,#1e3a8a,40%,#60a5fa)", isRecommended: true },
 { id: "2", name: "鈴木 花子", sport: "[競泳]", followerCount: 2567, image:"/images/swimming.jpg", imageGradient: "linear-gradient(135deg,#0c4a6e,40%,#0ea5e9)", isRecommended: true },
 { id: "3", name: "東京大学サッカー部", sport: "[サッカー]", followerCount: 5432, image:"/images/sports_man_sweating.png", imageGradient: "linear-gradient(135deg,#14532d,40%,#22c55e)", isTeam: true },
 { id: "4", name: "佐藤 健", sport: "[柔道]", followerCount: 892, image:"/images/Judo.jpg", imageGradient: "linear-gradient(135deg,#7c2d12,40%,#f97316)", isRecommended: true },
 { id: "5", name: "田中 美咲", sport: "[テニス]", followerCount: 1543, image:"/images/sports_woman.png", imageGradient: "linear-gradient(135deg,#581c87,40%,#a855f7)", isRecommended: true },
];

// 新着アスリートデータ
const newAthletes = [
 { id: "1", name: "近畿大学体育会", sport: "[陸上]", followerCount: 320, image:"/images/track_and_field.jpg", imageGradient: "linear-gradient(135deg,#1f2937,40%,#6b7280)", isTeam: true, isNew: true },
 { id: "2", name: "佐伯 さな", sport: "[セーリング]", followerCount: 156, image:"/images/sports_woman.png", imageGradient: "linear-gradient(135deg,#0c4a6e,40%,#0ea5e9)", isNew: true },
 { id: "3", name: "レッドハリケーンズ", sport: "[ラグビー]", followerCount: 890, image:"/images/sports_rugby.png", imageGradient: "linear-gradient(135deg,#7f1d1d,40%,#ef4444)", isTeam: true, isNew: true },
 { id: "4", name: "GOATUS運営チーム", sport: "[その他]", followerCount: 329, image:"/images/goatus_logo.png", imageGradient: "linear-gradient(135deg,#374151,40%,#9ca3af)", isNew: true },
 { id: "5", name: "中村 翔太", sport: "[野球]", followerCount: 421, image:"/images/sports_rugby.png", imageGradient: "linear-gradient(135deg,#14532d,40%,#22c55e)", isNew: true },
];

// 日付でソート
const sortedEvents = [...upcomingEvents].sort((a, b) => a.date.getTime() - b.date.getTime());

export default function DiscoverScreen() {
 return (
   <div>
     <TopNav withSearch />
     <div className="pb-28 space-y-4">
       {/* 急上昇アスリート */}
       <div>
         <SectionHeader title="急上昇アスリート" />
         <div className="px-4">
           <RisingAthleteCard />
         </div>
       </div>

       {/* 近日開催の大会（強調表示） */}
       <FeaturedEventsSection events={upcomingEvents} />

       <AdBanner />

       {/* おすすめアスリート（横スクロール） */}
       <HorizontalScrollSection title="おすすめアスリート">
         {recommendedAthletes.map((athlete) => (
           <CompactAthleteCard
             key={athlete.id}
             name={athlete.name}
             sport={athlete.sport}
             followerCount={athlete.followerCount}
             image={athlete.image}
             imageGradient={athlete.imageGradient}
             isTeam={athlete.isTeam}
             isRecommended={athlete.isRecommended}
           />
         ))}
       </HorizontalScrollSection>

       {/* 新着アスリート（横スクロール） */}
       <HorizontalScrollSection title="新着アスリート">
         {newAthletes.map((athlete) => (
           <CompactAthleteCard
             key={athlete.id}
             name={athlete.name}
             sport={athlete.sport}
             image={athlete.image}
             followerCount={athlete.followerCount}
             imageGradient={athlete.imageGradient}
             isTeam={athlete.isTeam}
             isNew={athlete.isNew}
           />
         ))}
       </HorizontalScrollSection>
     </div>
   </div>
 );
}
