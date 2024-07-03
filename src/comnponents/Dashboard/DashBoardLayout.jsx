import React from "react";
import Graph from "./Graph";

const DashBoardLayout = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
      <div className="w-[80%] mx-auto py-16">
        <div>
          <Graph />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
