import axios from "axios";

const adminLoginUrl = 'http://localhost:4040/api/admin/login';
const createEventUrl = 'http://localhost:4040/api/user/event';

export const adminLogin = async (loginParams) => {
    const res = await axios.post(adminLoginUrl, loginParams)
    const data = res.data;

    return data;
}

export const createEvent = async (createEventParams) => {
    const token = localStorage.getItem('accessToken');
    console.log(token)
    const headers = { 'Authorization': `Bearer ${token}` }

    const res = await axios.post(createEventUrl, createEventParams, {
        headers: headers
    })
    const data = res.data;

    return data;
}

