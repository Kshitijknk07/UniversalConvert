import { Facebook, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-2 w-2 rounded-full bg-black"></div>
            <div className="h-2 w-2 rounded-full bg-black"></div>
            <span className="ml-2 font-bold">UniversalConvert</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            The ultimate file conversion platform for all your document, image,
            audio, and video needs.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-gray-800 transition-colors"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-800 transition-colors"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-800 transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-800 transition-colors"
            >
              <Github size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Product</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                API
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Integrations
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Guides
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Support
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-500">
          © 2023 UniversalConvert. All rights reserved.
        </p>
        <div className="mt-4 md:mt-0">
          <select className="text-sm bg-transparent border border-gray-200 rounded-md px-2 py-1">
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>German</option>
          </select>
        </div>
      </div>
    </footer>
  );
}
