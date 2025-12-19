// src/screens/ProfileScreen.tsx
import React, { useState } from "react";
import TopNav from "../components/layout/TopNav";
import Image from "next/image";
import Avatar from "../components/ui/Avatar";
import AdBanner from "../components/ui/AdBanner";
import { Calendar, MapPin, Users, Edit2, Trophy, CreditCard } from "lucide-react";
import { cx } from "../components/colors";

// プロフィールデータ
const profileData = {
  username: "Soccer_man",
  name: "サッカー太郎",
  number: "#05",
  location: "活動拠点: Nara",
  school: "出身大学: 近大",
  posts: 1,
  followers: 307,
  following: 339,
  bio: "近畿大学情報学部\n社会情報学実習\n3B\n\n居住地: 大阪府",
};

// タブ切り替えカード用コンポーネント
function InfoTabsCard() {
  const [activeInfoTab, setActiveInfoTab] = useState<"card" | "sponsor" | "achievements" | "portfolio">("card");

  return (
    <div className="rounded-2xl border border-white/10 overflow-hidden">
      {/* タブヘッダー */}
      <div className="flex border-b border-white/10">
        <button
          onClick={() => setActiveInfoTab("card")}
          className={cx(
            "flex-1 py-3 text-xs font-medium transition-colors relative",
            activeInfoTab === "card" ? "text-white bg-white/5" : "text-white/60"
          )}
        >
          <div className="flex items-center justify-center gap-1.5 cursor-pointer">
            <CreditCard className="h-3.5 w-3.5" />
            <span>カード</span>
          </div>
          {activeInfoTab === "card" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400" />
          )}
        </button>
        <button
          onClick={() => setActiveInfoTab("sponsor")}
          className={cx(
            "flex-1 py-3 text-xs font-medium transition-colors relative",
            activeInfoTab === "sponsor" ? "text-white bg-white/5" : "text-white/60"
          )}
        >
          <div className="flex items-center justify-center gap-1.5 cursor-pointer">
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
          <div className="flex items-center justify-center gap-1.5 cursor-pointer">
            <Trophy className="h-3.5 w-3.5" />
            <span>実績</span>
          </div>
          {activeInfoTab === "achievements" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400" />
          )}
        </button>

        <button
          onClick={() => setActiveInfoTab("portfolio")}
          className={cx(
            "flex-1 py-3 text-xs font-medium transition-colors relative",
            activeInfoTab === "portfolio" ? "text-white bg-white/5" : "text-white/60"
          )}
        >
          <div className="flex items-center justify-center gap-1.5 cursor-pointer">
            <MapPin className="h-3.5 w-3.5" />
            <span>私について</span>
          </div>
          {activeInfoTab === "portfolio" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400" />
          )}
        </button>
      </div>

      {/* タブコンテンツ */}
      <div className="p-6">
        {activeInfoTab === "card" && (
          <div className="text-center py-6">
            <div className="mx-auto h-20 w-24 rounded-lg bg-white/5 grid place-items-center text-4xl mb-4">
              🪪
            </div>
            <div className="font-semibold text-lg mb-3">アスリートカード</div>
            <p className="text-sm text-white/60 leading-relaxed max-w-md mx-auto">
              好きなアスリートのパーソナルスポンサーになってアスリートカードをゲットしよう！
            </p>
          </div>
        )}

        {activeInfoTab === "sponsor" && (
          <div className="text-center py-6">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald-400/20 mb-3">
                <Users className="h-8 w-8 text-emerald-400" />
              </div>
            </div>
            <div className="text-4xl font-bold text-emerald-400 mb-2">0</div>
            <div className="text-sm text-white/60 mb-6">人のスポンサー</div>
            <button className="w-full max-w-xs mx-auto py-3 text-sm bg-emerald-600 hover:bg-emerald-700 rounded-lg transition font-semibold">
              スポンサーを募集
            </button>
          </div>
        )}

        {activeInfoTab === "achievements" && (
          <div className="py-4">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="h-5 w-5 text-amber-400" />
              <h4 className="font-semibold">実績</h4>
            </div>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                <div className="h-2 w-2 rounded-full bg-amber-400 flex-shrink-0" />
                <span>2024年 学内大会 優勝</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                <div className="h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />
                <span>近畿大会 ベスト8</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                <div className="h-2 w-2 rounded-full bg-blue-400 flex-shrink-0" />
                <span>全国大会 出場経験あり</span>
              </div>
            </div>
          </div>
        )}

        {activeInfoTab === "portfolio" && (
          <div className="py-4">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-sky-400" />
              <h4 className="font-semibold">私について</h4>
            </div>

            <div className="space-y-4 text-sm text-white/80">
              <section>
                <h5 className="font-semibold mb-2">私について</h5>
                <p className="leading-relaxed">大学で情報学を専攻しながら陸上競技（短距離）に取り組んでいます。トレーニングデータの解析を通じて効率的にパフォーマンスを上げることに関心があり、チームでの指導経験もあります。</p>
              </section>

              <section>
                <h5 className="font-semibold mb-2">今までやってきたこと</h5>
                <ul className="list-disc list-inside space-y-1">
                  <li>2024年 学内大会 優勝（100m）</li>
                  <li>全国大会出場経験あり（2019）</li>
                  <li>高校生向けトレーニングプログラムの設計・指導（チームの平均タイムを改善）</li>
                  <li>自主開発：トレーニングログアプリ（React + Firebase）を制作・運用</li>
                </ul>
              </section>

              <section>
                <h5 className="font-semibold mb-2">これからの目標</h5>
                <p className="leading-relaxed">国内大会で上位入賞し、将来的には国際大会での活躍を目指します。スポーツ×テクノロジーの分野で、データに基づくトレーニング支援を広めたいと考えています。</p>
              </section>

              <div className="flex flex-wrap items-center gap-3">
                <a className="text-sky-400 underline text-sm" href="#">作品一覧を見る</a>
                <button className="py-2 px-4 bg-sky-600 hover:bg-sky-700 rounded-lg text-sm font-semibold">編集する</button>
              </div>
            </div>
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
                <Image src={"/images/sports_soccer_man.png"} alt="Test" width={70} height={40} className="aspect-16/10 w-full"></Image>
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
      </div>
    </div>
  );
}