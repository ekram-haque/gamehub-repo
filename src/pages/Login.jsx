import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebase.config";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

const provider = new GoogleAuthProvider();

const Login = () => {
  const [showpass, setShowpss] = useState(false);
  const [user, setUser] = useState(null);

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    console.log("clicked", { email, password });

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
    if (!regex.test(password)) {
      toast.error("weak password");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        setUser(res.user);
        toast.success("login successful");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const handleGoogleSignin = () =>{

    signInWithPopup(auth, provider)
    .then((res) => {
        console.log(res);
        setUser(res.user);
        toast.success("login successful google");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  }

  return (
    <div className=" bg-[#0b0b15] flex items-center justify-center px-4 py-15">
      <title>GameHub - Login page</title>
      <div className="bg-[#121225] w-full max-w-md p-8 rounded-2xl shadow-xl border border-gray-700">
        <h1 className="text-3xl font-bold text-purple-500 mb-6 text-center">
          Welcome Back
        </h1>

        <form onSubmit={handleSignin}>
          {/* Email */}
          <div className="mb-4">
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
            <label className="block text-sm text-gray-300 mb-2">Password</label>
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

          {/* Forgot Password */}
          <div className="text-right mb-5">
            <a href="#" className="text-sm text-pink-300 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-purple-600 to-pink-600 hover:opacity-70  text-white py-3 rounded-lg font-semibold transition"
          >
            Login
          </button>
        </form>

        <div className="flex justify-center items-center gap-2 my-2">
          <div className="h-px w-16 bg-white/30"></div>
          <span className="text-sm text-white/70">or</span>
          <div className="h-px w-16 bg-white/30"></div>
        </div>

        <button
          onClick={handleGoogleSignin}
          type="button"
          className="w-full flex items-center justify-center gap-3
            bg-white hover:opacity-70  text-black py-3 rounded-lg font-semibold transition cursor-pointer"
        >
          <FcGoogle className="text-2xl" />
          continue with google
        </button>

        <div className="mt-6 text-center text-gray-400 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-pink-400 font-semibold hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
