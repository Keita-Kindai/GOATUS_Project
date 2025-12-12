// src/screens/ProfileScreen.tsx
import React, { useState } from "react";
import TopNav from "../components/layout/TopNav";
import Avatar from "../components/ui/Avatar";
import AdBanner from "../components/ui/AdBanner";
import { Calendar, MapPin, Users, Edit2, Trophy, Image as ImageIcon } from "lucide-react";
import { cx } from "../components/colors";

// プロフィールデータ
const profileData = {
  username: "unwyx",
  name: "おかだ",
  number: "#05",
  location: "Nara",
  school: "近大",
  posts: 1,
  followers: 307,
  following: 339,
  bio: "近畿大学情報学部\n社会情報学実習\n3B\n\n居住地: 大阪府",
};

// ギャラリー画像データ（スポーツ写真風のグラデーション）
const galleryImages = [
  { id: 1, gradient: "linear-gradient(135deg,#1e3a8a,40%,#60a5fa)", emoji: "🏃" },
  { id: 2, gradient: "linear-gradient(135deg,#7c2d12,40%,#f97316)", emoji: "⚽" },
  { id: 3, gradient: "linear-gradient(135deg,#14532d,40%,#22c55e)", emoji: "🏀" },
  { id: 4, gradient: "linear-gradient(135deg,#581c87,40%,#a855f7)", emoji: "🎾" },
  { id: 5, gradient: "linear-gradient(135deg,#0c4a6e,40%,#0ea5e9)", emoji: "🏊" },
  { id: 6, gradient: "linear-gradient(135deg,#7f1d1d,40%,#ef4444)", emoji: "🏐" },
];

// 大会データ
const upcomingEvents = [
  {
    id: 1,
    title: "全国大学対抗戦",
    date: "2025/01/25",
    location: "東京体育館",
    daysUntil: 13,
  },
  {
    id: 2,
    title: "関西学生選手権",
    date: "2025/02/10",
    location: "大阪城ホール",
    daysUntil: 29,
  },
  {
    id: 3,
    title: "春季トレーニング合宿",
    date: "2025/03/05",
    location: "和歌山",
    daysUntil: 52,
  },
];

// タブ切り替えカード用コンポーネント
function InfoTabsCard() {
  const [activeInfoTab, setActiveInfoTab] = useState<"posts" | "sponsor" | "achievements" | "events">("posts");

  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden">
      {/* タブヘッダー */}
      <div className="flex border-b border-white/10">
        <button
          onClick={() => setActiveInfoTab("posts")}
          className={cx(
            "flex-1 py-3 text-xs font-medium transition-colors relative",
            activeInfoTab === "posts" ? "text-white bg-white/5" : "text-white/60"
          )}
        >
          <div className="flex items-center justify-center gap-1.5">
            <ImageIcon className="h-3.5 w-3.5" />
            <span>ポスト</span>
          </div>
          {activeInfoTab === "posts" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400" />
          )}
        </button>
        <button
          onClick={() => setActiveInfoTab("sponsor")}
          className={cx(
            "flex-1 py-3 text-xs font-medium transition-colors relative",
            activeInfoTab === "sponsor" ? "text-white bg-white/5" : "text-white/60"
          )}
        >
          <div className="flex items-center justify-center gap-1.5">
            <Users className="h-3.5 w-3.5" />
            <span>スポンサー</span>
          </div>
          {activeInfoTab === "sponsor" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400" />
          )}
        </button>
        <button
          onClick={() => setActiveInfoTab("achievements")}
          className={cx(
            "flex-1 py-3 text-xs font-medium transition-colors relative",
            activeInfoTab === "achievements" ? "text-white bg-white/5" : "text-white/60"
          )}
        >
          <div className="flex items-center justify-center gap-1.5">
            <Trophy className="h-3.5 w-3.5" />
            <span>実績</span>
          </div>
          {activeInfoTab === "achievements" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400" />
          )}
        </button>
        <button
          onClick={() => setActiveInfoTab("events")}
          className={cx(
            "flex-1 py-3 text-xs font-medium transition-colors relative",
            activeInfoTab === "events" ? "text-white bg-white/5" : "text-white/60"
          )}
        >
          <div className="flex items-center justify-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            <span>直近の大会</span>
          </div>
          {activeInfoTab === "events" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-400" />
          )}
        </button>
      </div>

      {/* タブコンテンツ */}
      <div className="p-6">
        {activeInfoTab === "posts" && (
          <div className="py-2">
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((img) => (
                <div
                  key={img.id}
                  className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition relative"
                  style={{ background: img.gradient }}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-4xl">
                    {img.emoji}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeInfoTab === "sponsor" && (
          <div className="text-center py-6">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 mb-3 text-5xl">
                💰
              </div>
            </div>
            <div className="text-4xl font-bold text-emerald-400 mb-2">0</div>
            <div className="text-sm text-white/60 mb-6">人のスポンサー</div>
            <button className="w-full max-w-xs mx-auto py-3 text-sm bg-emerald-600 hover:bg-emerald-700 rounded-lg transition font-semibold">
              スポンサーを募集
            </button>
            
            {/* スポンサー特典イラスト */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="text-xs text-white/50 mb-3">スポンサー特典</div>
              <div className="flex justify-center gap-4">
                <div className="text-center">
                  <div className="h-12 w-12 rounded-full bg-white/5 mx-auto mb-2 flex items-center justify-center text-2xl">
                    🎁
                  </div>
                  <div className="text-[10px] text-white/60">限定グッズ</div>
                </div>
                <div className="text-center">
                  <div className="h-12 w-12 rounded-full bg-white/5 mx-auto mb-2 flex items-center justify-center text-2xl">
                    📸
                  </div>
                  <div className="text-[10px] text-white/60">写真プレゼント</div>
                </div>
                <div className="text-center">
                  <div className="h-12 w-12 rounded-full bg-white/5 mx-auto mb-2 flex items-center justify-center text-2xl">
                    💌
                  </div>
                  <div className="text-[10px] text-white/60">メッセージ</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeInfoTab === "achievements" && (
          <div className="py-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-3xl">🏆</div>
              <h4 className="font-semibold">実績</h4>
            </div>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-amber-400/10 to-transparent border border-amber-400/20">
                <div className="text-2xl">🥇</div>
                <div>
                  <div className="font-semibold text-amber-400">2024年 学内大会</div>
                  <div className="text-xs text-white/60">優勝</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-emerald-400/10 to-transparent border border-emerald-400/20">
                <div className="text-2xl">🥉</div>
                <div>
                  <div className="font-semibold text-emerald-400">近畿大会</div>
                  <div className="text-xs text-white/60">ベスト8</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-400/10 to-transparent border border-blue-400/20">
                <div className="text-2xl">🎖️</div>
                <div>
                  <div className="font-semibold text-blue-400">全国大会</div>
                  <div className="text-xs text-white/60">出場経験あり</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeInfoTab === "events" && (
          <div className="py-2">
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => {
                const eventEmojis = ["🏟️", "🎯", "⛰️"];
                return (
                  <div
                    key={event.id}
                    className="rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition cursor-pointer"
                  >
                    {/* イベント画像バナー */}
                    <div className="h-20 bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-4xl relative">
                      {eventEmojis[index]}
                      <div className="absolute top-2 right-2">
                        <div className={cx(
                          "text-xs px-2.5 py-1 rounded-lg backdrop-blur-sm font-semibold",
                          event.daysUntil <= 7 
                            ? "bg-red-500/90 text-white" 
                            : "bg-black/50 text-white/90"
                        )}>
                          {event.daysUntil}日後
                        </div>
                      </div>
                    </div>
                    
                    {/* イベント情報 */}
                    <div className="p-4">
                      <div className="font-semibold text-sm mb-3">{event.title}</div>
                      <div className="flex items-center gap-3 text-xs text-white/60">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="w-full mt-4 py-2.5 text-sm text-blue-400 hover:bg-white/5 rounded-lg transition flex items-center justify-center gap-2">
              <span>すべての大会を見る</span>
              <span>→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProfileScreen() {
  return (
    <div className="min-h-screen text-white">
      <TopNav />
      
      <div className="pb-28">
        {/* ヘッダー（インスタ風） */}
        <div className="px-4 pt-4">
          <div className="flex items-center justify-between mb-4">
            <div className="text-lg font-semibold">{profileData.username}</div>
            <div className="flex gap-2">
              <button className="text-sm hover:opacity-70">プロフィールを編集</button>
              <button className="text-sm hover:opacity-70">アーカイブを表示</button>
            </div>
          </div>

          {/* プロフィール情報 */}
          <div className="flex items-start gap-6 mb-4">
            <div className="flex-shrink-0">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-slate-300 to-slate-500 flex items-center justify-center text-2xl font-bold text-slate-900">
                G
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex gap-8 mb-4">
                <div className="text-center">
                  <div className="font-semibold">{profileData.posts}</div>
                  <div className="text-sm text-white/60">投稿</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">{profileData.followers}</div>
                  <div className="text-sm text-white/60">フォロワー</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">{profileData.following}</div>
                  <div className="text-sm text-white/60">フォロー中</div>
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="font-semibold">{profileData.name}</div>
                <div className="text-sm text-blue-400">{profileData.number}</div>
                <div className="text-sm">{profileData.location}</div>
                <div className="text-sm">{profileData.school}</div>
              </div>
            </div>
          </div>
        </div>

        {/* メインコンテンツ：自己紹介とタブカードのみ */}
        <div className="max-w-2xl mx-auto px-4 mt-6 space-y-4">
          {/* 自己紹介 */}
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center font-bold text-sm">
                    G
                  </div>
                  <h3 className="font-semibold text-sm">自己紹介</h3>
                </div>
                <button className="p-1 hover:bg-white/5 rounded">
                  <Edit2 className="h-4 w-4 text-white/60" />
                </button>
              </div>
              
              <div className="bg-white/5 rounded-lg p-3 text-sm leading-relaxed whitespace-pre-line">
                {profileData.bio}
              </div>
            </div>
          </div>

          {/* タブ切り替えカード（カード・スポンサー・実績） */}
          <InfoTabsCard />
        </div>

        {/* NetApp 広告 */}
        <div className="mt-6">
          <AdBanner label="NetApp" />
        </div>
      </div>
    </div>
  );
}