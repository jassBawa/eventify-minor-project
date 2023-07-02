import React from "react";

import Events from "@/components/Events/Events";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Head from "next/head";
import { getAllEvents } from "@/services/api";

function EventPage({ events }) {
  return (
    <>
      <Head>
        <title>Eventify</title>
      </Head>
      <div className="relative">
        <main className="">
          <Navbar />
          <Events events={events} />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default EventPage;

export const getServerSideProps = async () => {
  let data;
  try {
    data = await getAllEvents();
    return {
      props: { events: data },
    };
  } catch (err) {
    console.log(err);
    return {
      props: { events: [] },
    };
  }
};
