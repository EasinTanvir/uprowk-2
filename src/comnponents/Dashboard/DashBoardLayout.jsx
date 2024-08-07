import React, { useState } from "react";
import Graph from "./Graph";
import SortenUrlLists from "./SortenUrlLists";
import { useQuery } from "react-query";
import api from "../../api/api";
import { useStoreContext } from "../../contextApi/ContextApi";
import { RotatingLines } from "react-loader-spinner";
import CreateSortenModal from "./CreateSortenModal";
import { useNavigate } from "react-router-dom";

const DashBoardLayout = () => {
  const navigate = useNavigate();
  const { token } = useStoreContext();
  const [creatSortenModal, setCreateSortenModal] = useState(false);

  // fetch data using React Query for efficient caching and preventing extra requests
  const { isLoading, data, refetch } = useQuery(
    "fetch-shorten",
    async () => {
      return await api.get("/api/urls/myurls", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });
    },
    {
      onError: () => {
        navigate("/error");
      },
      staleTime: 5000,
    }
  );

  const { isLoading: loader, data: res } = useQuery(
    "fetch-allurls",
    async () => {
      return await api.get(
        "/api/urls/totalclicks?startDate=2024-01-01&endDate=2024-12-31",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
    },

    {
      select: (data) => {
        const convertToArray = Object.keys(data.data).map((key) => ({
          clickDate: key,
          count: data.data[key],
        }));

        return convertToArray;
      },
      onError: () => {
        navigate("/error");
      },
      staleTime: 5000,
    }
  );

  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
      {isLoading || loader ? (
        <div className="flex justify-center items-center w-full h-[450px]">
          <div className="flex flex-col items-center gap-1">
            <RotatingLines
              visible={true}
              height="65"
              width="65"
              color="red"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
            <p className="text-slate-800">Please wait...</p>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <div className="md:w-[80%] w-full mx-auto py-16">
            <div className="border h-96">
              <Graph myUrlList={res} />
            </div>
            <div className="py-5 sm:text-end text-center ">
              <button
                className="bg-custom-gradient px-4 py-2 rounded-md text-white"
                onClick={() => setCreateSortenModal(true)}
              >
                Create New Shorten URL
              </button>
            </div>
            <div>
              {!isLoading && data.data.length === 0 ? (
                <div className="flex justify-center pt-10">
                  <p className="text-center  rounded-md py-2 px-4  bg-rose-700 text-white ">
                    You Didn't Create any ShortenURL Yet{" "}
                  </p>
                </div>
              ) : (
                <SortenUrlLists data={data?.data} />
              )}
            </div>
          </div>
        </>
      )}
      <CreateSortenModal
        refetch={refetch}
        open={creatSortenModal}
        setOpen={setCreateSortenModal}
      />
    </div>
  );
};

export default DashBoardLayout;
