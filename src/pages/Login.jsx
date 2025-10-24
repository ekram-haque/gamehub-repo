import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className=" bg-[#0b0b15] flex items-center justify-center px-4 py-15">
      <title>GameHub - Login page</title>
      <div className="bg-[#121225] w-full max-w-md p-8 rounded-2xl shadow-xl border border-gray-700">
        <h1 className="text-3xl font-bold text-purple-500 mb-6 text-center">
          Welcome Back
        </h1>

        <form>
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
          <div className="mb-4">
            <label className="block text-sm text-gray-300 mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-[#1b1b2f] border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-pink-400 transition"
            />
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

        {/* Divider */}
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
