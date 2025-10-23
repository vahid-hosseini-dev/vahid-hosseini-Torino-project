import AuthProvider from "@/context/AuthProvider";
import React from "react";

function ProfileLayout({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default ProfileLayout;
