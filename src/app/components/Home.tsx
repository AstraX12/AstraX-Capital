import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center w-full" style={{ height: '900px' }}
    >
      <div className="flex sm:pl-16 pl-1 sm:pr-16 pr-1 py-24 mt-6 items-center text-center flex-col md:flex-row bg-gradient-to-br from-blue-200 to-pink-300 border-8 border-white rounded-3xl">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
          
          <h1 className="title-font sm:text-6xl text-3xl mb-6 font-large text-gray-800 text-shadow text-bold">
            AstraX Capital
          </h1>
          <p className="mb-8 leading-relaxed sm:text-2xl text-gray-800 ">
            We specialize in supporting visionary founders who are developing innovative infrastructure and decentralized 
            applications within the Web3 Ecosystem.
          </p>
          <div className="flex justify-center">
          <button className="ml-0 inline-flex text-white sm:py-2 py-2 sm:px-6 px-3 bg-gradient-to-br from-pink-800 to-orange-600 border-2 border-none focus:outline-none hover:bg-gray-300 rounded text-lg font-sans items-center">
            <a href="#portfolio" className="">PORTFOLIO</a> 
          </button>
          <button className="ml-2 inline-flex text-pink-800 sm:py-2 py-2 sm:px-6 px-3 border-2 border-pink-800 focus:outline-none hover:bg-pink-200 rounded text-sm items-center">
          <a href="https://tinyurl.com/astraXcapital" target="_blank">
            GET IN TOUCH</a>
          </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-full w-5/6">
          <Image
            src="/hero page graphic.png"
            alt="logo"
            width={500}
            height={400}
            objectPosition="relative"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
