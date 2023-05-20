import React from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { PersonCard } from "@/widgets/cards";
import { serviceProviderData } from "@/data";

export function Customer() {
  return (
    <>
      <div
        className="relative flex h-screen content-center items-center justify-center pb-32 pt-16"
        style={{ height: "65vh" }}
      >
        <div className="absolute top-0 h-full w-full bg-black/50" />
        <div className="max-w-8xl container relative m-auto">
          <div className="mt-20 flex flex-wrap items-center justify-between gap-5">
            <Card className="h-full w-full md:max-w-[23%] lg:max-w-[28%]">
              <CardBody>
                <form className="mt-12 flex flex-col gap-4">
                  <div className="mb-5">
                    <Input
                      type="email"
                      variant="static"
                      label="Enter your location"
                      size="lg"
                    />
                  </div>

                  <Select label="Select Service" variant="static">
                    <Option> Service 1 </Option>
                    <Option> Service 2 </Option>
                    <Option> Service 3 </Option>
                  </Select>
                  <Button size="lg" className="mt-8 w-full">
                    Search
                  </Button>
                </form>
              </CardBody>
            </Card>

            <div className="h-full w-full md:max-w-[73%] lg:max-w-[68%]">
              <div className="mapouter h-full">
                <div className="gmap_canvas h-full">
                  <iframe
                    className="gmap_iframe h-full"
                    style={{
                      width: "100%",
                      frameborder: "0",
                      scrolling: "no",
                      marginHeight: "0",
                      marginWidth: "0",
                    }}
                    src="https://maps.google.com/maps?width=1151&amp;height=432&amp;hl=en&amp;q=Kotalugodathenna,Niyadurupola,Warakapola,sri lanka&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  />
                </div>
              </div>
            </div>
          </div>
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
            {serviceProviderData.map(({ img, name }) => (
              <PersonCard img={img} name={name} key={name} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Customer;
