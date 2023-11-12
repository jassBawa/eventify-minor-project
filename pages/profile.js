import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { getRegistrationByUserID } from "@/services/api";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Profile() {
  const [events, setEvents] = useState([]);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const fetch = async () => {
      const data = await getRegistrationByUserID();
      setEvents(data);
    };

    fetch();
  }, []);

  if (!events) return;

  console.log(events);

  return (
    <>
      <Head>
        <title>Eventify</title>
      </Head>
      <main>
        <Navbar />
        <div className="container mx-auto py-24">
          <div className="username-container flex items-center gap-4">
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-20">
                <span className="text-3xl">{user.name.slice(0, 1)}</span>
              </div>
            </div>
            <h1 className="text-6xl font-semibold ">
              {user.name}&apos;s Profile
            </h1>
          </div>
          <p className="text-4xl text-gray-700 mt-16">Registred events</p>
          <div className="mt-6 overflow-x-auto">
            <table className="table border">
              {/* head */}
              <thead className="bg-blue-200 border text-lg">
                <tr>
                  <th>S. No.</th>
                  <th>Name</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody className="text-md">
                {events?.map((event, index) => {
                  const { event_id } = event;
                  return (
                    <>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{event_id.eventName}</td>
                        <td>{event_id.societyName}</td>
                        <td>
                          {event.isCertified ? (
                            <button className="bg-blue-500 py-2 px-4 rounded text-white">
                              Download Certificate
                            </button>
                          ) : (
                            <p>You are not yet certified</p>
                          )}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Profile;
