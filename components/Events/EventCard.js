import { formatDate } from "@/utils/date-formatters";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

function EventCard({ event, isDisabled = false, badge = "NEW" }) {
  const { eventName, date, image, category, venue } = event;
  const formattedDate = formatDate(date);

  return (
    <div className={"w-full h-full "}>
      <div className="card bg-base-100  shadow-xl">
        <figure className="h-56 max-w-xl">
          <img src={image} alt="Shoes" className="object-cover h-full w-full" />
        </figure>
        <div className="card-body py-8 px-6">
          <Link
            href={`/events/${event._id}`}
            className={clsx("card-title", {
              "pointer-events-none": isDisabled,
            })}
            isDisabled={isDisabled}
          >
            {eventName}
            {badge === "NEW" && (
              <div className="badge text-xs badge-secondary">NEW</div>
            )}
            {badge === "OLD" && (
              <div className="badge text-xs badge-neutral">OLD</div>
            )}
          </Link>
          <p className="text-left"> {category}</p>
          <div className="card-actions justify-end mt-6">
            <div className="badge badge-outline">{formattedDate}</div>
            <div className="badge badge-outline">{venue}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
