import { Check, Shield, Zap, Clock } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Lightning Fast",
      description:
        "Convert files in seconds with our optimized cloud infrastructure",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      title: "Bank-Level Security",
      description:
        "End-to-end encryption with files auto-deleted after 24 hours",
      icon: <Shield className="h-5 w-5" />,
    },
    {
      title: "Premium Quality",
      description:
        "Preserve original quality with advanced conversion algorithms",
      icon: <Check className="h-5 w-5" />,
    },
    {
      title: "No Registration",
      description: "Start converting immediately, no account required",
      icon: <Clock className="h-5 w-5" />,
    },
  ];

  return (
    <>
      <div className="relative hidden lg:flex items-center justify-center">
        <div className="relative w-full max-w-md">
          <div className="absolute -top-16 -left-16 h-32 w-32 rounded-full border-2 border-dashed border-gray-300 opacity-50"></div>
          <div className="absolute -bottom-20 -right-10 h-40 w-40 rounded-full border-2 border-dashed border-gray-300 opacity-50"></div>

          <div className="rounded-2xl bg-white p-8 shadow-xl border border-gray-100">
            <h3 className="mb-6 text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400">
              Why Choose UniversalConvert?
            </h3>

            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start space-x-4 group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-pink-500/10 to-orange-400/10 text-pink-500 group-hover:from-pink-500 group-hover:to-orange-400 group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-4">
              <h4 className="font-semibold text-gray-900">Supported Formats</h4>
              <div className="flex flex-wrap gap-2">
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
                    className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium hover:bg-gray-200 cursor-pointer transition-colors"
                  >
                    {format}
                  </span>
                ))}
                <span className="rounded-full bg-gradient-to-r from-pink-500/20 to-orange-400/20 text-pink-600 px-3 py-1.5 text-xs font-medium">
                  +90 more
                </span>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-lg bg-gray-50 border border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm text-gray-700 font-medium">
                    All Systems Operational
                  </span>
                </div>
                <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400">
                  10M+ files converted
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 lg:hidden">
        <h3 className="mb-6 text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400">
          Why Choose UniversalConvert?
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-start space-x-3 p-4 rounded-lg border border-gray-100 bg-white shadow-sm"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-pink-500/10 to-orange-400/10 text-pink-500">
                {feature.icon}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-xs text-gray-600 mt-1">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
