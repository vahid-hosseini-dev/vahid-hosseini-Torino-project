"use client";

import AccountInfo from "../modules/profileModules/AccountInfo";
import PersonalInfo from "../modules/profileModules/PersonalInfo";
import ProfileInfo from "../modules/profileModules/ProfileInfo";
import MyTours from "./MyTours";

function MyProfile() {

  return (
    <>
      <ProfileInfo />
      <PersonalInfo />
      <AccountInfo />
    </>
  );
}

export default MyProfile;
