import React from "react";
import Image from "next/image";

const Team = () => {
  const teamProfiles = [
    {
      image: "/team/andy.png",
      name: "Andy Agnas",
      title: "CEO and Founder",
      description:
        "Andy is a Certified Public Accountant (CPA) by profession and has been a serial tech entrepreneur since 2017. He is the Founder of SparkPoint Technologies Inc., serves as Chief Executive Officer of MetaGaming Guild Ltd. and Astra Interactive Studios Inc. Andy is also a blockchain enthusiast, speaker, mentor, and angel investor in several startup WEB3 projects.",
    },
    {
      image: "/team/rico.png",
      name: "Rico Zuñiga",
      title: "Investor",
      description:
        "Rico is a serial tech entrepreneur and early advisor of SparkPoint. He currently serves as SparkPoint Technologies Inc.'s Chief Technology Officer. Rico has been in the tech industry for more than 16 years and is one of the pioneers in the Philippine tech startup industry.",
    },
    {
      image: "/team/myrtle.png",
      name: "Myrtle Anne Ramos",
      title: "Venture Associate",
      description:
        "Myrtle is the Founder and CEO of Block Tides, an award-winning PR Firm of 2020 by PitchDeck Asia. She excels in marketing, growth hacking, sales, and public relations.",
    },
    {
      image: "/team/karan.png",
      name: "Karan Sharma",
      title: "Investment Analyst",
      description:
        "Karan is an experienced advisor and investor in the blockchain industry since 2017. An engineer by profession, he has been instrumental in the success of several startups through successful partnerships and marketing campaigns.",
    },
    {
      image: "/team/attypadilla.png",
      name: "Atty. Rafael Padilla",
      title: "Legal Counsel",
      description:
        "Atty. Rafael Padilla is a commercial attorney specializing in financial technology, cryptoassets, and blockchain, providing legal and compliance services to numerous blockchain projects and fintech startups in the Philippines. He serves as a special consultant for the Aurora Pacific Economic Zone Authority (APECO) on financial technology and digital assets. An adjunct Professor of Law at San Beda Alabang School of Law, he teaches Statutory Construction, Constitutional Law, and Tax. Atty. Padilla co-founded the Blockchain Association of the Philippines and the Fintech Philippines Association, and recently co-founded Block Devs Asia, Inc., a professional association of blockchain developers.",
    },
  ];

  return (
    <section id="team" className="min-h-screen w-full">
    <div
      className="bg-cover bg-center bg-no-repeat min-h-screen w-full flex flex-col items-center py-10 sm:py-40"
      style={{ backgroundImage: "url('/backgrounds/BG4.png')" }}
    >
      {/* Header */}
      <div className="flex flex-col sm:pt-20 pt-28 sm:pb-2 pb-0 text-center">
        <h1 className="sm:text-6xl text-3xl sm:mb-20 mb-0 font-bold text-pink-800 text-shadow">
          MEET THE TEAM
        </h1>
      </div>
  
      {/* Profiles */}
      <div className="space-y-8 max-w-5xl px-6 sm:px-0">
        {teamProfiles.map((profile, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0 pb-10">
            {/* Profile Image */}
            <Image
              src={profile.image}
              alt={profile.name}
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
  
            {/* Name & Title */}
            <div className="w-full sm:w-1/4 min-w-[150px] text-center sm:text-left">
              <h2 className="text-3xl font-bold text-pink-800">{profile.name}</h2>
              <h3 className="text-xl font-medium text-pink-800">{profile.title}</h3>
            </div>
  
            {/* Divider */}
            <div className="hidden sm:block h-36 w-[7px] bg-orange-500 rounded-full"></div>
  
            {/* Description */}
            <p className="text-sm text-gray-700 sm:flex-1 text-center sm:text-left">
              {profile.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  );
};

export default Team;
