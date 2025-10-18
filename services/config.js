import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (req) => {
    const accessToken = Cookies.get("accessToken");
    if (accessToken) {
      req.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return req;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = Cookies.get("refreshToken");
      if (refreshToken) {
        try {
          const res = await api.post("/auth/refresh-token", {
            refreshToken,
          });

          Cookies.set("accessToken", res.data.accessToken);

          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${res.data.accessToken}`;
          return api(originalRequest);
        } catch (refreshError) {
          toast.error("توکن منقضی شده، لطفاً دوباره وارد شوید!");
          return Promise.reject(refreshError);
        }
      } else {
        toast.error("لطفاً دوباره وارد حساب خود شوید!");
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
