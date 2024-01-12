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
import { DocumentPlusIcon } from "@heroicons/react/24/solid";
import { jobTypes } from "@/data";

export const JobApplication = ({ handleOpen, open, jobData }) => {
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
              Apply for {jobData.title}
            </Typography>
          </CardHeader>

          <CardBody className="max-h-[50vh] w-full overflow-auto px-10">
            <form className="mt-4">
              <div className="mt-5 flex w-full items-center gap-4">
                <Input size="lg" label="First Name" />
                <Input size="lg" label="Last Name" />
              </div>

              <div className="mt-3 flex w-full items-center gap-4">
                <Typography variant="paragraph">Gender:</Typography>
                <Radio id="html" name="type" label="Male" />
                <Radio id="react" name="type" label="Female" />
              </div>

              <div className="mt-3 flex w-full items-center gap-4">
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
                <Input size="lg" className="w-full" label="Enter Job Title" />
              </div>

              <div className="mt-5">
                <Input
                  size="lg"
                  className="w-full"
                  label="Enter your special skills"
                />
              </div>

              <div className="mt-5">
                <Input
                  size="lg"
                  className="w-full"
                  label="Describe your experience"
                />
              </div>

              <div className="mt-5">
                <Select label="Select Job Type">
                  <Option>{jobTypes.plumber}</Option>
                  <Option>{jobTypes.carPainter}</Option>
                  <Option>{jobTypes.electrician}</Option>
                  <Option>{jobTypes.painter}</Option>
                </Select>
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

export default JobApplication;
