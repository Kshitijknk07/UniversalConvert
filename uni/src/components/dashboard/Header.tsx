import { User, Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4">
      <div className="flex items-center space-x-2">
        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400"></div>
        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400"></div>
        <span className="ml-2 font-bold">UniversalConvert</span>
      </div>

      <div className="hidden md:flex items-center relative max-w-md w-full mx-12">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search conversions..."
            className="w-full rounded-full border border-gray-200 pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <select className="text-sm bg-transparent border-none focus:ring-0">
          <option>EN</option>
          <option>ES</option>
          <option>FR</option>
          <option>DE</option>
        </select>

        <Button
          variant="ghost"
          className="rounded-full p-2 hover:bg-pink-500/10"
        >
          <Bell className="h-5 w-5 text-gray-600" />
        </Button>

        <div className="flex items-center space-x-2">
          <div className="h-9 w-9 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center text-white shadow-sm">
            <User className="h-4 w-4" />
          </div>
          <span className="text-sm font-medium">Guest User</span>
        </div>
      </div>
    </header>
  );
}
