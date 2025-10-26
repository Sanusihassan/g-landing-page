import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Logo from "./icons/Logo";

export default function Navbar() {
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "de", name: "Deutsch", flag: "🇩🇪" },
    { code: "ar", name: "العربية", flag: "🇦🇪" },
  ];

  const [selectedLang, setSelectedLang] = useState(languages[0]);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <Logo className="w-11 h-11" viewBox="0 0 500 500" />
            <span className="text-2xl font-bold text-gray-900">Globasig</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Pricing
            </a>
            <a
              href="/buy-number"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Buy Number
            </a>
            <a
              href="/buy-credit"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Buy Credit
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Right Side - Language & CTA */}
          <div className="flex items-center gap-4">
            {/* Language Dropdown */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-xl">{selectedLang.flag}</span>
                <span className="text-sm font-medium text-gray-700">
                  {selectedLang.code.toUpperCase()}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform ${
                    langOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {langOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setLangOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-20">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setSelectedLang(lang);
                          setLangOpen(false);
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors text-left"
                      >
                        <span className="text-xl">{lang.flag}</span>
                        <span className="text-sm font-medium text-gray-700">
                          {lang.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Get Started Button */}
            <button className="bg-[#27ae60] hover:bg-[#229954] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors">
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-50 rounded-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors py-2"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors py-2"
              >
                Pricing
              </a>
              <a
                href="/buy-number"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors py-2"
              >
                Buy Number
              </a>
              <a
                href="/buy-credit"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors py-2"
              >
                Buy Credit
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors py-2"
              >
                Contact
              </a>

              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm font-medium text-gray-500 mb-2">
                  Language
                </p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setSelectedLang(lang)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                        selectedLang.code === lang.code
                          ? "bg-[#27ae60] text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span className="text-sm font-medium">
                        {lang.code.toUpperCase()}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
