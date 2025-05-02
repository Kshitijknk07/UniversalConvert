"use client";

import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";

export default function LandingPage() {
  return (
    <div className="h-screen overflow-hidden bg-[#f8f8f8]">
      <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Header />

        <main className="relative grid h-[calc(100vh-88px)] grid-cols-1 lg:grid-cols-2">
          <div
            className="absolute right-0 top-0 h-[300px] w-[300px] animate-pulse rounded-full bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-200 opacity-40 blur-3xl"
            aria-hidden="true"
          />

          <Hero />
          <Features />
        </main>
      </div>
    </div>
  );
}
