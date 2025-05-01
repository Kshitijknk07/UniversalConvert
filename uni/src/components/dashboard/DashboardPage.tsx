"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  FileType,
  ArrowRight,
  Clock,
  FileText,
  Upload,
  Settings,
  User,
  BarChart,
  History,
  LogOut,
  ChevronRight,
} from "lucide-react";

export default function DashboardPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedConversion, setSelectedConversion] = useState<string | null>(
    "PDF to Word"
  );

  const conversionTypes = [
    { name: "PDF to Word", icon: <FileText className="h-4 w-4" /> },
    { name: "JPG to PNG", icon: <FileType className="h-4 w-4" /> },
    { name: "MP4 to MP3", icon: <FileType className="h-4 w-4" /> },
    { name: "DOCX to PDF", icon: <FileText className="h-4 w-4" /> },
    { name: "PNG to SVG", icon: <FileType className="h-4 w-4" /> },
  ];

  const recentConversions = [
    {
      name: "Project_Report.pdf",
      type: "PDF to Word",
      date: "Today, 10:30 AM",
      size: "2.4 MB",
    },
    {
      name: "Presentation.pptx",
      type: "PPTX to PDF",
      date: "Yesterday, 3:15 PM",
      size: "5.1 MB",
    },
    {
      name: "Profile_Picture.jpg",
      type: "JPG to PNG",
      date: "Oct 15, 2023",
      size: "1.2 MB",
    },
    {
      name: "Meeting_Recording.mp4",
      type: "MP4 to MP3",
      date: "Oct 10, 2023",
      size: "15.8 MB",
    },
  ];

  const stats = [
    {
      title: "Files Converted",
      value: "24",
      icon: <FileText className="h-5 w-5" />,
    },
    {
      title: "Storage Used",
      value: "120 MB",
      icon: <BarChart className="h-5 w-5" />,
    },
    {
      title: "Saved Time",
      value: "45 min",
      icon: <Clock className="h-5 w-5" />,
    },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setSelectedFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-[#f8f8f8]">
      <div className="h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col">
        {/* Header */}
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
              <span className="text-sm font-medium">John Doe</span>
            </div>
            <button className="flex flex-col space-y-1">
              <span className="h-0.5 w-6 bg-black"></span>
              <span className="h-0.5 w-6 bg-black"></span>
            </button>
          </div>
        </header>

        <main className="flex-1 py-3 overflow-hidden">
          <div className="h-full grid grid-cols-1 gap-4 lg:grid-cols-4">
            {/* Sidebar */}
            <div className="lg:col-span-1 h-full">
              <div className="h-full rounded-2xl bg-white p-4 shadow-sm overflow-hidden flex flex-col">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">John Doe</h4>
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

                    <button className="flex w-full items-center justify-between rounded-lg p-2 text-sm font-medium hover:bg-gray-100">
                      <div className="flex items-center space-x-3">
                        <Settings className="h-5 w-5" />
                        <span>Settings</span>
                      </div>
                      <ChevronRight className="h-4 w-4" />
                    </button>

                    <button className="flex w-full items-center justify-between rounded-lg p-2 text-sm font-medium hover:bg-gray-100">
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
                      <div className="h-2 w-1/4 rounded-full bg-gradient-to-r from-pink-400 to-orange-300"></div>
                    </div>
                    <p className="text-xs text-gray-500">
                      120 MB of 500 MB used
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-4 h-full overflow-hidden flex flex-col">
              {/* Stats */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.title}
                    className="rounded-2xl bg-white p-4 shadow-sm"
                  >
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

              {/* File Conversion */}
              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <h2 className="mb-3 text-xl font-medium">Convert a File</h2>

                <div className="mb-3">
                  <p className="mb-2 text-sm font-medium">Conversion Type</p>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
                    {conversionTypes.map((conversion) => (
                      <button
                        key={conversion.name}
                        className={`flex items-center justify-center rounded-lg border p-2 text-center text-xs transition-all hover:bg-white hover:shadow-sm ${
                          selectedConversion === conversion.name
                            ? "bg-white shadow-sm border-gray-300"
                            : "bg-transparent"
                        }`}
                        onClick={() => setSelectedConversion(conversion.name)}
                      >
                        {conversion.icon}
                        <span className="ml-1">{conversion.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div
                  className="mb-3 flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 p-4 transition-all hover:border-gray-400"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  {selectedFile ? (
                    <div className="text-center">
                      <FileText className="mx-auto mb-2 h-8 w-8 text-gray-400" />
                      <p className="mb-1 font-medium">{selectedFile.name}</p>
                      <p className="text-xs text-gray-500">
                        {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                      </p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Upload className="mx-auto mb-1 h-8 w-8 text-gray-400" />
                      <p className="mb-1 font-medium">
                        Drag & Drop your file here
                      </p>
                      <p className="mb-2 text-xs text-gray-500">
                        or click to browse from your computer
                      </p>
                      <input
                        type="file"
                        className="hidden"
                        id="fileInput"
                        onChange={handleFileChange}
                      />
                      <label htmlFor="fileInput">
                        <Button
                          className="rounded-full px-4 py-2 cursor-pointer text-sm"
                          asChild
                        >
                          <span>BROWSE FILES</span>
                        </Button>
                      </label>
                    </div>
                  )}
                </div>

                {selectedFile && (
                  <div className="flex justify-center">
                    <Button className="rounded-full px-4 py-2 text-sm">
                      CONVERT NOW
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>

              {/* Recent Conversions */}
              <div className="flex-1 rounded-2xl bg-white p-4 shadow-sm overflow-hidden flex flex-col">
                <div className="mb-3 flex items-center justify-between">
                  <h2 className="text-xl font-medium">Recent Conversions</h2>
                  <button className="text-sm text-gray-500 hover:underline">
                    View All
                  </button>
                </div>

                <div className="overflow-auto rounded-lg border flex-1">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          File Name
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Type
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Size
                        </th>
                        <th scope="col" className="relative px-4 py-2">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentConversions.map((file) => (
                        <tr key={file.name} className="hover:bg-gray-50">
                          <td className="px-4 py-2 whitespace-nowrap">
                            <div className="flex items-center">
                              <FileText className="h-4 w-4 text-gray-400 mr-2" />
                              <span className="text-sm font-medium">
                                {file.name}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap">
                            <span className="text-sm text-gray-500">
                              {file.type}
                            </span>
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap">
                            <span className="text-sm text-gray-500">
                              {file.date}
                            </span>
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap">
                            <span className="text-sm text-gray-500">
                              {file.size}
                            </span>
                          </td>
                          <td className="px-4 py-2 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-gray-500 hover:text-gray-700">
                              Download
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Enhanced gradient effects */}
      <div
        className="fixed right-0 top-0 h-[500px] w-[500px] animate-pulse rounded-full bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-200 opacity-30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="fixed left-0 bottom-0 h-[400px] w-[400px] animate-pulse rounded-full bg-gradient-to-tr from-blue-400 via-purple-300 to-pink-200 opacity-25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="fixed right-1/4 bottom-1/4 h-[300px] w-[300px] animate-pulse rounded-full bg-gradient-to-r from-green-300 via-teal-300 to-cyan-300 opacity-20 blur-3xl"
        aria-hidden="true"
      />
    </div>
  );
}
