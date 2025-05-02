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
      <h3 className="text-lg font-medium mb-4">Appearance</h3>
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-3">Theme</h4>
          <div className="grid grid-cols-3 gap-3">
            <button
              className={`flex flex-col items-center justify-center rounded-lg border p-4 ${
                theme === "light"
                  ? "border-gray-400 bg-gray-50"
                  : "border-gray-200"
              }`}
              onClick={() => setTheme("light")}
            >
              <Sun className="h-6 w-6 mb-2" />
              <span className="text-sm">Light</span>
            </button>
            <button
              className={`flex flex-col items-center justify-center rounded-lg border p-4 ${
                theme === "dark"
                  ? "border-gray-400 bg-gray-50"
                  : "border-gray-200"
              }`}
              onClick={() => setTheme("dark")}
            >
              <Moon className="h-6 w-6 mb-2" />
              <span className="text-sm">Dark</span>
            </button>
            <button
              className={`flex flex-col items-center justify-center rounded-lg border p-4 ${
                theme === "system"
                  ? "border-gray-400 bg-gray-50"
                  : "border-gray-200"
              }`}
              onClick={() => setTheme("system")}
            >
              <div className="flex h-6 mb-2">
                <Sun className="h-6 w-6" />
                <Moon className="h-6 w-6" />
              </div>
              <span className="text-sm">System</span>
            </button>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <h4 className="text-sm font-medium mb-3">Color Scheme</h4>
          <div className="grid grid-cols-4 gap-3">
            {["Default", "Blue", "Green", "Purple"].map((color) => (
              <button
                key={color}
                className={`flex items-center justify-center rounded-lg border p-2 ${
                  color === "Default"
                    ? "border-gray-400 bg-gray-50"
                    : "border-gray-200"
                }`}
              >
                <span className="text-sm">{color}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
