import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileType, ArrowRight, FileText, Upload, Settings } from "lucide-react";

export default function FileConversion() {
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
    <div className="rounded-2xl bg-white p-6 shadow-md border border-gray-100">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold">Convert a File</h2>
        <Button variant="ghost" className="rounded-full p-2 hover:bg-gray-100">
          <Settings className="h-5 w-5 text-gray-500" />
        </Button>
      </div>

      <div className="mb-5">
        <p className="mb-3 text-sm font-medium text-gray-700">
          Conversion Type
        </p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {conversionTypes.map((conversion) => (
            <button
              key={conversion.name}
              className={`flex items-center justify-center rounded-lg border-2 p-3 text-center text-xs transition-all hover:bg-white hover:shadow-md ${
                selectedConversion === conversion.name
                  ? "bg-white shadow-md border-pink-200"
                  : "bg-transparent border-gray-200"
              }`}
              onClick={() => setSelectedConversion(conversion.name)}
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  selectedConversion === conversion.name
                    ? "bg-gradient-to-r from-pink-500/10 to-orange-400/10 text-pink-500"
                    : "bg-gray-100 text-gray-500"
                } mr-2`}
              >
                {conversion.icon}
              </div>
              <span className="font-medium">{conversion.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div
        className="mb-5 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 p-8 transition-all hover:border-pink-300 bg-gray-50"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {selectedFile ? (
          <div className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-r from-pink-500/20 to-orange-400/20 flex items-center justify-center">
              <FileText className="h-8 w-8 text-pink-500" />
            </div>
            <p className="mb-2 text-lg font-medium">{selectedFile.name}</p>
            <p className="text-sm text-gray-500 mb-4">
              {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
            </p>
            <Button
              variant="outline"
              className="rounded-full px-4 py-2 border-pink-200 text-pink-500 hover:bg-pink-50"
              onClick={() => setSelectedFile(null)}
            >
              Choose Different File
            </Button>
          </div>
        ) : (
          <div className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-r from-pink-500/20 to-orange-400/20 flex items-center justify-center">
              <Upload className="h-8 w-8 text-pink-500" />
            </div>
            <p className="mb-2 text-lg font-medium">
              Drag & Drop your file here
            </p>
            <p className="mb-4 text-sm text-gray-500">
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
                className="rounded-full px-6 py-2.5 bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
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
          <Button className="rounded-full px-8 py-3 bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white shadow-md hover:shadow-lg transition-all duration-300">
            CONVERT NOW
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  );
}
