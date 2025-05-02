import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileType, ArrowRight, FileText, Upload } from "lucide-react";

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
            <p className="mb-1 font-medium">Drag & Drop your file here</p>
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
  );
}
