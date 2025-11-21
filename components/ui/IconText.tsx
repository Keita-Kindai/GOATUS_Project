// src/components/ui/IconText.tsx
import React, { ReactNode } from "react";

interface IconTextProps {
  icon: ReactNode;
  children: ReactNode;
}

export default function IconText({ icon, children }: IconTextProps) {
  return (
    <div className="flex items-center gap-2 text-sm">
      {icon}
      <span>{children}</span>
    </div>
  );
}