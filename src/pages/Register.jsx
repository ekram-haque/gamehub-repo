import React, { useContext, useState } from "react";
import { Link } from "react-router";
import {  sendEmailVerification, updateProfile } from "firebase/auth";

import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const [showpass, setShowpss] = useState(false);

  const {createUserwithEmailPassfunc} = useContext(AuthContext )

  const handleSignup = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
    console.log("clicked", { email, password,displayName,photoURL });

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
    if (!regex.test(password)) {
      toast.error("weak password");
      return;
    }

   createUserwithEmailPassfunc(email, password)
      .then((res) => {
        updateProfile(res.user,{
          displayName,
          photoURL
        }).then(() =>(

          sendEmailVerification(res.user).then(()=>(

            toast .success('check your email to verified!')
          )

          )

        )
        )  .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
        console.log(res);
        
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div className=" bg-[#0b0b15] flex  items-center justify-center px-4 py-10">
      <title>GameHub - register page</title>
      <div className="bg-[#121225] w-full max-w-md p-8 rounded-2xl shadow-xl border border-gray-700">
        <h1 className="text-3xl font-bold text-purple-500 mb-6 text-center">
          Create an Account
        </h1>

        <form onSubmit={handleSignup}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-[#1b1b2f] border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-pink-400 transition"
            />
          </div>

          {/* Photo URL */}
          <div className="mb-4">
            <label className="block text-sm text-gray-300 mb-2">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Paste your photo URL"
              className="w-full px-4 py-3 rounded-lg bg-[#1b1b2f] border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-pink-400 transition"
            />
          </div>

          {/* Email */}
          <div className=" mb-4">
            <label className="block text-sm text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-[#1b1b2f] border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-pink-400 transition"
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
            <label className=" text-sm text-gray-300 mb-2">Password</label>
            <input
              type={showpass ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-[#1b1b2f] border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-pink-400 transition"
            />

            <span
              onClick={() => setShowpss(!showpass)}
              className="absolute right-4 top-11 cursor-pointer"
            >
              {showpass ? <FaEye /> : <IoEyeOff />}
            </span>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-purple-600 to-pink-600 hover:opacity-70 text-white py-3 rounded-lg font-semibold transition"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="mt-6 text-center text-gray-400 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-pink-400 font-semibold hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
