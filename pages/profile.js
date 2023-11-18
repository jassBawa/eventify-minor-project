import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Certificate from "@/components/shared/Certificate";
import { getRegistrationByUserID } from "@/services/api";
import html2canvas from "html2canvas";
import Head from "next/head";
import { saveAs } from "file-saver";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { formatDate } from "@/utils/date-formatters";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

function Profile() {
  const [events, setEvents] = useState([]);
  const user = useSelector((state) => state.user);
  const [certData, setCertData] = useState({});
  const token = useSelector((state) => state.user.token);
  const router = useRouter();
  const convertToPdf = async () => {
    // converting into canvas
    const canvas = await html2canvas(
      document.querySelector("#user-certificate")
    );
    canvas.toBlob((blob) => {
      saveAs(blob, `${certData.name}-certificate.png`);
    });
  };

  useEffect(() => {
    if (!token) {
      router.push("/login");
      toast.error("Please login first!");
      return;
    }

    const fetch = async () => {
      const data = await getRegistrationByUserID();
      setEvents(data);
    };

    fetch();
  }, [token, router]);

  if (!events) return;

  // const handleDownload = (event) => {};

  const handleDownload = (event) => {
    const formattedDate = formatDate(event.event_id.date);

    const updatedCertData = {
      name: event.name,
      date: formattedDate,
      eventName: event.event_id.eventName,
      societyName: event.event_id.societyName,
    };

    setCertData(() => updatedCertData);
    setTimeout(() => {
      convertToPdf();
    }, 1000);
  };

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
                  if (!event_id) return null;
                  return (
                    <>
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{event_id?.eventName}</td>
                        <td>{event_id.societyName}</td>
                        <td>
                          {event.isCertified ? (
                            <button
                              onClick={() => handleDownload(event)}
                              className="bg-blue-500 py-2 px-4 rounded text-white"
                            >
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

      <div className="opacity-0 absolute top-0 -z-20">
        <Certificate {...certData} />
      </div>

      <Footer />
    </>
  );
}

export default Profile;
