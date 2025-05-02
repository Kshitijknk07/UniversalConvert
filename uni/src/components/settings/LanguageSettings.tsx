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
      <h3 className="text-lg font-medium mb-4">Language</h3>
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-3">Select Language</h4>
          <select
            className="w-full rounded-md border border-gray-300 p-2"
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
      </div>
    </div>
  );
}
