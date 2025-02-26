import React from "react";
import FeaturesSection from "./FeaturesSection";
import FeatureCard from "./FeatureCard";
import DropdownFeature from "./Dropdownfeature";
import image from "next/image";


const AboutUs: React.FC = () => {
  return (
    <section id="about_us" className="text-gray-700 body-font min-h-screen w-screen">
         <div className="flex flex-col items-center justify-center bg-full bg-cover object-cover"
            style={{
              backgroundImage: "url('/backgrounds/BG_Mid.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              minHeight: "100vh", 
            }}
        >
          {/* Content Container */}
      
            <div className="container mx-auto flex items-center justify-center pt-20 lg:pt-32 px-4">
              <div className="grid grid-cols-1 lg:grid-row gap-6 items-center w-full">
                {/* Title Section */}
                <h1 className="text-4xl sm:text-5xl font-bold text-pink-800 text-center lg:text-center">
                  About Us
                </h1>

                {/* Content Section */}
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center lg:text-justify sm:px-40 px-0 pb-20 sm:pb-0">
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

            {/* Features Section */}
            <DropdownFeature />
          </div>
     
        <div className="flex flex-col items-center justify-center bg-full bg-cover py-0 sm:py-24"
            style={{
              backgroundImage: "url('/backgrounds/BG_3What.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              minHeight: "80vh", 
            }}
        >
          {/* Features Card */}
          <div className="flex flex-col justify-center items-center pb-20 sm:pb-0"
            style={{
              width: "100%",
              minHeight: "100vh",  // Changed from height: 100vh
            }}
          >
            <div className="flex flex-col justify-center mb-9 text-center mx-6 relative ">
              <h1 className="pt-4 title-font text-4xl sm:text-5xl font-large text-pink-800 text-shadow font-bold pb-0 sm:pb-16">
                What can we offer?
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 w-full max-w-5xl mx-auto place-items-center">
              {[
                { title: "Incubate Your Vision", subtitle:"For Web3 Pioneers" , img: "Icon_Incubate1.png", desc: "Turn your concept into a market-ready solution with our end-to-end incubation program. From tokenomics design to tech stack development, we provide the tools, capital, and mentorship to launch with impact." },
                { title: "Strategic Advisory", subtitle:"Beyond Capital", img: "/Icon_Strategic.png", desc: "Access C-suite level guidance across go-to-market strategy, regulatory compliance, and ecosystem building. Our advisory network includes industry leaders in blockchain, AI, and decentralized technologies." },
                { title: "Empower Through Education", subtitle:"Master the Web3 Landscape", img: "/Icon_Empower1.png", desc: "For founders, investors, and builders: Dive into curated workshops, market intelligence reports, and technical deep-dives designed to demystify decentralized ecosystems and digital assets." }
              ].map(({ title, desc, img, subtitle }, index) => (
                <div 
                  key={index} 
                  className={`border-2 border-yellow-600 rounded-3xl p-6 w-80 sm:w-[30rem] text-center shadow-lg bg-white bg-opacity-50 ${
                    index === 2 ? "sm:col-span-2" : ""
                  }`}
                >
                  <img src={img} alt={title} className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4" />
                  <h3 className="text-2xl sm:text-3xl font-bold text-pink-800">{title}</h3>
                  <p className="text-xl text-pink-800 italic pb-2">{subtitle}</p>
                  <p className="text-lg text-gray-700 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Our Focus Areas Section */}
          <div className="flex flex-col items-center justify-center pb-20 sm:pb-0"
            style={{
              width: "100%",
              minHeight: "80vh", 
            }}
        >
          <div className="flex flex-col justify-center mb-9 pt-0 sm:pt-32 text-center mx-6 relative ">
            <h1 className="text-4xl sm:text-5xl font-bold text-pink-800 text-shadow pb-3">
              Our Focus Areas
            </h1>
            <h2 className="text-xl font-bold italic text-pink-800 text-shadow">
              We back innovators building the pillars of Web3 and beyond:
            </h2>
          </div>

            <div className="flex flex-wrap justify-center gap-4 px-4 w-full max-w-7xl">
              {[
                { title: "Layer 1 & 2 Infrastructure", desc: "Scalable blockchain protocols and interoperability solutions", img: "/Focus_Layer.png" },
                { title: "GameFi", desc: "Next-gen gaming economies powered by decentralized finance", img: "/Focus_Gamefi1.png" },
                { title: "DeFi", desc: "Reinventing financial systems through trustless architectures", img: "/Focus_Defi.png" },
                { title: "Metaverse & NFTs", desc: "Digital ownership, immersive experiences, and creator economies", img: "/Focus_Meta.png" },
                { title: "AI-Driven Innovation", desc: "Machine learning models enhancing blockchain efficiency and user adoption", img: "/Focus_AI.png" }
                ].map(({ title, desc, img }, index) => (
                <div key={index} className="border border-yellow-600 rounded-3xl p-4 w-64 sm:w-80 text-center bg-white bg-opacity-50">
                  <img src={img} alt={title} className="w-20 h-20 mx-auto mb-3" />
                  <h3 className="text-xl sm:text-2xl font-semibold text-pink-800">
                    {title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed px-4">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

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
