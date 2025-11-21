// src/screens/ProfileEditScreen.tsx
import React, { useState } from "react";
import TopNav from "../components/layout/TopNav";
import { ChevronLeft } from "lucide-react";
// colorsモジュールが../components/colorsに存在することを前提としています
import { cx, bg, card, brand, subtext } from "../components/colors"; 

// Profileデータの型定義
interface ProfileData {
  accountName: string;
  residence: string;
  bio: string;
}

interface ProfileEditScreenProps {
  profile: ProfileData;
  onSave: (data: ProfileData) => void;
  onBack: () => void;
}

export default function ProfileEditScreen({ profile, onSave, onBack }: ProfileEditScreenProps) {
  const [formData, setFormData] = useState<ProfileData>(profile);

  // ★ 修正後の handleChange 関数
  // IME入力中にリセットされないよう、関数形式で以前の状態を参照し更新します
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // setFormDataでprevDataを参照し、非同期のstate更新が競合するのを防ぐ
    setFormData((prevData) => ({
      ...prevData,
      // nameを keyof ProfileData 型にキャスト
      [name as keyof ProfileData]: value, 
    }));
  };

  const handleSave = () => {
    // データを親コンポーネントの onSave 関数に渡し、ファイル保存処理などを実行
    onSave(formData); 
    onBack(); // マイページに戻る
  };

  const InputField = ({ label, name, value, type = "text", placeholder }: { label: string, name: keyof ProfileData, value: string, type?: string, placeholder?: string }) => (
    <div className="space-y-2">
      <label className="text-sm font-semibold">{label}</label>
      {type === "textarea" ? (
        <textarea
          name={name}
          value={value}
          onChange={handleChange}
          className={cx("w-full rounded-lg px-4 py-3 border border-white/10 text-white focus:ring-0 resize-none h-32", card)}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          className={cx("w-full rounded-lg px-4 py-3 border border-white/10 text-white focus:ring-0", card)}
          placeholder={placeholder}
        />
      )}
    </div>
  );

  return (
    <div>
      {/* 編集用ナビゲーション */}
      <div className={cx("sticky top-0 z-40", bg, "border-b border-white/10")}>
        <div className="flex items-center justify-between px-4 pt-4 pb-3">
          <button onClick={onBack} className="flex items-center text-white/80 hover:text-white transition">
            <ChevronLeft className="h-6 w-6" />
            <span className="text-lg font-semibold ml-1">戻る</span>
          </button>
          <h1 className="text-lg font-bold">プロフィール編集</h1>
          <button
            onClick={handleSave}
            className="text-white font-bold px-4 py-1 rounded-full text-sm"
            style={{ backgroundColor: brand }}
          >
            保存
          </button>
        </div>
      </div>

      <div className="px-4 pb-28 space-y-6 pt-4">
        {/* アカウント名 */}
        <InputField 
          label="アカウント名" 
          name="accountName" 
          value={formData.accountName} 
          placeholder="ユーザー名を入力"
        />

        {/* 居住地 */}
        <InputField 
          label="居住地" 
          name="residence" 
          value={formData.residence} 
          placeholder="例: 東京都"
        />

        {/* 自己紹介 */}
        <InputField 
          label="自己紹介" 
          name="bio" 
          value={formData.bio} 
          type="textarea" 
          placeholder="自己紹介文を入力"
        />

        <p className={cx("text-xs text-center", subtext)}>※データはファイルシステム経由で保存されます。</p>
      </div>
    </div>
  );
}