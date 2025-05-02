import { Lock, Save } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacySettings() {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Privacy & Security</h3>
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-3">Data Privacy</h4>
          <div className="rounded-lg border border-gray-200 p-4 bg-gray-50">
            <div className="flex items-start">
              <Lock className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
              <div>
                <p className="text-sm mb-2">Your files are secure</p>
                <p className="text-xs text-gray-500">
                  All your files are processed locally and are never uploaded to
                  our servers unless you explicitly choose to save them to your
                  account.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <h4 className="text-sm font-medium mb-3">File Encryption</h4>
          <div className="flex items-center justify-between">
            <span className="text-sm">Encrypt files during conversion</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-pink-400 peer-checked:to-orange-300"></div>
            </label>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <Button variant="outline" className="flex items-center">
            <Save className="mr-2 h-4 w-4" />
            Export Personal Data
          </Button>
        </div>
      </div>
    </div>
  );
}
