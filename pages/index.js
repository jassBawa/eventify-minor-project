import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeedbackForm from "@/components/Landing/FeedbackForm";
import Navbar from "@/components/Navbar";
import { getAllEvents } from "@/services/api";
import { store } from "@/store/store";
import Head from "next/head";
import { useEffect } from "react";

export default function Home({ events }) {
  return (
    <>
      <Head>
        <title>Eventify</title>
      </Head>
      <main>
        <Navbar />
        <Hero />
        <Events events={events} />
        <FeedbackForm />
      </main>

      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  try {
    const data = await getAllEvents();
    return {
      props: { events: data?.slice(0, 4) },
    };
  } catch (error) {
    console.error(error);
    return {
      props: { events: [] },
    };
  }
};
