"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  FileType,
  ArrowRight,
  Check,
  Shield,
  Zap,
  Clock,
  FileText,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  const [] = useState<File | null>(null);
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

  const features = [
    {
      title: "Fast Conversion",
      description: "Convert files in seconds",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      title: "100% Secure",
      description: "Files deleted after 24 hours",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: "High Quality",
      description: "Maintain original quality",
      icon: <Check className="h-5 w-5" />,
    },
    {
      title: "Free to Use",
      description: "No registration required",
      icon: <Clock className="h-5 w-5" />,
    },
  ];

  return (
    <div className="h-screen overflow-hidden bg-[#f8f8f8]">
      <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between py-6">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-black"></div>
            <div className="h-2 w-2 rounded-full bg-black"></div>
            <span className="ml-2 font-medium">UniversalConvert</span>
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-sm">EN</button>
            <a href="/contact" className="text-sm hover:underline">
              CONTACT US
            </a>
            <button className="flex flex-col space-y-1">
              <span className="h-0.5 w-6 bg-black"></span>
              <span className="h-0.5 w-6 bg-black"></span>
            </button>
          </div>
        </header>

        <main className="relative grid h-[calc(100vh-88px)] grid-cols-1 lg:grid-cols-2">
          <div
            className="absolute right-0 top-0 h-[300px] w-[300px] animate-pulse rounded-full bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-200 opacity-40 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative flex flex-col justify-center pr-0 lg:pr-10">
            <h1 className="text-5xl font-light leading-tight tracking-tight sm:text-6xl">
              CONVERT
              <br />
              ANY FILE
              <br />
              INSTANTLY.
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600">
              UniversalConvert supports 100+ file formats including documents,
              images, audio, video, and more. Convert files quickly with our
              advanced technology while maintaining the highest quality.
            </p>

            <div className="mt-6 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Button
                className="rounded-full px-6 py-5"
                onClick={handleConvertNow}
              >
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

          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-16 -left-16 h-32 w-32 rounded-full border-2 border-dashed border-gray-300 opacity-50"></div>
              <div className="absolute -bottom-20 -right-10 h-40 w-40 rounded-full border-2 border-dashed border-gray-300 opacity-50"></div>

              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-xl font-medium">
                  Why Choose UniversalConvert?
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  {features.map((feature) => (
                    <div
                      key={feature.title}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-medium">{feature.title}</h4>
                        <p className="text-xs text-gray-500">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  <h4 className="font-medium">Supported Formats</h4>
                  <div className="flex flex-wrap gap-1">
                    {[
                      "PDF",
                      "DOCX",
                      "JPG",
                      "PNG",
                      "MP3",
                      "MP4",
                      "SVG",
                      "GIF",
                      "XLSX",
                      "CSV",
                      "PPTX",
                      "TXT",
                    ].map((format) => (
                      <span
                        key={format}
                        className="rounded-full bg-gray-100 px-2 py-1 text-xs"
                      >
                        {format}
                      </span>
                    ))}
                    <span className="rounded-full bg-gray-100 px-2 py-1 text-xs">
                      +90 more
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-xs text-gray-500">
                        Server Status: Online
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      10M+ files converted
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile features section */}
          <div className="mt-8 lg:hidden">
            <h3 className="mb-4 text-lg font-medium">
              Why Choose UniversalConvert?
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start space-x-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">{feature.title}</h4>
                    <p className="text-xs text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
