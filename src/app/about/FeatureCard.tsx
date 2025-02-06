import Image from "next/image";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  subtitle: string;
  image?: string; // Optional image prop
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, subtitle, image }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center w-full max-w-4xl p-4 border-2 border-yellow-600 rounded-3xl">
      {/* Image Section */}
      {image && (
        <div className="flex-shrink-0 p-4">
          <Image src={image} alt={title} width={80} height={80} className="w-16 h-16 sm:w-24 sm:h-24 object-contain" />
        </div>
      )}
      
      {/* Text Section */}
      <div className="flex flex-col flex-grow text-center lg:text-left p-4">
        <h1 className="text-2xl sm:text-4xl font-semibold text-pink-800">{title}</h1>
        <p className="text-xl text-pink-800 italic pb-2">{subtitle}</p>
        <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
