import React from "react";
import { useForm } from "react-hook-form";
import signup from "../img/signup.svg";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="m-auto w-[90%] grid grid-cols-1 md:grid-cols-3 items-center h-[100%]">
      <div className="col-span-1 md:col-span-2">
        <h1 className="text-xl md:text-3xl font-semibold text-center mb-4">
          Get Started with AgrowMart!
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center text-sm md:text-md mt-10 md:mt-16"
        >
          <div className="md:grid md:grid-cols-2 md:gap-10 w-[80%] justify-center">
            <div className="md:col-span-1 flex flex-col">
              <label htmlFor="Name" className="font-semibold text-slate-500">
                Name
              </label>
              <input
                type="text"
                className="text-md border-[1.5px] border-slate-400 rounded-md mt-1 mb-10 px-2 py-3"
                placeholder="Name"
                {...register("name", { required: true, maxLength: 100 })}
              />
              <label
                htmlFor="Password"
                className="font-semibold text-slate-500"
              >
                Password
              </label>
              <input
                type="password"
                className="border-[1.5px] border-slate-400 rounded-md mt-1 mb-10 px-2 py-3"
                placeholder="Password"
                {...register("password", { required: true, minLength: 6 })}
              />
            </div>

            <div className="md:col-span-1 flex flex-col">
              <label htmlFor="Email" className="font-semibold text-slate-500">
                Email
              </label>
              <input
                type="text"
                className="border-[1.5px] border-slate-400 rounded-md mt-1 mb-10 px-2 py-3"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              <label htmlFor="Role" className="font-semibold text-slate-500">
                Role
              </label>
              <div className="mt-1 mb-10 flex flex-row h-[100%] items-center">
                <input
                  {...register("role", { required: true})}
                  type="radio"
                  value="farmer"
                  className="cursor-pointer w-6 h-6 mr-2"
                />
                <label htmlFor="Farmer">Farmer</label>
                <input
                  {...register("role", { required: true})}
                  type="radio"
                  value="shopper"
                  className="cursor-pointer w-6 h-6 mr-2 ml-6"
                />
                <label htmlFor="Shopper">Shopper</label>
              </div>
            </div>
          </div>
          <input
            type="submit"
            className="cursor-pointer w-[80%] py-3 px-7 text-center text-md font-semibold hover:opacity-75 bg-[#3B8056] text-white rounded-md"
          />
          <p className="mt-3 text-lg">
            Already have an account?{" "}
            <span
              className="cursor-pointer text-[#3B8056] font-bold"
              onClick={handleGoToLogin}
            >
              Login
            </span>
          </p>
        </form>
      </div>
      <div className="md:col-span-1 hidden md:block">
        <img src={signup} alt="signup" className="w-[90%]" />
      </div>
    </div>
  );
}
