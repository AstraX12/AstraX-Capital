import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer id="footer">
    
        
      <div className="bg-gradient-to-b from-white to-orange-200">
      <div className="container pt-14 pb-10 mx-auto ">
          <div className="flex flex-wrap items-center justify-center text-center "> 
            <div className="lg:w-2/6 md:w-1/2 w-full px-4">
              <a href="/" className="flex justify-center w-full  md:w-auto mb-5"> 
                <Image
                  src="/astraXcapital.png"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </a>
              <div className="flex justify-center lg:ml-auto lg:mt-0 mt-6 w-full  md:w-auto">
                  
                  <a
                    className=" text-pink-800 px-4 py-4"
                    href="https://www.facebook.com/AstraXCapital"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </a>
                
              
                  <a
                    className=" text-pink-800 px-4 py-4"
                    href="https://twitter.com/Astraxcapital"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-twitter-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                  </a>
            
              
                  <a
                    className=" text-pink-800 px-4 py-4"
                    href="mailto:astraxinvestment@gmail.com"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-envelope-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                    </svg>
                  </a>
                  <a href="mailto:astraxinvestment@gmail.com"></a>
                
              </div>
              {/* <div className="flex justify-between">
                <a
                href="#privacy-policy" 
                className="lg:w-full text-based text-pink-800 w-full justify-center md:w-auto"
                >
                  Privacy Policy
                </a>
                <a
                  href="#terms-and-conditions" 
                  className="lg:w-full text-based text-pink-800 w-full justify-center md:w-auto"
                  >
                  Terms and Conditions
                </a>
              </div> */}
              </div>
              
            </div>
            <div className="w-full flex justify-center md:justify-center lg:justify-center">
            <p className="text-base text-gray-500">
              Copyright © 2024 All rights reserved
            </p>
          </div>

          </div>
        </div>
       
      </footer>
    </>
  );
};

export default Footer;
