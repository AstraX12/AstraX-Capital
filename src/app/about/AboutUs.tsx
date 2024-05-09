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
          <div className="hidden md:block h-screen" style={{ height: '650px' }}>
              <div className="flex justify-center items-center pt-12">
              <div className="bg-gradient-to-r from-blue-100 to-pink-200 rounded-lg p-8">
              
                  <div className="flex justify-center mb-9 text-center">
                      <h1 className="title-font text-4xl font-large text-gray-800 text-shadow font-bold">
                        What can we offer?
                      </h1>
                  </div>

                  <div className="flex justify-between" style={{ height: '230px', width:'1200px' }}>
                  <div className="bg-white rounded-lg p-4 m-2 shadow-lg" style={{ height: '460px', width: '340px'  }}>
                  <h1 className="pb-2 mt-2 text-center text-2xl font-bold text-gray-600">Incubate</h1>
                  <p className="mx-5 text-center text-lg font-medium">
                    Are you a visionary entrepreneur with a groundbreaking concept or
                    idea in the Web3 space? Our program is designed to help you bridge 
                    the gap between idea and execution, turning your vision into a reality.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 m-2 shadow-lg" style={{ height: '460px', width: '340px' }}>
                  <h1 className="pb-2 text-center text-2xl font-bold text-gray-600">Advice</h1>
                  <p className=" mx-5 text-center text-lg font-medium">
                    We provide a comprehensive advisory services, ensuring support throughout 
                    our partnership. Whether you need strategic guidance, market insights, 
                    or operational support, our team of experienced advisors is here to help 
                    you navigate the complexities of the cryptocurrency landscape and make 
                    informed decisions that drive results.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 m-2 shadow-lg" style={{ height: '460px', width: '340px'  }}>
                  <h1 className="pb-2 text-center text-2xl font-bold text-gray-600">Train and Educate</h1>
                  <p className=" mx-5 text-center text-lg font-medium">
                    At AstraX Capital, we’re committed to empowering entrepreneurs, investors, 
                    and enthusiasts with the knowledge and skills they need to succeed in the market. 
                    Whether you're new to Web3 space or a seasoned veteran, our educational resources 
                    and training programs are designed to equip you with the tools and insights to 
                    navigate the complexities of the digital asset landscape with confidence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
       

            {/* Hide on desktop */}
              <div className="block md:hidden ">
              <div className="flex justify-center items-center">
                <div className="bg-gradient-to-r from-blue-100 to-pink-200 rounded-lg p-8">
                  <div className="flex justify-center mb-9 text-center">
                      <h1 className="pt-12 title-font text-2xl font-large text-gray-800 text-shadow font-bold">
                        What can we offer?
                      </h1>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="bg-white rounded-lg p-4 m-2 md:w-1/3">
                      <h1 className="pb-2 text-center text-lg font-bold text-gray-600">Incubate</h1>
                      <p className="mb-3 mx-5 text-center text-sm font-medium">
                        Are you a visionary entrepreneur with a groundbreaking concept or idea in the Web3 space? Our program is designed to help you bridge the gap between idea and execution, turning your vision into a reality.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 m-2 md:w-1/3">
                      <h1 className="pb-2 text-center text-lg font-bold text-gray-600">Advice</h1>
                      <p className="mb-3 mx-5 text-center text-sm font-medium">
                        We provide comprehensive advisory services, ensuring support throughout our partnership. Whether you need strategic guidance, market insights, or operational support, our team of experienced advisors is here to help you navigate the complexities of the cryptocurrency landscape and make informed decisions that drive results.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 m-2 md:w-1/3">
                      <h1 className="pb-2 text-center text-lg font-bold text-gray-600">Train and Educate</h1>
                      <p className="mb-3 mx-5 text-center text-sm font-medium">
                        At AstraX Capital, we’re committed to empowering entrepreneurs, investors, and enthusiasts with the knowledge and skills they need to succeed in the market. Whether you're new to the Web3 space or a seasoned veteran, our educational resources and training programs are designed to equip you with the tools and insights to navigate the complexities of the digital asset landscape with confidence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

    </section>
  );
};

export default AboutUs;
