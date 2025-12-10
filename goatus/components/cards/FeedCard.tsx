// src/components/cards/FeedCard.tsx
import React from "react";
import Image from "next/image";
import { useState } from "react";
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

  /**
   * 表示する画像の相対パス（例: './images/my_feed_image.jpg'）
   * * Next.jsのpublicフォルダからの絶対パス（例: '/images/my_feed_image.jpg'）でも可
   */
  imageSrc: string; // この行を追加する
  userName: string; // ユーザーネーム
  contents: string; // 投稿内容
  images: string;
}

export default function FeedCard({ onOpen, imageSrc, userName, contents, images}: FeedCardProps ) {

    return (
        <div className="rounded-2xl overflow-hidden mx-4 mb-4 border border-white/10">
        <div className={cx("p-4", card, "cursor-pointer")} onClick={onOpen}>
            <div className="flex items-center gap-3">
            <Avatar label={imageSrc} badge />
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                <p className="font-semibold truncate">{userName}</p>
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                </div>
                <p className={cx("text-xs", subtext)}>1日前</p>
            </div>
            <button className="rounded-full border border-white/15 px-4 py-1 text-sm">フォロー</button>
            </div>
        </div>

        {/* media */}
        <div className="bg-black/20">
            {/* <div className="aspect-[16/10] w-full bg-[linear-gradient(135deg,#334155,40%,#94a3b8)]" /> */}
            <Image src={images} alt="Test" width={300} height={40} className="aspect-16/10 w-full bg-[linear-gradient(135deg,#334155,40%,#94a3b8)]"></Image>
        </div>

        {/* text */}
        <div className={cx("p-4 space-y-3", card)}>
            <div className="space-y-2 whitespace-pre-wrap">
            <p>{contents}</p>
            {/* <button className="text-amber-300">さらに表示</button> */}
            </div>

            <div className="flex items-center gap-3 pt-2">
            <ActionChip icon={ThumbsUp} count={5} />
            <ActionChip icon={Megaphone} count={3} />
            <div className="flex-1" />
            <button className="p-2 rounded-full hover:bg-white/5"><MoreHorizontal className="h-5 w-5 text-white/70" /></button>
            <button className="p-2 rounded-full hover:bg-white/5"><Upload className="h-5 w-5 text-white/70" /></button>
            </div>
        </div>
        </div>
    );
}