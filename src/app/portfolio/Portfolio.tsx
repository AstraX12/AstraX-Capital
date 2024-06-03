import React from "react";
import Image from "next/image";

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className=" flex flex-col  items-center justify-center bg-white w-full ">

     
        <div className="flex flex-col sm:pt-20 pt-28 sm:pb-2 pb-0 text-center">
          <h1 className="sm:text-4xl text-3xl sm:mb-0 mb-0 font-large text-pink-800 text-shadow font-bold">
          PORTFOLIO
          </h1>
        </div>
    
        <div className="flex flex-col sm:pt-16 pt-0 sm:pb-2 pb-0 text-center ">
          <h1 className="sm:text-2xl text-based sm:mb-5 mb-0 font-large text-pink-900 text-shadow font-bold">
                  Businesses we've backed.
          </h1>
          <p className="sm:px-3 px-3 pb-5 leading-none sm:text-xl text-sm text-gray-500 font-medium mb-5">
            We invest in exceptional entrepreneurs who are crafting 
          innovative solutions for emerging Web3 economy.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center sm:w-3/4 w-80">
          {/* Images Go Here */}

        <a href="https://www.zoth.io" target="_blank" className=""> 
          <Image src="/portfolio_logos/Zoth.png" width={0}
                height={0} sizes="150vw" alt="Zoth Logo" className="w-full h-auto"/></a>

        <a href="https://nyanheroes.com/" target="_blank" className="">
            <Image src="/portfolio_logos/Nyan Heroes.png"  width={0}
                  height={0}  sizes="100vw"  alt="Nyan Heroes Logo" className="w-full h-auto"/></a>

        <a href="https://codyfight.com" target="_blank" className=""> 
          <Image src="/portfolio_logos/Cody Fight.png" width={0}
                height={0} sizes="150vw" alt="Cody Fight Logo" className="w-full h-auto"/></a>

        <a href="https://playwildforest.io" target="_blank" className=""> 
          <Image src="/portfolio_logos/Wild Forest.png" width={0}
                height={0} sizes="150vw" alt="Wild Forest Logo" className="w-full h-auto"/></a>

        <a href="https://www.outlanders.com" target="_blank" className=""> 
          <Image src="/portfolio_logos/outlanders.png" width={0}
                height={0} sizes="150vw" alt="Outlanders Logo" className="w-full h-auto"/></a>

        <a href="https://elfinmetaverse.com" target="_blank" className=""> 
          <Image src="/portfolio_logos/Elfin Metaverse.png" width={0}
                height={0} sizes="150vw" alt="Elfin Metaverse Logo" className="w-full h-auto"/></a>

        <a href="https://sparkpoint.io/" target="_blank" className=""> 
          <Image src="/portfolio_logos/Sparkpoint.png" width={0}
                height={0} sizes="150vw" alt="Sparkpoint Logo" className="w-full h-auto"/></a>

        <a href="https://sparkswap.finance/#/" target="_blank" className="">
          <Image src="/portfolio_logos/Sparkswap.png"  width={0}
                height={0}  sizes="100vw" alt="Sparkswap Logo" className="w-full h-auto"/></a>

          <a href="https://prev.ownly.io/" target="_blank" className="">
            <Image src="/portfolio_logos/Ownly.png"  width={0}
                  height={0}  sizes="100vw" alt="Ownly Logo" className="w-full h-auto" /></a>
          
          <a href="https://spores.app/" target="_blank" className="">
            <Image src="/portfolio_logos/Spores.png"  width={0}
                  height={0}  sizes="100vw" alt="Spores Logo" className="w-full h-auto"/></a>
          
          <a href="https://www.eof.gg/" target="_blank" className="">
            <Image src="/portfolio_logos/EOF.png"  width={0}
                  height={0}  sizes="100vw"  alt="EOF Logo" className="w-full h-auto"/></a>

          <a href="https://www.projectseed.com/" target="_blank" className="">
            <Image src="/portfolio_logos/Project Seed.png"  width={0}
                  height={0}  sizes="100vw"  alt="Project Seed Logo" className="w-full h-auto"/></a>

          <a href="https://www.chainport.io/" target="_blank" className="">
            <Image src="/portfolio_logos/ChainPort.png"  width={0}
                  height={0}   sizes="100vw" alt="ChainPort Logo" className="w-full h-auto"/></a>

          <a href="https://www.basketballverse.gg/" target="_blank" className="">
            <Image src="/portfolio_logos/Basketballverse.png" width={0}
                  height={0}   sizes="100vw" alt="logo" className="w-full h-auto"/></a>

          <a href="https://www.stablecredit.io" target="_blank" className="">
          <Image src="/portfolio_logos/Resource Finance.png" width={0}
                height={0}   sizes="100vw" alt="logo" className="w-full h-auto"/></a>

        <a href="https://www.chronicle.io/" target="_blank" className="">
          <Image src="/portfolio_logos/Chronicle.png" width={0}
                height={0}   sizes="100vw" alt="logo" className="w-full h-auto"/></a>

        <a href="https://www.momoai.io/" target="_blank" className="">
          <Image src="/portfolio_logos/Metaoasis.png" width={0}
                height={0}   sizes="100vw" alt="logo" className="w-full h-auto"/></a>

        <a href="https://chibi.gg/" target="_blank" className="">
          <Image src="/portfolio_logos/Chibi Clash.png" width={0}
                height={0}   sizes="100vw" alt="logo" className="w-full h-auto"/></a>
        
        <a href="https://bowled.io/" target="_blank" className="">
          <Image src="/portfolio_logos/Bowled.png" width={0}
                height={0}   sizes="100vw" alt="logo" className="w-full h-auto" /></a>

        <a href="https://ridotto.io/" target="_blank" className="">
          <Image src="/portfolio_logos/Ridotto.png" width={0}
                height={0}   sizes="100vw" alt="logo" className="w-full h-auto"/></a>

        <a href="https://nftrade.com/" target="_blank" className="">
          <Image src="/portfolio_logos/NFT Trade.png" width={0}
                height={0}   sizes="100vw" alt="logo" className="w-full h-auto"/></a>

        <a href="https://www.darkfrontiers.com/" target="_blank"  className="">
          <Image src="/portfolio_logos/Dark Frontiers.png" width={0}
                height={0}   sizes="100vw" alt="logo" className="w-full h-auto"/></a>

        <a href="https://www.nakamoto.games/" target="_blank" className="">
          <Image src="/portfolio_logos/Nakamoto Games.png" width={0}
                height={0}  sizes="100vw"  alt="logo" className="w-full h-auto"/></a>

        <a href="https://www.metagg.com/" target="_blank" className="">
          <Image src="/portfolio_logos/MetaGaming Guild.png"width={0}
                height={0}   sizes="100vw" alt="logo" className="w-full h-auto"/></a>

        <a href=" https://www.thekillboxgame.com/"target="_blank"  className="">
          <Image src="/portfolio_logos/The Killbox.png" width={0}
                height={0}  sizes="100vw"  alt="logo" className="w-full h-auto"/></a>
        
        <a href="https://www.metafi.org" target="_blank" className="">
        <Image src="/portfolio_logos/Gamerich.png" width={0}
                height={0}   sizes="100vw" alt="logo" className="w-full h-auto"/></a>

        <a href="https://infinityforce.com/" target="_blank" className="">
          <Image src="/portfolio_logos/Infinity Force.png" width={0}
                height={0}   sizes="100vw" alt="logo" className="w-full h-auto"/></a>
        
        <a href="https://www.nitroleague.com/" target="_blank" className="">
          <Image src="/portfolio_logos/Nitro League.png" width={0}
                height={0}   sizes="100vw" alt="logo" className="w-full h-auto"/></a>
      
        </div>
        
        
          <div className="flex flex-col sm:pt-40 pt-5 sm:pb-2 pb-0 text-center ">
            <h1 className="sm:text-2xl text-based sm:mb-5 mb-0 font-large text-pink-900 text-shadow font-bold">
              Nodes we’ve invested 
            </h1>
            <p className="sm:px-3 px-3 pb-8 leading-none sm:text-xl text-sm text-gray-500 font-medium mb-5">
            We invest in and operate validator nodes to bolster the long-term growth of highly promising projects.</p>
          </div>
         <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center sm:w-2/3 w-96 mb-7">
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
          </div>
      
    </section>
    

   
    
  );
};

export default Portfolio;
