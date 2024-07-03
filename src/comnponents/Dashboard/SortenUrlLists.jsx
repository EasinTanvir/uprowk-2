import React from "react";
import SortenItem from "./SortenItem";
let shortens = [
  {
    id: 1,
    originalUrl: "https://example.org",
    shortUrl: "cdEF8Gh2",
    username: "Easin",
    clickCount: 2,
    createdDate: "2024-07-03T06:29:50.89105",
  },
  {
    id: 2,
    originalUrl: "https://example.org",
    shortUrl: "cdEF8Gh1",
    username: "Tanvir",
    clickCount: 0,
    createdDate: "2024-07-03T06:29:50.89105",
  },
];
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
