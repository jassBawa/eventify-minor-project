import Events from "@/components/Events/Events";
import Footer from "@/components/layout/Footer";
import LandingHero from "@/components/Landing/LandingHero";
import ImageGallery from "@/components/Landing/ImageGallery";
import FeedbackForm from "@/components/Landing/FeedbackForm";
import Navbar from "@/components/layout/Navbar";
import Head from "next/head";
import { getAllEvents } from "@/services/api";

export default function Home({ events }) {
  return (
    <>
      <Head>
        <title>Eventify</title>
      </Head>
      <main>
        <Navbar />
        <LandingHero />
        <Events events={events} />
        <ImageGallery />
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
