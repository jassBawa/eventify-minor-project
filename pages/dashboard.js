import EventTable from "@/components/Dashboard/EventTable";
import EventModal from "@/components/Dashboard/EventModal";
import Navbar from "@/components/layout/Navbar";
import requireAuth from "@/components/shared/withAuth";
import useFetch from "@/hooks/useFetch";
import { getAdminEvents } from "@/services/api";
import { openModal } from "@/store/slices/modalSlice";
import Head from "next/head";
import React, { use, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

function Dashboard() {
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  // Function to handle search input changes
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filterList = useMemo(() => {
    return events.filter((event) =>
      event.eventName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [events, searchQuery]);

  // Fetch events from the API and update the state

  const fetchEvents = async () => {
    const token = localStorage.getItem("accessToken");

    try {
      const response = await getAdminEvents(token);

      setEvents(response);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [showModal]);

  return (
    <div className="bg-gray-100">
      <Head></Head>
      <div className="bg-gray-100 h-full">
        <Navbar />

        <main className="h-full bg-gray-100">
          <EventModal showModal={showModal} setShowModal={setShowModal} />

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

            <div className="flex justify-between items-center mt-8">
              <div className="w-full">
                <input
                  type="text"
                  className="w-full border px-4 py-2 rounded-lg"
                  placeholder="Search..."
                  onChange={handleSearchChange}
                  value={searchQuery}
                />
              </div>
              <div className="w-1/3 text-right">
                <button
                  className="bg-blue-500 mr-4 text-white px-4 py-2 rounded-lg"
                  onClick={fetchEvents}
                >
                  Refresh
                </button>
                <button
                  onClick={() =>
                    dispatch(
                      openModal({
                        operationType: "CREATE",
                        modalData: {},
                      })
                    )
                  }
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Create
                </button>
              </div>
            </div>
            <div className="mt-4">
              <div className="shadow py-2 overflow-hidden rounded-lg border-b border-gray-200">
                <EventTable filterList={filterList} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default requireAuth(Dashboard);

// export const getStaticProps = async () => {
//     const res = await getAdminEvents();
//     // const data = await res.data
//     const data = res;

//     return {
//         props: { events: data }
//     }
// }
