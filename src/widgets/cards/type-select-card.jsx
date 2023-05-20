import { Card, CardBody, Button, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export const TypeSelectCard = ({ color, icon, type, href }) => {
  return (
    <Card className="rounded-2xl shadow-lg shadow-gray-500/10">
      <CardBody className="px-8 text-center">
        <IconButton
          variant="gradient"
          size="lg"
          color={color}
          className="pointer-events-none mb-6 rounded-full"
        >
          {icon}
        </IconButton>
        <Link to={href}>
          <Button color={color} variant="gradient" size="lg" fullWidth>
            {type}
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default TypeSelectCard;
