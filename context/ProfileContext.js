"use client"

import { createContext, useState } from "react";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    mobile: "",
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    nationalCode: "",
    payment: {
      shaba_code: "",
      debitCard_code: "",
      accountIdentifier: "",
    },
  });

  return (
    <ProfileContext.Provider value={{ formData, setFormData }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
