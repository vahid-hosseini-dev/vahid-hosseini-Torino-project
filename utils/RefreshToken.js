import api from "@/services/config";
import Cookies from "js-cookie";

export const refreshAccessToken = async () => {
  try {
    const refreshToken = Cookies.get("refreshToken");

    if (!refreshToken) {
      console.error("Refresh token not available");
      return null;
    }

    const response = await api.post("/auth/refresh-token", {
      refreshToken,
    });
    const newAccessToken = response.data.accessToken;

    Cookies.set("accessToken", newAccessToken);

    return newAccessToken;
  } catch (error) {
    console.error("Failed to refresh access token:", error);
    return null;
  }
};
