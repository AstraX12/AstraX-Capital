import React from "react";
import Image from "next/image";
import FeaturesSection from './FeaturesSection';

const AboutUs = () => {
  return (
    <section
      id="about_us"
      className="text-gray-700 body-font min-h-screen w-screen"
    >
      <div className="container sm:px-0 px-8 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-1 flex-col items-center text-center">
          <h1 className="title-font sm:text-4xl text-4xl mb-16 font-bold text-pink-800">
            ABOUT US
          </h1>
          
          <p className="sm:px-0 px-3 lg:w-4/6 w-full leading-relaxed lg:text-2xl sm:text-xl text-xl text-based font-medium mb-5">
          At AstraX Capital, we're driven by a passion for pioneering technologies that shape the future, 
          specializing in blockchain technology, artificial intelligence, and other innovative sectors. 
          Our mission is to <span className="text-pink-800">propel the success of visionary entrepreneurs </span> and transformative ideas. 
          We provide strategic investment to startups at every stage of their journey, from inception to scale. 
          Founded on principles of integrity, innovation, and collaboration, we're dedicated to building a 
          brighter tomorrow through technology-driven innovation.

          </p>
          <p className="sm:px-0 px-3 lg:w-4/6 w-full leading-relaxed lg:text-2xl sm:text-xl text-xl text-based font-medium">

          Our team brings together seasoned investors, industry experts, and visionary leaders who share 
          a <span className="text-pink-800">unifying mission</span>: to identify and nurture the next generation of game-changing companies. 
          From our partners and <span className="text-pink-800">industry experts</span> to our <span className="text-pink-800">passionate</span> support staff, each member of our 
          team contributes their unique expertise and passion to drive positive change and create 
          value for our portfolio companies and investors alike.
          </p>
        </div>
      </div>
      
      <FeaturesSection />

          {/* Hide on mobile */}
          <div className="hidden md:block min-h-full flex-col items-center justify-center bg-white w-full">
              <div className="py-0 px-0 md:px-32 mt-10 lg:flex-grow ">
              <Image src="/what can we offer.png" className="flex-shrink-0" width="1400" height="1350" alt=""/>
                    <div className="flex flex-wrap justify-center -mt-72">
                      <div className="m-2 w-full md:w-1/2 lg:w-1/4 flex-shrink-0  flex justify-center items-center relative ">
                        <Image className="object-cover rounded-xl" src="/incubate.png" width="500" height="450" alt="Truc cool 1" z-100 />
                      </div>
                      <div className="m-2 w-full md:w-1/2 lg:w-1/4 flex-shrink-0  flex justify-center items-center  relative">
                        <Image className="object-cover rounded-xl" src="/advice.png" width="500" height="450" alt="Truc cool 2" z-100/>
                      </div>
                      <div className="m-2 w-full md:w-1/2 lg:w-1/4 flex-shrink-0 flex justify-center items-center relative">
                        <Image className="object-cover rounded-xl" src="/train and educate.png" width="500" height="450" alt="Truc cool 3" z-100/>
                      </div>
                    </div>
                </div>
            </div>

            {/* Hide on desktop */}
              <div className="block md:hidden flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-pink-300 w-full">
              <div className="py-0 px-0 md:px-32 mt-0">
                <h1 className="pl-20 pt-12 title-font sm:text-xl text-2xl sm:mb-2 mb-3 font-large text-gray-700 text-shadow sm:font-bold font-black items-center">
                What can we offer?
                </h1>
                    <div className="flex flex-wrap justify-center mt-0">
                      <div className="m-2 w-full md:w-1/2 lg:w-1/4 flex-shrink-0  flex justify-center items-center relative ">
                        <Image className="object-cover rounded-xl" src="/incubate.png" width="500" height="450" alt="Truc cool 1" z-100 />
                      </div>
                      <div className="m-2 w-full md:w-1/2 lg:w-1/4 flex-shrink-0  flex justify-center items-center  relative">
                        <Image className="object-cover rounded-xl" src="/advice.png" width="500" height="450" alt="Truc cool 2" z-100/>
                      </div>
                      <div className="m-2 w-full md:w-1/2 lg:w-1/4 flex-shrink-0 flex justify-center items-center relative">
                        <Image className="object-cover rounded-xl" src="/train and educate.png" width="500" height="450" alt="Truc cool 3" z-100/>
                      </div>
                    </div>
                </div>
            </div>

    </section>
  );
};

export default AboutUs;
