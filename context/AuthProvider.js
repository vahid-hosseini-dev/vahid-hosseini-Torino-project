"use client";

import { useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import toast from "react-hot-toast";
import { useProfile } from "@/services/queries";
import Cookies from "js-cookie";

function AuthProvider({ children }) {
  const accessToken = Cookies.get("accessToken");
  const { data, isPending, isError } = useProfile(accessToken);

  useEffect(() => {
    if (!accessToken) {
      window.location.href = "/";
    }
  }, [accessToken]);

  useEffect(() => {
    if (!isPending && !data) {
      window.location.href = "/";
    }
  }, [data, isPending]);

  if (isPending) {
    return <ThreeDots />;
  }

  if (isError) {
    toast.error("لطفا دوباره لاگین کنید");
    return <p>لطفا دوباره لاگین کنید</p>;
  }

  return <div>{children}</div>;
}

export default AuthProvider;
