import React from "react";
import { Card, CardBody, Button, IconButton } from "@material-tailwind/react";
import { SimpleFooter } from "@/widgets/layout";
import { StarIcon } from "@heroicons/react/24/solid";
import { userType } from "@/data";

export function SignUpType() {
  const UserTypeCard = ({ color, icon, type }) => {
    return (
      <Card className="rounded-2xl shadow-lg shadow-gray-500/10">
        <CardBody className="px-8 text-center">
          <IconButton
            variant="gradient"
            size="lg"
            color={color}
            className="pointer-events-none mb-6 rounded-full"
          >
            {icon}
          </IconButton>
          <a
            href={
              type === userType.customer
                ? "/sign-up-customer"
                : "/sign-up-worker"
            }
          >
            <Button color={color} variant="gradient" size="lg" fullWidth>
              I'm a {type}
            </Button>
          </a>
        </CardBody>
      </Card>
    );
  };

  return (
    <>
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <div className="absolute left-2/4 top-2/4 w-full max-w-[24rem] -translate-x-2/4 -translate-y-2/4">
          <div>
            <UserTypeCard
              color="blue"
              type={userType.customer}
              icon={React.createElement(StarIcon, {
                className: "w-5 h-5 text-white",
              })}
            />
          </div>
          <div className="mt-10">
            <UserTypeCard
              color="green"
              type={userType.worker}
              icon={React.createElement(StarIcon, {
                className: "w-5 h-5 text-white",
              })}
            />
          </div>
        </div>
      </div>
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  );
}

export default SignUpType;
