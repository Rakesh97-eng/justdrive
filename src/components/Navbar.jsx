import React from "react";
import { FaUser } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { ImCheckboxChecked } from "react-icons/im";
import { MdFactCheck } from "react-icons/md";
import { Outlet } from "react-router-dom";
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
          <NavLink className="link" to="/dashboard">
            <p className="sidebar-content1">
              <MdDashboard className="icon1" />
              <span>DASHBOARD</span>
            </p>
          </NavLink>

          <NavLink className="link" to="/approval">
            <p className="sidebar-content2">
              <ImCheckboxChecked className="icon2" />
              <span>APPROVAL</span>
            </p>
          </NavLink>
          <NavLink className="link" to="/manage">
            <p className="sidebar-content3">
              <MdFactCheck className="icon3" />
              <span>MANAGE</span>
            </p>
          </NavLink>
          <NavLink className="link" to="/allcars">
            <p className="sidebar-content3">
              <MdFactCheck className="icon3" />
              <span>Cars</span>
            </p>
          </NavLink>
        </div>
      </div>
      </div> 
      <div className="outletcontainer">
        <Outlet />
      </div>
      </>

  );
};

export default Navbar;
