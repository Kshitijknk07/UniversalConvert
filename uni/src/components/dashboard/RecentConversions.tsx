import { FileText, Download, MoreHorizontal, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RecentConversions() {
  const recentConversions: any[] = [];

  return (
    <div className="flex-1 rounded-2xl bg-white p-6 shadow-md border border-gray-100 overflow-hidden flex flex-col">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Recent Conversions</h2>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search files..."
              className="w-48 rounded-full border border-gray-200 pl-9 pr-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20"
            />
          </div>
          <Button
            variant="outline"
            className="rounded-full text-sm border-gray-200"
          >
            View All
          </Button>
        </div>
      </div>

      <div className="overflow-auto rounded-xl border border-gray-100 flex-1">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                File Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Type
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Size
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {recentConversions.length > 0 ? (
              recentConversions.map((file, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-9 w-9 rounded-full bg-gradient-to-r from-pink-500/10 to-orange-400/10 flex items-center justify-center mr-3">
                        <FileText className="h-4 w-4 text-pink-500" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {file.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          Converted {file.date}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {file.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {file.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {file.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <Button
                        variant="ghost"
                        className="rounded-full p-2 hover:bg-gray-100"
                      >
                        <Download className="h-4 w-4 text-gray-500" />
                      </Button>
                      <Button
                        variant="ghost"
                        className="rounded-full p-2 hover:bg-gray-100"
                      >
                        <MoreHorizontal className="h-4 w-4 text-gray-500" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-12 text-center text-sm text-gray-500"
                >
                  <div className="flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-gradient-to-r from-pink-500/10 to-orange-400/10 flex items-center justify-center mb-4">
                      <FileText className="h-8 w-8 text-pink-500" />
                    </div>
                    <p className="text-lg font-medium text-gray-900 mb-1">
                      No conversion history yet
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      Your recent file conversions will appear here
                    </p>
                    <Button className="rounded-full px-6 py-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-md">
                      Convert Your First File
                    </Button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
