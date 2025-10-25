import React, { useContext, useRef } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

const ForgetPass = () => {
     const emailRef = useRef(null)
     const {sendPasswordResetEmailfunc} = useContext(AuthContext )

     const navigate =useNavigate()

    const handleForgetPassword = (e) => {
        e.preventDefault()
      // console.log(emailRef.current.value)
      const email = emailRef.current.value;
      sendPasswordResetEmailfunc(email)
        .then(() => {
          toast.success("see your email to  change password");
          navigate('/login')

        })
        .catch((e) => {
          toast.error(e.message);
        });
    };
  

  return (
    <div className=" bg-[#0b0b15] flex items-center justify-center px-4 py-30">
      <title>GameHub - Login page</title>
      <div className="bg-[#121225] w-full max-w-md p-8 rounded-2xl shadow-xl border border-gray-700">
        <h1 className="text-3xl font-bold text-purple-500 mb-6 text-center">
          Forget Password
        </h1>

        <form onSubmit={handleForgetPassword}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm text-gray-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
                ref={emailRef}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-[#1b1b2f] border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-pink-400 transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-purple-600 to-pink-600 hover:opacity-70  text-white py-3 rounded-lg font-semibold transition"
          >
            send Verification code
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPass;
