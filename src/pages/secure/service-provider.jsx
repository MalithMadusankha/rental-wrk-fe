import React from "react";
import { Typography } from "@material-tailwind/react";
import { Footer, LocationContainer } from "@/widgets/layout";
import { JobCard } from "@/widgets/cards";
import { jobData, jobTypes } from "@/data";

export const ServiceProviderPage = () => {
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
      <div className="relative h-screen" style={{ height: "110px" }}>
        <div className="absolute top-0 h-full w-full bg-black/75" />
      </div>

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
            {popularJobs.map(({ title, desc, location }) => (
              <JobCard
                title={title}
                desc={desc}
                location={location}
                key={title}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black/10 px-4 pb-20 pt-20">
        <div className="container m-auto">
          <LocationContainer isCustomer={false} />
        </div>
      </section>

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
            {paintJobs.map(({ title, desc, location }) => (
              <JobCard
                title={title}
                desc={desc}
                location={location}
                key={title}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServiceProviderPage;
