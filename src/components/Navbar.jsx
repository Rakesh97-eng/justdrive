import React from "react";
import { FaUser } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { NavLink } from "react-router-dom";

import { Outlet } from "react-router-dom";
import AllCarsHeader from "./allCarHeader/AllCarsHeader";
import { menudata } from "../utils/routedata";
const Navbar = () => {
  return (
    <>
    <div>
      <div className="nav-container" style={{position:"fixed"}}>
        <div className="name">
          <p className="name-content1">
            <strong>CAR</strong>
          </p>
          <p className="name-content2">RENTAL SERVICE</p>
        </div>
        <div className="nav-icons">
          <FaUser className="user" />
          <NavLink to="/">
            <LuLogOut className="logout" />
          </NavLink>
        </div>
      </div>
      <div className="sidebar-container" style={{position:"fixed"}}>
        <div className="sidebar-content">
        {menudata.map((menus)=>{
          const {label,path,icon} = menus
          return  <NavLink className="link" to={path}>
          <p className="sidebar-content1">
            {/* <icon className="icon1" /> */}
            <span>{label}</span>
          </p>
        </NavLink>
        })
           
        }
        </div>
      </div>
      </div> 
      <div className="outletcontainer">
        <AllCarsHeader/>
        <Outlet />
      </div>
      </>

  );
};

export default Navbar;
