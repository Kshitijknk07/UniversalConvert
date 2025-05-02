import { FileText, BarChart, Clock } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      title: "Files Converted",
      value: "0",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      title: "Storage Used",
      value: "0 MB",
      icon: <BarChart className="h-5 w-5" />,
    },
    {
      title: "Saved Time",
      value: "0 min",
      icon: <Clock className="h-5 w-5" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.title} className="rounded-2xl bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>
              <h3 className="text-2xl font-medium">{stat.value}</h3>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
