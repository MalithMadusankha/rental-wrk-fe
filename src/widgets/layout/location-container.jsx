import React from "react";
import {
  Card,
  CardBody,
  Button,
  Input,
  Select,
  Option,
  Radio,
} from "@material-tailwind/react";

export const LocationContainer = ({ isCustomer }) => {
  return (
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

            {!isCustomer && (
              <div className="flex gap-10">
                <Radio id="html" name="type" label="Indoor" defaultChecked />
                <Radio id="react" name="type" label="Outdoor" />
              </div>
            )}
            
            <Button size="lg" className="mt-8 w-full">
              {isCustomer ? "Search" : "Search Jobs"}
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
  );
};

export default LocationContainer;
