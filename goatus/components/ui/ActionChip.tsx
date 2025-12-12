// src/components/ui/ActionChip.tsx
import React from "react";
import { useState } from "react";
import { LucideIcon } from "lucide-react";

interface ActionChipProps {
  icon: LucideIcon;
  count: number;
}

export default function ActionChip({ icon: Icon, count }: ActionChipProps) {

    const [cnt,setLikes] = useState(count);
    const [liked, setLiked] = useState(false);

    const update = () => {
        setLikes(prevCnt => liked ? prevCnt - 1 : prevCnt + 1);
        setLiked(liked => !liked);
    };

    return (
        <button className={`flex items-center gap-2 rounded-2xl px-3 py-1.5 border border-white/10 hover:cursor-pointer text-white/80 ${liked ? "hover:bg-gray-500" : "hover:bg-white/5"} transition ${liked ? "bg-orange-400" : "transparent"} `} onClick={update}>
            <Icon className={`h-4 w-4`} />
            <span className="text-sm tabular-nums">{cnt}</span>
        </button>
    );
}