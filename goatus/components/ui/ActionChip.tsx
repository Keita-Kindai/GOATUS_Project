// src/components/ui/ActionChip.tsx
import React from "react";
import { LucideIcon } from "lucide-react";

interface ActionChipProps {
  icon: LucideIcon;
  count?: number;
}

export default function ActionChip({ icon: Icon, count }: ActionChipProps) {
  return (
    <button className="flex items-center gap-2 rounded-2xl px-3 py-1.5 border border-white/10 text-white/80 hover:bg-white/5 transition">
      <Icon className="h-4 w-4" />
      <span className="text-sm tabular-nums">{count ?? 0}</span>
    </button>
  );
}