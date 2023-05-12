import { formatDate } from "@/utils/date-formatters";
import Link from "next/link";
import React from "react";

function Event({ event }) {
  const { eventName, date, image } = event;
  const formattedDate = formatDate(date)
  return (
    <Link href={`/events/${event._id}`} className="lg:w-1/5 md:w-1/2 p-4 w-full transition-transform hover:scale-105 cursor-pointer">
      <a className="block relative h-56 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={image}
        />
      </a>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          CATEGORY
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {eventName}
        </h2>
        <p className="mt-1 tracking-wider">{formattedDate}</p>
      </div>
    </Link>
  );
}

export default Event;
