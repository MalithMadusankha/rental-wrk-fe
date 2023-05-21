import React from "react";
import { Footer, ProfileDataContainer } from "@/widgets/layout";

export function Profile() {
  const isCustomer = JSON.parse(sessionStorage.getItem("isCustomer"));
  const userData = JSON.parse(sessionStorage.getItem("userData"));

  return (
    <>
      <section
        className="relative block h-[50vh]"
        style={{ background: "blue" }}
      >
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>

      <ProfileDataContainer
        userData={userData}
        isCustomer={isCustomer}
        isMe={true}
      />

      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Profile;
