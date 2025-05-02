import { Check, Shield, Zap, Clock } from "lucide-react";

export default function Features() {
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
    <>
      {/* Desktop features */}
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
                <div key={feature.title} className="flex items-start space-x-3">
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
                <p className="text-xs text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
