import React from "react";
import { Footer } from "@/widgets/layout";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import CustomerProfileEdit from "@/widgets/layout/customer-profile-edit";
import ServiceProviderProfileEdit from "@/widgets/layout/service-provider-profile-edit";

export const ProfileEdit = () => {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  const isCustomer = JSON.parse(sessionStorage.getItem("isCustomer"));

  return (
    <>
      <div
        className="relative h-screen"
        style={{ height: "110px", background: "blue" }}
      >
        <div className="absolute top-0 h-full w-full bg-black/75" />
      </div>
      <section
        className="relative flex h-[100vh] items-center justify-center bg-black/10 px-20 pb-20 pt-10"
        style={{ background: "blue" }}
      >
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <Card className="mx-40 h-full w-full">
          <CardHeader
            color="blue"
            floated={false}
            shadow={false}
            className="m-0 grid place-items-center rounded-b-none px-4 py-8 text-center"
          >
            <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-6 text-white">
              <WrenchScrewdriverIcon className="h-10 w-10" />
            </div>
            <Typography variant="h3" color="white">
              Edit Profile
            </Typography>
          </CardHeader>

          <CardBody className="max-h-[60vh] w-full overflow-auto px-10">
            {isCustomer ? (
              <CustomerProfileEdit userData={userData}/>
            ) : (
              <ServiceProviderProfileEdit userData={userData}/>
            )}
          </CardBody>

          <CardFooter className="flex w-full items-center gap-5 px-10 pt-5">
            <Button
              variant="gradient"
              fullWidth
              // onClick={handleOpen}
              size="lg"
              color="red"
            >
              Delete Profile
            </Button>
            <Button
              variant="gradient"
              fullWidth
              size="lg"
              color="green"
              disabled={true}
            >
              Update Profile
            </Button>
          </CardFooter>
        </Card>
      </section>
      <Footer />
    </>
  );
};

export default ProfileEdit;
