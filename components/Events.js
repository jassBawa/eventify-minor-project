import React from "react";
import Event from "./Event";

function Events() {
  return (
    <section className="container mx-auto">
      <h2 className="text-3xl font-semibold">Upcoming Events</h2>
      <section className="text-gray-600 body-font mt-16">
        <div className="flex flex-wrap gap-8 justify-center -m-4">
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
        </div>
      </section>
    </section>
  );
}

export default Events;
