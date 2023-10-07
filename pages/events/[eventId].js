import Navbar from "@/components/layout/Navbar";
import SingleEventDetails from "@/components/Events/SingleEventDetails";
import SingleEventHero from "@/components/Events/SingleEventHero";
import { getSingleEvent } from "@/services/api";
import React from "react";
import Footer from "@/components/layout/Footer";

function EventPage({ event }) {
  const { image } = event;
  return (
    <div className="bg-[#f1f2f3] ">
      <Navbar classes="" />
      <main className="bg-[#f1f2f3] h-screen overflow-auto">
        <SingleEventHero image={image} />
        <SingleEventDetails event={event} />
      </main>
      <Footer />
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
