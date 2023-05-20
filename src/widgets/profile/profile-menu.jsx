import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Menu,
  MenuList,
  MenuItem,
  MenuHandler,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  PowerIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { appRoutes } from "@/data";

const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    url: appRoutes.profileRouts.myProfile,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
    url: appRoutes.profileRouts.editProfile,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
    url: appRoutes.profileRouts.inbox,
  },
  {
    label: "Log Out",
    icon: PowerIcon,
    url: appRoutes.profileRouts.logout,
  },
];

export function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleClick = (url) => {
    setIsMenuOpen(false);
    if (url === appRoutes.profileRouts.logout) {
      sessionStorage.setItem("isLogged", false);
      navigate(url);
    }
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="white"
          className="flex items-center gap-1 rounded-full py-0.5 pl-0.5 pr-2 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="candice wu"
            className="border border-blue-500 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, url }) => {
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

export default ProfileMenu;
