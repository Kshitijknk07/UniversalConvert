import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileType, ArrowRight, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const [selectedConversion, setSelectedConversion] = useState<string | null>(
    null
  );

  const handleConvertNow = () => {
    navigate("/dashboard");
  };

  const conversionTypes = [
    { name: "PDF to Word", icon: <FileText className="h-4 w-4" /> },
    { name: "JPG to PNG", icon: <FileType className="h-4 w-4" /> },
    { name: "MP4 to MP3", icon: <FileType className="h-4 w-4" /> },
    { name: "DOCX to PDF", icon: <FileText className="h-4 w-4" /> },
    { name: "PNG to SVG", icon: <FileType className="h-4 w-4" /> },
  ];

  return (
    <div className="relative flex flex-col justify-center pr-0 lg:pr-10">
      <h1 className="text-5xl font-light leading-tight tracking-tight sm:text-6xl">
        CONVERT
        <br />
        ANY FILE
        <br />
        INSTANTLY.
      </h1>

      <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600">
        UniversalConvert supports 100+ file formats including documents, images,
        audio, video, and more. Convert files quickly with our advanced
        technology while maintaining the highest quality.
      </p>

      <div className="mt-6 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <Button className="rounded-full px-6 py-5" onClick={handleConvertNow}>
          CONVERT NOW
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="mt-8">
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-sm font-medium">POPULAR CONVERSIONS</span>
          <span className="h-px w-12 bg-black"></span>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
          {conversionTypes.map((conversion) => (
            <button
              key={conversion.name}
              className={`flex items-center justify-center rounded-lg border p-2 text-center text-xs transition-all hover:bg-white hover:shadow-sm ${
                selectedConversion === conversion.name
                  ? "bg-white shadow-sm"
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
    </div>
  );
}
