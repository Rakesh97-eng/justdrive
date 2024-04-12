import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { NavLink } from "react-router-dom";

import { Outlet } from "react-router-dom";
import AllCarsHeader from "./allCarHeader/AllCarsHeader";
import { menudata } from "../utils/routedata";
const Navbar = () => {
  const [sidebarsize, setSidebarSize] = useState(true);
  useEffect(() => {
    const updatesidebar = () => {
      let winwidth = window.innerWidth;
      console.log("window", window.innerWidth);
      if (winwidth < 420) {
        setSidebarSize(false);
      } else {
        setSidebarSize(true);
      }
    };
    window.addEventListener("resize", updatesidebar);

    return () => {
      window.removeEventListener("resize", updatesidebar);
    };
  }, []);
  return (
    <>
      <div>
        <div className="nav-container" style={{ position: "fixed" }}>
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
        <div
          className="sidebar-container"
          style={{ position: "fixed" }}
        >
          <div className="sidebar-content">
            {menudata.map((menus) => {
              const { label, path, icon } = menus;
              return (
                <NavLink className="link" to={path}>
                  <div >
                  <span >{icon}</span>
                   {sidebarsize?<span>{label}</span>:<></>}
                  </div>
                    
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
      <div className="outletcontainer">
        <AllCarsHeader />
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;
