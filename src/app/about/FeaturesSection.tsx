import React from "react";
import Image from 'next/image';

interface FeatureProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  bottomImageSrc?: string; // Optional prop for the image under the icon
  bottomImageAlt?: string;
  iconWidth?: number; // Width of the top icon
  iconHeight?: number; // Height of the top icon
  bottomImageWidth?: number; // Width of the bottom image
  bottomImageHeight?: number; // Height of the bottom image
}

const Feature: React.FC<FeatureProps> = ({
  src,
  alt,
  title,
  description,
  bottomImageSrc,
  bottomImageAlt,
  iconWidth = 80,
  iconHeight = 80,
  bottomImageWidth = 120,
  bottomImageHeight = 40,
}) => (
  <div className="flex flex-col md:flex-row justify-center items-start py-8">
    <div className="flex-shrink-0">
      <Image
        src={src}
        alt={alt}
        width={iconWidth}
        height={iconHeight}
        className="object-contain"
      />
      {bottomImageSrc && (
        <div className="mt-4 pl-6">
          <Image
            src={bottomImageSrc}
            alt={bottomImageAlt || 'Additional image'}
            width={bottomImageWidth}
            height={bottomImageHeight}
            className="object-contain"
          />
        </div>
      )}
    </div>
    <div className="flex flex-row items-center max-w-2xl">
      <div className="flex flex-col md:text-left text-center">
        <h1 className="text-4xl font-bold text-pink-800 mb-16 mt-5 ml-2">{title}</h1>
        <p className="text-gray-800 text-lg leading-relaxed ml-2">{description}</p>
      </div>
    </div>
  </div>
);

const FeaturesSection = () => (
  <div className="container mx-auto px-6 md:px-12 py-16">
    <Feature
      src="/early stage innovation icon.png"
      alt="icon"
      title="Empowering Early-Stage Innovation"
      description="At AstraX Capital, we specialize in identifying and nurturing early-stage startups during private and seed rounds, partnering with founders to transform innovative ideas into industry-revolutionizing and sustainable businesses."
      bottomImageSrc="/line.png"
      bottomImageAlt="line"
      iconWidth={100} // Custom size for the icon
      iconHeight={100}
      bottomImageWidth={50} // Custom size for the bottom image
      bottomImageHeight={100}
    />
    <Feature
      src="/nurturing growth and expansion icon.png"
      alt="icon"
      title="Nurturing Growth and Expansion"
      description="As our portfolio companies evolve from microcaps to scale-ups, we champion their growth by facilitating follow-on funding, strategic partnerships, and market expansion, leveraging our network and expertise to navigate regulatory challenges, access new markets, and scale operations."
      bottomImageSrc="/line.png"
      bottomImageAlt="line"
      iconWidth={90}
      iconHeight={90}
      bottomImageWidth={50}
      bottomImageHeight={100}
    />

    <Feature
      src="/driving innovation delivering results icon.png"
      alt="icon"
      title="Driving Innovation, Delivering Results"
      description="At AstraX Capital, we leverage our proven track record to identify, invest in, and support disruptive startups, driving positive change and delivering impressive returns through strategic portfolio management."
      bottomImageSrc="/line.png"
      bottomImageAlt="line"
      iconWidth={90}
      iconHeight={90}
      bottomImageWidth={50}
      bottomImageHeight={100}
    />
    
    <Feature
      src="/continuous growth and success icon.png"
      alt="icon"
      title="Continuous Growth and Success"
      description="Our success at AstraX Capital reflects our methodical, result-oriented strategy that emphasizes strategic planning, ongoing optimization, and proactive management to support our portfolio companies' growth in a competitive landscape."
      bottomImageSrc="/line.png"
      bottomImageAlt="line"
      iconWidth={90}
      iconHeight={90}
      bottomImageWidth={50}
      bottomImageHeight={100}
    />
  </div>
);

export default FeaturesSection;
