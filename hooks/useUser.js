"use client";
import { useQuery } from "@tanstack/react-query";

export function useUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch("/api/auth/check-login", {
        credentials: "include",
      });
      if (!res.ok) throw new Error("User not logged in");
      return res.json();
    },
    retry: false,
  });
}
