import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[20%_64px_65%] gap-6 items-center w-full max-w-6xl p-6">
      {/* Title Section */}
      <h1 className="text-4xl font-bold text-pink-800 text-right">{title}</h1>

      {/* Divider */}
      <div className="bg-orange-500 w-[6px] h-24 mx-auto rounded-full"></div>

      {/* Content Section */}
      <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
