import React from "react";
import { useForm } from "react-hook-form";
import TextField from "../TextField";

const CreatSorten = () => {
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

  const loginHandler = async () => {
    api.post("/test", {
      name: "tuki",
    });
  };

  return (
    <div className="min-h-[calc(100vh-64px)]  flex justify-center items-center">
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="sm:w-[450px] w-[300px]  shadow-custom py-8 sm:px-8 px-4 rounded-md"
      >
        <h1 className="font-montserrat text-center text-slate-800 font-bold text-2xl ">
          Create New ShortenUrl
        </h1>
        <hr className="mt-2 mb-5 text-slate-950" />

        <div>
          <TextField
            label="Shorten Url"
            required
            id="shorten url"
            type="text"
            message="*ShortenUrl is required"
            placeholder="Enter Shorten Url"
            register={register}
            errors={errors}
          />
        </div>
        <button
          className="bg-customRed font-semibold text-white w-32  bg-rose-700  py-2 hover:text-slate-400 transition-colors duration-100 rounded-md my-3"
          type="text"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatSorten;
