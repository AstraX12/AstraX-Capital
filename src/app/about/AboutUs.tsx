import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section
      id="about_us"
      className="text-gray-700 body-font min-h-screen w-screen"
    >
      <div className="container sm:px-5 px-8 py-32 mx-auto">
        <div className="flex flex-wrap w-full mb-1 flex-col items-center text-center">
          <h1 className="title-font sm:text-4xl text-4xl mb-16 font-bold text-pink-800">
            ABOUT US
          </h1>
          
          <p className="sm:px-0 px-3 lg:w-7/12 w-full leading-relaxed sm:text-xl text-based font-medium mb-5">
          At AstraX Capital, we're driven by a passion for pioneering technologies 
          that shape the future specializing in blockchain technology, artificial intelligence, 
          and other innovative sectors. Our mission is to <span className="text-pink-800">propel the success of visionary 
          entrepreneurs</span>  and transformative ideas. We provide strategic investment to startups 
          at every stage of their journey, from inception to scale. Founded on principles of integrity, 
          innovation, and collaboration, we're dedicated to building a brighter tomorrow through technology-driven innovation.
          </p>
          <p className="sm:px-0 px-3 lg:w-7/12 w-full leading-relaxed sm:text-xl text-based font-medium">
          Our team brings together seasoned investors, industry experts, and visionary leaders 
          who share a <span className="text-pink-800">unifying mission</span>: to identify and nurture the next generation of game-changing companies. 
          From our partners, and <span className="text-pink-800">industry experts</span> to our <span className="text-pink-800">passionate</span> support staff, each member of our 
          team contributes their unique expertise and passion to drive positive change and create value 
          for our portfolio companies and investors alike.

          </p>
        </div>
      </div>
      <div className="sm:pr-16 pr-9 sm:pl-40 pl-9 flex flex-col items-center justify-center bg-gradient-to-b from-white to-orange-200 w-full">
        <div className="flex flex-col md:flex-row">
          <div className="group-container flex sm:pl-16 pl-0 sm:pr-16 pr-0 sm:py-12 py-0 items-center text-center flex-col md:flex-row">
            <div className="md:flex-shrink-0 md:mr-8 sm:mb-32 mb-2">
              <Image
                src="/early stage innovation icon.png"
                alt="logo"
                width={100}
                height={200}
                objectPosition="relative"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-xl text-based sm:mb-2 mb-3 font-large text-gray-800 text-shadow sm:font-bold font-black ">
                Empowering Early-Stage Innovation
              </h1>
              <p className="mb-4 leading-relaxed sm:text-sm text-gray-800 sm:font-medium font-normal">
                At AstraX Capital, we specialize in identifying and nurturing early-stage 
                startups with the potential to scale up and revolutionize respective industries. 
                Our focus on private and seed rounds allows us to partner with founders at the 
                earliest stages of their journey, providing them with the necessary resources 
                and support to transform their ideas into thriving and sustainable businesses.
              </p>
            </div>
          </div>
          
          <div className="group-container flex sm:pl-16 pl-0 sm:pr-8 pr-0 sm:py-12 py-0 items-center text-center flex-col md:flex-row">
            <div className="md:flex-shrink-0 md:mr-8 sm:mb-32 mb-2">
              <Image
                src="/nurturing growth and expansion icon.png"
                alt="logo"
                width={100}
                height={200}
                objectPosition="relative"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-xl text-based sm:mb-2 mb-3 font-large text-gray-800 text-shadow sm:font-bold font-black">
                  Nurturing Growth and Expansion
              </h1>
              <p className="mb-4 sm:pr-44 pr-0 leading-relaxed sm:text-sm text-gray-800 sm:font-medium font-normal">
              As our portfolio companies progress from microcaps to scale-ups, we continue to champion their 
              growth and navigate them toward imminent success. We facilitate follow-on funding rounds, 
              trategic partnerships, and market expansion opportunities by leveraging our network and 
              expertise to help them reach their full potential. Whether it's navigating regulatory 
              challenges, accessing new markets, or scaling operations, we're committed to providing 
              he resources and support necessary for our portfolio companies to thrive in today's dynamic business environment.
              </p>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row">
          <div className="group-container flex sm:pl-14 pl-0 sm:pr-16 pr-0 sm:py-12 py-0 items-center text-center flex-col md:flex-row">
            <div className="md:flex-shrink-0 md:mr-8 sm:mb-32 mb-2">
              <Image
                src="/driving innovation delivering results icon.png"
                alt="logo"
                width={100}
                height={200}
                objectPosition="relative"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-xl text-based sm:mb-2 mb-3 font-large text-gray-800 text-shadow sm:font-bold font-black">
                  Driving Innovation, Delivering Results
              </h1>
              <p className="mb-4 leading-relaxed sm:text-sm text-gray-800 sm:font-medium font-normal">
              At AstraX Capital, we pride ourselves on our proven track record of success. We excel at identifying, 
              investing in, and supporting innovative startups that disrupt industries and drive positive change. With 
              a keen eye for promising opportunities and a strategic approach to portfolio management, we consistently 
              deliver impressive returns while helping our portfolio companies achieve significant milestones and growth.

              </p>
            </div>
          </div>

          <div className="group-container flex sm:pl-0 pl-0 sm:pr-72 pr-0 sm:py-12 py-0 items-center text-center flex-col md:flex-row">
            <div className="md:flex-shrink-0 md:mr-8 sm:mb-32 mb-2">
              <Image
                src="/continuous growth and success icon.png"
                alt="logo"
                width={100}
                height={200}
                objectPosition="relative"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-xl text-based sm:mb-2 mb-3 font-large text-gray-800 text-shadow sm:font-bold font-black">
              Continuous Growth and Success
              </h1>
              <p className="mb-8 leading-relaxed sm:text-sm text-gray-800 sm:font-medium font-normal ">
              Our consistent success with AstraX Capital is a testament to our iterative, methodical, 
              and result-oriented approach to delivering targets. We prioritize strategic planning, 
              ongoing optimization, and proactive management, fueling the support and guidance that 
              our portfolio companies need to thrive in today's competitive landscape.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className="group-container flex  sm:pl-64 pl-0 sm:pr-96 pr-0 sm:py-12 py-2 items-center text-center flex-col md:flex-row">
            <div className="md:flex-shrink-0 md:mr-8 sm:mb-28 mb-2">
              <Image
                src="/expanding horizons embracing diversity icon.png"
                alt="logo"
                width={100}
                height={200}
                objectPosition="relative"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-xl text-based sm:mb-2 mb-3 font-large text-gray-800 text-shadow sm:font-bold font-black">
              Expanding Horizons, Embracing Diversity
              </h1>
              <p className="mb-8 sm:pr-44 pr-0 leading-relaxed sm:text-sm text-gray-800 sm:font-medium font-normal ">
              At AstraX Capital, our vision extends far beyond geographical borders. 
              Our global reach positions us at the forefront of the ever-evolving 
              landscape of innovative technology. We are dedicated to driving global 
              impact and empowering visionary entrepreneurs to turn their ideas into 
              reality, regardless of where they are located.

              </p>
            </div>
          </div>
        </div>
      </div>
          {/* Hide on mobile */}
          <div className="hidden md:block min-h-full flex-col items-center justify-center bg-white w-full">
              <div className="py-0 px-0 md:px-32 mt-10 ">
              <img src="/what can we offer.png" className="flex-shrink-0" width="1400" height="1350" alt=""/>
                    <div className="flex flex-wrap justify-center -mt-72">
                      <div className="m-2 w-full md:w-1/2 lg:w-1/4 flex-shrink-0  flex justify-center items-center relative ">
                        <img className="object-cover rounded-xl" src="/incubate.png" width="500" height="450" alt="Truc cool 1" z-100 />
                      </div>
                      <div className="m-2 w-full md:w-1/2 lg:w-1/4 flex-shrink-0  flex justify-center items-center  relative">
                        <img className="object-cover rounded-xl" src="/advice.png" width="500" height="450" alt="Truc cool 2" z-100/>
                      </div>
                      <div className="m-2 w-full md:w-1/2 lg:w-1/4 flex-shrink-0 flex justify-center items-center relative">
                        <img className="object-cover rounded-xl" src="/train and educate.png" width="500" height="450" alt="Truc cool 3" z-100/>
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
                        <img className="object-cover rounded-xl" src="/incubate.png" width="500" height="450" alt="Truc cool 1" z-100 />
                      </div>
                      <div className="m-2 w-full md:w-1/2 lg:w-1/4 flex-shrink-0  flex justify-center items-center  relative">
                        <img className="object-cover rounded-xl" src="/advice.png" width="500" height="450" alt="Truc cool 2" z-100/>
                      </div>
                      <div className="m-2 w-full md:w-1/2 lg:w-1/4 flex-shrink-0 flex justify-center items-center relative">
                        <img className="object-cover rounded-xl" src="/train and educate.png" width="500" height="450" alt="Truc cool 3" z-100/>
                      </div>
                    </div>
                </div>
            </div>

    </section>
  );
};

export default AboutUs;
