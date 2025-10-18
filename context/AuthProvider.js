"use client";

import { useGetUserData } from "@/services/queries";
import { useRouter } from "next/router";
import { useEffect } from "react";

function AuthProvider({ children }) {
  const router = useRouter();
  const { data, isPending } = useGetUserData();

  useEffect(() => {
    if (!isPending && !data?.data) router.push("/");
  }, [isPending]);

  if (isPending) return <p>loading ... </p>;

  return <div>{children}</div>;
}
export default AuthProvider;
