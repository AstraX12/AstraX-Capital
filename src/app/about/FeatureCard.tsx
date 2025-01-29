import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[38%_48px_67%] gap-3 sm:gap-6 items-center w-full max-w-4xl p-2 pb-12 sm:pb-0">
      {/* Title Section */}
      <h1 className="text-2xl sm:text-4xl font-bold text-pink-800 text-center sm:text-right">{title}</h1>

      {/* Divider */}
      <div className="bg-orange-500 w-[6px] h-0 sm:h-24 mx-auto rounded-full"></div>

      {/* Content Section */}
      <p className="text-lg text-gray-700 leading-relaxed text-center sm:text-left">{description}</p>
    </div>
  );
};

export default FeatureCard;
