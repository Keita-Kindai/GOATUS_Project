// src/screens/DiscoverScreen.tsx
import React from "react";
import TopNav from "../components/layout/TopNav";
import SectionHeader from "../components/ui/SectionHeader";
import AdBanner from "../components/ui/AdBanner";
import RisingAthleteCard from "../components/cards/RisingAthleteCard";
import DiscoverCard from "../components/cards/DiscoverCard";

export default function DiscoverScreen() {
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