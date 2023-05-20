import React from "react";
import { Typography } from "@material-tailwind/react";
import { Footer, LocationContainer } from "@/widgets/layout";
import { PersonCard } from "@/widgets/cards";
import { serviceProviderData } from "@/data";

export function CustomerPage() {
  return (
    <>
      <div
        className="relative flex h-screen content-center items-center justify-center pb-32 pt-16"
        style={{ height: "65vh" }}
      >
        <div className="absolute top-0 h-full w-full bg-black/50" />
        <div className="max-w-8xl container relative m-auto">
          <LocationContainer isCustomer={true} />
        </div>
      </div>

      <section className="px-4 pb-20 pt-20">
        <div className="container mx-auto">
          <Typography
            variant="h3"
            className="text-center font-bold"
            color="blue-gray"
          >
            Service Providers
          </Typography>
          <div className="mt-16 grid grid-cols-1 gap-5 gap-x-24 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {serviceProviderData.map(({ userID, img, name }) => (
              <PersonCard id={userID} img={img} name={name} key={userID} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default CustomerPage;
