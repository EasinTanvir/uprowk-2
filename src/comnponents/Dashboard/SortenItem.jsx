import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdAnalytics } from "react-icons/md";
import { IoCopy } from "react-icons/io5";
import { LiaCheckSolid } from "react-icons/lia";
import Graph from "./Graph";
import api from "../../api/api";
import { useStoreContext } from "../../contextApi/ContextApi";
import { useNavigate } from "react-router-dom";
import { Hourglass } from "react-loader-spinner";
const SortenItem = ({ originalUrl, shortUrl, id }) => {
  const navigate = useNavigate();
  const { token } = useStoreContext();
  const [analyticToggle, setAnalyticToggle] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [loader, setLoader] = useState(false);

  const [selectedUrl, setSelectedUrl] = useState("");
  const [myUrlList, setMyUrlLists] = useState([]);

  const analyticsHandler = (shorturl) => {
    if (!analyticToggle) {
      setSelectedUrl(shorturl);
    }
    setAnalyticToggle(!analyticToggle);
  };

  const fetchMyShorterUrl = async () => {
    setLoader(true);
    try {
      const { data } = await api.get(
        `/api/urls/analytics/${selectedUrl}?startDate=2024-01-01T00:00:00&endDate=2024-12-31T23:59:59`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      setMyUrlLists(data);
    } catch (err) {
      console.log(err);
      navigate("/error");
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    if (selectedUrl) {
      fetchMyShorterUrl();
    }
  }, [selectedUrl]);

  return (
    <div
      className={`bg-white shadow-md border border-slate-600 px-6 sm:py-4 py-3 rounded-md  transition-all duration-100 ${
        analyticToggle ? "sm:h-[450px] h-[500px]" : "h-40"
      } `}
    >
      <div className="sm:h-24 h-32 flex sm:flex-row flex-col  sm:items-center  sm:justify-between w-full sm:gap-0 gap-5 ">
        <div className="flex-1 overflow-x-auto overflow-y-hidden ">
          <h3 className=" text-slate-900 font-[600] text-lg">{originalUrl}</h3>
          <span className=" text-slate-700 font-[500] "> {shortUrl}</span>
        </div>
        <div className="flex  flex-1 h-full   sm:justify-end items-center gap-4">
          <CopyToClipboard
            onCopy={() => setIsCopied(true)}
            text={`${import.meta.env.VITE_REACT_FRONT_END_URL}/${shortUrl}`}
          >
            <div className="flex cursor-pointer gap-1 items-center bg-btnColor py-2 h-10 font-semibold shadow-md shadow-slate-800 px-6 rounded-md text-white hover:text-gray-400">
              <button className="">{isCopied ? "Copied" : "Copy"}</button>
              {isCopied ? (
                <LiaCheckSolid className="text-md" />
              ) : (
                <IoCopy className="text-md" />
              )}
            </div>
          </CopyToClipboard>
          <div
            onClick={() => analyticsHandler(shortUrl)}
            className="flex cursor-pointer gap-1 items-center bg-rose-700 py-2 h-10 font-semibold shadow-md shadow-slate-800 px-6 rounded-md text-white hover:text-gray-400"
          >
            <button>Analytics</button>
            <MdAnalytics className="text-md" />
          </div>
        </div>
      </div>
      <div
        className={`${
          analyticToggle ? "flex" : "hidden"
        }  max-h-[calc(450px-140px)] sm:mt-0 mt-5 min-h-[calc(450px-140px)]  border-t-2 w-[100%] overflow-hidden`}
      >
        {loader ? (
          <div className="min-h-[calc(450px-140px)] flex justify-center items-center w-full">
            <div className="flex flex-col items-center gap-1">
              <Hourglass
                visible={true}
                height="50"
                width="50"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={["#306cce", "#72a1ed"]}
              />
              <p className="text-slate-700">Please Wait...</p>
            </div>
          </div>
        ) : (
          <>
            <Graph myUrlList={myUrlList} />
          </>
        )}
      </div>
    </div>
  );
};

export default SortenItem;
