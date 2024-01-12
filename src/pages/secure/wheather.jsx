import React from "react";
import { Footer } from "@/widgets/layout";
import ReactWeather, { useWeatherBit } from "react-open-weather";
import { Alert, Card, CardBody } from "@material-tailwind/react";
import {
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

export const Wheather = () => {
  const { data, isLoading, errorMessage } = useWeatherBit({
    key: "ffc674d86981459692aeb0b5d54f6447", // 21 days from 2023/05/21 - 500 calls per day
    // key: "955586ab534a4e05af95f341c340bfe5", // 50 calls per day
    lat: "48.137154",
    lon: "11.576124",
    lang: "en",
    unit: "M", // values are (M,S,I)
  });
  return (
    <>
      <div
        className="relative h-screen"
        style={{ height: "110px", background: "blue" }}
      >
        <div className="absolute top-0 h-full w-full bg-black/75" />
      </div>
      <section
        className="relative flex min-h-[60vh] items-center justify-center bg-black/10 px-4 pb-20 pt-20"
        style={{ background: "blue" }}
      >
        <div className="absolute inset-0 z-0 h-full w-full bg-black/75" />
        {isLoading && (
          <Alert
            variant="gradient"
            icon={<InformationCircleIcon className="h-6 w-6" />}
          >
            <span>Loading Wheather Info..!</span>
          </Alert>
        )}
        {data && (
          <Card>
            <CardBody className="p-0">
              <ReactWeather
                isLoading={isLoading}
                errorMessage={errorMessage}
                data={data}
                lang="en"
                locationLabel="Munich"
                unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
                showForecast
              />
            </CardBody>
          </Card>
        )}
        {!data && errorMessage && (
          <Alert
            color="red"
            variant="gradient"
            icon={<ExclamationTriangleIcon className="h-6 w-6" />}
          >
            <span>
              Oops..! Can't loading the wheather info at this movement. Plaese
              try again later..!
            </span>
          </Alert>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Wheather;
