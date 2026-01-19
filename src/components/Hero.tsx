import { useEffect, useState } from "react";
import type { heroType } from "../content/content";
import { type UserInfo } from "globacheap-navbar/src/store";
import { getUserInfo } from "globacheap-navbar/src/getUserInfo";
export default function Hero({
  content,
  lang,
}: {
  content: heroType;
  lang: langType;
}) {
  const [user, setUser] = useState<UserInfo | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const userInfo = getUserInfo<UserInfo>();
      setUser(userInfo);
    }
  }, []);
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Navigation */}
      {/* <NavBar /> */}
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              {content.title}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              {content.description}
            </p>
            <a
              href={
                user
                  ? `${lang === "en" ? "" : lang}/phone`
                  : `${lang === "en" ? "" : lang}/signup`
              }
              className="inline-block bg-[#27ae60] hover:bg-[#229954] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all hover:shadow-lg hover:shadow-green-500/30 transform hover:-translate-y-0.5"
            >
              {content.buttonText}
            </a>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              {content.trustIndicators.map(
                (indicator: string, index: number) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-[#27ae60]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-600 font-medium">
                      {indicator}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-[#27ae60] rounded-full opacity-10 blur-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>

              {/* Phone Image */}
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
                <img
                  src={content.image.src}
                  alt={content.image.alt}
                  className="w-full max-w-md drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
