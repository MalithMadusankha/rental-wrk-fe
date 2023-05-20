import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { BellIcon } from "@heroicons/react/24/solid";
import { secureRouts } from "@/routes";
import { appRoutes } from "@/data";
import { InfoMenu, ProfileMenu } from "@/widgets/navMenu";

export function Navbar({ brandName, routes }) {
  const [openNav, setOpenNav] = useState(false);
  const [isLoged, setIsLoged] = useState(
    JSON.parse(sessionStorage.getItem("isLogged"))
  );

  const commonNavList = [];
  const infoNavList = [];
  const secureNavList = [];

  const location = useLocation();
  const navigate = useNavigate();

  const secureURLs = [];
  secureRouts.forEach((route) => {
    secureURLs.push(route.path);
    if (route.path !== appRoutes.secureRouts.appType) {
      secureNavList.push(route);
    }
  });

  useEffect(() => {
    if (
      secureURLs.includes(location.pathname) &&
      !JSON.parse(sessionStorage.getItem("isLogged"))
    ) {
      navigate(appRoutes.publicRouts.home);
    }
    setIsLoged(JSON.parse(sessionStorage.getItem("isLogged")));
  }, [location]);

  routes.forEach((route) => {
    if (isLoged && route.isInfoRoute) {
      infoNavList.push(route);
    } else if (isLoged && !route.isInfoRoute) {
      commonNavList.push(route);
    }
  });

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const NavBtn = ({ name, path, target, icon }) => {
    return (
      <Typography
        key={name}
        as="li"
        variant="small"
        color="inherit"
        className="capitalize"
      >
        <Link
          to={path}
          target={target}
          className="flex items-center gap-1 p-1 font-normal"
        >
          {icon &&
            React.createElement(icon, {
              className: "w-[18px] h-[18px] opacity-75 mr-1",
            })}
          {name}
        </Link>
      </Typography>
    );
  };

  const NavList = ({ isMobile }) => {
    return (
      <ul className="mb-4 mt-2 flex flex-col gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        {!isLoged &&
          routes.map(({ name, path, icon, target }) => (
            <NavBtn
              key={name}
              name={name}
              path={path}
              icon={icon}
              target={target}
            />
          ))}
        {isLoged && (
          <>
            {commonNavList.map(({ name, path, icon, target }) => (
              <NavBtn
                key={name}
                name={name}
                path={path}
                icon={icon}
                target={target}
              />
            ))}
            {isMobile ? (
              infoNavList.map(({ name, path, icon, target }) => (
                <NavBtn
                  key={name}
                  name={name}
                  path={path}
                  icon={icon}
                  target={target}
                />
              ))
            ) : (
              <InfoMenu infoNavList={infoNavList} />
            )}
            {secureNavList.map(({ name, path, icon, target }) => (
              <NavBtn
                key={name}
                name={name}
                path={path}
                icon={icon}
                target={target}
              />
            ))}
          </>
        )}
      </ul>
    );
  };

  const LoginBtn = ({ isMobile }) => {
    return (
      <Link to={appRoutes.authRouts.login}>
        <Button
          variant="text"
          size="sm"
          color={isMobile ? "blue" : "white"}
          fullWidth
        >
          Login
        </Button>
      </Link>
    );
  };

  const SignInBtn = () => {
    return (
      <Link to={appRoutes.authRouts.signUp}>
        <Button variant="gradient" size="sm" fullWidth>
          Sign Up
        </Button>
      </Link>
    );
  };

  const ProfilePanel = () => {
    return (
      <div className="flex items-center">
        <IconButton
          variant="text"
          color="white"
          size="sm"
          className="mx-1 rounded-full"
        >
          <BellIcon className="h-5 w-5" />
        </IconButton>
        <ProfileMenu />
      </div>
    );
  };

  return (
    <MTNavbar color="transparent" className="p-3">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Link to="/">
          <Typography className="ml-2 mr-4 cursor-pointer py-1.5 font-bold">
            {brandName}
          </Typography>
        </Link>

        <div className="hidden lg:block">
          <NavList isMobile={false} />
        </div>

        <div className="hidden gap-2 lg:flex">
          {isLoged ? (
            <ProfilePanel />
          ) : (
            <>
              <LoginBtn isMobile={false} />
              <SignInBtn />
            </>
          )}
        </div>

        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      <MobileNav
        className="rounded-xl bg-white px-4 pb-4 pt-2 text-blue-gray-900"
        open={openNav}
      >
        <div className="container mx-auto">
          <NavList isMobile={true} />
          {isLoged ? (
            <ProfilePanel />
          ) : (
            <>
              <LoginBtn isMobile={true} />
              <SignInBtn />
            </>
          )}
        </div>
      </MobileNav>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  brandName: "RentMaster",
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
