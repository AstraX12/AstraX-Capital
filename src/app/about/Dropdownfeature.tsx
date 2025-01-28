"use client";
import { useState } from "react";

const faqs = [
  {
    question: "Empowering Early-Stage Innovation",
    answer: "At AstraX Capital, we specialize in identifying and nurturing early-stage startups during private and seed rounds, partnering with founders to transform innovative ideas into industry-revolutionizing and sustainable businesses.",
    image: "/early stage innovation icon.png",
  },
  {
    question: "Nurturing Growth and Expansion",
    answer: "As our portfolio companies evolve from microcaps to scale-ups, we champion their growth by facilitating follow-on funding, strategic partnerships, and market expansion, leveraging our network and expertise to navigate regulatory challenges, access new markets, and scale operations.",
    image: "/nurturing growth and expansion icon.png",
  },
  {
    question: "Driving Innovation, Delivering Results",
    answer: "At AstraX Capital, we leverage our proven track record to identify, invest in, and support disruptive startups, driving positive change and delivering impressive returns through strategic portfolio management.",
    image: "/driving innovation delivering results icon.png",
  },
  {
    question: "Continuous Growth and Success",
    answer: "Our success at AstraX Capital reflects our methodical, result-oriented strategy that emphasizes strategic planning, ongoing optimization, and proactive management to support our portfolio companies' growth in a competitive landscape.",
    image: "/continuous growth and success icon.png",
  },
];

export default function FAQSection() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 pt-20 pb-40">
      <div className="space-y-4 mb-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`transition-all duration-500 p-4  ${
              hoverIndex === index ? "" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-start relative mb-4">
              {/* Left-Side Image */}
              <img
                src={faq.image}
                alt="FAQ Icon"
                className="w-16 h-16 mr-4 transition-transform duration-500"
                style={{
                  transform: hoverIndex === index ? "scale(1.1)" : "scale(1)",
                }}
              />

              {/* Orange Line */}
              {hoverIndex === index && (
                <div className="absolute left-8 top-20 w-1 h-20 bg-orange-500 rounded-full transition-all duration-500"></div>
              )}

              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-4xl font-bold text-pink-800 mb-1 mt-5 ml-2">
                    {faq.question}
                  </h3>
                  <span
                    className={`transform transition-transform duration-500 ${
                      hoverIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                    hoverIndex === index ? "max-h-[300px]" : "max-h-0"
                  }`}
                >
                  <p className="mt-2 ml-2 text-gray-800 text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
