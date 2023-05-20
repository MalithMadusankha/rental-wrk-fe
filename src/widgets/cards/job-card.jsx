import React from "react";
import {
  Card,
  Typography,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";

export const JobCard = ({ title, desc, location }) => {
  return (
    <Card shadow={false} className="bg-black/50 text-center">
      <CardBody className="text-center">
        <Typography variant="h4" color="white" className="mb-2">
          {title}
        </Typography>
        <Typography color="blue" className="font-medium" textGradient>
          {location}
        </Typography>
        <Typography variant="small" color="white" className="mt-6 flex justify-center">
          {desc}
        </Typography>
      </CardBody>
      <CardFooter className="pt-3">
        <Button size="lg" fullWidth={true}>
          Apply
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
