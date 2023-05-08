import axios from "axios";

const adminLoginUrl = 'http://localhost:4040/api/admin/login';

export const adminLogin = async (loginParams) => {
    const res = await axios.post(adminLoginUrl, loginParams)
    const data = res.data;

    return data;
}