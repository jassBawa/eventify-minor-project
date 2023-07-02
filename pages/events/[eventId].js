import Navbar from "@/components/layout/Navbar";
import SingleEventDetails from "@/components/Events/SingleEventDetails";
import SingleEventHero from "@/components/Events/SingleEventHero";
import { getSingleEvent } from "@/services/api";
import React from "react";

function EventPage({ event }) {
  const { image } = event;
  return (
    <div>
      <Navbar classes="" />
      <main className=" h-full overflow-auto">
        <SingleEventHero image={image} />
        <SingleEventDetails event={event} />
      </main>
    </div>
  );
}

export default EventPage;

export const getServerSideProps = async ({ params }) => {
  const { eventId } = params;

  const data = await getSingleEvent(eventId);

  return {
    props: {
      event: data,
    },
  };
};
