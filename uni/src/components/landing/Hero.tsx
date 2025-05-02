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
      <div className="flex items-center mb-2">
        <div className="h-1.5 w-16 bg-gradient-to-r from-pink-500 to-orange-400 mr-3"></div>
        <span className="text-sm font-medium text-gray-600">
          FILE CONVERSION MADE SIMPLE
        </span>
      </div>

      <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
        CONVERT
        <br />
        ANY FILE
        <br />
        <span className="relative">
          INSTANTLY
          <span className="absolute -right-12 top-0 h-3 w-3 animate-ping rounded-full bg-pink-400"></span>
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-600">
        Transform your files effortlessly with UniversalConvert. Our platform
        supports
        <span className="font-semibold"> 100+ file formats</span> including
        documents, images, audio, video, and more. Experience lightning-fast
        conversions with our advanced cloud technology while maintaining the
        highest quality standards.
      </p>

      <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <Button
          className="rounded-full px-8 py-6 bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={handleConvertNow}
        >
          START CONVERTING NOW
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          className="rounded-full px-8 py-6 border-2 hover:bg-gray-50"
        >
          EXPLORE FEATURES
        </Button>
      </div>

      <div className="mt-12">
        <div className="flex items-center space-x-3 mb-4">
          <span className="text-sm font-medium">POPULAR CONVERSIONS</span>
          <span className="h-px w-20 bg-gradient-to-r from-pink-500 to-orange-400"></span>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {conversionTypes.map((conversion) => (
            <button
              key={conversion.name}
              className={`flex items-center justify-center rounded-lg border-2 p-3 text-center text-xs transition-all hover:bg-white hover:shadow-md ${
                selectedConversion === conversion.name
                  ? "bg-white shadow-md border-pink-200"
                  : "bg-transparent"
              }`}
              onClick={() => setSelectedConversion(conversion.name)}
            >
              {conversion.icon}
              <span className="ml-2 font-medium">{conversion.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
