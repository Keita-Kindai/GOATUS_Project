// src/screens/ProfileScreen.tsx
import React from "react";
import TopNav from "../components/layout/TopNav";
import Avatar from "../components/ui/Avatar";
import AdBanner from "../components/ui/AdBanner";

export default function ProfileScreen() {
  return (
    <div>
      {/* Top Navigation Bar */}
      <TopNav />
      
      <div className="px-4 pb-28"> {/* pb-28: ボトムタブ用のパディング */}
        
        {/* プロフィール概要 */}
        <div className="flex items-center gap-4 mt-2">
          <Avatar label="G" />
          <div>
            <div className="text-2xl font-bold">マイページ</div>
            <div className="text-sm text-white/60">0 フォロー中 ・ 0 パーソナルスポンサー</div>
          </div>
        </div>

        {/* アスリートカードのセクション */}
        <div className="mt-6 rounded-2xl border border-white/10 p-6 text-center">
          <div className="mx-auto h-14 w-20 rounded-lg bg-white/5 grid place-items-center text-2xl">🪪</div>
          <div className="mt-4 font-semibold">アスリートカード</div>
          <p className="text-sm text-white/60 mt-1">好きなアスリートのパーソナルスポンサーになってアスリートカードをゲットしよう！</p>
        </div>

        {/* 広告バナー */}
        <AdBanner label="NetApp" />
      </div>
    </div>
  );
}