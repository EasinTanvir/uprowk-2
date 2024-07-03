import React, { useState } from "react";
import TextField from "./TextField";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../api/api";

const Register = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const {
    register,
    setError,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const registerHandler = async (data) => {
    setLoader(true);
    try {
      const { data: response } = await api.post(
        "/api/auth/public/register",
        data
      );
      console.log(response);

      toast.success(response);
      reset();
      navigate("/login");
    } catch (err) {
      console.log(err);

      //set error progamitically by using react hook form. Make sure add username key for the username error, email key for the email error and password key for the invalid password error from the backend
      if (err?.response?.data?.username) {
        setError("username", { message: err?.response?.data?.username });
      } else if (err?.response?.data?.email) {
        setError("email", { message: err?.response?.data?.email });
      } else if (err?.response?.data?.password) {
        setError("password", { message: err?.response?.data?.password });
      } else {
        toast.error(err?.response?.data?.message);
      }
    } finally {
      setLoader(false);
    }
  };
  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
      <form
        onSubmit={handleSubmit(registerHandler)}
        className="sm:w-[450px] w-[360px]  shadow-custom py-8 sm:px-8 px-4 rounded-md"
      >
        <h1 className="text-center text-btnColor font-bold lg:text-3xl text-2xl ">
          Register Here
        </h1>
        <hr className="mt-2 mb-5 text-black" />

        <div className="flex flex-col gap-3">
          <TextField
            label="UserName"
            required
            id="username"
            type="text"
            message="*UserName is required"
            placeholder="type your username"
            register={register}
            errors={errors}
          />
          <TextField
            label="Email"
            required
            id="email"
            type="email"
            message="*Email is required"
            placeholder="type your email"
            register={register}
            errors={errors}
          />
          <TextField
            label="Password"
            required
            id="password"
            type="password"
            message="*Password is required"
            placeholder="type your password"
            register={register}
            min={6}
            errors={errors}
          />
        </div>
        <button
          disabled={loader}
          className="bg-customRed font-semibold text-white  bg-custom-gradient w-full py-2 hover:text-slate-400 transition-colors duration-100 rounded-sm my-3"
          type="submit"
        >
          {loader ? "Loading..." : "Register"}
        </button>

        <p className="text-center text-sm text-slate-700 mt-6">
          Already Have An Account?
          <Link
            className="font-semibold underline hover:text-black"
            to="/login"
          >
            <span className="text-btnColor">LogIn</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
