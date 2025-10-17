"use client";

import Tabs from "@/components/modules/Tabs";
import MyTours from "@/components/templates/MyTours";
import MyProfile from "@/components/templates/Profile";
import Transaction from "@/components/templates/Transaction";
import { useState } from "react";

function Profile() {
  const [currentComponent, setCurrentComponent] = useState("profile");

  const renderComponent = () => {
    switch (currentComponent) {
      case "profile":
        return <MyProfile />;

      case "myTours":
        return <MyTours />;

      case "transaction":
        return <Transaction />;
      default:
        return <MyProfile />;
    }
  };

  return (
    <>
      <Tabs setCurrentComponent={setCurrentComponent} />
      <div className="mt-12 mb-5 ">{renderComponent()}</div>
    </>
  );
}

export default Profile;
