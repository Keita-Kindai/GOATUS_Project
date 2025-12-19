// src/screens/OrgProfileScreen.tsx
import React from "react";
import { ChevronLeft, BadgeCheck, Users, Share2 } from "lucide-react";
import FeedCard from "../components/cards/FeedCard";
import { cx, card } from "../components/colors";

interface OrgProfileScreenProps {
 onBack: () => void;
}

export default function OrgProfileScreen({ onBack }: OrgProfileScreenProps) {
 // onOpen prop for FeedCard is optional here, so we just pass an empty function
 const onOpenDummy = () => {};
  return (
   <div>
     <div className="relative">
       <div className="aspect-[16/10] w-full bg-[linear-gradient(135deg,#2b3140,40%,#8a93a6)]" />
       <button
         onClick={onBack}
         className="absolute top-4 left-4 h-10 w-10 rounded-full bg-black/30 border border-white/20 grid place-items-center backdrop-blur"
       >
         <ChevronLeft className="h-6 w-6" />
       </button>
       <div className="absolute bottom-4 left-4 right-4">
         <div className="flex items-center gap-2">
           <div className="text-2xl font-extrabold">GOATUS運営チーム</div>
           <BadgeCheck className="h-5 w-5 text-amber-400" />
         </div>
         <div className="text-sm text-white/70 mt-1">[その他]</div>
         <div className="mt-2">
           <span className="text-2xl font-bold">329</span>
           <span className="ml-2 text-sm">フォロワー</span>
         </div>
         <div className="mt-3 flex items-center gap-3">
           <button className="h-10 px-5 rounded-full bg-white text-black font-semibold">フォロー</button>
           <button className="h-10 w-10 grid place-items-center rounded-full bg-white/10 border border-white/15"><Users className="h-5 w-5" /></button>
           <button className="h-10 w-10 grid place-items-center rounded-full bg-white/10 border border-white/15"><Share2 className="h-5 w-5" /></button>
         </div>
       </div>
     </div>

     <div className="px-4 pb-28">
       <div className="mt-4 rounded-2xl border border-white/10 overflow-hidden">
         <div className={cx("p-4", card)}>
           <div className="flex items-center justify-between">
             <div>
               <div className="text-white/70 text-sm">投稿</div>
               <div className="mt-2 text-sm">GOATUS運営の公式アカウントの最新投稿を表示します。</div>
             </div>
             <button className="text-sm text-white/40">すべて見る</button>
           </div>

           <div className="mt-4 space-y-3">
             <FeedCard onOpen={onOpenDummy} compact imageSrc={'/images/goatus_logo.png'} userName={'Goatus公式'} contents={'本日のおすすめ情報をお届け！！\n今回は私たちのアプリケーションがなんとGOOD DESIGN AWARDに選ばれました！！！！！　これは私たちの力だけはなく、普段からこのアプリを使用している皆様、そして活用してくれているスポーツ選手の皆様のおかげでもあります。心から本当に感謝を申し上げます。'} images={'/images/Award.png'} />
             {/* 他の投稿を追加する場合はここに FeedCard (compact) を追加 */}
           </div>
         </div>
       </div>
     </div>
   </div>
 );
}
