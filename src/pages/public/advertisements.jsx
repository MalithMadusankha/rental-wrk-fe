import React, { useState, Fragment } from "react";
import { AddContainer, Footer } from "@/widgets/layout";
import { Button } from "@material-tailwind/react";
import { AddApplication } from "@/widgets/diologs";

export const Advertisements = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <div className="relative h-screen" style={{ height: "110px", background: "blue" }}>
        <div className="absolute top-0 h-full w-full bg-black/75" />
      </div>
      <section className="relative flex min-h-[60vh] items-center justify-center bg-black/10 px-4 pb-20 pt-10">
        <div className="absolute right-10 top-10">
          <Button onClick={handleOpen}>Create New Addvertisement </Button>
        </div>
        <AddContainer />
      </section>
      <Footer />
      <Fragment>
        <AddApplication open={open} handleOpen={handleOpen} />
      </Fragment>
    </>
  );
};

export default Advertisements;
