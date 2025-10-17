import Tabs from "@/components/modules/Tabs";
import MyTours from "@/components/templates/MyTours";
import MyProfile from "@/components/templates/Profile";
import Transaction from "@/components/templates/Transaction";
import React from "react";

function Profile() {
  return (
    <>
      <Tabs  />
      {/* <MyProfile /> */}
      {/* <MyTours /> */}
      <Transaction />
    </>
  );
}

export default Profile;
