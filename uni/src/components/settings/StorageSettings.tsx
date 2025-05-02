import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

type StorageSettingsProps = {
  autoDelete: boolean;
  setAutoDelete: (autoDelete: boolean) => void;
  autoDeleteDays: number;
  setAutoDeleteDays: (days: number) => void;
  quality: string;
  setQuality: (quality: string) => void;
  autoSave: boolean;
  setAutoSave: (autoSave: boolean) => void;
};

export default function StorageSettings({
  autoDelete,
  setAutoDelete,
  autoDeleteDays,
  setAutoDeleteDays,
  quality,
  setQuality,
  autoSave,
  setAutoSave,
}: StorageSettingsProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Storage & Data</h3>
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-3 text-gray-700">
            Storage Usage
          </h4>
          <div className="rounded-lg border border-dashed border-gray-300 p-4 bg-gray-50">
            <div className="flex justify-between mb-2">
              <span className="text-sm">Used Storage</span>
              <span className="text-sm font-medium">0 MB of 500 MB</span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-gray-200 overflow-hidden">
              <div className="h-full w-0 rounded-full bg-gradient-to-r from-pink-500 to-orange-400"></div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <h4 className="text-sm font-medium mb-3 text-gray-700">
            Auto-Delete Files
          </h4>
          <div className="flex items-center justify-between">
            <span className="text-sm">Automatically delete files after</span>
            <div className="flex items-center">
              <select
                className="rounded-md border border-gray-300 p-1 mr-2 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
                value={autoDeleteDays}
                onChange={(e) => setAutoDeleteDays(Number(e.target.value))}
              >
                {[7, 14, 30, 60, 90].map((days) => (
                  <option key={days} value={days}>
                    {days}
                  </option>
                ))}
              </select>
              <span className="text-sm">days</span>
              <div className="ml-4">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={autoDelete}
                    onChange={() => setAutoDelete(!autoDelete)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-orange-400"></div>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <h4 className="text-sm font-medium mb-3 text-gray-700">
            Conversion Quality
          </h4>
          <select
            className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
          >
            {["Low (Faster)", "Medium", "High (Better Quality)"].map((q) => (
              <option key={q} value={q}>
                {q}
              </option>
            ))}
          </select>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <h4 className="text-sm font-medium mb-3 text-gray-700">Auto-Save</h4>
          <div className="flex items-center justify-between">
            <span className="text-sm">Automatically save converted files</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={autoSave}
                onChange={() => setAutoSave(!autoSave)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-orange-400"></div>
            </label>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <Button
            variant="outline"
            className="flex items-center rounded-full border-gray-200 text-red-500 hover:bg-red-50 hover:border-red-200 transition-colors"
          >
            <Trash className="mr-2 h-4 w-4" />
            Clear All Conversion History
          </Button>
        </div>
      </div>
    </div>
  );
}
