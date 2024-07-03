import React, { useState } from "react";
import TextField from "./TextField";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";
import toast from "react-hot-toast";
import { useStoreContext } from "../contextApi/ContextApi";

const Login = () => {
  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);

  const { setToken } = useStoreContext();

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onTouched",
  });

  const loginHandler = async (data) => {
    setLoader(true);
    try {
      const { data: response } = await api.post("/api/auth/public/login", data);

      //store the token to the localstorage from the responbse
      setToken(response.token);
      localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token));

      toast.success("Login Success");
      reset();
      navigate("/");
    } catch (err) {
      console.log(err);

      //set error progamitically by using react hook form. Make sure add username key for the username error and password key for the invalid password error
      if (err?.response?.data?.username) {
        setError("username", { message: err?.response?.data?.username });
      } else if (err?.response?.data?.password) {
        setError("password", { message: err?.response?.data?.password });
      } else {
        toast.error("Invalid Credentials");
      }
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="sm:w-[450px] w-[360px]  shadow-custom py-8 sm:px-8 px-4 rounded-md"
      >
        <h1 className="text-center font-bold lg:text-3xl text-2xl text-btnColor ">
          Login Here
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
            label="Password"
            required
            id="password"
            type="password"
            message="*Password is required"
            placeholder="type your password"
            register={register}
            errors={errors}
          />
        </div>
        <button
          disabled={loader}
          className="bg-customRed font-semibold text-white  bg-custom-gradient w-full py-2 hover:text-slate-400 transition-colors duration-100 rounded-sm my-3"
          type="submit"
        >
          {loader ? "Loading..." : "Login"}
        </button>

        <p className="text-center text-sm text-slate-700 mt-6">
          Don't have an account?
          <Link
            className="font-semibold underline hover:text-black"
            to="/register"
          >
            <span className="text-btnColor"> SignUp</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
