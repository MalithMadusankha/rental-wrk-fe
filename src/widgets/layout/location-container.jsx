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
import { LocationCard } from "../cards";

export const LocationContainer = ({ isCustomer }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      <Card className="h-full w-full md:max-w-[25%] lg:max-w-[30%]">
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

      <div className="h-full w-full md:max-w-[70%] lg:max-w-[65%]">
        <LocationCard city="Kandy" location={[]} isListView={false} />
      </div>
    </div>
  );
};

export default LocationContainer;
