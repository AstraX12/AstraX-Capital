const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center w-full"
      style={{
        backgroundImage: "url('/backgrounds/BG1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex items-center justify-center flex-col md:flex-row text-center min-h-screen sm:pl-16 pl-1 sm:pr-16 pr-1 mt-6">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 lg:pl-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center ">
          
          <h1 className="title-font sm:text-6xl text-3xl mb-6 font-large text-white text-shadow font-bold">
            AstraX Capital
          </h1>
          <p className="mb-8 sm:pr-80 pr-10 sm:pl-80 pl-10 leading-relaxed sm:text-2xl text-white text-center">
            We specialize in supporting visionary founders who are developing innovative infrastructure and decentralized 
            applications within the Web3 Ecosystem.
          </p>

          <div className="flex justify-center">
            <button className="ml-0 inline-flex text-white sm:py-3 py-2 sm:px-10 px-6 
                   bg-gradient-to-t from-orange-600 to-pink-800 focus:outline-none 
                   hover:from-pink-700 hover:to-orange-500 rounded-full text-lg font-sans items-center 
                   transition-all duration-300">
              <a href="#portfolio">PORTFOLIO</a>
            </button>
            <button className="ml-2 inline-flex text-white sm:py-2 py-2 sm:px-6 px-3 border-2 border-white focus:outline-none hover:bg-pink-800 rounded-full text-sm items-center">
              <a href="https://tinyurl.com/astraXcapital" target="_blank" rel="noopener noreferrer">
                GET IN TOUCH
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
