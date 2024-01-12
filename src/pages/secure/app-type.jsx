import React from "react";
import { TypeSelectPage } from "@/widgets/layout";
import { TypeSelectCard } from "@/widgets/cards";
import { ChatBubbleOvalLeftEllipsisIcon, ComputerDesktopIcon } from "@heroicons/react/24/solid";

export function AppType() {
  return (
    <TypeSelectPage>
      <div>
        <TypeSelectCard
          type="Use ChatBot Conversation"
          color="blue"
          icon={React.createElement(ChatBubbleOvalLeftEllipsisIcon, {
            className: "w-5 h-5 text-white",
          })}
          href="/chatbot"
        />
      </div>
      <div className="mt-10">
        <TypeSelectCard
          type="Use Default App"
          color="green"
          icon={React.createElement(ComputerDesktopIcon, {
            className: "w-5 h-5 text-white",
          })}
          href="/customer"
        />
      </div>
    </TypeSelectPage>
  );
}

export default AppType;
