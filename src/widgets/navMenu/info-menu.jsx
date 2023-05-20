import React from "react";
import { NavDropdown } from "@/widgets/navMenu";
import { Button } from "@material-tailwind/react";

export function InfoMenu({ infoNavList }) {
  const infoMenuItems = [];

  infoNavList.forEach((route) => {
    infoMenuItems.push({
      label: route.name,
      icon: route.icon,
      url: route.path,
    });
  });

  return (
    <NavDropdown menu={infoMenuItems} childernClass="font-normal capitalize p-3">
      Info Pages
    </NavDropdown>
  );
}

export default InfoMenu;
