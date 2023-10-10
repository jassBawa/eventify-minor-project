import EventCard from "@/components/Events/EventCard";
import Navbar from "@/components/layout/Navbar";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const SocietyPage = ({ society }) => {
  const router = useRouter();
  const { name } = router.query;
  //   const [society, setSociety] = useState({});

  //   const fetchSociety = async () => {
  //     const data = await axios.get(
  //       "http://localhost:4040/api/user/events/" + societyId
  //     );

  //     return await data.data;
  //   };

  //   useEffect(() => {
  //     const societyData = fetchSociety();
  //     setSociety(societyData);
  //   }, [societyId]);

  return (
    <>
      <Navbar />
      <div className="py-12 px-6 min-h-screen bg-base-200">
        <div className=" block ">
          <img
            src="/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{name}!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link href="/" className="btn btn-primary">
              Visit Home!
            </Link>
          </div>
        </div>
        <div className=" container mt-16">
          <h3 className="text-3xl pl-12 font-semibold">Events by Society</h3>
          <div className="flex mt-4 gap-4 justify-center flex-wrap">
            {society?.map((event, _) => (
              <div key={_} className="max-w-lg w-full">
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SocietyPage;

export const getServerSideProps = async (context) => {
  const { societyId } = context.query;

  const res = await axios.get(
    "http://localhost:4040/api/user/events/" + societyId
  );
  const data = await res.data;

  return {
    props: {
      society: data,
    },
  };
};
