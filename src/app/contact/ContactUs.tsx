"use client"
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6a5u1rs', 'template_yzifg7s', form.current!, {
        publicKey: 'q6XcTIchf2QdrF_Mn',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setEmailSent(true); // Set emailSent to true on successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
          // Handle error if needed
        }
      );
  };

  const resetForm = () => {
    setEmailSent(false);
    form.current?.reset(); // Reset the form fields
  };

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
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 sm:pt-0 pt-12 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
            <h1 className="title-font sm:text-2xl text-xl mb-6 font-large text-pink-800 text-shadow font-bold">
              CONTACT US
            </h1>
            <p className="mb-8 leading-relaxed sm:text-4xl text-2xl text-gray-800 font-bold">
              Got any questions? Don't hesitate to get in touch.
            </p>
            {!emailSent ? (
              <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center">
                <div className="flex flex-wrap justify-between w-full mb-4">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    className="w-full px-4 py-2 mb-4 placeholder-gray-500 text-gray-700 bg-pink-200 rounded text-base shadow outline-none focus:outline-none focus:shadow-outline"
                    required
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email"
                    className="w-full px-4 py-2 mb-2 placeholder-gray-500 text-gray-700 bg-pink-200 rounded text-base shadow outline-none focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full px-4 pt-3 pb-8  mb-4 placeholder-gray-500 text-gray-700 bg-pink-200 rounded text-base shadow outline-none focus:outline-none focus:shadow-outline"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="inline-flex text-white py-2 px-8 bg-gradient-to-br from-pink-800 to-orange-600 border-2 border-none focus:outline-none hover:bg-gray-300 rounded text-lg font-sans"
                >
                  SEND MESSAGE
                </button>
              </form>
            ) : (
              <div>
                <p>Thank you for your message!</p>
                <button
                  onClick={resetForm}
                  className="inline-flex mt-4 text-white py-2 px-8 bg-gradient-to-br from-pink-800 to-orange-600 border-2 border-none focus:outline-none hover:bg-gray-300 rounded text-lg font-sans"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col sm:pt-16 pt-0 sm:pb-2 pb-0 text-center ">
          <h1 className="sm:text-2xl text-based sm:mb-0 mb-5 font-large text-pink-900 text-shadow font-bold">
                 DISCLAIMER
          </h1>
          <div className="container sm:px-40 px-8 py-8 mx-auto">
          <p className=" sm:px-40 px-3 pb-5 leading-relaxed sm:text-xl text-sm text-gray-500 font-medium mb-5">
          AstraX Capital  is not seeking any outside investors. If you represent a project and are interested in discussing 
          a potential investment with our team, please feel free to reach out.</p></div>
      </div>
      </section>
    </>
  );
};

export default ContactUs;
