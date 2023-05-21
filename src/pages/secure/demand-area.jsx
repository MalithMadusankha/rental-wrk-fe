import React from "react";
import { demandAreaData } from "@/data";
import { LocationCard } from "@/widgets/cards";
import { Footer } from "@/widgets/layout";

export const DemandArea = () => {
  return (
    <>
      <div className="relative h-screen" style={{ height: "110px" }}>
        <div className="absolute top-0 h-full w-full bg-black/75" />
      </div>

      {demandAreaData.length > 0 ? (
        <section className="bg-black/10 px-4 pb-20 pt-20">
          <div className="container m-auto">
            <div className="grid grid-cols-1 gap-5 gap-x-24 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
              {demandAreaData.map(({ city, location }) => (
                <LocationCard
                  city={city}
                  location={location}
                  key={city}
                  isListView={true}
                />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div>No any demand area data for now</div>
      )}

      <Footer />
    </>
  );
};

export default DemandArea;
