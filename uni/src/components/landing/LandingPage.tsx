"use client";

import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f8f8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Header />

        <main className="relative">
          <div
            className="absolute right-0 top-0 h-[300px] w-[300px] animate-pulse rounded-full bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-200 opacity-40 blur-3xl"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 py-10 lg:py-16">
            <Hero />
            <Features />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
