// WhyChooseUs.tsx
import { Phone, DollarSign, Zap } from "lucide-react";
import type { WhyChooseUsType } from "../content/content";

export default function WhyChooseUs({ content }: { content: WhyChooseUsType }) {
  // Icon mapping
  const iconMap = {
    phone: Phone,
    dollar: DollarSign,
    zap: Zap,
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          {content.heading}
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {content.subheading}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {content.features.map((feature, index) => {
          const IconComponent = iconMap[feature.icon as keyof typeof iconMap];

          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#27ae60]/20"
            >
              <div className="w-14 h-14 bg-[#27ae60]/10 rounded-xl flex items-center justify-center mb-6">
                <IconComponent className="w-7 h-7 text-[#27ae60]" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
