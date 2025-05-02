"use client";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Stats from "./Stats";
import FileConversion from "./FileConversion";
import RecentConversions from "./RecentConversions";

export default function DashboardPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#f8f8f8]">
      <div className="h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col">
        <Header />

        <main className="flex-1 py-3 overflow-hidden">
          <div className="h-full grid grid-cols-1 gap-4 lg:grid-cols-4">
            {/* Sidebar */}
            <div className="lg:col-span-1 h-full">
              <Sidebar />
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-4 h-full overflow-hidden flex flex-col">
              <Stats />
              <FileConversion />
              <RecentConversions />
            </div>
          </div>
        </main>
      </div>

      {/* Enhanced gradient effects */}
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
