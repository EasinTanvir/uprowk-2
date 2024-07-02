// import React, { useState } from "react";
// import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar";

// const DashBoardLayout = () => {
//   const [openSidebar, setOpenSidebar] = useState(true);

//   return (
//     <div className="flex">
//       <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
//       <div
//         className={`flex-1 transition-all duration-100 overflow-hidden ${
//           openSidebar ? "ml-52" : "ml-12"
//         }`}
//       >
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default DashBoardLayout;

import React from "react";

const DashBoardLayout = () => {
  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
      DashBoardLayout
    </div>
  );
};

export default DashBoardLayout;
