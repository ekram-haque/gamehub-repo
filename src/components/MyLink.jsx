import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, children, className }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "underline bg-gradient-to-r from-purple-800 to-pink-800 text-white px-5 py-2 rounded-md font-semibold hover:opacity-90 transition duration-300 shadow-md"
            : `${className} font-semibold`
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default MyLink;
