// src/screens/FeedScreen.tsx
import React from "react";
import TopNav from "../components/layout/TopNav";
import FeedCard from "../components/cards/FeedCard";
import AdBanner from "../components/ui/AdBanner";

interface FeedScreenProps {
 onOpenOrg: () => void;
 onOpenProfile: (profile: { accountName?: string; residence?: string; bio?: string }) => void;
}

export default function FeedScreen({ onOpenOrg, onOpenProfile }: FeedScreenProps) {
  const openSoccerProfile = () => onOpenProfile({ accountName: "サッカー大好き太郎", residence: "兵庫", bio: "こんにちは、サッカー大好き太郎です。チームでの活動や練習ノートをここでシェアしています。" });

  return (
    <div>
      <TopNav />
      <div className="pb-28">{/* space for bottom bar */}
         <FeedCard onOpen={openSoccerProfile} onOpenProfile={openSoccerProfile} imageSrc={"/images/goatus_logo.png"} userName={"Goatus公式"} contents={"本日のおすすめ情報をお届け！！\n今回は私たちのアプリケーションがなんとGOOD DESIGN AWARDに選ばれました！！！！！　これは私たちの力だけはなく、普段からこのアプリを使用している皆様、そして活用してくれているスポーツ選手の皆様のおかげでもあります。心から本当に感謝を申し上げます。"} images={"/images/Award.png"}/>
         <AdBanner />
         <FeedCard onOpen={openSoccerProfile} onOpenProfile={openSoccerProfile} imageSrc={"/images/example2.png"} userName={"サッカー大好き太郎"} contents={"こんにちは！！サッカー大好き太郎です！！今回は私たちが普段行っている練習風景についてシェアしていこうと思います。私たちのサッカーチームは普段兵庫を拠点に活動をしています。大変なことはいろいろありあますが、それでも日々の精進を怠らず私たち一同頑張っています。みなさま、どうかこれからも温かい支援とお言葉お願いします!!"} images={"/images/field.jpeg"}/>
      </div>
    </div>
  );
} 
