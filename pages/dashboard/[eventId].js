import { RegistrationIcon } from "@/assets/Icons";
import { PieChart } from "@/components/Dashboard/PieChart";
import VerticalBarChart from "@/components/Dashboard/VerticalBarChart";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { getSingleAdminEvent, updateCertificateDetails } from "@/services/api";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

function EventPage() {
  const router = useRouter();
  const { eventId } = router.query;
  const token = useSelector((state) => state.user.token);

  const [branch, setBranch] = useState({
    labels: [],
    branches: [],
  });
  const [year, setYear] = useState({
    labels: [],
    years: [],
  });
  const [users, setUsers] = useState(null);
  const [event, setEvent] = useState({});

  const fetchEvent = async () => {
    const data = await getSingleAdminEvent({ eventId, token });
    setEvent(data[0]);

    //
    const branchData = await axios.get(
      "http://localhost:4040/api/event/details/" + eventId,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const yearData = await axios.get(
      "http://localhost:4040/api/event/year/" + eventId,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    const listOfUsers = await axios.get(
      "http://localhost:4040/api/event/register/" + eventId,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    const branchRes = await branchData.data;
    const yearRes = await yearData.data;
    const usersRes = await listOfUsers.data;

    let yearLabels = Object.keys(yearRes); // Extract keys as labels
    yearLabels = yearLabels.map((year) => year + " Year");

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

    setUsers(usersRes);
  };

  useEffect(() => {
    if (!token) router.push("/login");
    fetchEvent();
  }, [eventId, token, router]);

  if (!users) return null;

  const handleToggle = async (eventId, previousVal) => {
    const id = eventId.event_id + "/" + eventId.user_id;

    const userIndex = users.findIndex(
      (user) => user.user_id === eventId.user_id
    );

    console.log("userIndex", userIndex);

    // If the user is found, update the isCertified field
    if (userIndex !== -1) {
      const updatedUsers = [...users];
      updatedUsers[userIndex] = {
        ...updatedUsers[userIndex],
        isCertified: !updatedUsers[userIndex].isCertified,
      };

      // Update the state with the modified user array
      setUsers(updatedUsers);

      // Make your API call to update the server data
      // await updateCertificateDetails(userId, !updatedUsers[userIndex].isCertified);
      const res = await updateCertificateDetails(id, !previousVal);
    }
  };

  const handleCertifyAll = async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Assuming the token follows the Bearer token format
        },
      };

      const response = await axios.put(
        "http://localhost:4040/api/event/register/" + eventId,
        null, // No data being sent in the body for this request
        config // Include the authorization token in the request headers
      );

      console.log("Certifications for all users toggled:", response.data);
      toast.promise(
        // Promise that resolves after 2 seconds
        new Promise((resolve) => {
          setTimeout(() => {
            resolve("Successfully updated!");
          }, 2000); // Resolves after 2 seconds
        }),
        {
          loading: "Updating...", // Message while the promise is pending
          success: (message) => message, // Success message when the promise resolves
          duration: 2000, // Duration in milliseconds for the toast to automatically dismiss
        }
      );
      fetchEvent();
      // Optionally, you can perform actions after the certification toggle
    } catch (error) {
      console.error("Error toggling certifications for all users:", error);
      // Handle errors or show error messages to the user
    }
  };

  return (
    <>
      <div className="bg-gray-100">
        <Head></Head>
        <div className="bg-gray-100 h-full">
          <Navbar />

          <main className="h-full bg-gray-100 py-6 px-16 ">
            {/* Details */}
            <section className="relative flex flex-col gap-12  justify-between container mx-auto mt-8">
              <div className="event__container flex items-center gap-4">
                <img src={event?.image} alt="" className="max-h-64" />
                <div className="py-6">
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">
                    {event.eventName}
                  </h1>
                  <p className="text-gray-400 w-3/4 tracking-wide">
                    {event.description}
                  </p>
                </div>
              </div>
              <div
                className={`relative max-w-md text-gray-200 bg-gradient-to-tr py-8 px-6 flex-1 rounded from-[#a8c0ff] to-[#3f2b96]`}
              >
                <RegistrationIcon className="h-20 w-20 absolute right-10" />
                <h4 className="">Total Registrations</h4>
                <p className="card__data mt-2 text-6xl text-white">
                  {event.noOfRegistration}
                </p>
                <p className="bottom__text mt-6">{event.category}</p>
              </div>
            </section>

            {/* Analysis Tab */}
            <section className="analysis mt-32">
              <h2 className="text-5xl font-bold ">Event Analysis</h2>
              <div className="flex items-end justify-between mt-14">
                {/* Cards */}
                <div className="max-w-3xl w-full">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h2 className="text-xl font-semibold mb-4">Pie Charts</h2>
                      {/* Insert your pie charts component here */}
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h2 className="text-xl font-semibold mb-4">Bar Charts</h2>
                      {/* Insert your visual charts component here */}
                    </div>
                  </div>

                  {/* list  */}
                  <div className="my-8">
                    <h2 className="text-xl font-semibold mb-4">Key Insights</h2>
                    <ul className="list-disc list-inside">
                      <li className="mb-2">Demographic trends visualization</li>
                      <li className="mb-2">
                        Metrics breakdown for strategic planning
                      </li>
                      <li className="mb-2">
                        Interactive analysis for informed decisions
                      </li>
                      <li className="mb-2">
                        Comprehensive data representation
                      </li>
                    </ul>
                  </div>

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

            <section className="mt-24 relative">
              <h1 className="text-5xl font-semibold ">Registred users</h1>
              <button
                onClick={handleCertifyAll}
                className="btn btn-md btn-primary absolute right-16 top-2"
              >
                Certify All
              </button>
              <div className="mt-6 overflow-x-auto">
                <table className="border-separate border border-slate-400 w-full">
                  {/* head */}

                  <thead>
                    <tr>
                      <th className="border border-slate-300 ...">S. No.</th>
                      <th className="border border-slate-300 ...">Name</th>
                      <th className="border border-slate-300 ...">Email</th>
                      <th className="border border-slate-300 ...">Branch</th>
                      <th className="border border-slate-300 ...">
                        Certification
                      </th>
                    </tr>
                  </thead>
                  {!users?.length > 0 ? (
                    <h1 className="text-2xl my-2 font-semibold">
                      No one has registred for this event yet.
                    </h1>
                  ) : null}
                  <tbody>
                    {users?.map((user, i) => {
                      return (
                        <>
                          <tr className="border-b" key={i}>
                            <td className="border border-slate-300 text-center py-2">
                              {i + 1}
                            </td>
                            <td className="border border-slate-300 text-center py-2">
                              {user.name}
                            </td>
                            <td className="border border-slate-300 text-center py-2">
                              {user.email}
                            </td>
                            <td className="border border-slate-300 text-center py-2">
                              {user.branch}
                            </td>
                            <td className="border border-slate-300 text-center py-2">
                              <input
                                type="checkbox"
                                className="toggle toggle-success"
                                checked={user.isCertified}
                                onChange={() =>
                                  handleToggle(user, user.isCertified)
                                }
                              />
                            </td>
                          </tr>
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default EventPage;
