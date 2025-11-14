// src/components/ui/Avatar.tsx
import React from "react";
import { BadgeCheck } from "lucide-react";

interface AvatarProps {
  label?: string;
  badge?: boolean;
}

export default function Avatar({ label = "G", badge = false }: AvatarProps) {
  return (
    <div className="relative">
      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-slate-300 to-slate-500 grid place-items-center font-bold text-slate-900">
        {label}
      </div>
      {badge && (
        <div className="absolute -bottom-1 -right-1 grid place-items-center h-5 w-5 rounded-full bg-white text-[#10B981]">
          <BadgeCheck className="h-4 w-4" />
        </div>
      )}
    </div>
  );
}