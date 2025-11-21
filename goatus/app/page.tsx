// app/page.tsx
"use client"
import React, { useState } from "react";
import {
  Plus,
  Handshake,
  User,
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


// ------------------------------------------------------------
// GOATUS — UI Mock (JSX version without TypeScript annotations)
// Drop this into Next.js `app/page.jsx` or `app/page.tsx`.
// ------------------------------------------------------------

export default function GoatusUiMock() {
  const [active, setActive] = useState("feed");

  return (
    <div className={cx("min-h-svh text-white", bg)}>
      <div className="mx-auto w-full max-w-[480px] relative">{/* phone width */}
        {active === "feed" && <FeedScreen onOpenOrg={() => setActive("org")} />}
        {active === "discover" && <DiscoverScreen />}
        {active === "post" && (
          <div>
            <TopNav />
            <div className="px-6 py-10 text-center space-y-4">
              <div className="text-4xl">➕</div>
              <div className="text-lg">投稿のプレースホルダー</div>
              <p className="text-white/60">実装不要とのことなので、ここはダミー画面です。</p>
            </div>
          </div>
        )}
        {active === "community" && (
          <div>
            <TopNav />
            <div className="px-6 py-10 text-center space-y-4">
              <div className="text-4xl">🤝</div>
              <div className="text-lg">コミュニティ（ダミー）</div>
              <p className="text-white/60">コミュニティ画面の外観のみ。</p>
            </div>
          </div>
        )}
        {active === "mypage" && <ProfileScreen />}
        {active === "org" && <OrgProfileScreen onBack={() => setActive("feed")} />}

        <BottomTab active={active} setActive={setActive} />
      </div>
    </div>
  );
}