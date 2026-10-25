"use client"
import { useState } from "react";

type Tab = "latest" | "trending";

export default function FeedTabs() {
    const [activeTab, setActiveTab] = useState<Tab>("latest");
    const base= "rounded-full px-4 py-1.5 text-sm";
    const on= "bg-accent text-white";
    const off= "text-muted hover:text-foreground";

    return (
        <div className="flex rounded-full border border-border bg-card p-1">
            <button
                type="button"
                onClick={() => setActiveTab("latest")}
                className={`${base} ${activeTab === "latest" ? on : off}`}
            >
                Latest
            </button>
            <button
                type="button"
                className={`${base} ${activeTab === "trending" ? on : off}`}
                onClick={() => setActiveTab("trending")}
            >
                Trending
            </button>
        </div>
    );

};