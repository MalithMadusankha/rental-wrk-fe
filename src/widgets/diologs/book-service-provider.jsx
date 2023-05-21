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

export const BookServiceProvider = ({
  open,
  handleOpen,
  serviceProviderData,
}) => {
  return (
    <Dialog
      open={open}
      handler={handleOpen}
      size="xl"
      className="flex h-full items-center justify-center py-20 px-10 sm:px-40 md:px-60 lg:px-80 shadow-none"
      style={{ background: "transparent" }}
    >
      <DialogBody className="h-full">
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

          <CardBody>
            <div className="flex w-full items-center justify-center gap-4">
              <Radio
                id="html"
                name="type"
                label="Need one-day service"
                defaultChecked
              />
              <Radio id="react" name="type" label="Need more than one-day" />
            </div>

            <Typography variant="paragraph">Service Provider Name:</Typography>
            <Input
              size="lg"
              value={serviceProviderData.name}
              disabled
              className="w-full"
            />

            <Typography variant="paragraph" className="mt-2">
              Service Provider ID:
            </Typography>
            <Input
              size="lg"
              value={serviceProviderData.userID}
              disabled
              className="w-full"
            />

            <Typography variant="paragraph" className="mt-2">
              Contact Number:
            </Typography>
            <Input
              size="lg"
              value={serviceProviderData.mobile}
              disabled
              className="w-full"
            />

            <div className="mt-5 flex w-full items-center gap-4">
              <Input
                label="Job Start Date"
                containerProps={{ className: "min-w-[72px]" }}
                icon={
                  <CalendarDaysIcon className="h-5 w-5 text-blue-gray-300" />
                }
              />
              <Input
                label="Job Start Time"
                containerProps={{ className: "min-w-[72px]" }}
                icon={<ClockIcon className="h-5 w-5 text-blue-gray-300" />}
              />
            </div>

            <div className="mt-5 flex w-full items-center gap-4">
              <Input
                label="Job End Date"
                containerProps={{ className: "min-w-[72px]" }}
                icon={
                  <CalendarDaysIcon className="h-5 w-5 text-blue-gray-300" />
                }
              />
              <Input
                label="Job End Time"
                containerProps={{ className: "min-w-[72px]" }}
                icon={<ClockIcon className="h-5 w-5 text-blue-gray-300" />}
              />
            </div>
          </CardBody>

          <CardFooter className="flex w-full items-center gap-5 pt-5">
            <Button
              variant="gradient"
              fullWidth
              onClick={handleOpen}
              size="lg"
              color="red"
            >
              Cancel
            </Button>
            <Button variant="gradient" fullWidth size="lg" color="green">
              Next
            </Button>
          </CardFooter>
        </Card>
      </DialogBody>
    </Dialog>
  );
};

export default BookServiceProvider;
