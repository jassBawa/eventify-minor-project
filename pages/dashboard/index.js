import Head from "next/head";
import React, { useEffect, useState } from "react";

import EventModal from "@/components/Dashboard/EventModal";
import EventsList from "@/components/Dashboard/EventsList";
import Navbar from "@/components/layout/Navbar";
import StatsCards from "@/components/shared/StatsCards";
import requireAuth from "@/components/shared/withAuth";
import useEvents from "@/hooks/useEvents";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

function Dashboard() {
  // const [showModal, setShowModal] = useState(false);

  const token = useSelector((state) => state.user.token);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/login");
      toast.error("Please login first!");
      return;
    }
  }, [token, router]);

  const { isOpen } = useSelector((state) => state.modal);
  const { isDeleteModalOpen } = useSelector((state) => state.deleteModal);

  const events = useEvents(isOpen, isDeleteModalOpen);

  const numberOfTotal = events.reduce(
    (tot, event) => tot + (event.noOfRegistration ? event.noOfRegistration : 0),
    0
  );

  return (
    <>
      <>
        <Navbar />

        <main className=" h-full bg-gray-100">
          <EventModal />

          <div className="container mx-auto py-6 px-4 mt-8">
            <div className="py-6">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Event Management Dashboard
              </h1>
              <p className="text-gray-400 w-3/4">
                Welcome to the event management dashboard! From here, you can
                view and manage all of your events, attendees, and other
                important information.
              </p>
            </div>

            <StatsCards
              totalEvents={events.length}
              totalRegistrations={numberOfTotal}
            />

            <EventsList events={events} />
          </div>
        </main>
      </>
    </>
  );
}

export default requireAuth(Dashboard);
