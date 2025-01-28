import React from "react";
import FeaturesSection from "./FeaturesSection";
import FeatureCard from "./FeatureCard";
import DropdownFeature from "./Dropdownfeature";

interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Incubate",
    description:
      "Are you a visionary entrepreneur with a groundbreaking concept or idea in the Web3 space? Our program is designed to help you bridge the gap between idea and execution, turning your vision into a reality.",
  }, 
  {
    title: "Advice",
    description:
      "We offer comprehensive advisory services, providing strategic guidance, market insights, and operational support to help you navigate various challenges and make informed decisions.",
  },
  {
    title: "Train and Educate",
    description:
      "At AstraX Capital, we empower entrepreneurs, investors, and enthusiasts with educational resources and training to navigate the Web3 and digital asset landscape with confidence.",
  },
];

const AboutUs: React.FC = () => {
  return (
    <section id="about_us" className="text-gray-700 body-font min-h-screen w-screen">
      <div className="container mx-auto flex items-center justify-center pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-[25%_64px_65%] gap-6 items-center w-full max-w-6xl">
          {/* Title Section */}
          <h1 className="text-6xl font-bold text-pink-800 text-right">About Us</h1>

          {/* Divider */}
          <div className="bg-orange-500 w-[6px] h-32 mx-auto rounded-full"></div>

          {/* Content Section */}
          <p className="text-lg text-gray-700 leading-relaxed">
                      At AstraX Capital, we invest in pioneering technologies like blockchain and 
            AI, empowering visionary entrepreneurs to transform ideas into impactful 
            businesses. Guided by integrity, innovation, and collaboration, our seasoned team 
            partners with startups at every stage to drive growth, create value, and shape the 
            future.
          </p>
        </div>
      </div>

      {/* <FeaturesSection /> */}
      <DropdownFeature />

        {/* Features Card */}
        <div
          className="flex flex-col items-center justify-center my-0"
          style={{
            backgroundImage: "url('/backgrounds/BG2Full.png')",
            backgroundSize: "cover", 
            backgroundPosition: "center", 
            backgroundRepeat: "no-repeat", 
            width: "100%", 
            height: "100vh", 
          }}
        >
          <div className="flex justify-center mb-9 text-center mx-6">
            <h1 className="pt-12 title-font text-6xl font-large text-pink-800 text-shadow font-bold">
              What can we offer?
            </h1>
          </div>
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} />
          ))}
          <div className="container mx-auto flex items-center justify-center pt-20 px-80">
            <p className="text-2xl text-gray-700 leading-relaxed text-center">
            We specialize in supporting visionary founders who are developing innovative 
            infrastructure and decentralized applications within the Web3 ecosystem.
            </p>
            </div>
          </div>

    </section>
  );
};

export default AboutUs;
