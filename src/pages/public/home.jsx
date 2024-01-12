import React from "react";
import { Card, Typography, Button } from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { AddContainer, Footer } from "@/widgets/layout";
import { FeatureCard } from "@/widgets/cards";
import { featuresData } from "@/data";
import man1 from "../../assets/man1.png";
import man2 from "../../assets/man2.png";

export function Home() {
  return (
    <>
      <div
        className="relative flex h-screen content-center items-center justify-center pb-32 pt-16"
        style={{ height: "85vh", background: "blue" }}
      >
        {/* <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center" /> */}
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="relative flex flex-wrap items-center gap-10">
            <img alt="Card Image" src={man2} className="" />
            <div className="w-full px-4 text-left lg:w-8/12">
              <div className="flex gap-3 items-end">
                <Typography
                  variant="h2"
                  color="blue"
                  className="mb-6 font-black font-normal"
                >
                  Looking for a reliable rental worker?
                </Typography>
                <Typography
                  variant="h5"
                  color="gray"
                  className="mb-6 font-black"
                >
                  Find one!
                </Typography>
              </div>

              <Typography
                variant="h3"
                color="orange"
                className="mb-6 font-black"
              >
                Select a rental worker near you and get a best service
              </Typography>
              
              <Typography
                variant="h4"
                color="green"
                className="mb-6 font-black"
              >
                Looking for a reliable rental job? There is no better place to
                start.
              </Typography>
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
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-black/20 p-4 text-center shadow-lg">
                <UsersIcon className="h-10 w-10" color="blue"/>
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
        <AddContainer />
      </section>

      <Footer />
    </>
  );
}

export default Home;
