import React from "react";

import Events from "@/components/Events/Events";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Head from "next/head";
import { getAllEvents } from "@/services/api";
import Link from "next/link";
import EventBadges from "@/components/shared/EventBadges";

function EventPage({ events }) {
  return (
    <>
      <Head>
        <title>Eventify</title>
      </Head>
      <div className="relative">
        <main className="">
          <Navbar />
          <EventBadges />
          {/* <div className="container mx-auto mt-8 text-xs">
            <Link
              href="/"
              className="bg-purple-600 text-white rounded-lg inline-block py-2 px-6"
            >
              Sports
            </Link>
            <a
              href="#"
              class="inline-block bg-blue-500 text-white px-2 py-1 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors duration-300"
            >
              New
            </a>
          </div> */}
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
