import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  Avatar,
  Typography,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";

export function PersonCard({ img, name }) {
  return (
    <Card shadow={false} className="text-center bg-black/10">
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
        <Button size="lg" fullWidth={true}>
          View
        </Button>
      </CardFooter>
    </Card>
  );
}

PersonCard.defaultProps = {
  position: "",
  socials: null,
};

PersonCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  socials: PropTypes.node,
};

PersonCard.displayName = "/src/widgets/layout/team-card.jsx";

export default PersonCard;
