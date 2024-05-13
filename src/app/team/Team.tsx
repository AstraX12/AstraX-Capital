import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <section
      id="team"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-orange-200 w-full"
    >
              <div className="flex flex-col sm:pt-20 pt-28 sm:pb-2 pb-0 text-center ">
                <h1 className="sm:text-4xl text-3xl sm:mb-0 mb-0 font-large text-pink-800 text-shadow font-bold">
                  MEET THE TEAM 
                </h1>
              </div>

              {/* Hide on mobile */}
            <div className="hidden md:block h-screen" style={{ height: '650px' }}>
              <div className="flex justify-center items-center pt-12">
                  <div className="flex justify-between" >
                  
                  <div className="relative bg-white rounded-lg p-4 m-2 shadow-lg" style={{ height: '460px', width: '340px' }}>
                      <div className="relative left-20 right-20 z-15">
                          <Image
                              src="/team/andy.png"
                              alt="andy"
                              width={150}
                              height={140}
                          />
                      </div>
                      <div className="container pb-24">
                      <h1 className="pb-0 text-center lg:text-xl md:text-lg text-xl font-bold text-gray-700">Andy Agnas</h1>
                      <h2 className="pb-1 text-center lg:text-lg md:text-sm text-lg font-medium text-gray-600">Founding Partner & CEO</h2>
                      <p className="sm:mb-10 mb-0 mx-6 text-center leading-none lg:text-sm md:text-xs text-based font-medium text-gray-800">Andy is a Certified Public Accountant (CPA) by profession
                          and has been a serial tech entrepreneur since 2017. He is the Founder of SparkPoint Technologies Inc.,
                          serves as Chief Executive Officer of MetaGaming Guild Ltd. and Astra Interactive Studios Inc.
                          Andy is also a blockchain enthusiast, speaker, mentor, and angel investor in several startup WEB3 projects.
                      </p>
                      </div>
                  </div>

                  <div className="relative bg-white rounded-lg p-4 m-2 shadow-lg" style={{ height: '460px', width: '340px' }}>
                  <div className="relative left-20 right-20 z-15">
                          <Image
                              src="/team/rico.png"
                              alt="rico"
                              width={150}
                              height={140}
                          />
                      </div>
                  <h1 className="pb-0 text-center md:text-xl text-2xl font-bold text-gray-700" >Rico Zuñiga</h1>
                          <h2 className="sm:pb-1 pb-2 text-center md:text-lg text-xl font-medium text-gray-600" >Venture Associate</h2>
                          <p className="sm:mb-10 mb-0 mx-2 text-center md:text-sm leading-none text-based font-medium text-gray-800">Rico is a serial tech entrepreneur and early advisor 
                          of SparkPoint. He currently serves as SparkPoint Technologies Inc.'s Chief Technology Officer. Rico has 
                          been in the tech industry for more than 16 years and is one of the pioneers in the Philippine tech startup industry.
                          </p>
                  </div>
                  <div className="relative bg-white rounded-lg p-4 m-2 shadow-lg" style={{ height: '460px', width: '340px'  }}>
                  <div className="relative left-20 right-20 z-15">
                          <Image
                              src="/team/karan.png"
                              alt="karan"
                              width={150}
                              height={140}
                          />
                      </div>
                  <h1 className="pb-0 text-center md:text-xl text-2xl  font-bold text-gray-700" >Karan Sharma</h1>
                          <h2 className="sm:pb-1 pb-2 text-center md:text-lg text-xl font-medium text-gray-600" >Venture Analyst</h2>
                          <p className="sm:mb-14 mb-0 text-center md:text-sm text-based leading-none font-medium text-gray-800">Karan is an experienced advisor and investor in the 
                          blockchain industry since 2017. An engineer by profession, he has been instrumental in the success of 
                          several startup through successful partnerships and marketing campaigns.
                          </p>
                  </div>
                </div>
              </div>
          </div>
            {/* Hide on desktop */}
            <div className="block md:hidden ">
              <div className="flex justify-center items-center">
                  <div className="flex flex-col md:flex-row md:justify-between">
                    
                    <div className="relative bg-white rounded-lg p-4 m-2 md:w-1/3">
                      <div className="relative flex justify-center items-center z-15">
                          <Image
                              src="/team/andy.png"
                              alt="andy"
                              width={150}
                              height={140}
                          />
                      </div>
                      <h1 className="pb-0 text-center lg:text-xl md:text-lg text-xl font-bold text-gray-700">Andy Agnas</h1>
                      <h2 className="pb-1 text-center lg:text-lg md:text-sm text-lg font-medium text-gray-600">Founding Partner & CEO</h2>
                      <p className="sm:mb-10 mb-0 mx-6 text-center leading-none lg:text-sm md:text-xs text-based font-medium text-gray-700">
                          Andy is a Certified Public Accountant (CPA) by profession
                          and has been a serial tech entrepreneur since 2017. He is the Founder of SparkPoint Technologies Inc.,
                          serves as Chief Executive Officer of MetaGaming Guild Ltd. and Astra Interactive Studios Inc.
                          Andy is also a blockchain enthusiast, speaker, mentor, and angel investor in several startup WEB3 projects.
                      </p>
                     
                    </div>
                    <div className="relative bg-white rounded-lg p-4 m-2 md:w-1/3">
                    <div className="relative flex justify-center items-center z-15">
                          <Image
                              src="/team/rico.png"
                              alt="rico"
                              width={150}
                              height={140}
                          />
                      </div>
                          <h1 className="pb-0 text-center md:text-xl text-2xl font-bold text-gray-700" >Rico Zuñiga</h1>
                          <h2 className="sm:pb-1 pb-2 text-center md:text-lg text-xl font-medium text-gray-600" >Venture Associate</h2>
                          <p className="sm:mb-10 mb-0 mx-6 text-center md:text-sm leading-none text-based font-medium text-gray-700">
                          Rico is a serial tech entrepreneur and early advisor 
                          of SparkPoint. He currently serves as SparkPoint Technologies Inc.'s Chief Technology Officer. Rico has 
                          been in the tech industry for more than 16 years and is one of the pioneers in the Philippine tech startup industry.
                          </p>

                    </div>
                    <div className="relative bg-white rounded-lg p-4 m-2 md:w-1/3">
                    <div className="relative flex justify-center items-center z-15">
                          <Image
                              src="/team/karan.png"
                              alt="karan"
                              width={150}
                              height={140}
                          />
                      </div>
                        <h1 className="pb-0 text-center md:text-xl text-2xl  font-bold text-gray-700" >Karan Sharma</h1>
                          <h2 className="sm:pb-1 pb-2 text-center md:text-lg text-xl font-medium text-gray-600" >Venture Analyst</h2>
                          <p className="sm:mb-14 mb-0 mx-6 text-center md:text-sm text-based leading-none font-medium text-gray-700">
                          Karan is an experienced advisor and investor in the 
                          blockchain industry since 2017. An engineer by profession, he has been instrumental in the success of 
                          several startup through successful partnerships and marketing campaigns.
                          </p>
                    </div>
                  </div>
                </div>
            </div>
            
      
    </section>
  );
};

export default Team;
