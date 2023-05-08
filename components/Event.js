import React from "react";

function Event() {
  return (
    <div className="lg:w-1/5 md:w-1/2 p-4 w-full transition-transform hover:scale-105 cursor-pointer">
      <a className="block relative h-56 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src="https://dummyimage.com/421x261"
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          CATEGORY
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          Event Title
        </h2>
        <p className="mt-1">$21.15</p>
      </div>
    </div>
  );
}

export default Event;
