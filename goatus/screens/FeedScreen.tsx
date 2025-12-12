// src/screens/FeedScreen.tsx
import React from "react";
import TopNav from "../components/layout/TopNav";
import FeedCard from "../components/cards/FeedCard";
import AdBanner from "../components/ui/AdBanner";

interface FeedScreenProps {
 onOpenOrg: () => void;
}

export default function FeedScreen({ onOpenOrg }: FeedScreenProps) {
 return (
   <div>
     <TopNav />
     <div className="pb-28">{/* space for bottom bar */}
       <div className="px-4 pt-2 text-white/80 text-sm">このたび、ご縁をいただき「GOATUS」にアスリート登… <button className="text-amber-300">さらに表示</button></div>
        <FeedCard onOpen={onOpenOrg} imageSrc={"/images/goatus_logo.png"} userName={"Goatus公式"} contents={"本日のおすすめ情報をお届け！！\n今回は私たちのアプリケーションがなんとGOOD DESIGN AWARDに選ばれました！！！！！　これは私たちの力だけはなく、普段からこのアプリを使用している皆様、そして活用してくれているスポーツ選手の皆様のおかげでもあります。心から本当に感謝を申し上げます。"} images={"/images/Award.png"}/>
        <AdBanner />
        <FeedCard onOpen={onOpenOrg} imageSrc={"/images/example2.png"} userName={"サッカー大好き太郎"} contents={"こんにちは！！サッカー大好き太郎です！！今回は私たちが普段行っている練習風景についてシェアしていこうと思います。私たちのサッカーチームは普段兵庫を拠点に活動をしています。大変なことはいろいろありあますが、それでも日々の精進を怠らず私たち一同頑張っています。みなさま、どうかこれからも温かい支援とお言葉お願いします!!"} images={"/images/field.jpeg"}/>
     </div>
   </div>
 );
}
