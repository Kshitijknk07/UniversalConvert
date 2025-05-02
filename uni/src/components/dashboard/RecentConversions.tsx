import { FileText } from "lucide-react";

export default function RecentConversions() {
  // Empty recent conversions array
  const recentConversions: {
    name: string;
    type: string;
    date: string;
    size: string;
  }[] = [];

  return (
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
            {recentConversions.length > 0 ? (
              recentConversions.map((file) => (
                <tr key={file.name} className="hover:bg-gray-50">
                  <td className="px-4 py-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileText className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm font-medium">{file.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span className="text-sm text-gray-500">{file.type}</span>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span className="text-sm text-gray-500">{file.date}</span>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <span className="text-sm text-gray-500">{file.size}</span>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-gray-500 hover:text-gray-700">
                      Download
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-8 text-center text-sm text-gray-500"
                >
                  No conversion history yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
