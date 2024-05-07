import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <section
      id="team"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-orange-200 w-full"
    >
              <div className="flex sm:pl-14 pl-0 sm:pr-18 pr-0 sm:pt-20 pt-16 sm:pb-20 pb-0 items-center text-center flex-col md:flex-row">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl sm:mb-6 mb-0 font-large text-pink-800 text-shadow font-bold">
                  MEET THE TEAM </h1>
                </div>
              </div>

                <div className="py-0 px-0 md:px-32">
                    <div className="flex flex-wrap justify-center mt-4">
                      <div className="m-2 w-full md:w-1/2 lg:w-1/4 flex-shrink-0  flex justify-center items-center relative">
                        <img className="object-cover rounded-xl" src="/team/andy.png" width="400" height="350" alt="Truc cool 1" />
                        <div className="absolute bottom-0 left-0 right-0 md:p-10 p-16 text-gray-700">
                          
                          <p className="mb-3 text-sm text-center font-medium">Andy is a CPA and startup investor based in the Philippines. 
                          He currently serves as the Chief Executive Officer of SparkPoint Technologies Inc. 
                          Andy is a blockchain enthusiast, speaker, mentor, community leader and consultant of various organizations.</p>
                          
                        </div>
                      </div>
                      
                      <div className="m-2 w-full md:w-1/2 lg:w-1/4 flex-shrink-0  flex justify-center items-center  relative">
                        <img className="object-cover rounded-xl" src="/team/rico.png" width="400" height="350" alt="Truc cool 2" />
                        <div className="absolute bottom-0 left-0 right-0 md:p-10 p-16 text-gray-700">
                          <p className="mb-3 text-sm text-center font-medium">Rico is a serial tech entrepreneur and early advisor of SparkPoint. 
                          He currently serves as SparkPoint Technologies Inc.'s Chief Technology Officer. 
                          Rico has been in the tech industry for more than 16 years and is one of the pioneers 
                          in the Philippine tech startup industry.</p>
                          
                        </div>
                      </div>
                      
                      <div className="m-2 w-full md:w-1/2 lg:w-1/4 flex-shrink-0 flex justify-center items-center relative">
                        <img className="object-cover rounded-xl" src="/team/karan.png" width="400" height="350" alt="Truc cool 3" />
                        <div className="absolute bottom-0 left-0 right-0 md:p-10 p-16 text-gray-700">
                          <p className="mb-3 text-sm text-center font-medium">Karan is an experienced advisor and investor in the blockchain industry 
                          since 2017. An engineer by profession. He has been instrumental in the success of SparkPoint 
                          through successful partnerships and marketing campaigns.</p>
                          
                        </div>
                      </div>
                      
                    </div>
                  </div>

      
    </section>
  );
};

export default Team;
