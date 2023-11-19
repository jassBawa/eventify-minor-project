import React from "react";
import EventCard from "./EventCard";
import Event from "./Event";

function Events({ events }) {
  if (events.length === 0) {
    return (
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold ml-4">No Events to show</h2>
      </div>
    );
  }

  const currentDate = new Date();

  const upcomingEvents = [];
  const pastEvents = [];
  const ongoingEvents = [];

  events.forEach((event) => {
    const eventDate = new Date(event.date);
    if (eventDate > currentDate) {
      upcomingEvents.push(event);
    } else if (eventDate < currentDate) {
      pastEvents.push(event);
    } else {
      ongoingEvents.push(event);
    }
  });

  return (
    <>
      {upcomingEvents.length > 0 && (
        <section className="container mx-auto mt-24">
          <h2 className="text-3xl font-semibold">Upcoming Events</h2>
          <div className="mt-8 grid grid-cols-3 gap-8 text-center -m-4">
            {upcomingEvents.map((event) => (
              // <Event key={event._id} event={event} />
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        </section>
      )}

      {ongoingEvents.length > 0 && (
        <section className="container mx-auto">
          <h2 className="text-3xl font-semibold">Ongoing Events</h2>
          <div className="mt-8 grid grid-cols-3 gap-8 text-center -m-4">
            {ongoingEvents.map((event) => (
              // <Event key={event._id} event={event} />
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        </section>
      )}

      {pastEvents.length > 0 && (
        <section className="container mx-auto mt-20">
          <h2 className="text-3xl font-semibold">Past Events</h2>
          <div className="mt-8 grid grid-cols-3 gap-8 text-center -m-4">
            {pastEvents.map((event) => (
              // <Event key={event._id} event={event} isDisabled={true} />
              <EventCard key={event._id} event={event} badge="OLD" isDisabled />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default Events;
