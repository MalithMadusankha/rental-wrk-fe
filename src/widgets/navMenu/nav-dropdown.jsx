import React, { useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import {
  Typography,
  Button,
  Menu,
  MenuList,
  MenuItem,
  MenuHandler,
  Avatar,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { appRoutes } from "@/data";

export function NavDropdown({ children, childernClass, menu }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const userData = JSON.parse(sessionStorage.getItem("userData"));

  const handleClick = (url) => {
    setIsMenuOpen(false);
    if (url === appRoutes.profileRouts.logout) {
      sessionStorage.setItem("isLogged", false);
      navigate(url);
    } else {
      navigate({
        pathname: url,
        search: `?${createSearchParams({
          userID: userData.userID,
        })}`,
      });
    }
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="white"
          className={`flex items-center gap-1 py-0.5 pl-0.5 pr-2 lg:ml-auto ${childernClass}`}
        >
          {children}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {menu.length > 0 &&
          menu.map(({ label, icon, url }) => {
            return (
              <MenuItem
                key={label}
                onClick={() => handleClick(url)}
                className={`flex items-center gap-2 rounded ${
                  url === appRoutes.profileRouts.logout
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${
                    label === "Sign Out" ? "text-red-500" : ""
                  }`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={
                    url === appRoutes.profileRouts.logout ? "red" : "inherit"
                  }
                >
                  {label}
                </Typography>
              </MenuItem>
            );
          })}
      </MenuList>
    </Menu>
  );
}

export default NavDropdown;
