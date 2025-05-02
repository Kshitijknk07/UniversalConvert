"use client";

import { useState } from "react";
import Header from "../dashboard/Header";
import SettingsSidebar from "./SettingsSidebar";
import AppearanceSettings from "./AppearanceSettings";
import LanguageSettings from "./LanguageSettings";
import StorageSettings from "./StorageSettings";
import PrivacySettings from "./PrivacySettings";
import NotificationSettings from "./NotificationSettings";
import AccountSettings from "./AccountSettings";

export default function SettingsPage() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");
  const [language, setLanguage] = useState<string>("English");
  const [autoSave, setAutoSave] = useState<boolean>(true);
  const [notifications, setNotifications] = useState<boolean>(true);
  const [quality, setQuality] = useState<string>("High");
  const [autoDelete, setAutoDelete] = useState<boolean>(true);
  const [autoDeleteDays, setAutoDeleteDays] = useState<number>(30);
  const [activeCategory, setActiveCategory] = useState("account");

  return (
    <div className="h-screen overflow-hidden bg-[#f8f8f8]">
      <div className="h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col">
        <Header />

        <main className="flex-1 py-3 overflow-hidden">
          <div className="h-full grid grid-cols-1 gap-4 lg:grid-cols-4">
            {/* Settings Sidebar */}
            <div className="lg:col-span-1 h-full">
              <SettingsSidebar
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            </div>

            {/* Settings Content */}
            <div className="lg:col-span-3 space-y-4 h-full overflow-auto">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                {activeCategory === "appearance" && (
                  <AppearanceSettings theme={theme} setTheme={setTheme} />
                )}

                {activeCategory === "language" && (
                  <LanguageSettings
                    language={language}
                    setLanguage={setLanguage}
                  />
                )}

                {activeCategory === "storage" && (
                  <StorageSettings
                    autoDelete={autoDelete}
                    setAutoDelete={setAutoDelete}
                    autoDeleteDays={autoDeleteDays}
                    setAutoDeleteDays={setAutoDeleteDays}
                    quality={quality}
                    setQuality={setQuality}
                    autoSave={autoSave}
                    setAutoSave={setAutoSave}
                  />
                )}

                {activeCategory === "privacy" && <PrivacySettings />}

                {activeCategory === "notifications" && (
                  <NotificationSettings
                    notifications={notifications}
                    setNotifications={setNotifications}
                  />
                )}

                {activeCategory === "account" && <AccountSettings />}
              </div>
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
