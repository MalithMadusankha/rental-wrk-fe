import { jobTypes, workTypes } from "./job-data";

export const userType = {
  customer: "Customer",
  worker: "Worker",
};

export const customerUserData = {
  userID: "UC001",
  img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  name: "Jhon Kemilton",
  email: "jk@gmail.com",
  mobile: "0757632988",
  district: "Kandy",
  city: "Peradeniya",
  address: "No.35, Peradeniya, Kandy",
};

export const serviceProviderUserData = {
  userID: "US001",
  img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80",
  name: "Kriss Fernando",
  district: "Colombo",
  city: "Nugegoda",
  address: "No.35, Peradeniya, Kandy",
  email: "kriss@gmail.com",
  mobile: "0753243410",
  jobTitle: jobTypes.painter,
  desc: "An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.",
  workType: workTypes.perm,
  skills: ["vehical painting", "wood painting", "wall painting"],
  rate: 4.3,
  projects: [
    {
      proName: "Paint project1",
      img: "https://jooinn.com/images/painter-7.jpg",
    },
    {
      proName: "Paint project2",
      img: "https://rowland-remodeling.com/wp-content/uploads/2021/07/Painting-Service-480x320.jpg",
    },
    {
      proName: "Paint project3",
      img: "https://th.bing.com/th/id/R.5a59d6007985b67cf301d5b0ffda9d50?rik=tmJkXShfaPd6bg&riu=http%3a%2f%2fpoweredbyorange.com%2fwp-content%2fuploads%2f2020%2f08%2fPainter-Contractor-Yellow-201808-001.jpg&ehk=%2fK6mLXjKtWjW9q9gxogMen2n%2bNr89lvnvYZUYn44YMg%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      proName: "Paint project4",
      img: "https://www.levonart.com/storage/uploads/94de44ab2cd7c40b7d00a23210e0e1cd.jpg",
    },
  ],
};

export default userType;
