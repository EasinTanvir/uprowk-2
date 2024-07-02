import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { LiaBlogSolid } from "react-icons/lia";
import { FaUser } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import { IoCreateOutline } from "react-icons/io5";
import { PiSquaresFourLight } from "react-icons/pi";
import { SiSimpleanalytics } from "react-icons/si";
import { MdAnalytics } from "react-icons/md";

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
  const pathName = useLocation().pathname;

  return (
    <div
      className={`fixed p-2 top-[64px] min-h-[calc(100vh-64px)] max-h-[calc(100vh-64px)]  z-20  left-0 bg-navbarColor shadow-right ${
        openSidebar ? "w-52" : "w-12"
      } transition-all duration-150  `}
    >
      <div className=" min-h-10  max-h-10 flex flex-end">
        {openSidebar ? (
          <button
            className="flex w-full text-slate-800 justify-end items-center gap-1"
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            <span>
              <FaArrowLeft className="text-sm" />
            </span>
            <span className="font-semibold">Close</span>
          </button>
        ) : (
          <Tooltip title="Click To Expand">
            <button
              className="flex w-full text-slate-800 justify-center items-center gap-1"
              onClick={() => setOpenSidebar(!openSidebar)}
            >
              <span>
                <FaArrowRight className="text-lg" />
              </span>
            </button>
          </Tooltip>
        )}
      </div>

      <div className="flex flex-col gap-5 mt-4">
        <Tooltip title={`${openSidebar ? "" : "Create New Shorten"}`}>
          <Link
            to="/dashboard"
            className={`flex text-slate-800 items-center gap-2 ${
              pathName === "/dashboard"
                ? "bg-rose-700 text-white"
                : "bg-transparent"
            }   min-h-10 max-h-10 py-2 px-2 rounded-md hover:bg-btnColor font-semibold `}
          >
            <span>
              <IoCreateOutline
                className={`${
                  pathName === "/dashboard" ? "text-white" : "text-slate-800"
                } text-xl`}
              />
            </span>
            <span
              className={` ${
                !openSidebar ? "opacity-0" : ""
              } transition-all text-sm font-normal duration-150  ease-in-out`}
            >
              New Shorten
            </span>
          </Link>
        </Tooltip>
        <Tooltip title={`${openSidebar ? "" : "Shorten Lists"}`}>
          <Link
            to="/dashboard/shorten-list"
            className={`flex text-slate-800 items-center gap-2 ${
              pathName === "/dashboard/shorten-list"
                ? "bg-rose-700 text-white"
                : "bg-transparent"
            }   min-h-10 max-h-10 py-2 px-1 rounded-md hover:bg-btnColor`}
          >
            <span>
              <PiSquaresFourLight
                className={`${
                  pathName === "/dashboard/shorten-list"
                    ? "text-white"
                    : "text-slate-800"
                } text-2xl`}
              />
            </span>
            <span
              className={` ${
                !openSidebar ? "opacity-0" : ""
              } transition-all  duration-150  ease-in-out`}
            >
              Shorten Lists
            </span>
          </Link>
        </Tooltip>
        <Tooltip title={`${openSidebar ? "" : " Analytics"}`}>
          <Link
            to="/dashboard/analytics"
            className={`flex text-slate-800 items-center gap-2 ${
              pathName === "/dashboard/analytics"
                ? "bg-rose-700 text-white"
                : "bg-transparent"
            }   min-h-10 max-h-10 py-2 px-1 rounded-md hover:bg-btnColor`}
          >
            <span>
              <MdAnalytics
                className={`${
                  pathName === "/dashboard/analytics"
                    ? "text-white"
                    : "text-slate-800"
                } text-2xl`}
              />
            </span>
            <span
              className={` ${
                !openSidebar ? "opacity-0" : ""
              } transition-all  duration-150  ease-in-out`}
            >
              Analytics
            </span>
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};

export default Sidebar;
