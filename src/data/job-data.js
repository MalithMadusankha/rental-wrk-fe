export const jobTypes = {
    plumber: "Plumber",
    carPainter: "Car Painter",
    electrician: "Electrician",
    painter: "Painter",
};

export const workTypes = {
    temp: "Temporary",
    perm: "Permenent",
    both: "Both",
    other: "Other",
};

export const jobData = [
    {
        title: "Painting job 1",
        jobType: jobTypes.painter,
        location: "Colombo",
        desc: "this is the job description of the painting job 1",
        isPopular: true,
    },
    {
        title: "Car Painting job 1",
        jobType: jobTypes.carPainter,
        location: "Kandy",
        desc: "this is the job description of the Car painting job 1",
        isPopular: true,
    },
    {
        title: "Electrician job 1",
        jobType: jobTypes.electrician,
        location: "Malabe",
        desc: "this is the job description of the Electrician job 1",
        isPopular: true,
    },
    {
        title: "Plumber job 1",
        jobType: jobTypes.plumber,
        location: "Nugegoda",
        desc: "this is the job description of the Plumber job 1",
        isPopular: true,
    },
    {
        title: "Painting job 2",
        jobType: jobTypes.painter,
        location: "Colombo",
        desc: "this is the job description of the painting job 2",
        isPopular: false,
    },
    {
        title: "Painting job 3",
        jobType: jobTypes.painter,
        location: "Colombo",
        desc: "this is the job description of the painting job 3",
        isPopular: false,
    },
    {
        title: "Plumber job 2",
        jobType: jobTypes.plumber,
        location: "Nugegoda",
        desc: "this is the job description of the Plumber job 2",
        isPopular: false,
    },
    {
        title: "Painting job 4",
        jobType: jobTypes.painter,
        location: "Colombo",
        desc: "this is the job description of the painting job 4",
        isPopular: false,
    },
  ];
  
  export default jobData;