// src/components/sections/UpcomingEventsSection.tsx
import React from "react";
import SectionHeader from "../ui/SectionHeader";
import UpcomingEventCard from "../cards/UpcomingEventCard";

interface Event {
 id: string;
 title: string;
 sport: string;
 date: Date;
 location: string;
 participantCount?: number;
 imageGradient?: string;
 isHighlight?: boolean;
}
// 今日から相対的な日付を作成する関数
function getRelativeDate(daysFromNow: number): Date {
 const date = new Date();
 date.setDate(date.getDate() + daysFromNow);
 date.setHours(12, 0, 0, 0);
 return date;
}

// サンプルデータ（今日からの相対日付で設定）
const upcomingEvents: Event[] = [
 {
   id: "1",
   title: "第102回全国高校サッカー選手権大会 決勝",
   sport: "[サッカー]",
   date: getRelativeDate(3), // 3日後
   location: "国立競技場",
   participantCount: 45000,
   imageGradient: "linear-gradient(135deg,#14532d,40%,#22c55e)",
   isHighlight: true,
 },
 {
   id: "2",
   title: "大阪国際女子マラソン 2025",
   sport: "[陸上競技]",
   date: getRelativeDate(14), // 14日後
   location: "ヤンマースタジアム長居",
   participantCount: 15000,
   imageGradient: "linear-gradient(135deg,#7c2d12,40%,#f97316)",
   isHighlight: true,
 },
 {
   id: "3",
   title: "日本卓球選手権大会",
   sport: "[卓球]",
   date: getRelativeDate(7), // 7日後
   location: "東京体育館",
   participantCount: 8000,
   imageGradient: "linear-gradient(135deg,#1e3a8a,40%,#60a5fa)",
 },
 {
   id: "4",
   title: "全日本スキー選手権大会",
   sport: "[スキー]",
   date: getRelativeDate(21), // 21日後
   location: "北海道ニセコ",
   participantCount: 3000,
   imageGradient: "linear-gradient(135deg,#0c4a6e,40%,#0ea5e9)",
 },
 {
   id: "5",
   title: "Bリーグ オールスター2025",
   sport: "[バスケットボール]",
   date: getRelativeDate(5), // 5日後
   location: "さいたまスーパーアリーナ",
   participantCount: 22000,
   imageGradient: "linear-gradient(135deg,#581c87,40%,#a855f7)",
   isHighlight: true,
 },
 {
   id: "6",
   title: "全日本柔道選手権大会",
   sport: "[柔道]",
   date: getRelativeDate(30), // 30日後
   location: "日本武道館",
   participantCount: 10000,
   imageGradient: "linear-gradient(135deg,#7f1d1d,40%,#ef4444)",
 },
];

// 日付でソート（早い順）
function sortEventsByDate(events: Event[]): Event[] {
 return [...events].sort((a, b) => a.date.getTime() - b.date.getTime());
}

export default function UpcomingEventsSection() {
 // 日付順でソート
 const sortedEvents = sortEventsByDate(upcomingEvents);

 return (
   <div className="space-y-2">
     <SectionHeader title="近日開催の大会" />
     <div className="px-4 grid grid-cols-2 gap-4">
       {sortedEvents.map((event) => (
         <UpcomingEventCard
           key={event.id}
           title={event.title}
           sport={event.sport}
           date={event.date}
           location={event.location}
           participantCount={event.participantCount}
           imageGradient={event.imageGradient}
           isHighlight={event.isHighlight}
         />
       ))}
     </div>
   </div>
 );
}
