import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 5000,
  headers: {
    Authorization: "Bearer YOUR_TOKEN_HERE",
    "Content-Type": "application/json",
  },
});

export default api;
