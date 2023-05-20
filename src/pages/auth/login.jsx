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
  IconButton,
} from "@material-tailwind/react";
import { SimpleFooter } from "@/widgets/layout";
import { appRoutes } from "@/data";

export function Login() {
  const [showPw, setShowPw] = useState(false);
  const [isCustomer, setIsCustomer] = useState(true);

  const navigate = useNavigate();

  const handleLogin = () => {
    sessionStorage.setItem("isLogged", true);
    if (isCustomer) {
      sessionStorage.setItem('isCustomer', true);
      setIsCustomer(true);
      navigate(appRoutes.secureRouts.appType);
    } else {
      sessionStorage.setItem('isCustomer', false);
      setIsCustomer(false);
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
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Login
            </Typography>
          </CardHeader>

          <CardBody className="flex flex-col gap-4">
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
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>

          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth onClick={handleLogin}>
              Login
            </Button>
            <Typography variant="small" className="mt-1 flex justify-center">
              I forgot my password :(
              <Link to={appRoutes.authRouts.signUp}>
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Reset password
                </Typography>
              </Link>
            </Typography>

            <Typography variant="small" className="mt-3 flex justify-center">
              or Sign In with
            </Typography>
            <div className="mt-2 flex justify-center gap-3">
              <Button
                size="lg"
                variant="outlined"
                color="blue-gray"
                className="flex items-center gap-3"
              >
                <i className="fa-brands fa-google" style={{ color: "red" }} />
                Google
              </Button>
              <Button
                size="lg"
                variant="outlined"
                color="blue-gray"
                className="flex items-center gap-3"
              >
                <i
                  className="fa-brands fa-facebook"
                  style={{ color: "blue" }}
                />
                Facebook
              </Button>
            </div>

            <Typography variant="small" className="mt-2 flex justify-center">
              Don't have an account?
              <Link to={appRoutes.authRouts.signUp}>
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign up
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

export default Login;
