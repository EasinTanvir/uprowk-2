import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "../TextField";
import { RxCross2 } from "react-icons/rx";
import toast from "react-hot-toast";
import { useStoreContext } from "../../contextApi/ContextApi";
import api from "../../api/api";

const CreatSorten = ({ setOpen, refetch }) => {
  const { token } = useStoreContext();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      code: "",
    },
    mode: "onTouched",
  });

  const createShortUrlHandler = async (data) => {
    setLoading(true);
    try {
      await api.post("/api/urls/shorten", data, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });
      await refetch();

      toast.success("ShortUrl Created");
      reset();
      setOpen(false);
    } catch (err) {
      console.log(err);
      toast.error("ShortUrl Created Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" flex justify-center items-center bg-custom-gradient rounded-md">
      <form
        onSubmit={handleSubmit(createShortUrlHandler)}
        className="sm:w-[450px] w-[300px] relative  shadow-custom py-10 sm:px-8 px-4 rounded-lg"
      >
        <h1 className="font-montserrat text-center font-bold text-2xl text-white ">
          Create New ShortenUrl
        </h1>
        <hr className="mt-2 mb-5 text-slate-950" />

        <div>
          <TextField
            label="Enter Shorten Url"
            required
            id="originalUrl"
            type="text"
            message="*ShortenUrl is required"
            register={register}
            errors={errors}
            className="text-white border-white"
          />
        </div>
        <button
          className="bg-customRed font-semibold text-white w-32  bg-rose-700  py-2 hover:text-slate-400 transition-colors duration-100 rounded-md my-3"
          type="text"
        >
          {loading ? "Loading..." : "Create"}
        </button>

        <button
          disabled={loading}
          onClick={() => setOpen(false)}
          className=" absolute right-2 top-2"
        >
          <RxCross2 className="text-white text-2xl" />
        </button>
      </form>
    </div>
  );
};

export default CreatSorten;
