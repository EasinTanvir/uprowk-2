import React from "react";
import SortenItem from "./SortenItem";

const SortenUrlLists = ({ data }) => {
  return (
    <div className="my-6 space-y-4">
      {data.map((item) => (
        <SortenItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default SortenUrlLists;
