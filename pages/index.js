import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Head from "next/head";

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
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const eventListUrl = 'http://localhost:4040/api/user/event'
  const res = await axios.get(eventListUrl);
  const data = await res.data
  console.log(data)

  return {
    props: { events: data.slice(0, 4) }
  }
}