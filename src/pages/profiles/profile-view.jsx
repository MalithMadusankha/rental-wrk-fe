import { Fragment, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Footer, ProfileDataContainer } from "@/widgets/layout";
import { serviceProviderData } from "@/data";
import BookServiceProvider from "@/widgets/diologs/book-service-provider";

export const ProfileView = () => {
  const [searchParams] = useSearchParams("");
  const serviceProviderID = searchParams.get("userID");
  const filteredData = serviceProviderData.find(
    (user) => user.userID === serviceProviderID
  );

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <section
        className="relative block h-[50vh]"
        style={{ background: "blue" }}
      >
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>

      <ProfileDataContainer
        userData={filteredData}
        isCustomer={false}
        isMe={false}
      />

      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>

      <Fragment>
        <BookServiceProvider
          open={open}
          handleOpen={handleOpen}
          serviceProviderData={filteredData}
        />
      </Fragment>
    </>
  );
};

export default ProfileView;
