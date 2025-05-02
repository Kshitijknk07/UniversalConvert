import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between py-6">
      <div className="flex items-center space-x-2">
        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400"></div>
        <div className="h-2 w-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400"></div>
        <span className="ml-2 font-bold">UniversalConvert</span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-sm hover:text-pink-500 transition-colors">
          Features
        </a>
        <a href="#" className="text-sm hover:text-pink-500 transition-colors">
          Pricing
        </a>
        <a href="#" className="text-sm hover:text-pink-500 transition-colors">
          API
        </a>
        <a href="#" className="text-sm hover:text-pink-500 transition-colors">
          Blog
        </a>
      </div>
      <div className="flex items-center space-x-6">
        <select className="text-sm bg-transparent border-none focus:ring-0">
          <option>EN</option>
          <option>ES</option>
          <option>FR</option>
          <option>DE</option>
        </select>
        <a
          href="/contact"
          className="text-sm hover:text-pink-500 transition-colors"
        >
          CONTACT US
        </a>
        <Button
          variant="outline"
          className="rounded-full px-4 py-2 border-2 hover:bg-pink-50 hover:border-pink-200"
          onClick={() => navigate("/dashboard")}
        >
          Sign In
        </Button>
        <button className="md:hidden flex flex-col space-y-1">
          <span className="h-0.5 w-6 bg-black"></span>
          <span className="h-0.5 w-6 bg-black"></span>
        </button>
      </div>
    </header>
  );
}
