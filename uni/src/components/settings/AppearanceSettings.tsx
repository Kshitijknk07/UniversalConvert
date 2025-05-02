import { Sun, Moon } from "lucide-react";

type AppearanceSettingsProps = {
  theme: "light" | "dark" | "system";
  setTheme: (theme: "light" | "dark" | "system") => void;
};

export default function AppearanceSettings({
  theme,
  setTheme,
}: AppearanceSettingsProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Appearance</h3>
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-3 text-gray-700">Theme</h4>
          <div className="grid grid-cols-3 gap-3">
            <button
              className={`flex flex-col items-center justify-center rounded-lg border p-4 transition-all ${
                theme === "light"
                  ? "border-pink-200 bg-gradient-to-r from-pink-500/5 to-orange-400/5 shadow-md"
                  : "border-gray-200 hover:bg-gray-50"
              }`}
              onClick={() => setTheme("light")}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full mb-2 ${
                  theme === "light"
                    ? "bg-gradient-to-r from-pink-500/10 to-orange-400/10 text-pink-500"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                <Sun className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium">Light</span>
            </button>
            <button
              className={`flex flex-col items-center justify-center rounded-lg border p-4 transition-all ${
                theme === "dark"
                  ? "border-pink-200 bg-gradient-to-r from-pink-500/5 to-orange-400/5 shadow-md"
                  : "border-gray-200 hover:bg-gray-50"
              }`}
              onClick={() => setTheme("dark")}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full mb-2 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-pink-500/10 to-orange-400/10 text-pink-500"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                <Moon className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium">Dark</span>
            </button>
            <button
              className={`flex flex-col items-center justify-center rounded-lg border p-4 transition-all ${
                theme === "system"
                  ? "border-pink-200 bg-gradient-to-r from-pink-500/5 to-orange-400/5 shadow-md"
                  : "border-gray-200 hover:bg-gray-50"
              }`}
              onClick={() => setTheme("system")}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full mb-2 ${
                  theme === "system"
                    ? "bg-gradient-to-r from-pink-500/10 to-orange-400/10 text-pink-500"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                <div className="flex">
                  <Sun className="h-5 w-5" />
                  <Moon className="h-5 w-5 ml-[-3px]" />
                </div>
              </div>
              <span className="text-sm font-medium">System</span>
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <h4 className="text-sm font-medium mb-3 text-gray-700">
            Color Scheme
          </h4>
          <div className="grid grid-cols-4 gap-3">
            {["Default", "Blue", "Green", "Purple"].map((color) => (
              <button
                key={color}
                className={`flex items-center justify-center rounded-lg border p-3 transition-all ${
                  color === "Default"
                    ? "border-pink-200 bg-gradient-to-r from-pink-500/5 to-orange-400/5 shadow-md"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <span className="text-sm font-medium">{color}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
