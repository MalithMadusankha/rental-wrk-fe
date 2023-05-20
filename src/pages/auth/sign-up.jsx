import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { SimpleFooter } from "@/widgets/layout";
import { appRoutes, userData, userType } from "@/data";

export function SignUp({ type }) {
  const [showPw, setShowPw] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = () => {
    sessionStorage.setItem("isLogged", true);
    sessionStorage.setItem("userData", JSON.stringify(userData));
    if (type === userType.customer) {
      sessionStorage.setItem("isCustomer", true);
      navigate(appRoutes.secureRouts.appType);
    } else {
      sessionStorage.setItem("isCustomer", false);
      navigate(appRoutes.secureRouts.serviceProvider);
    }
  };

  return (
    <>
      <img
        src="/img/background-2.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute left-2/4 top-2/4 w-full max-w-[24rem] -translate-x-2/4 -translate-y-2/4">
          <CardHeader
            variant="gradient"
            color={type === userType.customer ? "blue" : "green"}
            className="mb-4 grid h-28 place-items-center"
          >
            <div className="text-center">
              <Typography variant="h5" color="white">
                {type}
              </Typography>
              <Typography variant="h3" color="white">
                Sign Up
              </Typography>
            </div>
          </CardHeader>

          <CardBody className="flex flex-col gap-4">
            <Input variant="standard" label="Name" size="lg" />
            <Input variant="standard" type="email" label="Email" size="lg" />
            <Input
              variant="standard"
              type="password"
              label="Password"
              size="lg"
              icon={
                showPw ? (
                  <i className="fas fa-eye" onClick={() => setShowPw(false)} />
                ) : (
                  <i
                    className="fas fa-eye-slash"
                    onClick={() => setShowPw(true)}
                  />
                )
              }
            />
            <Input
              variant="standard"
              type="password"
              label="Confirm password"
              size="lg"
              icon={
                showPw ? (
                  <i className="fas fa-eye" onClick={() => setShowPw(false)} />
                ) : (
                  <i
                    className="fas fa-eye-slash"
                    onClick={() => setShowPw(true)}
                  />
                )
              }
            />
            <div className="-ml-2.5">
              <Checkbox label="I agree the Terms and Conditions" />
            </div>
          </CardBody>

          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              fullWidth
              color={type === userType.customer ? "blue" : "green"}
              onClick={handleSignUp}
            >
              Create Account
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to={appRoutes.authRouts.login}>
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Login
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  );
}

export default SignUp;
