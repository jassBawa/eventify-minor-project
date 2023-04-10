import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Eventify</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="#" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href="#" className="mr-5 hover:text-gray-900">
            Events
          </Link>
          <Link href="#" className="mr-5 hover:text-gray-900">
            About Us
          </Link>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-2 px-4 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Login
          <svg
            width="16"
            height="16"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-3"
          >
            <path
              d="M18 18C22.7883 18 26.6666 14.1217 26.6666 9.33332C26.6666 4.54499 22.7883 0.666656 18 0.666656C13.2117 0.666656 9.33332 4.54499 9.33332 9.33332C9.33332 14.1217 13.2117 18 18 18ZM18 22.3333C12.215 22.3333 0.666656 25.2366 0.666656 31V33.1666C0.666656 34.3583 1.64166 35.3333 2.83332 35.3333H33.1666C34.3583 35.3333 35.3333 34.3583 35.3333 33.1666V31C35.3333 25.2366 23.785 22.3333 18 22.3333Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
