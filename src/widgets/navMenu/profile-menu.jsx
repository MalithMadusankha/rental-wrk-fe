import React from "react";
import { Avatar } from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import { appRoutes } from "@/data";
import { NavDropdown } from "@/widgets/navMenu";

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
  return (
    <NavDropdown menu={profileMenuItems} childernClass="rounded-full">
      <Avatar
        variant="circular"
        size="sm"
        alt="candice wu"
        className="border border-blue-500 p-0.5"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
      />
    </NavDropdown>
  );
}

export default ProfileMenu;
