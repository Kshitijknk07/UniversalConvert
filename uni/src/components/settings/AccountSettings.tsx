import { User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AccountSettings() {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Account</h3>
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-3">Profile Information</h4>
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="h-8 w-8 text-gray-500" />
            </div>
            <div>
              <h5 className="font-medium">Guest User</h5>
              <p className="text-sm text-gray-500">Free Plan</p>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 p-2"
                placeholder="Guest User"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full rounded-md border border-gray-300 p-2"
                placeholder="guest@example.com"
              />
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <h4 className="text-sm font-medium mb-3">Subscription</h4>
          <div className="rounded-lg border border-gray-200 p-4 bg-gray-50">
            <p className="text-sm font-medium mb-1">Free Plan</p>
            <p className="text-xs text-gray-500 mb-3">
              500 MB storage, basic conversions, standard quality
            </p>
            <Button className="rounded-full px-4 py-2 text-sm">
              Upgrade to Pro
            </Button>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200 flex space-x-3">
          <Button variant="outline" className="flex-1">
            Save Changes
          </Button>
          <Button variant="outline" className="flex items-center text-red-500">
            Delete Account
          </Button>
        </div>
      </div>
    </div>
  );
}
