import { store } from "@/store/store";
import axios from "./axios";
import { headers } from "next/dist/client/components/headers";

// const BASE_URL = "http://localhost:4040/api"

const userLoginUrl = "/admin/login";
const userRegisterUrl = "/admin/register";
const createEventUrl = "/user/event";
const getAdminEventsUrl = "/user/events";
const getAllEventsUrl = "/user/event";
const getSingleEventUrl = "/user/event/";
const updateEventUrl = "/user/event/";
const deleteEventUrl = "/user/event/";

const state = store.getState();

// ----------------------------- AUTHENTICATION ------------------------------------

export const userLogin = async (loginParams) => {
  try {
    const res = await axios.post(userLoginUrl, loginParams);
    const data = res.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const userRegister = async (registerParams) => {
  try {
    const res = await axios.post(userRegisterUrl, registerParams);
    const data = res.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

// ----------------------------- Admin Events -----------------------------

export const createEvent = async (createEventParams) => {
  const token = localStorage.getItem("accessToken");
  const headers = { Authorization: `Bearer ${token}` };

  const res = await axios.post(createEventUrl, createEventParams, {
    headers: headers,
  });
  const data = res.data;

  return data;
};

export const updateEvent = async (eventId, updateEventParams) => {
  const token = localStorage.getItem("accessToken");
  const headers = { Authorization: `Bearer ${token}` };

  const res = await axios.put(
    `${updateEventUrl + eventId}`,
    updateEventParams,
    {
      headers: headers,
    }
  );
  const data = res.data;

  return data;
};

// to get all events created by admin
export const getAdminEvents = async (apiHeaders) => {
  try {
    const headers = { Authorization: `Bearer ${apiHeaders}` };

    const res = await axios.get(getAdminEventsUrl, {
      headers: headers,
    });
    const data = res.data;
    return data;
  } catch (e) {
    throw e;
  }
};

export const getSingleAdminEvent = async (payload) => {
  const res = await axios.get(getSingleEventUrl + payload.eventId, {
    headers: {
      Authorization: `Bearer ${payload.token}`,
    },
  });
  const data = await res.data;

  return data;
};

// to delete event
export const deleteEvent = async (eventId, apiHeaders) => {
  const headers = { Authorization: `Bearer ${apiHeaders}` };

  const res = await axios.delete("/user/event/" + eventId, {
    headers: headers,
  });
  const data = res.data;

  return data;
};

// ----------------------------- USER EVENTS -----------------------------

// to register for event
export const registerEvent = async (url, registerEventParams) => {
  const res = await axios.post(
    `http://localhost:4040/api/event/register/` + url,
    registerEventParams,
    {
      headers: {
        Authorization: `Bearer ` + state.user.token,
      },
    }
  );
  const data = res.data;

  return data;
};

// to get details of registered users
export const getRegisteredUsers = async (url) => {
  const res = await axios.get(
    "http://localhost:4040/api/event/register/" + url,
    {
      headers: {
        Authorization: "Bearer " + state.user.token,
      },
    }
  );
  const data = res.data;

  return data;
};

// to get all events
export const getAllEvents = async () => {
  const res = await axios.get(getAllEventsUrl);
  const data = res.data;

  return data;
};

// to get a single event
export const getSingleEvent = async (eventId) => {
  const res = await axios.get(getSingleEventUrl + eventId, {
    headers: {
      Authorization: `Bearer ` + state.user.token,
    },
  });
  const data = res.data;

  return data;
};

// to give feedback
export const giveFeedback = async (feedbackParams) => {
  try {
    const res = await axios.post(`/users/feedback`, feedbackParams);
    const data = res.data;
    return data;
  } catch (error) {
    // Handle the error
    console.error("Error giving feedback:", error);
    throw error;
  }
};

export const getRegistrationByUserID = async () => {
  try {
    const res = await axios.get(
      "http://localhost:4040/api/event/registrations",
      {
        headers: {
          Authorization: "Bearer " + state.user.token,
        },
      }
    );
    const data = res.data;
    return data;
  } catch (error) {
    // Handle the error
    console.error("Error fetching events:", error);
    throw error;
  }
};

export const updateCertificateDetails = async (id, certified) => {
  try {
    const res = await axios.put(
      "http://localhost:4040/api/event/register/" + id,
      {
        isCertified: certified,
      },
      {
        headers: {
          Authorization: "Bearer " + state.user.token,
        },
      }
    );
    const data = res.data;
    return data;
  } catch (error) {
    // Handle the error
    console.error("Error fetching events:", error);
    throw error;
  }
};
