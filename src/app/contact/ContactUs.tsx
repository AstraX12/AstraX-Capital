"use client"
import React, { ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';

const ContactUs = () => {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    throw new Error('Function not implemented.');
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error('Function not implemented.');
  }

  return (
    <>
       <section
      id="contact_us"
      className="min-h-screen flex flex-col items-center justify-center w-full"
    >
      <div className="flex pl-16 pr-16 py-24 mt-6 items-center text-center flex-col md:flex-row bg-white">
        <div className="lg:max-w-lg lg:w-full md:w-full w-5/6 ">
          <Image
            src="/Contact Us Graphic.png"
            alt="logo"
            width={500}
            height={400}
            objectPosition="relative"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
          <h1 className="title-font sm:text-xl text-xl mb-6 font-large text-pink-800 text-shadow font-bold">
            CONTACT US
          </h1>
          <p className="mb-8 leading-relaxed sm:text-4xl text-gray-800 font-bold">
            Got any questions? Don't hesitate to get in touch.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="flex flex-wrap justify-between w-full mb-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full px-4 py-2 mb-4 placeholder-gray-500 text-gray-700 bg-pink-200 rounded text-base shadow outline-none focus:outline-none focus:shadow-outline"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full px-4 py-2 mb-4 placeholder-gray-500 text-gray-700 bg-pink-200 rounded text-base shadow outline-none focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full px-4 py-2 mb-4 placeholder-gray-500 text-gray-700 bg-pink-200 rounded text-base shadow outline-none focus:outline-none focus:shadow-outline"
              required
            ></textarea>
            <button
              type="submit"
              className="inline-flex text-white py-2 px-8 bg-gradient-to-br from-pink-800 to-orange-600 border-2 border-none focus:outline-none hover:bg-gray-300 rounded text-lg font-sans"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactUs;
