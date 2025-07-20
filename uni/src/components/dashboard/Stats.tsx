import { FileText, BarChart, Clock } from "lucide-react";

interface StatsProps {
  stats: {
    filesConverted: number;
    storageUsed: number;
    savedTime: number;
  };
}

export default function Stats({ stats }: StatsProps) {
  const statList = [
    {
      title: "Files Converted",
      value: stats.filesConverted,
      change: `${stats.filesConverted} today`,
      icon: <FileText className="h-5 w-5" />,
      color: "from-pink-500 to-orange-400",
    },
    {
      title: "Storage Used",
      value: `${stats.storageUsed.toFixed(2)} MB`,
      change: "of 500 MB",
      icon: <BarChart className="h-5 w-5" />,
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Saved Time",
      value: `${stats.savedTime} min`,
      change: "this week",
      icon: <Clock className="h-5 w-5" />,
      color: "from-green-500 to-emerald-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {statList.map((stat) => (
        <div
          key={stat.title}
          className="rounded-2xl bg-white p-5 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>
              <h3 className="text-2xl font-semibold mt-1">{stat.value}</h3>
              <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
            </div>
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${stat.color} text-white shadow-sm`}
            >
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
