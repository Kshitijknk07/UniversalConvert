type LanguageSettingsProps = {
  language: string;
  setLanguage: (language: string) => void;
};

export default function LanguageSettings({
  language,
  setLanguage,
}: LanguageSettingsProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Language</h3>
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-3 text-gray-700">
            Select Language
          </h4>
          <select
            className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {[
              "English",
              "Spanish",
              "French",
              "German",
              "Chinese",
              "Japanese",
            ].map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        <div className="pt-4 border-t border-gray-200 mt-6">
          <div className="rounded-lg border border-gray-200 p-4 bg-gray-50">
            <p className="text-sm font-medium mb-1">Language Preferences</p>
            <p className="text-xs text-gray-500">
              Your language preference affects the entire application interface,
              including menus, buttons, and notifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
