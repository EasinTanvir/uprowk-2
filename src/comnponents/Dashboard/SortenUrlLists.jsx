import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { shortenLists } from "../../utils/tableColumn";
let shortens = [
  {
    id: 1,
    originalUrl: "https://example.com",
    shortUrl: "abPZ7Q5d",
    clickCount: 10,
    user: {
      id: 1,
      email: "testuser@example.com",
      username: "testuser",
      password: "<hashed_password>",
      role: "ROLE_USER",
    },
  },
  {
    id: 2,
    originalUrl: "https://example.org",
    shortUrl: "cdEF8Gh1",
    clickCount: 5,
    user: {
      id: 1,
      email: "testuser@example.com",
      username: "testuser",
      password: "<hashed_password>",
      role: "ROLE_USER",
    },
  },
];

const SortenUrlLists = () => {
  const rows = shortens.map((item) => {
    return {
      id: item.id,
      shortenId: item.id,
      originalUrl: item.originalUrl,
      shortUrl: item.shortUrl,
    };
  });

  return (
    <div className="p-8">
      <h1 className="text-slate-800 lg:text-4xl text-xl text-center font-semibold pt-2 pb-10 ">
        Shorten Lists
      </h1>

      <div className="overflow-x-auto w-full mx-auto">
        <>
          <DataGrid
            className="w-fit mx-auto"
            rows={rows}
            columns={shortenLists}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 6,
                },
              },
            }}
            disableRowSelectionOnClick
            pageSizeOptions={[6]}
            disableColumnResize
          />
        </>
      </div>
    </div>
  );
};

export default SortenUrlLists;
