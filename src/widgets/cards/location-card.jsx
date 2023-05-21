import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";

export const LocationCard = ({ city, location, isListView }) => {
  return (
    <Card className={isListView ? "w-96" : "w-full"}>
      <CardHeader shadow={false} floated={false} className="h-96 mb-4">
        <div className="h-full w-full">
          <div className="mapouter h-full">
            <div className="gmap_canvas h-full">
              <iframe
                className="gmap_iframe h-full"
                style={{
                  width: "100%",
                  frameborder: "0",
                  scrolling: "no",
                  marginHeight: "0",
                  marginWidth: "0",
                }}
                src="https://maps.google.com/maps?width=1151&amp;height=432&amp;hl=en&amp;q=Kotalugodathenna,Niyadurupola,Warakapola,sri lanka&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              />
            </div>
          </div>
        </div>
      </CardHeader>
      {isListView && (
        <>
          <CardBody className="py-0 text-center">
            <Typography color="blue-gray" className="font-medium">
              {city}
            </Typography>
          </CardBody>
          <CardFooter className="pt-3">
            <Button ripple={false} fullWidth={true}>
              View
            </Button>
          </CardFooter>
        </>
      )}
    </Card>
  );
};

export default LocationCard;
