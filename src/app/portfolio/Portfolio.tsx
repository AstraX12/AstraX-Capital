import React from "react";
import Image from "next/image";
import Logos from "./Logos";

const Portfolio = () => {
  return (
    <section
          id="portfolio"
          className="flex flex-col items-center justify-center bg-white w-full relative"
          style={{ backgroundImage: "url('/backgrounds/BG_5Portfolio.png')"}}
          >
          {/* Top Background */}
          {/* <div
            className="absolute top-0 left-0 w-full h-96 bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/backgrounds/BG3Top.png')" }}
          ></div> */}

          {/* Portfolio Content */}
          <div className="relative z-10 flex flex-col sm:pt-40 pt-40 sm:pb-2 pb-0 text-center">
            <h1 className="sm:text-6xl text-6xl sm:mb-0 mb-0 font-large text-pink-800 text-shadow font-bold">
              PORTFOLIO
            </h1>
          </div>

          <div className="flex items-center justify-center w-full max-w-3xl mb-20 mt-32">
              <div className="grid grid-cols-1 lg:grid-cols-[25%_64px_65%] gap-6 items-center w-full max-w-6xl">
                {/* Title Section */}
                <h1 className="text-2xl sm:text-3xl font-bold text-pink-800 text-center lg:text-right">
                Businesses we've backed
                </h1>
                {/* Divider */}
                <div className="bg-orange-500 h-[3px] w-12 sm:w-[6px] sm:h-20 mx-auto rounded-full"></div>
                {/* Content Section */}
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center lg:text-left">
                  We invest in exceptional entrepreneurs who are crafting innovative solutions for the
                  emerging Web3 economy.
                </p>
              </div>
          </div>

          {/* Logos */}
          <Logos />

          <div className="flex items-center justify-center w-full max-w-3xl mb-20 mt-32">
              <div className="grid grid-cols-1 lg:grid-cols-[25%_64px_65%] gap-6 items-center w-full max-w-6xl">
                {/* Title Section */}
                <h1 className="text-2xl sm:text-3xl font-bold text-pink-800 text-center lg:text-right">
                Nodes we’ve invested 
                </h1>
                {/* Divider */}
                <div className="bg-orange-500 h-[3px] w-12 sm:w-[6px] sm:h-20 mx-auto rounded-full"></div>
                {/* Content Section */}
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed text-center lg:text-left">
                We invest in and operate validator nodes to bolster the long-term growth of highly promising projects.
                </p>
              </div>
          </div>
        
         <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center sm:w-3/4 w-96 mb-40 px-10 sm:px-0">
          <a href="https://xai.games/" target="_blank" className="">  
            <Image src="/portfolio_logos/XAI.png" width={0}
                height={0} sizes="150vw" alt="Xai Logo" className="w-full h-auto"/></a>

          <a href="https://www.hychain.com/" target="_blank" className=""> 
            <Image src="/portfolio_logos/Hychain.png"  width={0}
                height={0}  sizes="100vw" alt="Hychain Logo" className="w-full h-auto"/></a>

          <a href="https://powerloom.io/" target="_blank" className=""> 
            <Image src="/portfolio_logos/Powerloom.png"  width={0}
                  height={0}  sizes="100vw" alt="POwerloom Logo" className="w-full h-auto"/></a>

          <a href="https://sophon.xyz/" target="_blank" className="">         
            <Image src="/portfolio_logos/Sophon.png"  width={0}
                  height={0}  sizes="100vw" alt="Sophon Logo" className="w-full h-auto"/></a>

          <a href="https://carv.io" target="_blank" className="">         
            <Image src="/portfolio_logos/carv.png"  width={0}
                  height={0}  sizes="100vw" alt="CARV Logo" className="w-full h-auto"/></a>
                  
          <a href="https://0g.ai/" target="_blank" className="">         
            <Image src="/portfolio_logos/OG.png"  width={0}
                  height={0}  sizes="100vw" alt="CARV Logo" className="w-full h-auto"/></a>
          </div>
          {/* <div
            className="absolute bottom-0 left-0 w-full h-80 bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/backgrounds/BG3Bottom.png')" }}
          ></div> */}
    </section>
    

   
    
  );
};

export default Portfolio;
