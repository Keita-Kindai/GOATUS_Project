// src/components/layout/TopNav.tsx
import React from "react";
import { useState } from "react";
import BottomSheet from "../cards/BottomSheet";
import SidebarDrawer from "./SideBar";
import { CgProfile } from "react-icons/cg";
import { Bell, Search, Menu } from "lucide-react";
import { cx, bg } from "../colors";

interface TopNavProps {
 withSearch?: boolean;
}

export default function TopNav({ withSearch = false }: TopNavProps) {

    const [selected, setSelected] = useState(false);

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const drawerOpen = () => setIsDrawerOpen(true);
    const drawerClose = () => setIsDrawerOpen(false);

    const handleOpen = (e: React.MouseEvent) => {
        e.stopPropagation(); // 親要素のクリックイベント (onOpen) が発火しないように阻止
        setSelected(false);
    };

    const handleClose = () => {
        setSelected(false);
    };

    const list = [
        { label: "匿名さんが新しい投稿をしました！！", icon: <CgProfile className="h-6 w-6" /> },
        { label: "匿名2さんが新しい投稿をしました！！", icon: <CgProfile className="h-6 w-6" /> }
    ]

    return (
        <div className="sticky top-0 z-40">
            <div className={cx("px-4 pt-4 pb-2", bg)}>
                <div className="flex items-center justify-between">
                    <Menu className="h-6 w-6 hover:cursor-pointer" onClick={() => drawerOpen()}/>
                    <div className="font-black tracking-wide text-xl flex items-center gap-2">
                        <span className="rounded-md bg-white/10 px-2 py-1">G</span>
                        <span>GOATUS</span>
                    </div>
                    <div className="relative hover:cursor-pointer" onClick={() => setSelected(prevItem => !prevItem)}>
                        <Bell className="h-6 w-6" />
                        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-amber-400 text-black grid place-items-center text-[10px]">1</span>
                    </div>
                </div>
                {withSearch && (
                <div className="mt-4">
                    <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-3">
                    <Search className="h-5 w-5 text-white/70" />
                    <span className="text-white/60">キーワード検索</span>
                    </div>
                </div>
                )}
            </div>
            <BottomSheet 
                isOpen={selected} 
                onClose={handleClose} 
                menuItems = {list}
            />

            <SidebarDrawer 
                isOpen={isDrawerOpen} 
                onClose={drawerClose} 
            />
        </div>
    );
}

