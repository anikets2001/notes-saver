import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row gap-4">
      <NavLink to={"/"} className='mr-3'>Home</NavLink>
      <NavLink to={"/pastes"}>Pastes</NavLink>
    </div>
  );
};

export default Navbar;
