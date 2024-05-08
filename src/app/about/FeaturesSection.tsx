import React from 'react';
import Image from 'next/image';

const Feature = ({ src, alt, title, description }: { src: string, alt: string, title: string, description: string }) => (
    <div className="flex sm:pl-0 pl-0 sm:pr-0 pr-0 sm:py-12 py-0 md:items-start items-center text-center justify-center flex-col md:flex-row">
      <div className="md:flex-shrink-0 md:mr-8 mb-2">
        <Image src={src} alt={alt} width={100} height={200} objectPosition="relative" />
      </div>
      <div className="md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0  text-center">
        <h1 className="title-font sm:text-2xl text-based sm:mb-2 mb-3 font-large text-gray-800 text-shadow sm:font-bold font-black">{title}</h1>
        <p className="mb-4 leading-relaxed sm:text-xl text-sm text-gray-800 sm:font-normal font-normal">{description}</p>
      </div>
    </div>
  );
  const FeaturesSection = () => (
    <div className="sm:pr-0 pr-9 sm:pl-0 pl-9 flex flex-col bg-gradient-to-b from-white to-orange-200 w-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-0 gap-y-0 items-start">
        <Feature
          src="/early stage innovation icon.png"
          alt="logo"
          title="Empowering Early-Stage Innovation"
          description="At AstraX Capital, we specialize in identifying and nurturing early-stage startups with the potential to scale up and revolutionize respective industries. Our focus on private and seed rounds allows us to partner with founders at the earliest stages of their journey, providing them with the necessary resources and support to transform their ideas into thriving and sustainable businesses."
        />
        <Feature
          src="/nurturing growth and expansion icon.png"
          alt="logo"
          title="Nurturing Growth and Expansion"
          description="As our portfolio companies progress from microcaps to scale-ups, we continue to champion their growth and navigate them toward imminent success. We facilitate follow-on funding rounds, strategic partnerships, and market expansion opportunities by leveraging our network and expertise to help them reach their full potential. Whether it's navigating regulatory challenges, accessing new markets, or scaling operations, we're committed to providing the resources and support necessary for our portfolio companies to thrive in today's dynamic business environment."
        />
        <Feature
          src="/driving innovation delivering results icon.png"
          alt="logo"
          title="Driving Innovation, Delivering Results"
          description="At AstraX Capital, we pride ourselves on our proven track record of success. We excel at identifying, investing in, and supporting innovative startups that disrupt industries and drive positive change. With a keen eye for promising opportunities and a strategic approach to portfolio management, we consistently deliver impressive returns while helping our portfolio companies achieve significant milestones and growth."
        />
        <Feature
          src="/continuous growth and success icon.png"
          alt="logo"
          title="Continuous Growth and Success"
          description="Our consistent success with AstraX Capital is a testament to our iterative, methodical, and result-oriented approach to delivering targets. We prioritize strategic planning, ongoing optimization, and proactive management, fueling the support and guidance that our portfolio companies need to thrive in today's competitive landscape."
        />
      </div>
      <div className="col-span-2 sm:px-96 px">
        <Feature
          src="/expanding horizons embracing diversity icon.png"
          alt="logo"
          title="Expanding Horizons, Embracing Diversity"
          description="At AstraX Capital, our vision extends far beyond geographical borders. Our global reach positions us at the forefront of the ever-evolving landscape of innovative technology. We are dedicated to driving global impact and empowering visionary entrepreneurs to turn their ideas into reality, regardless of where they are located."
        />
      </div>
    </div>
  );
  
export default FeaturesSection;
