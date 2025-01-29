import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  subtitle:string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, subtitle }) => {
  return (
    
    <div className="grid grid-cols-1 lg:grid-row items-center w-full max-w-4xl p-2 pb-12 sm:pb-5">
      <div className=" border-2 border-yellow-600 rounded-3xl">
      {/* Title Section */}
      <h1 className="text-2xl sm:text-4xl font-semibold text-pink-800 text-center sm:text-center pt-4">{title}</h1>
      <p className="text-xl text-pink-800 text-center italic sm:text-center pb-7">{subtitle}</p>
      {/* Content Section */}
      <p className="text-lg text-gray-700 leading-relaxed text-center sm:text-justify pb-3 px-4">{description}</p>
    </div>
    </div>
  );
};

export default FeatureCard;
