"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axios.get("/api/auth/check-login", {
        withCredentials: true,
      });

      if (res.status !== 200) throw new Error("User not logged in");
      return res.data;
    },
    retry: false,
    onError: (error) => {
      console.error("Error:", error.message);
    },
  });
}
