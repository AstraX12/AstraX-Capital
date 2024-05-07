import React from "react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="min-h-screen flex flex-col items-center justify-center bg-white w-full">

      <div className="flex sm:pl-14 pl-0 sm:pr-18 pr-0 sm:pt-24 pt-16 sm:pb-4 pb-0 items-center text-center flex-col md:flex-row">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl sm:mb-6 mb-0 font-large text-pink-800 text-shadow font-bold">
          PORTFOLIO
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
        {/* Images Go Here */}
        <Image src="/portfolio_logos/Sparkpoint.png"  width={150}
              height={200} alt="Sparkpoint Logo" />
        <Image src="/portfolio_logos/Sparkswap.png"  width={150}
              height={200} alt="Sparkswap Logo" />
        <Image src="/portfolio_logos/Ownly.png"  width={150}
              height={200} alt="Ownly Logo" />
        <Image src="/portfolio_logos/Spores.png"  width={150}
              height={200} alt="Spores Logo" />
        <Image src="/portfolio_logos/EOF.png"  width={150}
              height={200} alt="EOF Logo" />
        <Image src="/portfolio_logos/Project Seed.png"  width={150}
              height={200} alt="Project Seed Logo" />
        <Image src="/portfolio_logos/Nyan Heroes.png"  width={150}
              height={200} alt="Nyan Heroes Logo" />
        <Image src="/portfolio_logos/ChainPort.png"  width={150}
              height={200} alt="ChainPort Logo" />
        <Image src="/portfolio_logos/Basketballverse.png" width={150}
              height={200} alt="logo"/>
        <Image src="/portfolio_logos/Resource Finance.png" width={150}
              height={200} alt="logo"/>
        <Image src="/portfolio_logos/Chronicle.png" width={150}
              height={200} alt="logo"/>
        <Image src="/portfolio_logos/Metaoasis.png" width={150}
              height={200} alt="logo"/>
        <Image src="/portfolio_logos/Chibi Clash.png" width={150}
              height={200} alt="logo"/>
        <Image src="/portfolio_logos/Bowled.png" width={150}
              height={200} alt="logo"/>
        <Image src="/portfolio_logos/Ridotto.png" width={150}
              height={200} alt="logo"/>
        <Image src="/portfolio_logos/NFT Trade.png" width={150}
              height={200} alt="logo"/>
        <Image src="/portfolio_logos/Dark Frontiers.png" width={150}
              height={200} alt="logo"/>
        <Image src="/portfolio_logos/Nakamoto Games.png" width={150}
              height={200} alt="logo"/>
        <Image src="/portfolio_logos/MetaGaming Guild.png"width={150}
              height={200} alt="logo"/>
        <Image src="/portfolio_logos/The Killbox.png" width={150}
              height={200} alt="logo"/>
        <Image src="/portfolio_logos/Gamerich.png" width={150}
              height={200} alt="logo"/>
        <Image src="/portfolio_logos/Infinity Force.png" width={150}
              height={200} alt="logo"/>
        <Image src="/portfolio_logos/Nitro League.png" width={150}
              height={200} alt="logo"/>
         
     
      </div>
    </section>
  );
};

export default Portfolio;
