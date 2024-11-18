import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[45px] flex justify-center items-center p-4 bg-gray-800 gap-x-5">
      <NavLink to={"/"} className="mr-3 text-white">
        Home
      </NavLink>
      <NavLink to={"/pastes"} className='text-white'>Pastes</NavLink>
    </div>
  );
};

export default Navbar;
