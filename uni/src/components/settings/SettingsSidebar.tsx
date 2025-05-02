import { useNavigate } from "react-router-dom";
import {
  ChevronRight,
  User,
  Palette,
  Globe,
  HardDrive,
  Shield,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type SettingsSidebarProps = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

export default function SettingsSidebar({
  activeCategory,
  setActiveCategory,
}: SettingsSidebarProps) {
  const navigate = useNavigate();

  const settingsCategories = [
    { id: "account", label: "Account", icon: <User className="h-5 w-5" /> },
    {
      id: "appearance",
      label: "Appearance",
      icon: <Palette className="h-5 w-5" />,
    },
    { id: "language", label: "Language", icon: <Globe className="h-5 w-5" /> },
    {
      id: "storage",
      label: "Storage & Data",
      icon: <HardDrive className="h-5 w-5" />,
    },
    {
      id: "privacy",
      label: "Privacy & Security",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: <Bell className="h-5 w-5" />,
    },
  ];

  const handleGoBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="h-full rounded-2xl bg-white p-4 shadow-sm overflow-hidden flex flex-col">
      <div className="mb-4">
        <h2 className="text-xl font-medium">Settings</h2>
        <p className="text-sm text-gray-500">Manage your preferences</p>
      </div>

      <div className="space-y-1">
        {settingsCategories.map((category) => (
          <button
            key={category.id}
            className={`flex w-full items-center justify-between rounded-lg p-2 text-sm font-medium ${
              activeCategory === category.id
                ? "bg-gray-100"
                : "hover:bg-gray-100"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            <div className="flex items-center space-x-3">
              {category.icon}
              <span>{category.label}</span>
            </div>
            <ChevronRight className="h-4 w-4" />
          </button>
        ))}
      </div>

      <div className="mt-auto pt-4">
        <Button
          variant="outline"
          className="w-full justify-start"
          onClick={handleGoBack}
        >
          <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
}
