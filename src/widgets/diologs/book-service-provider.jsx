import React, { useState } from "react";
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
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  CalendarDaysIcon,
  ClockIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import { LocationCard } from "../cards";
import { appRoutes } from "@/data";

export const BookServiceProvider = ({
  open,
  handleOpen,
  serviceProviderData,
}) => {
  const userData = JSON.parse(sessionStorage.getItem("userData"));

  const [customerName, setcustomerName] = useState(
    userData ? userData.name : ""
  );
  const [customerMobile, setcustomerMobile] = useState(
    userData ? userData.mobile : ""
  );
  const [customerDistrict, setcustomerDistrict] = useState(
    userData ? userData.district : ""
  );
  const [customerCity, setcustomerCity] = useState(
    userData ? userData.city : ""
  );
  const [customerAddress, setcustomerAddress] = useState(
    userData ? userData.address : ""
  );

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
              <CalendarDaysIcon className="h-10 w-10" />
            </div>
            <Typography variant="h3" color="white">
              Book your service provider
            </Typography>
          </CardHeader>

          <CardBody className="w-full overflow-auto">
            <Tabs value="card" className="h-full">
              <TabsHeader className="relative z-0 ">
                <Tab value="card">Service Data</Tab>
                <Tab value="paypal">Customer Data</Tab>
              </TabsHeader>

              <TabsBody>
                <TabPanel value="card" className="p-0">
                  <form className="mt-4">
                    <div className="flex w-full items-center justify-between gap-4">
                      <div>
                        <Radio
                          id="html"
                          name="type"
                          label="Need one-day service"
                          defaultChecked
                        />
                        <Radio
                          id="react"
                          name="type"
                          label="Need more than one-day"
                        />
                      </div>
                      <Button
                        className="flex items-center p-2"
                        color="purple"
                        onClick={() => navigate(appRoutes.secureRouts.wheather)}
                      >
                        <SunIcon className="mr-2 h-5 w-5" /> Check Wheather
                      </Button>
                    </div>

                    <Typography variant="paragraph">
                      Service Provider Name:
                    </Typography>
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
                        size="lg"
                        label="Job Start Date"
                        containerProps={{ className: "min-w-[72px]" }}
                        icon={
                          <CalendarDaysIcon className="h-5 w-5 text-blue-gray-300" />
                        }
                      />
                      <Input
                        size="lg"
                        label="Job Start Time"
                        containerProps={{ className: "min-w-[72px]" }}
                        icon={
                          <ClockIcon className="h-5 w-5 text-blue-gray-300" />
                        }
                      />
                    </div>

                    <div className="mt-5 flex w-full items-center gap-4">
                      <Input
                        size="lg"
                        label="Job End Date"
                        containerProps={{ className: "min-w-[72px]" }}
                        icon={
                          <CalendarDaysIcon className="h-5 w-5 text-blue-gray-300" />
                        }
                      />
                      <Input
                        size="lg"
                        label="Job End Time"
                        containerProps={{ className: "min-w-[72px]" }}
                        icon={
                          <ClockIcon className="h-5 w-5 text-blue-gray-300" />
                        }
                      />
                    </div>
                  </form>
                </TabPanel>

                <TabPanel
                  value="paypal"
                  className="mt-3 max-h-[45vh] overflow-auto p-0 pr-4 pt-3"
                >
                  <form>
                    <Input
                      size="lg"
                      className="w-full"
                      label="Enter your name"
                      value={customerName}
                      onChange={(e) => setcustomerName(e.target.value)}
                    />

                    <div className="mt-5">
                      <Input
                        size="lg"
                        className="w-full"
                        label="Enter your contact no."
                        value={customerMobile}
                        onChange={(e) => setcustomerMobile(e.target.value)}
                      />
                    </div>

                    <div className="mt-5 flex w-full items-center gap-4">
                      <Input
                        size="lg"
                        label="Enter your district"
                        value={customerDistrict}
                        onChange={(e) => setcustomerDistrict(e.target.value)}
                      />
                      <Input
                        size="lg"
                        label="Enter your city"
                        value={customerCity}
                        onChange={(e) => setcustomerCity(e.target.value)}
                      />
                    </div>

                    <div className="mt-5">
                      <Input
                        size="lg"
                        className="w-full"
                        label="Enter your address"
                        value={customerAddress}
                        onChange={(e) => setcustomerAddress(e.target.value)}
                      />
                    </div>

                    <Typography variant="paragraph" className="mt-2">
                      Select your location:
                    </Typography>
                    <LocationCard
                      city="Kandy"
                      location={[]}
                      isListView={false}
                      className="m-0"
                    />

                    <div className="mt-5">
                      <Input
                        size="lg"
                        className="w-full"
                        label="Give description about your job"
                      />
                    </div>
                  </form>
                </TabPanel>
              </TabsBody>
            </Tabs>
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
            <Button
              variant="gradient"
              fullWidth
              size="lg"
              color="green"
              disabled={true}
            >
              Confirm Booking
            </Button>
          </CardFooter>
        </Card>
      </DialogBody>
    </Dialog>
  );
};

export default BookServiceProvider;
