// app/page.tsx
"use client"
import React, { useState } from "react";
import {
  Plus,
  Handshake,
} from "lucide-react";

// Components
import { cx, bg } from "../components/colors";
import BottomTab from "../components/layout/BottomTab";
import TopNav from "../components/layout/TopNav";

// Screens
import FeedScreen from "../screens/FeedScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import ProfileScreen from "../screens/ProfileScreen";
import OrgProfileScreen from "../screens/OrgProfileScreen";

export default function GoatusUiMock() {
  const [active, setActive] = useState("feed");

  const minContentHeight = "min-h-[calc(100svh-140px)]";

  return (

    <div className={cx("h-screen text-white flex flex-col items-center", bg)}>
      
      <div className="w-full max-w-[480px] h-full relative overflow-y-auto flex flex-col">
        
        {active === "feed" && <FeedScreen onOpenOrg={() => setActive("org")} />}
        {active === "discover" && <DiscoverScreen />}

        {active === "post" && (
          <div className={minContentHeight}>
            <TopNav />
            <div className="px-6 py-10 text-center space-y-4">
              <div className="text-4xl">➕</div>
              <div className="text-lg">投稿のプレースホルダー</div>
              <p className="text-white/60">実装不要とのことなので、ここはダミー画面です。</p>
            </div>
          </div>
        )}

        {active === "community" && (
  <div className={minContentHeight}>
    <TopNav />

    {/* 1. 一番上：コミュニティ（中央） */}
    <div className="px-6 py-4 flex justify-center">
      <h1 className="text-white text-xl font-bold text-center">コミュニティ</h1>
    </div>

    {/* 2. 二番目：トークルーム（左寄せ） */}
    <div className="px-6 py-2">
      <h2 className="text-white text-lg font-semibold text-left">トークルーム</h2>
    </div>

    {/* 3. 三番目：+ 新しいチャットを始める（中央） */}
<div className="px-6 py-6 flex justify-center">
  <button
    className="
      text-white text-base font-medium 
      flex items-center gap-2
      border border-white               /* ← 白線の四角 */
      rounded-lg                        /* ← 角丸 */
      px-4 py-2                          /* ← 余白 */
      bg-white/5                         /* ← わずかに背景を乗せたい場合（任意）*/
    "
  >
    <span className="text-2xl"></span>＋　あたらしいチャットを始める　　　　　　　　　　
  </button>
</div>


    {/* 追加：下に元のダミー表記（必要なら残す） */}
    <div className="px-6 py-10 text-center space-y-4">
      <div className="text-4xl"></div>
      <p className="text-white/60"></p>
    </div>
  </div>
)}

        {active === "mypage" && <div className={minContentHeight}><ProfileScreen /></div>}
        
        {active === "org" && <OrgProfileScreen onBack={() => setActive("feed")} />}

      </div>
      
      <div className="absolute bottom-0 w-full max-w-[480px]">
        <BottomTab active={active} setActive={setActive} />
      </div>
    </div>
  );
}