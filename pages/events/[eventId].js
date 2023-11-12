import Navbar from "@/components/layout/Navbar";
import SingleEventDetails from "@/components/Events/SingleEventDetails";
import SingleEventHero from "@/components/Events/SingleEventHero";
import { getSingleEvent } from "@/services/api";
import React, { useEffect, useState } from "react";
import Footer from "@/components/layout/Footer";
import { useRouter } from "next/router";

function EventPage({}) {
  // const { image } = event;
  const router = useRouter();
  const { eventId } = router.query;
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const data = await getSingleEvent(eventId);
      setEvent(data[0]);
    };

    fetch();
    console.log(event);
  }, []);

  if (!event) return;

  return (
    <div className="bg-[#f1f2f3] ">
      <Navbar classes="" />
      <main className="bg-[#f1f2f3] h-screen overflow-auto">
        <SingleEventHero image={event.image} />
        <SingleEventDetails event={event} />
      </main>
      <Footer />
    </div>
  );
}

export default EventPage;

// export const getServerSideProps = async ({ params }) => {
//   const { eventId } = params;
//   console.log(eventId);
//   const data = await getSingleEvent(eventId);

//   console.log(data);
//   return {
//     props: {
//       event: data,
//     },
//   };
// };
