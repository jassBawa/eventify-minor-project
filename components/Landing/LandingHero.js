import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function LandingHero() {
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
          <div className="flex justify-center gap-4">
            <Link href="/events" className="btn btn-primary">
              <svg
                className="h-5 w-5 mr-2"
                viewBox="0 0 25 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.125 3.125H20.75V0.375H18V3.125H7V0.375H4.25V3.125H2.875C2.14565 3.125 1.44618 3.41473 0.930456 3.93046C0.414731 4.44618 0.125 5.14565 0.125 5.875V25.125C0.125 25.8543 0.414731 26.5538 0.930456 27.0695C1.44618 27.5853 2.14565 27.875 2.875 27.875H22.125C23.6513 27.875 24.875 26.6513 24.875 25.125V5.875C24.875 5.14565 24.5853 4.44618 24.0695 3.93046C23.5538 3.41473 22.8543 3.125 22.125 3.125ZM22.125 25.125H2.875V11.375H22.125V25.125ZM22.125 8.625H2.875V5.875H22.125V8.625Z"
                  fill="#CCCCCC"
                />
              </svg>
              All Events
            </Link>
            <Link
              href="/about-us"
              className="ml-4 text-gray-700 transition-all border-gray-100 text-sm flex justify-center items-center border-transparent border-b-2 hover:border-blue-300 px-4"
            >
              More!
            </Link>
          </div>
        </div>
        <div className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute z-10 top-0 left-4 h-56 w-56 object-cover object-center  border-2 border-white rounded-full hover:scale-105 transition-all outline hover:outline-[.4rem] hover:z-20 hover:outline-offset-4 hover:outline-indigo-500"
            alt="hero"
            src="https://www.niti.gov.in/sites/default/files/2021-11/ReinvigoratingSports-inRuralAreas-cover.jpg"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute z-10 top-0 right-24 h-56 w-56 object-cover object-center border-2 border-white  rounded-full transition-all outline hover:scale-110 hover:outline-[.4rem] hover:z-20 hover:outline-offset-4 hover:outline-indigo-500"
            alt="hero"
            src="https://www.liveabout.com/thmb/t-cb7eQU1JencqSuofPSfWlzQOg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/application-developers-at-work--629201600-5914bf4a5f9b58647023e72f.jpg"
          />
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute z-10 -bottom-16 left-24 h-56 w-56 object-cover object-center border-2 border-white rounded-full hover:scale-105 transition-all outline hover:outline-[.4rem] hover:z-20 hover:outline-offset-4 hover:outline-indigo-500"
            alt="hero"
            src="/bhangra.jpeg"
          />
        </div>
      </div>
    </section>
  );
}

export default LandingHero;
