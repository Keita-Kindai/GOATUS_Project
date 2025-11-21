// src/components/ui/HorizontalScrollSection.tsx
import React, { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface HorizontalScrollSectionProps {
  title: string;
  children: ReactNode;
}

export default function HorizontalScrollSection({ title, children }: HorizontalScrollSectionProps) {
  return (
    <div className="space-y-2">
      {/* ヘッダー */}
      <div className="flex items-center justify-between px-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <ChevronRight className="h-5 w-5 text-white/60" />
      </div>
      
      {/* 横スクロールコンテナ */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 px-4 pb-2">
          {children}
        </div>
      </div>
    </div>
  );
}