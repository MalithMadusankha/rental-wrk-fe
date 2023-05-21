import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  Typography,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Radio,
} from "@material-tailwind/react";
import { CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/solid";

const BookServiceProvider = ({ open, handleOpen, serviceProviderData }) => {
  return (
    <Dialog
      open={open}
      handler={handleOpen}
      size="xxl"
      className="px-15 flex h-full items-center justify-center py-20 sm:px-20 md:px-40 lg:px-60 xl:px-80"
      style={{ background: "darkgray" }}
    >
      <DialogBody className="h-full w-full">
        <Card>
          <CardHeader
            color="blue"
            floated={false}
            shadow={false}
            className="m-0 grid place-items-center rounded-b-none px-4 py-8 text-center"
          >
            <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-6 text-white">
              <CalendarDaysIcon className="h-10 w-10" />
            </div>
            <Typography variant="h3" color="white">
              Book your service provider
            </Typography>
          </CardHeader>

          <CardBody className="flex flex-col gap-4">
            <div className="flex w-full items-center gap-10">
              <Typography variant="paragraph" className="w-4/12">
                Get your service for:
              </Typography>
              <div className="flex w-full items-center gap-4">
                <Radio id="html" name="type" label="One day" defaultChecked />
                <Radio id="react" name="type" label="More than one day" />
              </div>
            </div>

            <div className="flex w-full items-center gap-10">
              <Typography variant="paragraph" className="w-4/12">
                Service Provider Name:
              </Typography>
              <Input
                size="lg"
                value={serviceProviderData.name}
                disabled
                className="w-full"
              />
            </div>

            <div className="flex w-full items-center gap-10">
              <Typography variant="paragraph" className="w-4/12">
                Service Provider ID:
              </Typography>
              <Input
                size="lg"
                value={serviceProviderData.userID}
                disabled
                className="w-full"
              />
            </div>

            <div className="flex w-full items-center gap-10">
              <Typography variant="paragraph" className="w-4/12">
                Contact Number:
              </Typography>
              <Input
                size="lg"
                value={serviceProviderData.mobile}
                disabled
                className="w-full"
              />
            </div>

            <div className="flex w-full items-center gap-10">
              <Typography variant="paragraph" className="w-4/12">
                Job Start Date:
              </Typography>
              <div className="flex w-full items-center gap-4">
                <Input
                  label="Date"
                  containerProps={{ className: "min-w-[72px]" }}
                  icon={
                    <CalendarDaysIcon className="h-5 w-5 text-blue-gray-300" />
                  }
                />
                <Input
                  label="Time"
                  containerProps={{ className: "min-w-[72px]" }}
                  icon={
                    <ClockIcon className="h-5 w-5 text-blue-gray-300" />
                  }
                />
              </div>
            </div>

            <div className="flex w-full items-center gap-10">
              <Typography variant="paragraph" className="w-4/12">
                Job End Date:
              </Typography>
              <div className="flex w-full items-center gap-4">
                <Input
                  label="Date"
                  containerProps={{ className: "min-w-[72px]" }}
                  icon={
                    <CalendarDaysIcon className="h-5 w-5 text-blue-gray-300" />
                  }
                />
                <Input
                  label="Time"
                  containerProps={{ className: "min-w-[72px]" }}
                  icon={
                    <ClockIcon className="h-5 w-5 text-blue-gray-300" />
                  }
                />
              </div>
            </div>
          </CardBody>
          <CardFooter className="pt-5">
            <Button variant="gradient" fullWidth onClick={handleOpen} size="lg">
              Next
            </Button>
          </CardFooter>
        </Card>
      </DialogBody>
    </Dialog>
  );
};

export default BookServiceProvider;
