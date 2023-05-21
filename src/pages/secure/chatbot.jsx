import React, { useState } from "react";
import { SimpleFooter } from "@/widgets/layout";
import {
  Input,
  IconButton,
  Card,
  CardBody,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import chatbot from "../../assets/chatbot.png";
import { ChatCard } from "@/widgets/chatbot";

export function ChatBot() {
  const [searchedText, setSearchedText] = useState("");
  const onChange = ({ target }) => setSearchedText(target.value);

  return (
    <>
      <section className="relative block h-[100vh]">
      <div className="absolute inset-0 z-0 h-full w-full" style={{background: "blue"}}/>
      <div className="absolute inset-0 z-0 h-full w-full bg-black/75"/>

        <div className="flex h-full w-full justify-center pb-48 pt-24">
          <div className="relative mx-16 flex w-full md:mx-24 lg:mx-60">
            <div className="w-full">
              <div className="w-full">
                <Input
                  placeholder="Search in Chat"
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

              <Card className="mt-5 bg-white/10" style={{ height: "90%" }}>
                <CardBody className="h-full px-2 " style={{ overflow: "auto" }}>
                  <img alt="Card Image" src={chatbot} className="h-20 w-20 mx-auto mb-4" />
                  <div>
                    <ChatCard isUserChat={false} chat="Hi.! How can I help you?"/>
                    <ChatCard isUserChat={true} chat="Hi.! I want to know about today whether in Colombo"/>
                    <ChatCard isUserChat={false} chat="Sure. I can provide that informations for you."/>
                    
                  </div>
                </CardBody>

                <CardFooter className="p-2">
                  <div className="flex justify-center gap-3">
                    <Input
                      // placeholder="Search in Chat"
                      // value={}
                      // onChange={}
                      size="lg"
                      className="bg-white pr-20"
                      containerProps={{
                        className: "min-w-0",
                      }}
                    />
                    <Button>
                      <i className="fa fa-microphone" />
                    </Button>
                  </div>
                </CardFooter>
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
