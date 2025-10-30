import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import type { faqType } from "../content/content";

export default function FAQ({ content }: { content: faqType }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-10 h-10 text-[#27ae60]" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {content.heading}
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {content.subheading}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {content.questions.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={index}
                itemScope
                itemType="https://schema.org/Question"
                className="border border-gray-200 rounded-2xl overflow-hidden hover:border-[#27ae60]/30 transition-colors"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3
                    itemProp="name"
                    className="text-lg md:text-xl font-semibold text-gray-900 flex-1"
                  >
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-6 h-6 text-[#27ae60] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  id={`faq-answer-${index}`}
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div
                    itemProp="text"
                    className="px-6 pb-5 text-gray-600 leading-relaxed"
                  >
                    {faq.answer}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Contact CTA - Now Dynamic */}
        <div className="mt-12 text-center p-8 bg-linear-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
          <p className="text-gray-700 mb-4">{content.contactCTA.text}</p>
          <a
            href={"/contact-us"}
            className="bg-[#27ae60] hover:bg-[#229954] text-white font-semibold px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-green-500/30 inline-block"
          >
            {content.contactCTA.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
