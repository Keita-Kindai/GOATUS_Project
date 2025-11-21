// app/page.tsx
"use client"
import React, { useState, useEffect } from "react"; 
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
import ProfileEditScreen from "../screens/ProfileEditScreen";

// ★ Server Actionの読み込み関数と保存関数をインポート
import { readProfileData, saveProfileData } from "../actions/profileActions"; 

// ------------------------------------------------------------
// ロード中の初期データ（読み込みが完了するまで表示）
// ------------------------------------------------------------
const LOADING_PROFILE_DATA = {
  accountName: "ロード中...",
  residence: "...",
  bio: "ファイルからデータ読み込み中です。しばらくお待ちください。",
};

// ------------------------------------------------------------
// GOATUS — UI Mock (Server Actionでファイル書き込み対応)
// ------------------------------------------------------------

export default function GoatusUiMock() {
  const [active, setActive] = useState("feed");
  
  // ★ 初期値を設定し、ロード状態を管理
  const [profileData, setProfileData] = useState(LOADING_PROFILE_DATA);
  const [isLoading, setIsLoading] = useState(true);

  // ★ 起動時にServer Actionを使ってデータをファイルから読み込む
  useEffect(() => {
    const loadData = async () => {
      // Server Action (readProfileData) を呼び出し、サーバーでファイルアクセス
      const data = await readProfileData();
      setProfileData(data);
      setIsLoading(false);
    };
    loadData();
  }, []); 

  // ★ データを保存する関数をカスタマイズ (Server Actionを呼び出し)
  const handleProfileSave = async (data) => {
    // 1. 状態を更新して、画面に即時反映
    setProfileData(data); 

    // 2. Server Actionを呼び出し、ファイルに直接書き込む
    const result = await saveProfileData(data);

    if (result.success) {
      console.log("✅ ファイルへの書き込みが完了しました:", result.message);
    } else {
      console.error("❌ ファイルへの書き込みに失敗しました:", result.message);
    }
  };


  // ロード中の表示
  if (isLoading) {
      return (
        <div className={cx("h-screen text-white flex flex-col items-center justify-center", bg)}>
            <p>ファイルからデータ読み込み中...</p>
        </div>
      );
  }

  // レイアウト修正: TopNavとBottomTabの高さを引いた最小高さをコンテンツエリアに設定
  const minContentHeight = "min-h-[calc(100svh-140px)]";

  return (
    <div className={cx("h-screen text-white flex flex-col items-center", bg)}>
      
      <div className="w-full max-w-[480px] h-full relative overflow-y-auto flex flex-col">
        
        {active === "feed" && <FeedScreen onOpenOrg={() => setActive("org")} />}
        {active === "discover" && <DiscoverScreen />}

        {/* 投稿画面 */}
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

        {/* コミュニティ画面 */}
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

        {/* マイページ画面 */}
        {active === "mypage" && (
          <div className={minContentHeight}>
            <ProfileScreen 
              profile={profileData} 
              onEdit={() => setActive("edit_profile")} 
            />
          </div>
        )}
        
        {/* プロフィール編集画面 */}
        {active === "edit_profile" && (
          <div className={minContentHeight}>
            <ProfileEditScreen
              profile={profileData}
              onSave={handleProfileSave} // ★ Server Actionを呼び出す関数を適用
              onBack={() => setActive("mypage")}
            />
          </div>
        )}
        
        {active === "org" && <OrgProfileScreen onBack={() => setActive("feed")} />}
      </div>

      {/* BottomTab */}
      <div className="absolute bottom-0 w-full max-w-[480px]">
        <BottomTab active={active} setActive={setActive} />
      </div>
    </div>
  );
}