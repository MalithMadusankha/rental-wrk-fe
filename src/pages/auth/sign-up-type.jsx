import React from "react";
import { TypeSelectPage } from "@/widgets/layout";
import { TypeSelectCard } from "@/widgets/cards";
import { StarIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { appRoutes, userType } from "@/data";

export function SignUpType() {
  return (
    <TypeSelectPage>
      <div>
        <TypeSelectCard
          color="blue"
          type={`I'm a ${userType.customer}`}
          icon={React.createElement(StarIcon, {
            className: "w-5 h-5 text-white",
          })}
          href={appRoutes.authRouts.signUpCustomer}
        />
      </div>
      <div className="mt-10">
        <TypeSelectCard
          color="green"
          type={`I'm a ${userType.worker}`}
          icon={React.createElement(UserCircleIcon, {
            className: "w-5 h-5 text-white",
          })}
          href={appRoutes.authRouts.signUpWorker}
        />
      </div>
    </TypeSelectPage>
  );
}

export default SignUpType;
