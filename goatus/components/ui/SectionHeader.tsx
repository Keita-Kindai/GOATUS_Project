// src/components/ui/SectionHeader.tsx
import React from "react";
import { ChevronRight } from "lucide-react";

interface SectionHeaderProps {
 title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
 return (
   <div className="flex items-center justify-between px-4 pt-3 pb-2">
     <h3 className="text-lg font-semibold">{title}</h3>
     <ChevronRight className="h-5 w-5 text-white/60" />
   </div>
 );
}
