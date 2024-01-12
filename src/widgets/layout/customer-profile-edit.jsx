import React, { useState } from "react";
import { Input, Radio, Typography } from "@material-tailwind/react";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

const CustomerProfileEdit = ({ userData }) => {
  const [name, setname] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [mobile, setMobile] = useState(userData.mobile);
  const [district, setDistrict] = useState(userData.district);
  const [city, setCity] = useState(userData.city);
  const [address, setAddress] = useState(userData.address);

  return (
    <form className="mt-4">
      <div className="mt-5">
        <Input
          size="lg"
          className="w-full"
          label="Your Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
      </div>

      <div className="mt-5 flex w-full items-center gap-4">
        <Input
          size="lg"
          label="Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          size="lg"
          label="Your Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>

      <div className="mt-5 flex w-full items-center gap-4">
        <Input
          size="lg"
          label="Your district"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        />
        <Input
          size="lg"
          label="Your city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <div className="mt-5">
        <Input
          size="lg"
          className="w-full"
          label="Your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="mt-5">
        <Input
          size="lg"
          className="w-full"
          label="Date of Birth"
          containerProps={{ className: "min-w-[72px]" }}
          icon={<CalendarDaysIcon className="h-5 w-5 text-blue-gray-300" />}
        />
      </div>

      <div className="mt-3 flex w-full items-center gap-4">
        <Typography variant="paragraph">Gender:</Typography>
        <Radio id="html" name="type" label="Male" />
        <Radio id="react" name="type" label="Female" />
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
  );
};

export default CustomerProfileEdit;
