// src/components/cards/FeedCard.tsx
import React from "react";
import Image from "next/image";
import { useState } from "react";
import BottomSheet from "./BottomSheet";
import { FaSquareXTwitter, FaInstagram, FaLine, FaLink, FaFlag } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { BiSolidVolumeMute } from "react-icons/bi";
import { FaBan } from "react-icons/fa";

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
  compact?: boolean;

  /**
   * 表示する画像の相対パス（例: './images/my_feed_image.jpg'）
   * * Next.jsのpublicフォルダからの絶対パス（例: '/images/my_feed_image.jpg'）でも可
   */
  imageSrc: string;
  userName: string;
  contents: string;
  images: string;
}

type ActiveMenu = 'none' | 'detail' | 'share';

export default function FeedCard({ onOpen, imageSrc, userName, contents, images, compact = false}: FeedCardProps ) {

    const containerClass = compact ? "rounded-lg overflow-hidden mb-4 border border-white/10" : "rounded-2xl overflow-hidden mx-4 mb-4 border border-white/10";

    const [activeMenu, setActiveMenu] = useState<ActiveMenu>('none');

    const handleOpen = (menuType: ActiveMenu) => (e: React.MouseEvent) => {
        e.stopPropagation(); // 親要素のクリックイベント (onOpen) が発火しないように阻止
        setActiveMenu(menuType);
    };

    const handleClose = () => {
        setActiveMenu('none');
    };

    const detailItems = [
        { label: "プロフィールをみる", icon: <CgProfile className="h-6 w-6" /> },
        { label: "このアカウントをミュートにする", icon: <BiSolidVolumeMute className="h-6 w-6" /> },
        { label: "このアカウントをブロックする", icon: <FaBan className="h-6 w-6" /> },
        { label: "このアカウントを報告する", icon: <FaFlag className="h-6 w-6" /> },
    ];

    const shareItems = [
        { label: "Xで共有をする", icon: <FaSquareXTwitter className="h-6 w-6" /> },
        { label: "Instagramで共有する", icon: <FaInstagram className="h-6 w-6" /> },
        { label: "ラインで共有をする", icon: <FaLine className="h-6 w-6" /> },
        { label: "リンクをコピー", icon: <FaLink className="h-6 w-6" /> },
    ];

    const currentMenuItems = activeMenu === 'detail' ? detailItems :
                             activeMenu === 'share'  ? shareItems :
                             [];


    return (
        <div className={containerClass}>
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
                {/* <button className="rounded-full border border-white/15 px-4 py-1 text-sm">フォロー</button> */}
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
                <button className="p-2 rounded-full hover:bg-white/5 hover:cursor-pointer" onClick={handleOpen('share')} ><Upload className="h-5 w-5 text-white/70" /></button>
                <button className="p-2 rounded-full hover:bg-white/5 hover:cursor-pointer" onClick={handleOpen('detail')}><MoreHorizontal className="h-5 w-5 text-white/70" /></button>
                </div>
            </div>
            <BottomSheet 
                isOpen={activeMenu != 'none'} 
                onClose={handleClose} 
                menuItems = {currentMenuItems}
            />
        </div>
    );
}
