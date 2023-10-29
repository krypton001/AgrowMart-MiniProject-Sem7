import React from 'react';
import { useForm } from 'react-hook-form';
import login from "../img/login.svg";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    Email:"",
    Password:""
  });
  const onSubmit = data => console.log(data);
  console.log(errors);

  const navigate = useNavigate();

  const handleGoToSignup=()=>{
    navigate("/signup");
  }
  
  return (
    <div className='m-auto w-[90%] grid grid-cols-1 md:grid-cols-7 md:gap-20 items-center h-[100%]'>
        <div className='col-span-1 md:col-span-4'>
            <h1 className='text-xl md:text-3xl font-semibold text-center mb-4'>Hello, Welcome Back!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center text-sm md:text-md mt-10 md:mt-16'>
                <div className='w-[80%] flex flex-col justify-center'>
                    <label htmlFor="Email" className='font-semibold text-slate-500'>Email</label>
                        <input type="text" className='border-[1.5px] border-slate-400 rounded-md mt-1 mb-10 px-2 py-3' placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                        <label htmlFor="Password" className='font-semibold text-slate-500'>Password</label>
                        <input type="password" className='border-[1.5px] border-slate-400 rounded-md mt-1 mb-10 px-2 py-3' placeholder="Password" {...register("Password", {required: true, minLength: 6})} />
                </div>
                <input type="submit" className="cursor-pointer w-[80%] py-3 px-7 text-center text-md font-semibold hover:opacity-75 bg-[#3B8056] text-white rounded-md" />
                <p className='mt-3 text-lg'>New to AgrowMart? <span className='cursor-pointer text-[#3B8056] font-bold' onClick={handleGoToSignup}>Signup</span></p>
            </form>
        </div>
        <div className='md:col-span-3 hidden md:block'>
            <img src={login} alt="signup" className='w-[90%]'/>
        </div>
    </div>
  );
}