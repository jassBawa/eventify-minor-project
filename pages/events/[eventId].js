import Navbar from "@/components/layout/Navbar";
import SingleEventDetails from "@/components/Events/SingleEventDetails";
import SingleEventHero from "@/components/Events/SingleEventHero";
import { getSingleEvent } from "@/services/api";
import React, { useEffect, useState } from "react";
import Footer from "@/components/layout/Footer";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

function EventPage({}) {
  // const { image } = event;
  const router = useRouter();
  const { eventId } = router.query;
  const [event, setEvent] = useState(null);
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    if (!token) {
      router.push("/login");
      toast.error("Please login first!");
      return;
    }

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
      <main className="bg-[#f1f2f3] ">
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
