import React from "react";

function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Discover the Best College Events
            <br className="hidden lg:inline-block" />
            in One Place!
          </h1>
          <p className="mb-8 leading-relaxed">
            Looking for exciting events to attend in your college? Eventify
            brings you a comprehensive collection of the latest and greatest
            college events, all in one easy-to-use platform.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Register
            </button>
            <button className="ml-4 text-gray-700 transition-all border-transparent border-b-2 hover:border-blue-300 w-3/4 px-4 focus:outline-none text-lg">
              Learn more!
            </button>
          </div>
        </div>
        <div className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="absolute top-0 left-4 h-48 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
          <img
            className="absolute top-0 right-4 h-48 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
          <img
            className="absolute bottom-5 h-48 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
