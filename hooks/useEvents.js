import { getAdminEvents } from "@/services/api";
import React, { useEffect, useState } from "react";

const useEvents = ({ showModal }) => {
  const [events, setEvents] = useState([]);

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

  return events;
};

export default useEvents;
