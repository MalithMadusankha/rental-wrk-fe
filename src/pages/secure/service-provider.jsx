import React, { Fragment, useState } from "react";
import { Typography } from "@material-tailwind/react";
import { Footer, LocationContainer } from "@/widgets/layout";
import { JobCard } from "@/widgets/cards";
import { jobData, jobTypes } from "@/data";
import { JobApplication } from "@/widgets/diologs";

export const ServiceProviderPage = () => {
  const [open, setOpen] = useState(false);
  const [openedJobData, setOpenedJobData] = useState({});
  const handleOpen = () => setOpen(!open);

  const popularJobs = [];
  const paintJobs = [];

  jobData.forEach((job) => {
    if (job.isPopular) {
      popularJobs.push(job);
    }
    if (job.jobType === jobTypes.painter) {
      paintJobs.push(job);
    }
  });

  return (
    <>
      <div className="relative h-screen" style={{ height: "110px", background: "blue" }}>
        <div className="absolute top-0 h-full w-full bg-black/75" />
      </div>

      {popularJobs.length > 0 && (
        <section className="bg-black/50 px-4 pb-20 pt-20">
          <div className="container mx-auto">
            <Typography
              variant="h3"
              className="text-center font-bold"
              color="blue-gray"
            >
              Popular Rental Jobs
            </Typography>
            <div className="mt-16 grid grid-cols-1 gap-5 gap-x-24 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {popularJobs.map(
                ({ jobID, title, desc, location, jobType, isPopular }) => (
                  <JobCard
                    jobID={jobID}
                    title={title}
                    desc={desc}
                    location={location}
                    jobType={jobType}
                    isPopular={isPopular}
                    key={jobID}
                    handleOpen={handleOpen}
                    setOpenedJobData={setOpenedJobData}
                  />
                )
              )}
            </div>
          </div>
        </section>
      )}

      <section className="bg-black/10 px-4 pb-20 pt-20">
        <div className="container m-auto">
          <LocationContainer isCustomer={false} />
        </div>
      </section>

      {paintJobs.length > 0 && (
        <section className="bg-black/25 px-4 pb-20 pt-20">
          <div className="container mx-auto">
            <Typography
              variant="h3"
              className="text-center font-bold"
              color="blue-gray"
            >
              Paint Jobs
            </Typography>
            <div className="mt-16 grid grid-cols-1 gap-5 gap-x-24 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {paintJobs.map(
                ({ jobID, title, desc, location, jobType, isPopular }) => (
                  <JobCard
                    jobID={jobID}
                    title={title}
                    desc={desc}
                    location={location}
                    jobType={jobType}
                    isPopular={isPopular}
                    key={jobID}
                    handleOpen={handleOpen}
                    setOpenedJobData={setOpenedJobData}
                  />
                )
              )}
            </div>
          </div>
        </section>
      )}

      <Footer />

      <Fragment>
        <JobApplication
          open={open}
          handleOpen={handleOpen}
          jobData={openedJobData}
        />
      </Fragment>
    </>
  );
};

export default ServiceProviderPage;
