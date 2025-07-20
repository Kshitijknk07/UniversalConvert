"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Stats from "./Stats";
import FileConversion from "./FileConversion";
import RecentConversions from "./RecentConversions";

// Types for conversion and stats
const initialStats = {
  filesConverted: 0,
  storageUsed: 0, // in MB
  savedTime: 0, // in min
};

type Conversion = {
  name: string;
  type: string;
  date: string;
  size: string;
  sizeMB: number;
};

// Simple toast function (for demo)
function showToast(message: string, type: "success" | "error" = "success") {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.setAttribute("role", "status");
  toast.className =
    `fixed bottom-6 left-1/2 z-50 -translate-x-1/2 px-6 py-3 rounded-full shadow-lg text-sm font-medium animate-fade-in ` +
    (type === "success"
      ? "bg-gradient-to-r from-pink-500 to-orange-400 text-white"
      : "bg-red-500 text-white");
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("animate-fade-out");
    setTimeout(() => document.body.removeChild(toast), 500);
  }, 2000);
}

export default function DashboardPage() {
  const [recentConversions, setRecentConversions] = useState<Conversion[]>([]);
  const [stats, setStats] = useState(initialStats);

  // Load from localStorage on mount
  useEffect(() => {
    const savedConversions = localStorage.getItem("uc-recentConversions");
    const savedStats = localStorage.getItem("uc-stats");
    if (savedConversions) {
      setRecentConversions(JSON.parse(savedConversions));
    }
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem(
      "uc-recentConversions",
      JSON.stringify(recentConversions)
    );
  }, [recentConversions]);
  useEffect(() => {
    localStorage.setItem("uc-stats", JSON.stringify(stats));
  }, [stats]);

  // Handler to add a new conversion and update stats
  const handleConversionComplete = (conversion: Conversion) => {
    setRecentConversions((prev: Conversion[]) => [
      conversion,
      ...prev.slice(0, 9),
    ]); // keep max 10
    setStats((prev) => ({
      filesConverted: prev.filesConverted + 1,
      storageUsed: prev.storageUsed + conversion.sizeMB,
      savedTime: prev.savedTime + 1, // +1 min per conversion (demo)
    }));
    showToast("Conversion complete!", "success");
  };

  // Error handler for FileConversion
  const handleConversionError = (msg: string) => {
    showToast(msg, "error");
  };

  return (
    <div
      className="h-screen overflow-hidden bg-[#f8f8f8]"
      aria-label="Dashboard"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col h-full">
        <Header />

        <main className="flex-1 py-6 overflow-hidden">
          <div className="h-full grid grid-cols-1 gap-6 lg:grid-cols-4">
            <div className="lg:col-span-1 h-full">
              <Sidebar />
            </div>

            <div className="lg:col-span-3 space-y-6 h-full overflow-hidden flex flex-col">
              <Stats stats={stats} />
              <FileConversion
                onConversionComplete={handleConversionComplete}
                onError={handleConversionError}
                maxSizeMB={20}
                allowedTypes={[
                  "application/pdf",
                  "image/jpeg",
                  "image/png",
                  "audio/mpeg",
                  "video/mp4",
                  "image/svg+xml",
                  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                ]}
              />
              <RecentConversions recentConversions={recentConversions} />
            </div>
          </div>
        </main>
      </div>

      <div
        className="fixed right-0 top-0 h-[500px] w-[500px] animate-pulse rounded-full bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-200 opacity-30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="fixed left-0 bottom-0 h-[400px] w-[400px] animate-pulse rounded-full bg-gradient-to-tr from-blue-400 via-purple-300 to-pink-200 opacity-25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="fixed right-1/4 bottom-1/4 h-[300px] w-[300px] animate-pulse rounded-full bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 opacity-20 blur-3xl"
        aria-hidden="true"
      />
    </div>
  );
}
