import axios from "axios";

const adminLoginUrl = "http://localhost:4040/api/admin/login";
const createEventUrl = "http://localhost:4040/api/user/event";
const getAdminEventsUrl = "http://localhost:4040/api/user/events";
const getAllEventsUrl = "http://localhost:4040/api/user/event";
const getSingleEventUrl = "http://localhost:4040/api/user/event/";

export const adminLogin = async (loginParams) => {
  const res = await axios.post(adminLoginUrl, loginParams);
  const data = res.data;

  return data;
};

export const createEvent = async (createEventParams) => {
  const token = localStorage.getItem("accessToken");
  const headers = { Authorization: `Bearer ${token}` };

  const res = await axios.post(createEventUrl, createEventParams, {
    headers: headers,
  });
  const data = res.data;

  return data;
};

export const getAllEvents = async () => {
  const res = await axios.get(getAllEventsUrl);
  const data = res.data;

  return data;
};

export const getSingleEvent = async (eventId) => {
  const res = await axios.get(getSingleEventUrl + eventId);
  const data = res.data;

  return data;
};

export const getAdminEvents = async (apiHeaders) => {
  const headers = { Authorization: `Bearer ${apiHeaders}` };

  const res = await axios.get(getAdminEventsUrl, {
    headers: headers,
  });
  const data = res.data;

  return data;
};

export const registerEvent = async (url, registerEventParams) => {
  const res = await axios.post(
    `http://localhost:4040/api/event/register/` + url,
    registerEventParams
  );
  const data = res.data;

  return data;
};

// to get details of registered users
export const getRegisteredUsers = async (url) => {
  const res = await axios.get(
    "http://localhost:4040/api/event/register/" + url
  );
  const data = res.data;

  return data;
};
