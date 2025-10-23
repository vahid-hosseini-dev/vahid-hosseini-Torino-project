"use client";

import { useContext, useState } from "react";
import AccountInfo from "../modules/profileModules/AccountInfo";
import PersonalInfo from "../modules/profileModules/PersonalInfo";
import ProfileInfo from "../modules/profileModules/ProfileInfo";
import Context from "@/context/Context";

function MyProfile() {
  const { phoneNumber } = useContext(Context);

  const [formData, setFormData] = useState({
    mobile: phoneNumber,
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
    <>
      <ProfileInfo formData={formData} setFormData={setFormData} />
      <PersonalInfo formData={formData} setFormData={setFormData} />
      <AccountInfo formData={formData} setFormData={setFormData} />
    </>
  );
}

export default MyProfile;
