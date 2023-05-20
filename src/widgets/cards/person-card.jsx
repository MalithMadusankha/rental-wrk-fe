import React from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import {
  Card,
  Avatar,
  Typography,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
import { appRoutes } from "@/data";

export const PersonCard = ({ id, img, name }) => {
  const navigate = useNavigate();

  const handleView = () => {
    navigate({
      pathname: appRoutes.profileRouts.myProfile,
      search: `?${createSearchParams({
        userID: id,
      })}`,
    });
  };

  return (
    <Card shadow={false} className="bg-black/10 text-center">
      <CardHeader floated={false} className="h-80">
        <Avatar
          src={img}
          alt={name}
          size="xxl"
          className="h-full w-full shadow-lg shadow-gray-500/25"
        />
      </CardHeader>

      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {name}
        </Typography>
      </CardBody>
      <CardFooter className="pt-3">
        <Button size="lg" fullWidth={true} onClick={handleView}>
          View
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PersonCard;
