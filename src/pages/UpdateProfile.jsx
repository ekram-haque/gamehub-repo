import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!user) return toast.error("User not logged in");

    try {
      await updateProfile(user, { displayName, photoURL });
      setUser({ ...user, displayName, photoURL }); // Update context
      toast.success("Profile updated successfully!");
      navigate("/my-profile");
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="bg-[#0b0b15] flex items-center justify-center px-4 py-10">
      <div className="bg-[#121225] w-full max-w-md p-8 rounded-2xl shadow-xl border border-gray-700">
        <h1 className="text-3xl font-bold text-purple-500 mb-6 text-center">
          Update Profile
        </h1>

        <form onSubmit={handleUpdate}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#1b1b2f] border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-pink-400 transition"
            />
          </div>

          {/* Photo URL */}
          <div className="mb-4">
            <label className="block text-sm text-gray-300 mb-2">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-[#1b1b2f] border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:border-pink-400 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-purple-600 to-pink-600 hover:opacity-70 text-white py-3 rounded-lg font-semibold transition"
          >
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
