// src/components/cards/UpcomingEventCard.tsx
import React from "react";
import { Calendar, MapPin, Users, ChevronRight } from "lucide-react";

interface UpcomingEventCardProps {
  title: string;
  sport: string;
  date: Date;
  location: string;
  participantCount?: number;
  imageGradient?: string;
  isHighlight?: boolean;
}

// 日付をフォーマットする関数
function formatDate(date: Date): string {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
  const weekday = weekdays[date.getDay()];
  return `${month}/${day}（${weekday}）`;
}

// 残り日数を計算する関数
function getDaysUntil(date: Date): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const eventDate = new Date(date);
  eventDate.setHours(0, 0, 0, 0);
  const diffTime = eventDate.getTime() - today.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export default function UpcomingEventCard({
  title,
  sport,
  date,
  location,
  participantCount,
  imageGradient = "linear-gradient(135deg,#312e81,40%,#6366f1)",
  isHighlight = false,
}: UpcomingEventCardProps) {
  const daysUntil = getDaysUntil(date);

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all">
      {/* イベント画像エリア */}
      <div
        className="aspect-[16/9] w-full relative"
        style={{ background: imageGradient }}
      >
        {/* 日数バッジ */}
        <div className="absolute top-3 left-3 z-10">
          {daysUntil <= 7 ? (
            <span className="text-[11px] px-2 py-1 rounded-md bg-red-500/90 text-white font-semibold backdrop-blur-sm">
              {daysUntil === 0 ? "今日" : daysUntil === 1 ? "明日" : `あと${daysUntil}日`}
            </span>
          ) : (
            <span className="text-[11px] px-2 py-1 rounded-md bg-white/10 border border-white/15 backdrop-blur-sm">
              あと{daysUntil}日
            </span>
          )}
        </div>

        {/* 注目イベントバッジ */}
        {isHighlight && (
          <div className="absolute top-3 right-3 z-10">
            <span className="text-[11px] px-2 py-1 rounded-md bg-amber-400/90 text-black font-semibold backdrop-blur-sm">
              注目
            </span>
          </div>
        )}

        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* 競技カテゴリ */}
        <div className="absolute bottom-3 left-3 text-xs text-white/80">
          {sport}
        </div>
      </div>

      {/* 情報エリア */}
      <div className="p-3 space-y-2">
        <div className="font-semibold text-sm leading-tight line-clamp-2">{title}</div>

        <div className="space-y-1.5">
          {/* 日付 */}
          <div className="flex items-center gap-2 text-xs text-white/70">
            <Calendar className="h-3.5 w-3.5" />
            <span>{formatDate(date)}</span>
          </div>

          {/* 場所 */}
          <div className="flex items-center gap-2 text-xs text-white/70">
            <MapPin className="h-3.5 w-3.5" />
            <span className="truncate">{location}</span>
          </div>

          {/* 参加者数 */}
          {participantCount !== undefined && (
            <div className="flex items-center gap-2 text-xs text-white/70">
              <Users className="h-3.5 w-3.5" />
              <span>{participantCount.toLocaleString()}人参加予定</span>
            </div>
          )}
        </div>

        {/* 詳細ボタン */}
        <button className="w-full mt-2 flex items-center justify-center gap-1 text-xs py-2 rounded-lg border border-white/15 hover:bg-white/5 transition">
          <span>詳細を見る</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}