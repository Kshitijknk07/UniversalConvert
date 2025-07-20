"use client";

import { useState, useEffect } from "react";
import Header from "../dashboard/Header";
import SettingsSidebar from "./SettingsSidebar";
import AppearanceSettings from "./AppearanceSettings";
import LanguageSettings from "./LanguageSettings";
import StorageSettings from "./StorageSettings";
import PrivacySettings from "./PrivacySettings";
import NotificationSettings from "./NotificationSettings";
import AccountSettings from "./AccountSettings";

// Simple toast context (for demo, can be moved to a provider)
function showToast(message: string) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.setAttribute("role", "status");
  toast.className =
    "fixed bottom-6 left-1/2 z-50 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-3 rounded-full shadow-lg text-sm font-medium animate-fade-in";
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("animate-fade-out");
    setTimeout(() => document.body.removeChild(toast), 500);
  }, 2000);
}

export default function SettingsPage() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");
  const [language, setLanguage] = useState<string>("English");
  const [autoSave, setAutoSave] = useState<boolean>(true);
  const [notifications, setNotifications] = useState<boolean>(true);
  const [quality, setQuality] = useState<string>("High");
  const [autoDelete, setAutoDelete] = useState<boolean>(true);
  const [autoDeleteDays, setAutoDeleteDays] = useState<number>(30);
  const [activeCategory, setActiveCategory] = useState("account");

  // Load settings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("uc-settings");
    if (saved) {
      const s = JSON.parse(saved);
      setTheme(s.theme || "light");
      setLanguage(s.language || "English");
      setAutoSave(s.autoSave ?? true);
      setNotifications(s.notifications ?? true);
      setQuality(s.quality || "High");
      setAutoDelete(s.autoDelete ?? true);
      setAutoDeleteDays(s.autoDeleteDays ?? 30);
    }
  }, []);

  // Save settings to localStorage when changed
  useEffect(() => {
    localStorage.setItem(
      "uc-settings",
      JSON.stringify({
        theme,
        language,
        autoSave,
        notifications,
        quality,
        autoDelete,
        autoDeleteDays,
      })
    );
  }, [
    theme,
    language,
    autoSave,
    notifications,
    quality,
    autoDelete,
    autoDeleteDays,
  ]);

  // Toast on settings change
  function handleSettingChange<T>(
    setter: (v: T) => void,
    value: T,
    label: string
  ) {
    setter(value);
    showToast(`${label} updated!`);
  }

  return (
    <div className="h-screen overflow-hidden bg-[#f8f8f8]">
      <div className="h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col">
        <Header />

        <main className="flex-1 py-6 overflow-hidden">
          <div className="h-full grid grid-cols-1 gap-6 lg:grid-cols-4">
            <div className="lg:col-span-1 h-full">
              <SettingsSidebar
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            </div>

            <div className="lg:col-span-3 h-full overflow-hidden">
              <div className="rounded-2xl bg-white p-6 shadow-md border border-gray-100 h-full overflow-auto">
                {activeCategory === "appearance" && (
                  <AppearanceSettings
                    theme={theme}
                    setTheme={(v) => handleSettingChange(setTheme, v, "Theme")}
                  />
                )}

                {activeCategory === "language" && (
                  <LanguageSettings
                    language={language}
                    setLanguage={(v) =>
                      handleSettingChange(setLanguage, v, "Language")
                    }
                  />
                )}

                {activeCategory === "storage" && (
                  <StorageSettings
                    autoDelete={autoDelete}
                    setAutoDelete={(v) =>
                      handleSettingChange(setAutoDelete, v, "Auto-Delete")
                    }
                    autoDeleteDays={autoDeleteDays}
                    setAutoDeleteDays={(v) =>
                      handleSettingChange(
                        setAutoDeleteDays,
                        v,
                        "Auto-Delete Days"
                      )
                    }
                    quality={quality}
                    setQuality={(v) =>
                      handleSettingChange(setQuality, v, "Quality")
                    }
                    autoSave={autoSave}
                    setAutoSave={(v) =>
                      handleSettingChange(setAutoSave, v, "Auto-Save")
                    }
                  />
                )}

                {activeCategory === "privacy" && <PrivacySettings />}

                {activeCategory === "notifications" && (
                  <NotificationSettings
                    notifications={notifications}
                    setNotifications={(v) =>
                      handleSettingChange(setNotifications, v, "Notifications")
                    }
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
