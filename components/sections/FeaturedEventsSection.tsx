// src/components/sections/FeaturedEventsSection.tsx
import React from "react";
import { ChevronRight, Trophy, Calendar, MapPin } from "lucide-react";

interface Event {
  id: string;
  title: string;
  sport: string;
  date: Date;
  location: string;
  imageGradient?: string;
  isHighlight?: boolean;
}

interface FeaturedEventsSectionProps {
  events: Event[];
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

export default function FeaturedEventsSection({ events }: FeaturedEventsSectionProps) {
  const sortedEvents = [...events].sort((a, b) => a.date.getTime() - b.date.getTime());
  const featuredEvent = sortedEvents[0]; // 直近のイベント
  const otherEvents = sortedEvents.slice(1, 4); // 残り3件

  return (
    <div className="mx-4 rounded-2xl overflow-hidden border border-amber-400/30 bg-gradient-to-b from-amber-400/10 to-transparent">
      {/* ヘッダー */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-amber-400/20">
            <Trophy className="h-4 w-4 text-amber-400" />
          </div>
          <h3 className="font-bold text-amber-400">近日開催の大会</h3>
        </div>
        <ChevronRight className="h-5 w-5 text-white/60" />
      </div>

      {/* メイン（直近のイベント） */}
      {featuredEvent && (
        <div className="p-3">
          <div className="rounded-xl overflow-hidden border border-white/10">
            <div
              className="h-32 w-full relative"
              style={{ background: featuredEvent.imageGradient }}
            >
              {/* 残り日数（大きめ） */}
              <div className="absolute top-3 left-3">
                <span className="text-sm px-2.5 py-1 rounded-lg bg-red-500 text-white font-bold shadow-lg">
                  {getDaysUntil(featuredEvent.date) === 0
                    ? "🔥 今日開催"
                    : getDaysUntil(featuredEvent.date) === 1
                    ? "🔥 明日開催"
                    : `あと${getDaysUntil(featuredEvent.date)}日`}
                </span>
              </div>
              
              {featuredEvent.isHighlight && (
                <div className="absolute top-3 right-3">
                  <span className="text-xs px-2 py-1 rounded bg-amber-400 text-black font-bold">
                    注目
                  </span>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <div className="text-[10px] text-white/70 mb-1">{featuredEvent.sport}</div>
                <div className="font-bold text-sm leading-tight">{featuredEvent.title}</div>
              </div>
            </div>
            
            <div className="p-2.5 bg-white/5 flex items-center gap-4 text-xs text-white/70">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                <span>{formatDate(featuredEvent.date)}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                <span>{featuredEvent.location}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* サブ（その他のイベント - 横スクロール） */}
      {otherEvents.length > 0 && (
        <div className="px-3 pb-3">
          <div className="text-[10px] text-white/50 mb-2 px-1">その他の大会</div>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            {otherEvents.map((event) => (
              <div
                key={event.id}
                className="flex-shrink-0 w-44 rounded-lg overflow-hidden border border-white/10 hover:border-white/20 transition-all"
              >
                <div
                  className="h-16 w-full relative"
                  style={{ background: event.imageGradient }}
                >
                  <div className="absolute top-1.5 left-1.5">
                    <span className={`text-[9px] px-1.5 py-0.5 rounded ${
                      getDaysUntil(event.date) <= 7 
                        ? "bg-red-500/90 text-white" 
                        : "bg-black/50 text-white/90"
                    }`}>
                      あと{getDaysUntil(event.date)}日
                    </span>
                  </div>
                </div>
                <div className="p-2">
                  <div className="text-[10px] text-white/60 mb-0.5">{event.sport}</div>
                  <div className="text-xs font-semibold leading-tight line-clamp-2">{event.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}