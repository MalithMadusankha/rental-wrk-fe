import React, { useState } from "react";
import { SimpleFooter } from "@/widgets/layout";
import { Input, IconButton, Card, CardBody } from "@material-tailwind/react";

export function ChatBot() {
  const [searchedText, setSearchedText] = useState("");
  const onChange = ({ target }) => setSearchedText(target.value);

  return (
    <>
      <section className="relative block h-[100vh]">
        <div className="absolute top-0 h-full w-full" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />

        <div className="flex h-full w-full justify-center pb-48 pt-24">
          <div className="relative mx-16 flex w-full md:mx-24 lg:mx-60">
            <div className="w-full">
              <div className="w-full">
                <Input
                  placeholder="Search"
                  value={searchedText}
                  onChange={onChange}
                  className="pr-20"
                  containerProps={{
                    className: "min-w-0",
                  }}
                />
                <IconButton
                  variant="gradient"
                  className="!absolute right-1 top-1 rounded"
                  size="sm"
                >
                  <i className="fas fa-search" />
                </IconButton>
              </div>

              <Card className="mt-5 bg-white/10" style={{height: "90%"}}>
                <CardBody> hi </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  );
}

export default ChatBot;
