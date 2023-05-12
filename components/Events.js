import Link from "next/link";
import React from "react";
import Event from "./Event";

function Events({ events }) {

  return (
    <section className="container mx-auto">
      <h2 className="text-3xl font-semibold">Upcoming Events</h2>
      <section className="text-gray-600 body-font mt-16">
        <div className="flex flex-wrap gap-8 text-center -m-4">
          {
            events && events.map((event, _) => <Event key={_} event={event} />)

          }
          {
            !events && (
              <Link href="/events" className="text-white mt-6 uppercase py-2 bg-indigo-500 border-0 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Browse more
              </Link>
            )
          }

        </div>
      </section>
    </section>
  );
}

export default Events;
