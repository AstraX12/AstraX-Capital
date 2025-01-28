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
        className="min-h-screen flex flex-col items-center justify-center w-full bg-cover bg-center" style={{ backgroundImage: "url('/backgrounds/BGSides.png')" }}
      >

        <div 
            className="flex pl-0 pr-0 py-0 mt-6 items-center text-center flex-col md:flex-row " >
          <div className="lg:flex-grow md:w-full sm:pt-0 pt-12 flex flex-col md:items-center md:text-center mb-16 md:mb-0 items-center text-center ">
          <div className="flex items-center justify-center w-6xl mb-24 mt-24">
            <h2 className="w-full pr-0 text-6xl font-bold text-pink-800">
            CONTACT US
            </h2>
            <div className="w-[10px] h-20 bg-orange-500 mx-6 rounded-full"></div>
            <p className="w-2/3 text-2xl font-medium text-gray-700">
            Got any questions? Don't hesitate to get in touch.
            </p>
          </div>
            {!emailSent ? (
              <form ref={form} onSubmit={sendEmail} className="flex flex-col items-center w-full max-w-lg mx-auto p-6">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                className="w-full px-4 py-3 mb-4 placeholder-gray-500 text-gray-700 bg-white border border-pink-400 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className="w-full px-4 py-3 mb-4 placeholder-gray-500 text-gray-700 bg-white border border-pink-400 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full px-4 py-3 h-32 mb-4 placeholder-gray-500 text-gray-700 bg-white border border-pink-400 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 text-white bg-gradient-to-r from-pink-800 to-orange-600 rounded-full shadow-lg text-lg font-semibold transition-transform transform hover:scale-105"
              >
                Send Message
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
        <div className="container sm:px-0 px-8 py-24 mx-auto">
        <div className="container mx-auto flex items-center justify-center pt-2">
            <div className="grid grid-cols-1 lg:grid-cols-[40%_64px_40%] gap-6 items-center w-full max-w-6xl mb-12">
              {/* Title Section */}
              <h1 className="text-4xl font-bold text-pink-800 text-right">DISCLAIMER</h1>

              {/* Divider */}
              <div className="bg-orange-500 w-[6px] h-32 mx-auto rounded-full"></div>

              {/* Content Section */}
              <p className="text-lg text-gray-700 leading-relaxed">
              AstraX Capital  is not seeking any outside investors. If you represent a project and are interested in discussing 
                  a potential investment with our team, please feel free to reach out.
              </p>
            </div>
            <div
            className="absolute bottom-0 left-0 w-full h-48 bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/backgrounds/BG5.png')" }}
          ></div>
          </div>
      
        </div>
      </section>
    </>
  );
};

export default ContactUs;
