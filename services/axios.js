import axios from "axios";

const _axios = axios.create({
  baseURL: "http://localhost:4040/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default _axios;
