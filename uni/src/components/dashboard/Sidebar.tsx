import { User, History, Settings, LogOut, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="h-full rounded-2xl bg-white p-4 shadow-sm overflow-hidden flex flex-col">
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
            <User className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-medium">Guest User</h4>
            <p className="text-xs text-gray-500">Free Plan</p>
          </div>
        </div>

        <div className="space-y-2">
          <button className="flex w-full items-center justify-between rounded-lg bg-gray-100 p-2 text-sm font-medium">
            <div className="flex items-center space-x-3">
              <History className="h-5 w-5" />
              <span>Conversion History</span>
            </div>
            <ChevronRight className="h-4 w-4" />
          </button>

          <button
            className="flex w-full items-center justify-between rounded-lg p-2 text-sm font-medium hover:bg-gray-100"
            onClick={() => navigate("/settings")}
          >
            <div className="flex items-center space-x-3">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </div>
            <ChevronRight className="h-4 w-4" />
          </button>

          <button
            className="flex w-full items-center justify-between rounded-lg p-2 text-sm font-medium hover:bg-gray-100"
            onClick={() => navigate("/")}
          >
            <div className="flex items-center space-x-3">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </div>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="rounded-lg border border-dashed border-gray-300 p-3">
          <h4 className="mb-1 text-sm font-medium">Storage</h4>
          <div className="mb-1 h-2 w-full rounded-full bg-gray-200">
            <div className="h-2 w-0 rounded-full bg-gradient-to-r from-pink-400 to-orange-300"></div>
          </div>
          <p className="text-xs text-gray-500">0 MB of 500 MB used</p>
        </div>
      </div>
    </div>
  );
}
