import {
  User,
  History,
  Settings,
  LogOut,
  ChevronRight,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="h-full rounded-2xl bg-white p-5 shadow-md border border-gray-100 overflow-hidden flex flex-col">
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center text-white shadow-md">
            <User className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-semibold">Guest User</h4>
            <p className="text-xs text-gray-500">Free Plan</p>
          </div>
        </div>

        <div className="space-y-1.5">
          <button className="flex w-full items-center justify-between rounded-lg bg-gradient-to-r from-pink-500/10 to-orange-400/10 p-3 text-sm font-medium text-gray-900">
            <div className="flex items-center space-x-3">
              <History className="h-5 w-5 text-pink-500" />
              <span>Conversion History</span>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </button>

          <button
            className="flex w-full items-center justify-between rounded-lg p-3 text-sm font-medium hover:bg-gray-50 transition-colors"
            onClick={() => navigate("/settings")}
          >
            <div className="flex items-center space-x-3">
              <Settings className="h-5 w-5 text-gray-500" />
              <span>Settings</span>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </button>

          <button className="flex w-full items-center justify-between rounded-lg p-3 text-sm font-medium hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <Star className="h-5 w-5 text-gray-500" />
              <span>Upgrade to Pro</span>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </button>

          <button
            className="flex w-full items-center justify-between rounded-lg p-3 text-sm font-medium hover:bg-gray-50 transition-colors"
            onClick={() => navigate("/")}
          >
            <div className="flex items-center space-x-3">
              <LogOut className="h-5 w-5 text-gray-500" />
              <span>Logout</span>
            </div>
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </button>
        </div>

        <div className="rounded-xl border border-dashed border-gray-300 p-4 bg-gray-50">
          <h4 className="mb-2 text-sm font-medium">Storage</h4>
          <div className="mb-2 h-2.5 w-full rounded-full bg-gray-200 overflow-hidden">
            <div className="h-full w-[5%] rounded-full bg-gradient-to-r from-pink-500 to-orange-400"></div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-500">25 MB of 500 MB used</p>
            <span className="text-xs font-medium text-pink-500 cursor-pointer hover:underline">
              Upgrade
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
