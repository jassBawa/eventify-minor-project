import React from "react";
import Event from "./Event";

function Events({ events }) {
  console.log(events);
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
    console.log(currentDate);
    if (eventDate > currentDate) {
      upcomingEvents.push(event);
    } else if (eventDate < currentDate) {
      pastEvents.push(event);
    } else {
      ongoingEvents.push(event);
    }
  });

  console.log("upcoming events", upcomingEvents);
  console.log("past events", pastEvents);
  console.log("ongoing events", ongoingEvents);

  return (
    <>
      {upcomingEvents.length > 0 && (
        <section className="container mx-auto mt-24">
          <h2 className="text-3xl font-semibold">Upcoming Events</h2>
          <div className="mt-8 grid grid-cols-4 gap-8 text-center -m-4">
            {upcomingEvents.map((event) => (
              <Event key={event._id} event={event} />
            ))}
          </div>
        </section>
      )}

      {ongoingEvents.length > 0 && (
        <section className="container mx-auto">
          <h2 className="text-3xl font-semibold">Ongoing Events</h2>
          <div className="mt-8 grid grid-cols-4 gap-8 text-center -m-4">
            {ongoingEvents.map((event) => (
              <Event key={event.title} event={event} />
            ))}
          </div>
        </section>
      )}

      {pastEvents.length > 0 && (
        <section className="container mx-auto mt-20">
          <h2 className="text-3xl font-semibold">Past Events</h2>
          <div className="mt-8 grid grid-cols-4 gap-8 text-center -m-4">
            {pastEvents.map((event) => (
              <Event key={event.title} event={event} isDisabled={true} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default Events;
