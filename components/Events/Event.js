import { formatDate } from "@/utils/date-formatters";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

function Event({ event, isDisabled = false }) {
  console.log(event);
  const { eventName, date, image, category } = event;
  const formattedDate = formatDate(date);
  return (
    <Link
      href={`/events/${event._id}`}
      className={clsx(
        " p-4 w-full transition-transform hover:scale-105 cursor-pointer overflow-hidden ",
        {
          "pointer-events-none": isDisabled,
        }
      )}
    >
      <div className="block relative h-56 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={image}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {category}
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
