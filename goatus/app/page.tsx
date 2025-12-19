// app/page.tsx
"use client"
import React, { useState, useEffect } from "react"; 
import { Plus, Handshake } from "lucide-react";

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

// Server Action
import { readProfileData, saveProfileData } from "../actions/profileActions"; 

// ------------------------------------------------------------
// ロード中の初期データ
// ------------------------------------------------------------
const LOADING_PROFILE_DATA = {
  accountName: "ロード中...",
  residence: "...",
  bio: "ファイルからデータ読み込み中です。しばらくお待ちください。",
};

// ------------------------------------------------------------
// メインコンポーネント
// ------------------------------------------------------------
export default function GoatusUiMock() {
  const [active, setActive] = useState("feed");
  const [profileData, setProfileData] = useState(LOADING_PROFILE_DATA);
  const [isLoading, setIsLoading] = useState(true);

  // 起動時にサーバーからデータを読み込む
  useEffect(() => {
    const loadData = async () => {
      const data = await readProfileData();
      setProfileData(data);
      setIsLoading(false);
    };
    loadData();
  }, []); 

  // データ保存
  const handleProfileSave = async (data) => {
    setProfileData(data);
    const result = await saveProfileData(data);
    if (result.success) {
      console.log("✅ ファイルへの書き込みが完了:", result.message);
    } else {
      console.error("❌ 書き込み失敗:", result.message);
    }
  };

  if (isLoading) {
    return (
      <div className={cx("h-screen text-white flex flex-col items-center justify-center", bg)}>
        <p>ファイルからデータ読み込み中...</p>
      </div>
    );
  }

  // コンテンツ最小高さ
  const minContentHeight = "min-h-[calc(100svh-140px)]";

  return (
    <div className={cx("h-screen text-white flex flex-col items-center", bg)}>
      <div className="w-full max-w-[480px] h-full relative overflow-y-auto flex flex-col">
        
        {active === "feed" && <FeedScreen onOpenOrg={() => setActive("org")} onOpenProfile={(p) => { setProfileData({ accountName: p.accountName || p.username || "", residence: p.residence || "", bio: p.bio || "" }); setActive("mypage"); }} /> }
        {active === "discover" && <DiscoverScreen />}

        {/* 投稿モーダル（下寄せ + 上半分透明） */}
        {active === "post" && (
          <div className="fixed inset-0 z-[9999] flex flex-col justify-end pointer-events-none">

            {/* 上半分：透過部分 */}
            <div className="flex-1 bg-black/0 pointer-events-none"></div>

            {/* 下半分：投稿エリア */}
            <div className="bg-black w-full max-w-[480px] mx-auto rounded-t-2xl p-6 pointer-events-auto relative">

              {/* × ボタン */}
              <button
                onClick={() => setActive("feed")}
                className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl"
              >
                ×
              </button>

              {/* 見出し */}
              <h2 className="text-white font-bold text-lg mb-4">投稿を作成</h2>

              {/* テキストエリア */}
              <textarea
                className="w-full h-32 bg-black text-white placeholder-white/40 resize-none outline-none border border-white/20 rounded-xl p-4"
                placeholder="あなたの活動を共有"
              />

              {/* 下部：アイコンボタン + 限定公開 + 投稿ボタン */}
              <div className="flex justify-between items-center mt-4">

                {/* 左：写真、カメラ、絵文字 */}
                <div className="flex items-center space-x-4 text-white/80">
                  <button className="text-xl hover:text-white active:scale-95">🖼️</button>
                  <button className="text-xl hover:text-white active:scale-95">📷</button>
                  <button className="text-xl hover:text-white active:scale-95">😊</button>

                  {/* 限定公開チェック */}
                  <label className="flex items-center space-x-2 text-white text-sm">
                    <input type="checkbox" className="w-4 h-4 accent-blue-500" />
                    <span>限定公開</span>
                  </label>
                </div>

                {/* 投稿ボタン */}
                <button
                  onClick={() => setActive("feed")}
                  className="bg-blue-500 text-white font-bold px-4 py-2 rounded-full active:scale-95"
                >
                  投稿
                </button>
              </div>
            </div>
          </div>
        )}

        {/* コミュニティ画面 */}
        {active === "community" && (
          <div className={minContentHeight}>
            <TopNav />

            <div className="px-6 py-4 flex justify-center">
              <h1 className="text-white text-xl font-bold text-center">コミュニティ</h1>
            </div>

            <div className="px-6 py-2">
              <h2 className="text-white text-lg font-semibold text-left">トークルーム</h2>
            </div>

            <div className="px-6 py-6 flex justify-center">
              <button
                className="text-white text-base font-medium flex items-center gap-2 border border-white rounded-lg px-4 py-2 bg-white/5"
              >
                <span className="text-2xl"></span>＋　あたらしいチャットを始める
              </button>
            </div>

            <div className="px-6 py-10 text-center space-y-4">
              <div className="text-4xl"></div>
              <p className="text-white/60"></p>
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
              onSave={handleProfileSave}
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
