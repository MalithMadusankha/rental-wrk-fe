import React from "react";
import { Avatar } from "@material-tailwind/react";
import chatbot from "../../assets/chatbot.png";

export const ChatCard = ({ isUserChat, chat }) => {
  return (
    <div
      className={`my-1 flex w-full items-center text-white ${
        isUserChat ? "justify-end" : "justify-start"
      }`}
    >
      {isUserChat ? (
        <>
          <span className="mr-3 rounded-md bg-black px-3 py-2">{chat}</span>
          <Avatar
            variant="circular"
            alt="candice wu"
            className="border border-blue-500 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
        </>
      ) : (
        <>
          <Avatar
            variant="circular"
            alt="candice wu"
            className="border border-blue-500 p-0.5"
            src={chatbot}
          />
          <span className="ml-3 rounded-md bg-black px-3 py-2">{chat}</span>
        </>
      )}
    </div>
  );
};

export default ChatCard;
