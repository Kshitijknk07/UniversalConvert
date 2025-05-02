import { User } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-3">
      <div className="flex items-center space-x-2">
        <div className="h-2 w-2 rounded-full bg-black"></div>
        <div className="h-2 w-2 rounded-full bg-black"></div>
        <span className="ml-2 font-medium">UniversalConvert</span>
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-sm">EN</button>
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="h-4 w-4" />
          </div>
          <span className="text-sm font-medium">Guest User</span>
        </div>
        <button className="flex flex-col space-y-1">
          <span className="h-0.5 w-6 bg-black"></span>
          <span className="h-0.5 w-6 bg-black"></span>
        </button>
      </div>
    </header>
  );
}
