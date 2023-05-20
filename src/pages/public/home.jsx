import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import { FeatureCard } from "@/widgets/cards";
import { featuresData, addData, contactData } from "@/data";
import man1 from "../../assets/man1.png";

export function Home() {
  return (
    <>
      <div
        className="relative flex h-screen content-center items-center justify-center pb-32 pt-16"
        style={{ height: "75vh" }}
      >
        {/* <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center" /> */}
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full px-4 text-left lg:w-8/12">
              <Typography
                variant="h4"
                color="white"
                className="mb-6 font-black"
              >
                Looking for a reliable rental worker? Find one!
              </Typography>
              <Typography
                variant="h4"
                color="white"
                className="mb-6 font-black"
              >
                Select a rental worker near you and get a best service
              </Typography>
              <Typography
                variant="h4"
                color="white"
                className="mb-6 font-black"
              >
                Looking for a reliable rental job? There is no better place to
                start.
              </Typography>
              {/* <Typography variant="lead" color="white" className="opacity-80">
                This is a simple example of a Landing Page you can build using
                Material Tailwind. It features multiple components based on the
                Tailwind CSS and Material Design by Google.
              </Typography> */}
            </div>
          </div>
        </div>
      </div>

      <section
        className="bg-gray-50 px-4 pb-20 pt-4"
        style={{ marginTop: "-6rem" }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Sign up now and increase your chance of winning..!
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Don't let miss this chance to archive your dreams fast.
                <br />
                Sign up now and increase your chance of winning
              </Typography>
              <Button>Sign Up Free</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-none">
                <img alt="Card Image" src={man1} className="h-full w-full" />
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 pt-20">
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
      </section>

      <Footer />
    </>
  );
}

export default Home;
