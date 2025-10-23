import React from "react";
import { NavLink } from "react-router";
import Container from "./container";
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm ">

   <Container>
    <div className="flex items-center">

       <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           <li>
            
            <NavLink to={'/home'}> Home</NavLink>
          </li>
          <li>
            <NavLink to={'/games'}>Games</NavLink>
          </li>
          
          <li>
            <NavLink to={'/my-profile'}>my profile</NavLink>
          </li>
          </ul>
        </div>
         <div className=" ">
            {/* <h3 className="text-xl font-bold">Gamehub -</h3>
            <p >a game library</p> */}
            <img className="w-[40px] h-[40px]" src={logo} alt="" />
         </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            
            <NavLink to={'/home'}> Home</NavLink>
          </li>
          <li>
            <NavLink to={'/games'}>Games</NavLink>
          </li>
          
          <li>
            <NavLink to={'/my-profile'}>my profile</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login / signup</a>
      </div>
    </div>
      
   </Container>
    </div>
  );
};

export default Navbar;
