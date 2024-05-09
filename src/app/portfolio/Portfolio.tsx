import React from "react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className=" flex flex-col  items-center justify-center bg-white w-full">

      <div className="flex sm:pl-14 pl-0 sm:pr-18 pr-0 sm:pt-24 pt-16 sm:pb-4 pb-0 items-center text-center flex-col md:flex-row">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl sm:mb-6 mb-0 font-large text-pink-800 text-shadow font-bold">
          PORTFOLIO
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
        {/* Images Go Here */}
        <a href="https://sparkpoint.io/" target="_blank" className=""> 
        <Image src="/portfolio_logos/Sparkpoint.png" width={0}
              height={0} sizes="100vw" alt="Sparkpoint Logo" className="w-full h-auto"/>
        </a>
       <a href="https://sparkswap.xyz/" target="_blank" className="">
        <Image src="/portfolio_logos/Sparkswap.png"  width={0}
              height={0}  sizes="100vw" alt="Sparkswap Logo" className="w-full h-auto"/></a>

      <a href="https://prev.ownly.io/" target="_blank" className="">
        <Image src="/portfolio_logos/Ownly.png"  width={0}
              height={0}  sizes="100vw" alt="Ownly Logo" className="w-full h-auto" /></a>

        <Image src="/portfolio_logos/Spores.png"  width={0}
              height={0}  sizes="100vw" alt="Spores Logo" className="w-full h-auto"/>
      
      <a href="https://www.eof.gg/" target="_blank" className="">
        <Image src="/portfolio_logos/EOF.png"  width={0}
              height={0}  sizes="100vw"  alt="EOF Logo" className="w-full h-auto"/></a>

      <a href="https://www.projectseed.com/" target="_blank" className="">
        <Image src="/portfolio_logos/Project Seed.png"  width={0}
              height={0}  sizes="100vw"  alt="Project Seed Logo" className="w-full h-auto"/></a>

      <a href="https://nyanheroes.com/" target="_blank" className="">
        <Image src="/portfolio_logos/Nyan Heroes.png"  width={0}
              height={0}  sizes="100vw"  alt="Nyan Heroes Logo" className="w-full h-auto"/></a>

      <a href="https://www.chainport.io/" target="_blank" className="">
        <Image src="/portfolio_logos/ChainPort.png"  width={0}
              height={0}   sizes="100vw" alt="ChainPort Logo" className="w-full h-auto"/></a>

      <a href="https://www.basketballverse.gg/" target="_blank" className="">
        <Image src="/portfolio_logos/Basketballverse.png" width={0}
              height={0}   sizes="100vw" alt="logo" className="w-full h-auto"/></a>

        <Image src="/portfolio_logos/Resource Finance.png" width={0}
              height={0}   sizes="100vw" alt="logo" className="w-full h-auto"/>

      <a href="https://www.chronicle.io/" className="">
        <Image src="/portfolio_logos/Chronicle.png" width={0}
              height={0}   sizes="100vw" alt="logo" className="w-full h-auto"/></a>

      <a href="https://www.momoai.io/" className="">
        <Image src="/portfolio_logos/Metaoasis.png" width={0}
              height={0}   sizes="100vw" alt="logo" className="w-full h-auto"/></a>

      <a href="https://chibi.gg/" className="">
        <Image src="/portfolio_logos/Chibi Clash.png" width={0}
              height={0}   sizes="100vw" alt="logo" className="w-full h-auto"/></a>
      
      <a href="https://bowled.io/" className="">
        <Image src="/portfolio_logos/Bowled.png" width={0}
              height={0}   sizes="100vw" alt="logo" className="w-full h-auto" /></a>

      <a href="https://ridotto.io/" className="">
        <Image src="/portfolio_logos/Ridotto.png" width={0}
              height={0}   sizes="100vw" alt="logo" className="w-full h-auto"/></a>

      <a href="https://nftrade.com/" className="">
        <Image src="/portfolio_logos/NFT Trade.png" width={0}
              height={0}   sizes="100vw" alt="logo" className="w-full h-auto"/></a>

      <a href="https://www.darkfrontiers.com/" className="">
        <Image src="/portfolio_logos/Dark Frontiers.png" width={0}
              height={0}   sizes="100vw" alt="logo" className="w-full h-auto"/></a>

      <a href="https://www.nakamoto.games/" className="">
        <Image src="/portfolio_logos/Nakamoto Games.png" width={0}
              height={0}  sizes="100vw"  alt="logo" className="w-full h-auto"/></a>

      <a href="https://www.metagg.com/" className="">
        <Image src="/portfolio_logos/MetaGaming Guild.png"width={0}
              height={0}   sizes="100vw" alt="logo" className="w-full h-auto"/></a>

      <a href=" https://www.thekillboxgame.com/" className="">
        <Image src="/portfolio_logos/The Killbox.png" width={0}
              height={0}  sizes="100vw"  alt="logo" className="w-full h-auto"/></a>
      
        <Image src="/portfolio_logos/Gamerich.png" width={0}
              height={0}   sizes="100vw" alt="logo" className="w-full h-auto"/>

      <a href="https://infinityforce.com/" className="">
        <Image src="/portfolio_logos/Infinity Force.png" width={0}
              height={0}   sizes="100vw" alt="logo" className="w-full h-auto"/></a>
      
      <a href="https://www.nitroleague.com/" className="">
        <Image src="/portfolio_logos/Nitro League.png" width={0}
              height={0}   sizes="100vw" alt="logo" className="w-full h-auto"/></a>
     
      </div>
    </section>
  );
};

export default Portfolio;
