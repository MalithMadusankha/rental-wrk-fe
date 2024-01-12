import React from "react";
import { Card, Typography } from "@material-tailwind/react";
import { addData } from "@/data";

export const AddContainer = () => {
  return (
    <div className="container mx-auto">
      <Typography
        variant="h3"
        className="mb-3 text-center font-bold"
        color="blue-gray"
      >
        Advertisements
      </Typography>
      <div className="mt-16 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-2">
        {addData.map(({ img, name }) => (
          <Card className="flex items-center gap-2 shadow-none" key={name}>
            <img alt={name} src={img} className="h-full w-full" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AddContainer;
