import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

const MyProfile = () => {
  // const user = {
  //   name: "Ekramul Haque",
  //   email: "contract-ekram@gmail.com",
  //   photo: "/profile-placeholder.png", // put your image path here
  //   joined: "January 2024",
  // };
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/home");
    }
  }, [user, navigate]);

  if (!user) return null;
  const handleUpdateClick = () => {
    navigate("/my-profile/update-profile");
  };

  return (
    <div className=" bg-[#0b0b15] text-gray-200 py-29 px-4 md:px-10">
      <title>GameHub - Profile Page</title>
      <div className="max-w-4xl mx-auto bg-[#121225] p-8 rounded-2xl shadow-xl border border-gray-700">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Profile Photo */}
          <img
            className="w-[150px] h-[150px] md:w-[220px] md:h-[220px] object-cover rounded-full border-3 border-purple-400 shadow-md"
            src={
              user?.photoURL || "https://i.ibb.co/2n4D0nL/default-avatar.png"
            }
            alt="Profile"
          />

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-sm text-gray-400 mt-1">
              Name:{" "}
              <span className="text-purple-500 font-medium">
                {user?.displayName || "No Name"}
              </span>
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Email:{" "}
              <span className="text-purple-500 font-medium">
                {user?.email || "example@gmail.com"}
              </span>
            </p>
            <button
              type="submit"
              onClick={handleUpdateClick}
              className=" bg-linear-to-r from-purple-600 to-pink-600 hover:opacity-70  text-white py-3 px-5 rounded-lg font-semibold transition"
            >
              update profile
            </button>

            <hr className="my-5 border-gray-700" />

            {/* Additional Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              <div className="bg-[#1b1b2f] px-6 py-4 rounded-xl text-center w-full sm:w-[180px]">
                <p className="text-gray-400 text-sm">Joined</p>
                <p className="text-lg font-semibold text-white">coming soon</p>
              </div>

              <div className="bg-[#1b1b2f] px-6 py-4 rounded-xl text-center w-full sm:w-[180px]">
                <p className="text-gray-400 text-sm">Total Games</p>
                <p className="text-lg font-semibold text-white">coming soon</p>
              </div>

              <div className="bg-[#1b1b2f] px-6 py-4 rounded-xl text-center w-full sm:w-[180px]">
                <p className="text-gray-400 text-sm">Favorites</p>
                <p className="text-lg font-semibold text-white">coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
