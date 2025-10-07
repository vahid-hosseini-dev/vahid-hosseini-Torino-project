"use client";

import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <UserContext.Provider value={{ phoneNumber, setPhoneNumber }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
