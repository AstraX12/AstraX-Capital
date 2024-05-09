import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <section
      id="team"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-orange-200 w-full"
    >
              <div className="flex flex-col sm:pt-20 pt-16 sm:pb-2 pb-0 text-center ">
                <h1 className="sm:text-4xl text-3xl sm:mb-0 mb-0 font-large text-pink-800 text-shadow font-bold">
                  MEET THE TEAM 
                </h1>
              </div>

                <div className="container py-0 px-0 2xl:px-32">
                    <div className="flex flex-wrap justify-center mt-4">
                      <div className="m-0 md:w-2/5 2xl:w-96 lg:w-96 w-full flex-shrink-0 flex justify-center items-center relative">
                        <Image className="object-cover rounded-xl" src="/team/andy.png" width="400" height="450" alt="Truc cool 1" />
                        <div className="absolute bottom-0 lg:p-11 md:p-5 p-12 md:pb-4 text-gray-600">
                          <h1 className="pb-1 text-center lg:text-xl md:text-lg text-xl font-bold text-gray-700" >Andy Agnas</h1>
                          <h2 className="pb-2 text-center lg:text-lg md:text-sm text-lg font-medium text-gray-600" >Founding Partner & CEO</h2>
                          <p className="mb-3 mx-5 text-center lg:text-sm md:text-xs text-xs font-medium">Andy is a Certified Public Accountant (CPA) by profession 
                          and has been a serial tech entrepreneur since 2017. He is the Founder of SparkPoint Technologies Inc., 
                          serves as Chief Executive Officer of MetaGaming Guild Ltd. and Astra Interactive Studios Inc. 
                          Andy is also a blockchain enthusiast, speaker, mentor, and angel investor in several startup WEB3 projects.</p>
                          
                        </div>
                      </div>
                      
                      <div className="2xl:w-96 m-0 w-full md:w-2/5 w flex-shrink-0  flex justify-center items-center  relative">
                        <Image className="object-cover rounded-xl" src="/team/rico.png" width="400" height="450" alt="Truc cool 2" />
                        <div className="absolute bottom-0 lg:p-14 md:p-1 p-14 text-gray-600">
                          <h1 className="pb-1 text-center md:text-xl text-xl font-bold text-gray-700" >Rico Zuñiga</h1>
                          <h2 className="pb-2 text-center md:text-lg text-lg font-medium text-gray-600" >Venture Associate</h2>
                          <p className="sm:mb-14 mb-12 mx-2 text-center md:text-sm text-xs font-medium">Rico is a serial tech entrepreneur and early advisor 
                          of SparkPoint. He currently serves as SparkPoint Technologies Inc.'s Chief Technology Officer. Rico has 
                          been in the tech industry for more than 16 years and is one of the pioneers in the Philippine tech startup industry.</p>
                          
                        </div>
                      </div>
                      
                      <div className="m-0 w-full md:w-1/2 2xl:w-96 lg:w-96 sm:w-96 flex-shrink-0 flex justify-center items-center relative">
                        <Image className="object-cover rounded-xl" src="/team/karan.png" width="400" height="350" alt="Truc cool 3" />
                        <div className="absolute bottom-0 md:p-16 p-16 text-gray-600">
                          <h1 className="pb-1 text-center md:text-xl text-xl  font-bold text-gray-700" >Karan Sharma</h1>
                          <h2 className="pb-2 text-center md:text-slg text-lg font-medium text-gray-600" >Venture Analyst</h2>
                          <p className="sm:mb-18 mb-16 text-center md:text-sm text-xs font-medium">Karan is an experienced advisor and investor in the 
                          blockchain industry since 2017. An engineer by profession, he has been instrumental in the success of 
                          several startup through successful partnerships and marketing campaigns.</p>
                          
                        </div>
                      </div>
                      
                    </div>
                  </div>

      
    </section>
  );
};

export default Team;
