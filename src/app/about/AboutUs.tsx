import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section
      id="about_us"
      className="text-gray-700 body-font min-h-screen w-screen"
    >
      <div className="container px-5 py-32 mx-auto">
        <div className="flex flex-wrap w-full mb-1 flex-col items-center text-center">
          <h1 className="title-font sm:text-4xl text-5xl mb-16 font-medium text-pink-800">
            ABOUT US
          </h1>
          
          <p className="lg:w-7/12 w-full leading-relaxed text-xl font-medium mb-5">
          At AstraX Capital, we're driven by a passion for pioneering technologies 
          that shape the future specializing in blockchain technology, artificial intelligence, 
          and other innovative sectors. Our mission is to propel the success of visionary 
          entrepreneurs and transformative ideas. We provide strategic investment to startups 
          at every stage of their journey, from inception to scale. Founded on principles of integrity, 
          innovation, and collaboration, we're dedicated to building a brighter tomorrow through technology-driven innovation.
          </p>
          <p className="lg:w-7/12 w-full leading-relaxed text-xl font-medium">
          Our team brings together seasoned investors, industry experts, and visionary leaders 
          who share a unifying mission: to identify and nurture the next generation of game-changing companies. 
          From our partners, and industry experts to our passionate support staff, each member of our 
          team contributes their unique expertise and passion to drive positive change and create value 
          for our portfolio companies and investors alike.

          </p>
        </div>
      </div>
      <div className="px-16 flex flex-col items-center justify-center bg-gradient-to-b from-white to-orange-200 w-full">
        <div className="flex flex-col md:flex-row">
          <div className="group-container flex pl-16 pr-16 py-24 items-center text-center flex-col md:flex-row">
            <div className="md:flex-shrink-0 md:mr-8 mb-44">
              <Image
                src="/early stage innovation icon.png"
                alt="logo"
                width={100}
                height={200}
                objectPosition="relative"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-xl text-xl mb-1 font-large text-gray-800 text-shadow font-bold">
                Empowering Early-Stage Innovation
              </h1>
              <p className="mb-4 leading-relaxed sm:text-based text-gray-800 ">
                At AstraX Capital, we specialize in identifying and nurturing early-stage startups with the potential to scale up and revolutionize respective industries. Our focus on private and seed rounds allows us to partner with founders at the earliest stages of their journey, providing them with the necessary resources and support to transform their ideas into thriving and sustainable businesses.
              </p>
            </div>
          </div>

          <div className="group-container flex pl-16 pr-16 py-24 items-center text-center flex-col md:flex-row">
            <div className="md:flex-shrink-0 md:mr-8 mb-40">
              <Image
                src="/nurturing growth and expansion icon.png"
                alt="logo"
                width={100}
                height={200}
                objectPosition="relative"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-xl text-xl mb-1 font-large text-gray-800 text-shadow font-bold">
                  Nurturing Growth and Expansion
              </h1>
              <p className="mb-4 leading-relaxed sm:text-based text-gray-800 ">
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
          <div className="group-container flex pl-16 pr-16 py-24 items-center text-center flex-col md:flex-row">
            <div className="md:flex-shrink-0 md:mr-8 mb-40">
              <Image
                src="/driving innovation delivering results icon.png"
                alt="logo"
                width={100}
                height={200}
                objectPosition="relative"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-xl text-xl mb-6 font-large text-gray-800 text-shadow font-bold">
                  Driving Innovation, Delivering Results
              </h1>
              <p className="mb-8 leading-relaxed sm:text-based text-gray-800 ">
              At AstraX Capital, we pride ourselves on our proven track record of success. We excel at identifying, 
              investing in, and supporting innovative startups that disrupt industries and drive positive change. With 
              a keen eye for promising opportunities and a strategic approach to portfolio management, we consistently 
              deliver impressive returns while helping our portfolio companies achieve significant milestones and growth.

              </p>
            </div>
          </div>

          <div className="group-container flex pl-16 pr-16 py-24 items-center text-center flex-col md:flex-row">
            <div className="md:flex-shrink-0 md:mr-8 mb-40">
              <Image
                src="/continuous growth and success icon.png"
                alt="logo"
                width={100}
                height={200}
                objectPosition="relative"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-xl text-xl mb-6 font-large text-gray-800 text-shadow font-bold">
              Continuous Growth and Success
              </h1>
              <p className="mb-8 leading-relaxed sm:text-based text-gray-800 ">
              Our consistent success with AstraX Capital is a testament to our iterative, methodical, 
              and result-oriented approach to delivering targets. We prioritize strategic planning, 
              ongoing optimization, and proactive management, fueling the support and guidance that 
              our portfolio companies need to thrive in today's competitive landscape.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="group-container flex px-96 py-24 items-center text-center flex-col md:flex-row">
            <div className="md:flex-shrink-0 md:mr-8 mb-32">
              <Image
                src="/expanding horizons embracing diversity icon.png"
                alt="logo"
                width={100}
                height={200}
                objectPosition="relative"
              />
            </div>
            <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-xl text-xl mb-6 font-large text-gray-800 text-shadow font-bold">
              Expanding Horizons, Embracing Diversity
              </h1>
              <p className="mb-8 leading-relaxed sm:text-based text-gray-800 ">
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

      <div className="min-h-screen flex flex-col items-center justify-center bg-white w-full">
              <div className="py-0 px-0 md:px-32 mt-10">
                <img src="/what can we offer.png"  width="1400" height="1350" alt=""/>
                    <div className="flex flex-wrap justify-center -mt-72">
                      <div className="m-2 w-full md:w-1/2 lg:w-1/4 flex-shrink-0  flex justify-center items-center relative ">
                        <img className="object-cover rounded-xl" src="/incubate.png" width="400" height="350" alt="Truc cool 1" z-100 />
                      </div>
                      
                      <div className="m-2 w-full md:w-1/2 lg:w-1/4 flex-shrink-0  flex justify-center items-center  relative">
                        <img className="object-cover rounded-xl" src="/advice.png" width="400" height="350" alt="Truc cool 2" z-100/>
                      </div>
                      
                      <div className="m-2 w-full md:w-1/2 lg:w-1/4 flex-shrink-0 flex justify-center items-center relative">
                        <img className="object-cover rounded-xl" src="/train and educate.png" width="400" height="350" alt="Truc cool 3" z-100/>
                        
                      </div>
                      
                    </div>
                  </div>

      
    </div>

    </section>
  );
};

export default AboutUs;
