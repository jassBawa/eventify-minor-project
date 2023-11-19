import Events from "@/components/Events/Events";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function SocietyProfile() {
  const router = useRouter();
  const societyName = router.query.societyName;

  const [events, setEvents] = useState(null);
  console.log(societyName);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsRes = await axios.get(
          `http://localhost:4040/api/user/event/society/${societyName}`
        );
        console.log(eventsRes.data);
        setEvents(eventsRes.data); // Assuming eventsRes.data is an array of events
      } catch (error) {
        console.error("Error fetching events:", error);
        // Handle the error, show a message, or set a default value for events
      }
    };

    fetchEvents();
  }, [societyName]); // Add societyName as a dependency to re-run the effect when it changes
  if (!events) return;

  return (
    <main className="container mx-auto">
      <h2 className="text-5xl mb-8 font-bold text-gray-900 mt-16 ">
        {societyName}
      </h2>

      <Events events={events} />
      {/* </div> */}
    </main>
  );
}

export default SocietyProfile;
