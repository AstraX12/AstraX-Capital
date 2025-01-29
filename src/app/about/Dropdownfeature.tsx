"use client";
import { useState } from "react";

interface DropdownFeatureProps {
  className?: string; // Allow className as an optional prop
}

const DropdownFeature: React.FC<DropdownFeatureProps> = ({ className }) => {
  return (
    <div className={`dropdown-feature ${className}`}>
      {/* Component content */}
    </div>
  );
};

const faqs = [
  {
    question: "Empowering Early-Stage Innovation",
    answer: "We specialize in identifying and nurturing disruptive startups at the earliest stages, from pre-seed to Series A. Beyond capital, we provide founders with tailored mentorship, access to our global network, and operational resources to transform groundbreaking concepts into scalable, sustainable businesses. Our hands-on approach ensures innovators can focus on what matters most: building solutions that revolutionize industries.",
    image: "/early stage innovation icon.png",
  },
  {
    question: "Nurturing Growth and Expansion",
    answer: "As your venture scales from microcap to market leader, we stand by your side. Our growth framework includes securing follow-on funding, forging strategic partnerships, and unlocking global markets. With deep expertise in navigating regulatory hurdles and optimizing operational scalability, we empower portfolio companies to thrive in dynamic environments—turning potential into dominance.",
    image: "/nurturing growth and expansion icon.png",
  },
  {
    question: "Driving Innovation, Delivering Results",
    answer: "With a proven track record of backing industry disruptors, we combine data-driven insights and sector-specific expertise to curate high-impact portfolios. By aligning with startups that challenge the status quo, we’ve consistently delivered exceptional returns while catalyzing meaningful technological progress. Our success is measured not just in financial metrics, but in ecosystems transformed.",
    image: "/driving innovation delivering results icon.png",
  },
  {
    question: "Continuous Growth and Success",
    answer: "Our methodical, adaptive strategy ensures sustained momentum. Through relentless optimization, proactive risk management, and real-time market alignment, we equip portfolio companies to outpace competitors and seize emerging opportunities. At AstraX, growth isn’t a phase—it’s our perpetual commitment.",
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
    <div className="max-w-5xl mx-auto p-0 sm:p-6 pt-20 pb-40">
      <div className="space-y-0 sm:space-y-4 mb-4">
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
                <div className="absolute left-8 top-20 w-1 h-0 sm:h-28 bg-orange-500 rounded-full transition-all duration-500"></div>
              )}

              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl sm:text-4xl font-bold text-pink-800 mb-1 mt-0 sm:mt-5 sm:ml-2 ml-0">
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

