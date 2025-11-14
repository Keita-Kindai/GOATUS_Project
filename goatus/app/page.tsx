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

    <div className={cx("h-screen text-white flex flex-col", bg)}>
      
      <div className="mx-auto w-full max-w-[480px] relative flex-grow overflow-y-auto">
        
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
            <div className="px-6 py-10 text-center space-y-4">
              <div className="text-4xl">🤝</div>
              <div className="text-lg">コミュニティ（ダミー）</div>
              <p className="text-white/60">コミュニティ画面の外観のみ。</p>
            </div>
          </div>
        )}

        {active === "mypage" && <div className={minContentHeight}><ProfileScreen /></div>}
        
        {active === "org" && <OrgProfileScreen onBack={() => setActive("feed")} />}
      </div>

      <BottomTab active={active} setActive={setActive} />
    </div>
  );
}