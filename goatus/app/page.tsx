"use client"
import React, { useState } from "react";
import {
  Bell,
  Search,
  Menu,
  Share2,
  MoreHorizontal,
  ThumbsUp,
  Megaphone,
  Upload,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  BadgeCheck,
  Plus,
  Users,
  Compass,
  Home,
  Handshake,
  User,
} from "lucide-react";

// ------------------------------------------------------------
// GOATUS — UI Mock (JSX version without TypeScript annotations)
// Drop this into Next.js `app/page.jsx` or `app/page.tsx`.
// ------------------------------------------------------------

const cx = (...c) => c.filter(Boolean).join(" ");

// Colors
const bg = "bg-[#0D0F14]"; // app background
const card = "bg-[#151923]"; // cards
const subtext = "text-white/60";
const brand = "#FFCC00"; // floating + button

function Avatar({ label = "G", badge = false }) {
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

function IconText({ icon, children }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      {icon}
      <span>{children}</span>
    </div>
  );
}

function ActionChip({ icon: Icon, count }) {
  return (
    <button className="flex items-center gap-2 rounded-2xl px-3 py-1.5 border border-white/10 text-white/80 hover:bg-white/5 transition">
      <Icon className="h-4 w-4" />
      <span className="text-sm tabular-nums">{count ?? 0}</span>
    </button>
  );
}

function SectionHeader({ title }) {
  return (
    <div className="flex items-center justify-between px-4 pt-3 pb-2">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ChevronRight className="h-5 w-5 text-white/60" />
    </div>
  );
}

function FeedCard({ onOpen }) {
  return (
    <div className="rounded-2xl overflow-hidden mx-4 mb-4 border border-white/10">
      <div className={cx("p-4", card, "cursor-pointer")} onClick={onOpen}>
        <div className="flex items-center gap-3">
          <Avatar label="G" badge />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <p className="font-semibold truncate">GOATUS運営チーム</p>
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
            </div>
            <p className={cx("text-xs", subtext)}>1日前</p>
          </div>
          <button className="rounded-full border border-white/15 px-4 py-1 text-sm">フォロー</button>
        </div>
      </div>

      {/* media */}
      <div className="bg-black/20">
        <div className="aspect-[16/10] w-full bg-[linear-gradient(135deg,#334155,40%,#94a3b8)]" />
      </div>

      {/* text */}
      <div className={cx("p-4 space-y-3", card)}>
        <p className="leading-relaxed">📣 新たにGOATUSに登録されたアスリートをご紹介📣</p>
        <div className="space-y-2">
          <p>今回は・・・</p>
          <button className="text-amber-300">さらに表示</button>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <ActionChip icon={ThumbsUp} count={6} />
          <ActionChip icon={Megaphone} count={0} />
          <div className="flex-1" />
          <button className="p-2 rounded-full hover:bg-white/5"><MoreHorizontal className="h-5 w-5 text-white/70" /></button>
          <button className="p-2 rounded-full hover:bg-white/5"><Upload className="h-5 w-5 text-white/70" /></button>
        </div>
      </div>
    </div>
  );
}

function DiscoverCard({ title, subtitle, tag }) {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10">
      <div className="absolute top-3 left-3 z-10">
        {tag && (
          <span className="text-[11px] px-2 py-1 rounded-md bg-white/10 border border-white/15">{tag}</span>
        )}
      </div>
      <div className="aspect-[4/3] w-full bg-[linear-gradient(135deg,#1f2937,40%,#6b7280)]" />
      <div className="p-3">
        <div className="truncate font-semibold">{title}</div>
        {subtitle && <div className="text-xs text-white/60 mt-1">{subtitle}</div>}
      </div>
    </div>
  );
}

function RisingAthleteCard() {
  return (
    <div className="rounded-3xl overflow-hidden border border-white/10">
      <div className="aspect-[16/10] w-full bg-[linear-gradient(135deg,#222,40%,#4b5563)]" />
      <div className="p-4">
        <div className="font-semibold">GOATUS運営チーム</div>
        <div className="text-xs text-white/60">[その他]</div>
      </div>
    </div>
  );
}

function AdBanner({ label = "GOATUSグッドデザイン賞2025受賞" }) {
  return (
    <div className="mx-4 my-4 rounded-2xl border border-white/10 overflow-hidden">
      <div className="bg-gradient-to-r from-amber-300 to-amber-500 text-black p-4 flex items-center justify-between">
        <div className="text-sm font-semibold">{label}</div>
        <div className="flex gap-2">
          <div className="h-10 w-16 rounded-md bg-black/20" />
          <div className="h-10 w-16 rounded-md bg-black/20" />
        </div>
      </div>
    </div>
  );
}

function TopNav({ title, withSearch = false }) {
  return (
    <div className="sticky top-0 z-40">
      <div className={cx("px-4 pt-4 pb-2", bg)}>
        <div className="flex items-center justify-between">
          <Menu className="h-6 w-6" />
          <div className="font-black tracking-wide text-xl flex items-center gap-2">
            <span className="rounded-md bg-white/10 px-2 py-1">G</span>
            <span>GOATUS</span>
          </div>
          <div className="relative">
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
    </div>
  );
}

function BottomTab({ active, setActive }) {
  const items = [
    { key: "feed", label: "フィールド", icon: Home },
    { key: "discover", label: "みつける", icon: Compass },
    { key: "post", label: "投稿", icon: Plus },
    { key: "community", label: "コミュニティ", icon: Handshake },
    { key: "mypage", label: "マイページ", icon: User },
  ];
  return (
    <div className="sticky bottom-0 z-40">
      <div className={cx("pb-2 pt-3", bg, "border-t border-white/10")}>
        <div className="relative">
          {/* floating + */}
          <button
            className="absolute left-1/2 -translate-x-1/2 -translate-y-6 grid place-items-center h-16 w-16 rounded-full shadow-xl"
            style={{ background: brand }}
            onClick={() => setActive("post")}
          >
            <Plus className="h-8 w-8 text-black" />
          </button>
        </div>
        <div className="grid grid-cols-5 px-2 gap-1">
          {items.map((it) => (
            <button
              key={it.key}
              onClick={() => setActive(it.key)}
              className={cx(
                "flex flex-col items-center pt-4 pb-1 text-xs",
                active === it.key ? "text-white" : "text-white/60"
              )}
            >
              <it.icon className="h-5 w-5" />
              <span className="mt-1">{it.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeedScreen({ onOpenOrg }) {
  return (
    <div>
      <TopNav title="GOATUS" />
      <div className="pb-28">{/* space for bottom bar */}
        <div className="px-4 pt-2 text-white/80 text-sm">このたび、ご縁をいただき「GOATUS」にアスリート登… <button className="text-amber-300">さらに表示</button></div>
        <FeedCard onOpen={onOpenOrg} />
        <AdBanner />
        <FeedCard onOpen={onOpenOrg} />
      </div>
    </div>
  );
}

function DiscoverScreen() {
  return (
    <div>
      <TopNav withSearch />
      <div className="pb-28">
        <SectionHeader title="急上昇アスリート" />
        <div className="px-4">
          <RisingAthleteCard />
        </div>
        <AdBanner />
        <SectionHeader title="新着アスリート" />
        <div className="px-4 grid grid-cols-2 gap-4">
          <DiscoverCard title="近畿大学体育会…" subtitle="[陸上競技]" tag="TEAM" />
          <DiscoverCard title="佐伯 さな" subtitle="[セーリング競技]" />
          <DiscoverCard title="レッドハリケー…" subtitle="[ラグビー]" tag="TEAM" />
          <DiscoverCard title="GOATUS運営チ…" subtitle="[その他]" />
        </div>
        <div className="h-4" />
      </div>
    </div>
  );
}

function ProfileScreen() {
  return (
    <div>
      <TopNav />
      <div className="px-4 pb-28">
        <div className="flex items-center gap-4 mt-2">
          <Avatar label="G" />
          <div>
            <div className="text-2xl font-bold">マイページ</div>
            <div className="text-sm text-white/60">0 フォロー中 ・ 0 パーソナルスポンサー</div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 p-6 text-center">
          <div className="mx-auto h-14 w-20 rounded-lg bg-white/5 grid place-items-center text-2xl">🪪</div>
          <div className="mt-4 font-semibold">アスリートカード</div>
          <p className="text-sm text-white/60 mt-1">好きなアスリートのパーソナルスポンサーになってアスリートカードをゲットしよう！</p>
        </div>

        <AdBanner label="NetApp" />
      </div>
    </div>
  );
}

function OrgProfileScreen({ onBack }) {
  return (
    <div>
      <div className="relative">
        <div className="aspect-[16/10] w-full bg-[linear-gradient(135deg,#2b3140,40%,#8a93a6)]" />
        <button
          onClick={onBack}
          className="absolute top-4 left-4 h-10 w-10 rounded-full bg-black/30 border border-white/20 grid place-items-center backdrop-blur"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-extrabold">GOATUS運営チーム</div>
            <BadgeCheck className="h-5 w-5 text-amber-400" />
          </div>
          <div className="text-sm text-white/70 mt-1">[その他]</div>
          <div className="mt-2">
            <span className="text-2xl font-bold">329</span>
            <span className="ml-2 text-sm">フォロワー</span>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <button className="h-10 px-5 rounded-full bg-white text-black font-semibold">フォロー</button>
            <button className="h-10 w-10 grid place-items-center rounded-full bg-white/10 border border-white/15"><Users className="h-5 w-5" /></button>
            <button className="h-10 w-10 grid place-items-center rounded-full bg-white/10 border border-white/15"><Share2 className="h-5 w-5" /></button>
          </div>
        </div>
      </div>

      <div className="px-4 pb-28">
        <div className="mt-4 rounded-2xl border border-white/10 overflow-hidden">
          <div className={cx("p-4", card)}>
            <div className="text-white/70 text-sm">メッセージ</div>
            <div className="mt-3">GOATUS運営の公式アカウントです。</div>
            <div className="text-center text-white/40 mt-3">すべて見る</div>
          </div>
        </div>

        <div className="mt-2">
          <FeedCard />
        </div>
      </div>
    </div>
  );
}

export default function GoatusUiMock() {
  const [active, setActive] = useState("feed");

  return (
    <div className={cx("min-h-svh text-white", bg)}>
      <div className="mx-auto w-full max-w-[480px] relative">{/* phone width */}
        {active === "feed" && <FeedScreen onOpenOrg={() => setActive("org")} />}
        {active === "discover" && <DiscoverScreen />}
        {active === "post" && (
          <div>
            <TopNav />
            <div className="px-6 py-10 text-center space-y-4">
              <div className="text-4xl">➕</div>
              <div className="text-lg">投稿のプレースホルダー</div>
              <p className="text-white/60">実装不要とのことなので、ここはダミー画面です。</p>
            </div>
          </div>
        )}
        {active === "community" && (
          <div>
            <TopNav />
            <div className="px-6 py-10 text-center space-y-4">
              <div className="text-4xl">🤝</div>
              <div className="text-lg">コミュニティ（ダミー）</div>
              <p className="text-white/60">コミュニティ画面の外観のみ。</p>
            </div>
          </div>
        )}
        {active === "mypage" && <ProfileScreen />}
        {active === "org" && <OrgProfileScreen onBack={() => setActive("feed")} />}

        <BottomTab active={active} setActive={setActive} />
      </div>
    </div>
  );
}
