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
  Select,
  Option,
} from "@material-tailwind/react";
import { CalendarDaysIcon, DocumentPlusIcon } from "@heroicons/react/24/solid";

export const AddApplication = ({ open, handleOpen }) => {
  return (
    <Dialog
      open={open}
      handler={handleOpen}
      size="xl"
      className="mt-10 h-full max-h-[90vh] px-20 shadow-none"
      style={{ background: "transparent" }}
    >
      <DialogBody>
        <Card className="h-full w-full">
          <CardHeader
            color="blue"
            floated={false}
            shadow={false}
            className="m-0 grid place-items-center rounded-b-none px-4 py-8 text-center"
          >
            <div className="mb-4 rounded-full border border-white/10 bg-white/10 p-6 text-white">
              <DocumentPlusIcon className="h-10 w-10" />
            </div>
            <Typography variant="h3" color="white">
              Addvertising Request Form
            </Typography>
          </CardHeader>

          <CardBody className="max-h-[50vh] w-full overflow-auto px-10">
            <form className="mt-4">
              <div className="mt-5 flex w-full items-center gap-4">
                <Input size="lg" label="First Name" />
                <Input size="lg" label="Last Name" />
              </div>

              <div className="mt-5 flex w-full items-center gap-4">
                <Input size="lg" label="Enter your Email Address" />
                <Input size="lg" label="Enter your Mobile Number" />
              </div>

              <div className="mt-5 flex w-full items-center gap-4">
                <Input size="lg" label="Enter your district" />
                <Input size="lg" label="Enter your city" />
              </div>

              <div className="mt-5">
                <Input
                  size="lg"
                  className="w-full"
                  label="Enter your address"
                />
              </div>

              <div className="mt-5">
                <Input
                  size="lg"
                  className="w-full"
                  label="Give a brief description about you"
                />
              </div>

              <div className="mt-5 flex w-full items-center gap-4">
                <Input
                  size="lg"
                  className="w-full"
                  label="Enter the Title of your service"
                />
                <Input
                  size="lg"
                  className="w-full"
                  label="Give your available date"
                  containerProps={{ className: "min-w-[72px]" }}
                  icon={
                    <CalendarDaysIcon className="h-5 w-5 text-blue-gray-300" />
                  }
                />
              </div>

              <div className="mt-5">
                <Typography variant="paragraph">Advertisement Type:</Typography>
                <div className="ml-10 flex flex-col">
                  <Radio
                    id="html"
                    name="type"
                    label="Ad placement - LKR.500"
                    defaultChecked
                  />
                  <Radio
                    id="react"
                    name="type"
                    label="Product / Service review - LKR.550"
                  />
                  <Radio
                    id="react"
                    name="type"
                    label="Category link - LKR.600"
                  />
                  <Radio
                    id="react"
                    name="type"
                    label="Socail media campaign - LKR.650"
                  />
                  <Radio
                    id="react"
                    name="type"
                    label="YouTube video - LKR.700"
                  />
                </div>
              </div>

              <div className="mt-5">
                <Input
                  size="lg"
                  className="w-full"
                  label="Upload your lates photo"
                  type="file"
                />
              </div>
            </form>
          </CardBody>

          <CardFooter className="flex w-full items-center gap-5 px-10 pt-5">
            <Button
              variant="gradient"
              fullWidth
              onClick={handleOpen}
              size="lg"
              color="red"
            >
              Cancel
            </Button>
            <Button
              variant="gradient"
              fullWidth
              size="lg"
              color="green"
              disabled={true}
            >
              Apply
            </Button>
          </CardFooter>
        </Card>
      </DialogBody>
    </Dialog>
  );
};

export default AddApplication;
