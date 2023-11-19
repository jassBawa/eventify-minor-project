import Events from "@/components/Events/Events";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function CategoryPage() {
  const router = useRouter();
  const categoryName = router.query.categoryName;

  const [events, setEvents] = useState(null);
  console.log(categoryName);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsRes = await axios.get(
          `http://localhost:4040/api/user/event/category/${categoryName}`
        );
        console.log(eventsRes.data);
        setEvents(eventsRes.data); // Assuming eventsRes.data is an array of events
      } catch (error) {
        console.error("Error fetching events:", error);
        // Handle the error, show a message, or set a default value for events
      }
    };

    fetchEvents();
  }, [categoryName]); // Add societyName as a dependency to re-run the effect when it changes
  if (!events) return;

  return (
    <main className="container mx-auto">
      <h2 className="text-5xl mb-8 font-bold text-gray-900 mt-16 ">
        {categoryName}
      </h2>

      <Events events={events} />
      {/* </div> */}
    </main>
  );
}

export default CategoryPage;
