import axios from "axios";

const adminLoginUrl = 'http://localhost:4040/api/admin/login';
const createEventUrl = 'http://localhost:4040/api/user/event';
const getAdminEventsUrl = 'http://localhost:4040/api/user/events';
const getUserEventUrl = 'http://localhost:4040/api/user/event';


export const adminLogin = async (loginParams) => {
    const res = await axios.post(adminLoginUrl, loginParams)
    const data = res.data;

    return data;
}

export const createEvent = async (createEventParams) => {
    const token = localStorage.getItem('accessToken');
    const headers = { 'Authorization': `Bearer ${token}` }

    const res = await axios.post(createEventUrl, createEventParams, {
        headers: headers
    })
    const data = res.data;

    return data;
}

export const getUserEvent = async (userEventParams) => {
    const res = await axios.get(`http://localhost:4040/api/user/event/${userEventParams}`)
    const data = res.data;

    return data;
}


export const getAdminEvents = async (apiHeaders) => {



    const headers = { 'Authorization': `Bearer ${apiHeaders}` }

    const res = await axios.get(getAdminEventsUrl, {
        headers: headers
    })
    const data = res.data;

    return data;
}


export const registerEvent = async (registerEventParams) => {
    const res = await axios.post(`http://localhost:4040/api/event/register`, registerEventParams)
    const data = res.data;

    return data;
}

