// src/components/colors.ts

export const cx = (...c: (string | boolean | undefined)[]) => c.filter(Boolean).join(" ");

// Colors
export const bg = "bg-[#0D0F14]"; // app background
export const card = "bg-[#151923]"; // cards
export const subtext = "text-white/60";
export const brand = "#FFCC00"; // floating + button