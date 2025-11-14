// src/components/cards/FeedCard.tsx
import React from "react";
import {
  Share2,
  MoreHorizontal,
  ThumbsUp,
  Megaphone,
  Upload,
  ShieldCheck,
} from "lucide-react";
import Avatar from "../ui/Avatar";
import ActionChip from "../ui/ActionChip";
import { cx, card, subtext } from "../colors";

interface FeedCardProps {
  onOpen: () => void;
}

export default function FeedCard({ onOpen }: FeedCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden mx-4 mb-4 border border-white/10">
      <div className={cx("p-4", card, "cursor-pointer")} onClick={onOpen}>
        <div className="flex items-center gap-3">
          <Avatar label="G" badge />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="font-semibold truncate">GOATUS運営チーム</p>
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
            </div>
            <p className={cx("text-xs", subtext)}>1日前</p>
          </div>
          <button className="rounded-full border border-white/15 px-4 py-1 text-sm">フォロー</button>
        </div>
      </div>

      {/* media */}
      <div className="bg-black/20">
        <div className="aspect-[16/10] w-full bg-[linear-gradient(135deg,#334155,40%,#94a3b8)]" />
      </div>

      {/* text */}
      <div className={cx("p-4 space-y-3", card)}>
        <p className="leading-relaxed">📣 新たにGOATUSに登録されたアスリートをご紹介📣</p>
        <div className="space-y-2">
          <p>今回は・・・</p>
          <button className="text-amber-300">さらに表示</button>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <ActionChip icon={ThumbsUp} count={6} />
          <ActionChip icon={Megaphone} count={0} />
          <div className="flex-1" />
          <button className="p-2 rounded-full hover:bg-white/5"><MoreHorizontal className="h-5 w-5 text-white/70" /></button>
          <button className="p-2 rounded-full hover:bg-white/5"><Upload className="h-5 w-5 text-white/70" /></button>
        </div>
      </div>
    </div>
  );
}