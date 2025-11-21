// src/screens/ProfileScreen.tsx
import React from "react";
import TopNav from "../components/layout/TopNav";
import Avatar from "../components/ui/Avatar";
import AdBanner from "../components/ui/AdBanner";
import { Edit2 } from "lucide-react";
import { subtext } from "../components/colors";

// Profileデータの型定義
interface ProfileData {
  accountName: string;
  residence: string;
  bio: string;
}

interface ProfileScreenProps {
  profile: ProfileData;
  onEdit: () => void;
}

export default function ProfileScreen({ profile, onEdit }: ProfileScreenProps) {
  return (
    <div>
      {/* Top Navigation Bar */}
      <TopNav />
      
      <div className="px-4 pb-28"> {/* pb-28: ボトムタブ用のパディング */}
        
        {/* プロフィール概要と編集ボタン */}
        <div className="flex items-start justify-between mt-2">
          <div className="flex items-center gap-4">
            <Avatar label={profile.accountName.charAt(0)} />
            <div>
              <div className="text-2xl font-bold">{profile.accountName}</div>
              <div className="text-sm text-white/60">0 フォロー中 ・ 0 パーソナルスポンサー</div>
            </div>
          </div>
          <button 
            onClick={onEdit}
            className="flex items-center gap-1 text-sm text-white/70 hover:text-white p-2 rounded-full"
          >
            <Edit2 className="h-4 w-4" />
            編集
          </button>
        </div>

        {/* 詳細情報 */}
        <div className="mt-4 space-y-3">
            <p className="text-sm text-white/80 font-semibold">自己紹介</p>
            <p className="text-white/60 whitespace-pre-wrap">{profile.bio}</p>
            
            <p className="text-sm text-white/80 font-semibold pt-2">居住地</p>
            <p className={subtext}>{profile.residence}</p>
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