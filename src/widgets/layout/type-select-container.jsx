import React from "react";
import PropTypes from "prop-types";
import { SimpleFooter } from "@/widgets/layout";

export function TypeSelectPage({ children }) {
  return (
    <>
      <div className="absolute inset-0 z-0 h-full w-full" style={{background: "blue"}}/>
      <div className="absolute inset-0 z-0 h-full w-full bg-black/75"/>
      <div className="container mx-auto p-4">
        <div className="absolute left-2/4 top-2/4 w-full max-w-[24rem] -translate-x-2/4 -translate-y-2/4">
            {children}
        </div>
      </div>
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  );
}

TypeSelectPage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TypeSelectPage;