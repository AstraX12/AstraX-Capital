import React from "react";
import FeaturesSection from "./FeaturesSection";
import FeatureCard from "./FeatureCard";
import DropdownFeature from "./Dropdownfeature";

interface Feature {
  title: string;
  description: string;
  subtitle: string;
}

const features: Feature[] = [
  {
    title: "Incubate Your Vision",
    subtitle: "For Web3 Pioneers",
    description:
      "Turn your concept into a market-ready solution with our end-to-end incubation program. From tokenomics design to tech stack development, we provide the tools, capital, and mentorship to launch with impact.",
  }, 
  {
    title: "Strategic Advisory",
    subtitle: "Beyond Capital",
    description:
      "Access C-suite level guidance across go-to-market strategy, regulatory compliance, and ecosystem building. Our advisory network includes industry leaders in blockchain, AI, and decentralized technologies.",
  },
  {
    title: "Empower Through Education",
    subtitle: "Master the Web3 Landscape",
    description:
      "For founders, investors, and builders: Dive into curated workshops, market intelligence reports, and technical deep-dives designed to demystify decentralized ecosystems and digital assets.",
  },
];

const AboutUs: React.FC = () => {
  return (
    <section id="about_us" className="text-gray-700 body-font min-h-screen w-screen">
      <div className="container mx-auto flex items-center justify-center pt-10 lg:pt-40 px-4">
        <div className="grid grid-cols-1 lg:grid-row gap-6 items-center w-full">
          {/* Title Section */}
          <h1 className="text-4xl sm:text-5xl font-bold text-pink-800 text-center lg:text-center">
            About Us
          </h1>

          {/* Content Section */}
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center lg:text-justify px-40 pb-20">
              At AstraX Capital, we fuel the future by investing in visionary entrepreneurs 
              pioneering transformative technologies—from blockchain and AI to Web3 
              ecosystems. Our mission is to turn bold ideas into market-defining ventures 
              that redefine industries. Guided by integrity, innovation, and collaboration, 
              our globally experienced team partners with startups at every stage, offering
              strategic capital and hands-on expertise to accelerate growth, unlock value, 
              and shape tomorrow’s technological landscape.
          </p>
        </div>
        </div>


     {/* <FeaturesSection /> */}
      <DropdownFeature />

      {/* Features Card */}
      <div
        className="flex flex-col items-center py-20"
        style={{
          backgroundImage: "url('/backgrounds/BG2Full.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
        }}>
        <div className="flex justify-center mb-9 text-center mx-6 sm:my-0 my-0">
          <h1 className="pt-4 title-font text-4xl sm:text-5xl font-large text-pink-800 text-shadow font-bold pb-16">
            What can we offer?
          </h1>
        </div>
        {features.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} description={feature.description} subtitle={feature.subtitle} />
        ))}
      </div>

      <div className="flex flex-col items-center justify-center my-[420px] sm:my-0 bg-full bg-cover"
       style={{
        backgroundImage: "url('/backgrounds/.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
      >
        <div className="flex flex-col justify-center mb-9 text-center mx-6 sm:my-90 my-0">
          <h1 className="text-4xl sm:text-5xl font-bold text-pink-800 text-shadow pb-3">Our Focus Areas</h1>
          <h2 className="text-xl font-bold italic text-pink-800 text-shadow">We back innovators building the pillars of Web3 and beyond:</h2>
        </div>
        {[
          { title: "Layer 1 & 2 Infrastructure", desc: "Scalable blockchain protocols and interoperability solutions" },
          { title: "GameFi", desc: "Next-gen gaming economies powered by decentralized finance" },
          { title: "DeFi", desc: "Reinventing financial systems through trustless architectures" },
          { title: "Metaverse & NFTs", desc: "Digital ownership, immersive experiences, and creator economies" },
          { title: "AI-Driven Innovation", desc: "Machine learning models enhancing blockchain efficiency and user adoption" }
        ].map(({ title, desc }, index) => (
          <div key={index} className="grid grid-cols-1 lg:grid-row items-center w-full max-w-xl p-2 pb-12 sm:pb-5">
          <div className="border border-yellow-600 rounded-3xl">
            <h3 className="text-2xl sm:text-4xl font-semibold text-pink-800 text-center sm:text-center pt-4">{title}</h3>
            <p className="text-lg text-gray-700 leading-relaxed text-center sm:text-center pb-3 px-4">{desc}</p>
            </div>
          </div>
        ))}

      </div>
        
        {/* */}
        <div className="flex flex-col items-center justify-center my-0 py-20 pb-0 bg-purple-500 ">
          <div className="container mx-auto flex items-center justify-center  pb-20 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[42%_90px_67%] gap-0 items-center w-full max-w-6xl">
            {/* Title Section */}
            <h1 className="text-4xl sm:text-6xl font-bold text-white text-center lg:text-right">
            READY TO BUILD TOMORROW?
            </h1>
              {/* Divider */}
              <div className="bg-black h-[3px] w-12 sm:w-[6px] sm:h-40 mx-auto rounded-full"></div>

            {/* Content Section */}
            <p className="text-base sm:text-2xl text-white leading-relaxed text-center lg:text-left">
              Whether you’re a founder with a disruptive prototype or an investor seeking 
              frontier-tech opportunities—let’s pioneer the future together. 
              <a href="#contact_us" className="text-black hover:underline"> Contact Us </a> 
              to start the conversation.
            </p>
          </div>
        </div>
      </div>

   

    </section>
  );
};

export default AboutUs;
