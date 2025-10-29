import { UserPlus, CreditCard, Phone, ArrowRight, Check } from "lucide-react";
import type { howItWorksType } from "../content/content";

export default function HowItWorks({ content }: { content: howItWorksType }) {
  const iconMap = {
    user: UserPlus,
    credit: CreditCard,
    phone: Phone,
  };

  return (
    <section className="bg-linear-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            {content.heading}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {content.subheading}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {content.steps.map((step, index) => {
            const IconComponent = iconMap[step.icon as keyof typeof iconMap];
            const isLastStep = index === content.steps.length - 1;

            return (
              <div key={index} className="relative">
                {/* Card */}
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-linear-to-br from-[#27ae60] to-[#229954] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/30">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Step Number */}
                  <div className="inline-block px-3 py-1 bg-[#27ae60]/10 text-[#27ae60] rounded-full text-sm font-bold mb-4 w-fit">
                    Step {index + 1}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3 mt-auto">
                    {step.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-[#27ae60] shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow - Hidden on mobile, shown on desktop between cards */}
                {!isLastStep && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-[#27ae60]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-linear-to-r from-[#27ae60] to-[#229954] hover:from-[#229954] hover:to-[#1e8449] text-white font-semibold px-10 py-5 rounded-full text-lg transition-all hover:shadow-2xl hover:shadow-green-500/40 transform hover:-translate-y-1">
            {content.ctaText}
          </button>
        </div>
      </div>
    </section>
  );
}
