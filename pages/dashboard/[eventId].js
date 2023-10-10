import { RegistrationIcon } from "@/assets/Icons";
import { PieChart } from "@/components/Dashboard/PieChart";
import VerticalBarChart from "@/components/Dashboard/VerticalBarChart";
import Navbar from "@/components/layout/Navbar";
import { getSingleAdminEvent } from "@/services/api";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function EventPage() {
  const router = useRouter();
  const { eventId } = router.query;
  const token = localStorage.getItem("accessToken");
  const [branch, setBranch] = useState({
    labels: [],
    branches: [],
  });
  const [year, setYear] = useState({
    labels: [],
    years: [],
  });

  const [event, setEvent] = useState({});

  console.log(event);

  const fetchEvent = async () => {
    const data = await getSingleAdminEvent({ eventId, token });
    setEvent(data);

    //
    const branchData = await axios.get(
      "http://localhost:4040/api/event/details/" + eventId
    );
    const yearData = await axios.get(
      "http://localhost:4040/api/event/year/" + eventId
    );

    const branchRes = await branchData.data;
    const yearRes = await yearData.data;

    const yearLabels = Object.keys(yearRes); // Extract keys as labels
    const yearDataset = Object.values(yearRes); // Extract values as dataset
    setYear({
      labels: yearLabels,
      years: yearDataset,
    });

    const labels = Object.keys(branchRes); // Extract keys as labels
    const dataset = Object.values(branchRes); // Extract values as dataset

    setBranch({
      labels: labels,
      branches: dataset,
    });
  };

  useEffect(() => {
    if (!token) router.push("/login");
    fetchEvent();
  }, [eventId, token, router]);

  return (
    <>
      <div className="bg-gray-100">
        <Head></Head>
        <div className="bg-gray-100 h-full">
          <Navbar />

          <main className="h-full bg-gray-100 py-6 px-16 ">
            {/* Details */}
            <section className="relative flex  justify-between container mx-auto mt-8">
              <div className="event__container">
                <img src={event.image} alt="" className="h-32" />
                <div className="py-6">
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    {event.eventName} Event
                  </h1>
                  <p className="text-gray-400 w-3/4">{event.description}</p>
                </div>
              </div>
              <div
                className={`relative max-w-md text-gray-200 bg-gradient-to-tr py-8 px-6 flex-1 rounded from-[#a8c0ff] to-[#3f2b96]`}
              >
                <RegistrationIcon className="h-20 w-20 absolute right-10" />
                <h4 className="">Total Registrations</h4>
                <p className="card__data mt-2 text-6xl text-white">
                  {/* {event.noOfRegistration} */}8
                </p>
                <p className="bottom__text mt-6">{event.category}</p>
              </div>
            </section>

            {/* Analysis Tab */}
            <section className="analysis mt-32">
              <h2 className="text-4xl font-semibold ">Analyse Your Event</h2>
              <div className="flex justify-between mt-14">
                <div className="max-w-3xl w-full">
                  <VerticalBarChart
                    labels={branch.labels}
                    dataset={branch.branches}
                  />
                </div>

                <div className="flex justify-center max-w-lg w-full -mt-16 ml-auto">
                  <PieChart labels={year.labels} dataset={year.years} />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default EventPage;
