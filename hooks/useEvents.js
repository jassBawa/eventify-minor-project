import { getAdminEvents } from "@/services/api";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useEvents = (showModal) => {
  const [events, setEvents] = useState([]);
  const token = useSelector((state) => state.user.token);

  const fetchEvents = async () => {
    try {
      const response = await getAdminEvents(token);

      setEvents(response);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  useEffect(() => {
    console.log("fetching events again");
    fetchEvents();
  }, [showModal]);

  return events;
};

export default useEvents;
