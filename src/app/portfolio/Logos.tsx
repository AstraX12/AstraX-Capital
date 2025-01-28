import React from "react";
import Image from "next/image";

const logoData = [
  { href: "https://www.bracket.fi", src: "/portfolio_logos/Bracket.png", alt: "Bracket Logo" },
  { href: "https://www.zoth.io", src: "/portfolio_logos/Zoth.png", alt: "Zoth Logo" },
  { href: "https://fx.land", src: "/portfolio_logos/Functionland.png", alt: "Functionland Logo" },
  { href: "https://nyanheroes.com/", src: "/portfolio_logos/Nyan Heroes.png", alt: "Nyan Heroes Logo" },
  { href: "https://playwildforest.io", src: "/portfolio_logos/Wild Forest.png", alt: "Wild Forest Logo" },
  { href: "https://www.outlanders.com", src: "/portfolio_logos/outlanders.png", alt: "Outlanders Logo" },
  { href: "https://elfinmetaverse.com", src: "/portfolio_logos/Elfin Metaverse.png", alt: "Elfin Metaverse Logo" },
  { href: "https://sparkpoint.io/", src: "/portfolio_logos/Sparkpoint.png", alt: "Sparkpoint Logo" },
  { href: "https://sparkswap.finance/#/", src: "/portfolio_logos/Sparkswap.png", alt: "Sparkswap Logo" },
  { href: "https://prev.ownly.io/", src: "/portfolio_logos/Ownly.png", alt: "Ownly Logo" },
  { href: "https://spores.app/", src: "/portfolio_logos/Spores.png", alt: "Spores Logo" },
  { href: "https://www.eof.gg/", src: "/portfolio_logos/EOF.png", alt: "EOF Logo" },
  { href: "https://www.projectseed.com/", src: "/portfolio_logos/Project Seed.png", alt: "Project Seed Logo" },
  { href: "https://codyfight.com", src: "/portfolio_logos/Cody Fight.png", alt: "Cody Fight Logo" },
  { href: "https://www.chainport.io/", src: "/portfolio_logos/ChainPort.png", alt: "ChainPort Logo" },
  { href: "https://www.basketballverse.gg/", src: "/portfolio_logos/Basketballverse.png", alt: "Basketballverse Logo" },
  { href: "https://www.stablecredit.io", src: "/portfolio_logos/Resource Finance.png", alt: "Resource Finance Logo" },
  { href: "https://www.chronicle.io/", src: "/portfolio_logos/Chronicle.png", alt: "Chronicle Logo" },
  { href: "https://www.momoai.io/", src: "/portfolio_logos/Metaoasis.png", alt: "Metaoasis Logo" },
  { href: "https://chibi.gg/", src: "/portfolio_logos/Chibi Clash.png", alt: "Chibi Clash Logo" },
  { href: "https://bowled.io/", src: "/portfolio_logos/Bowled.png", alt: "Bowled Logo" },
  { href: "https://ridotto.io/", src: "/portfolio_logos/Ridotto.png", alt: "Ridotto Logo" },
  { href: "https://nftrade.com/", src: "/portfolio_logos/NFT Trade.png", alt: "NFT Trade Logo" },
  { href: "https://www.darkfrontiers.com/", src: "/portfolio_logos/Dark Frontiers.png", alt: "Dark Frontiers Logo" },
  { href: "https://www.nakamoto.games/", src: "/portfolio_logos/Nakamoto Games.png", alt: "Nakamoto Games Logo" },
  { href: "https://www.metagg.com/", src: "/portfolio_logos/MetaGaming Guild.png", alt: "MetaGaming Guild Logo" },
  { href: "https://www.thekillboxgame.com/", src: "/portfolio_logos/The Killbox.png", alt: "The Killbox Logo" },
  { href: "https://www.metafi.org", src: "/portfolio_logos/Gamerich.png", alt: "Gamerich Logo" },
  { href: "https://infinityforce.com/", src: "/portfolio_logos/Infinity Force.png", alt: "Infinity Force Logo" },
  { href: "https://www.nitroleague.com/", src: "/portfolio_logos/Nitro League.png", alt: "Nitro League Logo" },
];

const Logos = () => (
  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center sm:w-3/4 w-80">
    {logoData.map((logo, index) => (
      <a key={index} href={logo.href} target="_blank" rel="noopener noreferrer">
        <Image
          src={logo.src}
          width={0}
          height={0}
          sizes="100vw"
          alt={logo.alt}
          className="w-full h-auto"
        />
      </a>
    ))}
  </div>
);

export default Logos;
