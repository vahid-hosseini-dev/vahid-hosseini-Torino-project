"use client";

import { createContext, useState } from "react";

const Context = createContext();

export const UserProvider = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [step, setStep] = useState("login");

  return (
    <Context.Provider value={{ phoneNumber, setPhoneNumber, step, setStep }}>
      {children}
    </Context.Provider>
  );
};
export default Context;
